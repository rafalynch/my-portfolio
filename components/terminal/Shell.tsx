import { KeyboardEvent, ReactNode, useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { profile, linkProps } from "./content";
import Intro from "./Intro";

interface Entry {
  id: number;
  // null renders the welcome message
  command: string | null;
  // Values captured when the command ran (e.g. the date)
  extra?: string;
}

type Run = (command: string) => void;

const HELP: [string, string][] = [
  ["whoami", "who I am and what I'm working on"],
  ["ls", "list files"],
  ["cat about.txt", "same as whoami, the long way"],
  ["contact", "where to find me"],
  ["github", "open my GitHub"],
  ["linkedin", "open my LinkedIn"],
  ["email", "write me an email"],
  ["date", "current time in Buenos Aires"],
  ["clear", "clear the screen"],
];

const COMMANDS = [
  ...HELP.map(([command]) => command.split(" ")[0]),
  "help",
  "pwd",
  "echo",
];

const SUGGESTIONS = ["help", "whoami", "contact", "github"];

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "America/Argentina/Buenos_Aires",
  dateStyle: "full",
  timeStyle: "short",
});

function parse(command: string) {
  const [name = "", ...args] = command.trim().split(/\s+/);
  return { name: name.toLowerCase(), args };
}

function normalizePath(path?: string) {
  return (path ?? "").replace(/^(~\/|\.\/)/, "").replace(/\/$/, "");
}

function findLink(name: string) {
  return profile.links.find((link) => link.label.toLowerCase() === name);
}

interface CommandButtonProps {
  command: string;
  onRun: Run;
  children?: ReactNode;
}

function CommandButton({ command, onRun, children }: CommandButtonProps) {
  return (
    <button type="button" className={styles.cmd} onClick={() => onRun(command)}>
      {children ?? command}
    </button>
  );
}

function Links() {
  return (
    <ul className={styles.links}>
      {profile.links.map((link) => (
        <li key={link.label}>
          <a className={styles.link} {...linkProps(link)}>
            <span className={styles.linkLabel}>{link.label.toLowerCase()}</span>
            <span className={styles.linkArrow} aria-hidden="true">
              →
            </span>
            <span className={styles.linkHandle}>{link.handle}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function Output({ entry, onRun }: { entry: Entry; onRun: Run }): ReactNode {
  if (entry.command === null) {
    return (
      <p className={styles.muted}>
        Welcome. Type <CommandButton command="help" onRun={onRun} /> to see
        what you can do here.
      </p>
    );
  }

  const { name, args } = parse(entry.command);
  const path = normalizePath(args[0]);
  const link = findLink(name);

  if (link) {
    return <p className={styles.muted}>Opening {link.handle}…</p>;
  }

  switch (name) {
    case "":
      return null;
    case "help":
      return (
        <dl className={styles.help}>
          {HELP.map(([command, description]) => (
            <div key={command}>
              <dt>
                <CommandButton command={command} onRun={onRun} />
              </dt>
              <dd>{description}</dd>
            </div>
          ))}
        </dl>
      );
    case "whoami":
      return (
        <p className={styles.text}>
          <Intro linkClassName={styles.company} />
        </p>
      );
    case "ls":
      if (path === "" || path === "~" || path === ".") {
        return (
          <p className={styles.files}>
            <CommandButton command="cat about.txt" onRun={onRun}>
              about.txt
            </CommandButton>
            <CommandButton command="ls elsewhere/" onRun={onRun}>
              elsewhere/
            </CommandButton>
          </p>
        );
      }
      if (path === "elsewhere") return <Links />;
      return (
        <p className={styles.error}>
          ls: cannot access &apos;{args[0]}&apos;: No such file or directory
        </p>
      );
    case "cat":
      if (path === "about.txt") {
        return (
          <p className={styles.text}>
            <Intro linkClassName={styles.company} />
          </p>
        );
      }
      if (path === "elsewhere") {
        return <p className={styles.error}>cat: elsewhere: Is a directory</p>;
      }
      return (
        <p className={styles.error}>
          {args[0]
            ? `cat: ${args[0]}: No such file or directory`
            : "cat: missing file operand"}
        </p>
      );
    case "contact":
      return <Links />;
    case "date":
      return <p className={styles.text}>{entry.extra}</p>;
    case "pwd":
      return <p className={styles.text}>/home/rafa</p>;
    case "echo":
      return <p className={styles.text}>{args.join(" ")}</p>;
    default:
      return (
        <p className={styles.error}>
          command not found: {name}. Try{" "}
          <CommandButton command="help" onRun={onRun} />.
        </p>
      );
  }
}

function Prompt() {
  return (
    <span className={styles.promptLabel}>
      <span className={styles.user}>rafa@ba</span>
      <span className={styles.path}>:~$</span>
    </span>
  );
}

export default function Shell() {
  const [entries, setEntries] = useState<Entry[]>([
    { id: 0, command: null },
    { id: 1, command: "ls elsewhere/" },
  ]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const nextId = useRef(2);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const body = bodyRef.current;
    if (body) body.scrollTop = body.scrollHeight;
  }, [entries]);

  const run: Run = (command) => {
    const { name } = parse(command);
    const link = findLink(name);

    if (link) {
      if (link.external) {
        window.open(link.href, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = link.href;
      }
    }

    if (name === "clear") {
      setEntries([]);
    } else {
      const extra =
        name === "date"
          ? `${dateFormatter.format(new Date())} (Buenos Aires)`
          : undefined;
      setEntries((current) => [
        ...current,
        { id: nextId.current++, command, extra },
      ]);
    }

    if (command.trim()) setHistory((current) => [...current, command]);
    setHistoryIndex(null);
    setValue("");
    inputRef.current?.focus({ preventScroll: true });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      run(value);
    } else if (event.key === "ArrowUp" && history.length > 0) {
      event.preventDefault();
      const index =
        historyIndex === null ? history.length - 1 : Math.max(historyIndex - 1, 0);
      setHistoryIndex(index);
      setValue(history[index]);
    } else if (event.key === "ArrowDown" && historyIndex !== null) {
      event.preventDefault();
      const index = historyIndex + 1;
      if (index >= history.length) {
        setHistoryIndex(null);
        setValue("");
      } else {
        setHistoryIndex(index);
        setValue(history[index]);
      }
    } else if (event.key === "Tab" && value.trim()) {
      event.preventDefault();
      const matches = COMMANDS.filter((command) =>
        command.startsWith(value.trim().toLowerCase())
      );
      if (matches.length === 1) setValue(`${matches[0]} `);
    } else if (event.key === "l" && event.ctrlKey) {
      event.preventDefault();
      setEntries([]);
    }
  };

  const focusInput = () => {
    if (!window.getSelection()?.toString()) {
      inputRef.current?.focus({ preventScroll: true });
    }
  };

  return (
    <>
      <section className={styles.window} aria-label="Interactive terminal">
        <div className={styles.chrome}>
          <span className={styles.lights} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className={styles.title}>rafa@ba: ~</span>
        </div>

        <div className={styles.body} ref={bodyRef} onClick={focusInput}>
          <div aria-live="polite">
            {entries.map((entry) => (
              <div key={entry.id} className={styles.entry}>
                {entry.command !== null && (
                  <p className={styles.prompt}>
                    <Prompt />
                    {entry.command}
                  </p>
                )}
                <Output entry={entry} onRun={run} />
              </div>
            ))}
          </div>

          <label className={styles.inputLine}>
            <Prompt />
            <input
              ref={inputRef}
              className={styles.input}
              value={value}
              onChange={(event) => setValue(event.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="Type a command"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              enterKeyHint="go"
            />
          </label>
        </div>
      </section>

      <p className={styles.suggestions}>
        <span>Try</span>
        {SUGGESTIONS.map((command) => (
          <CommandButton key={command} command={command} onRun={run} />
        ))}
      </p>
    </>
  );
}
