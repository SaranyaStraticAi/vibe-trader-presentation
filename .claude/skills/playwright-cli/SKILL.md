# Playwright CLI Skill

Use this skill when the user asks you to interact with a web browser, test web pages, or automate browser tasks.

## Usage

Run browser commands using `bunx playwright-cli <command>`. Always use `bunx` instead of `npx` as per project conventions.

### Core Commands

| Command | Description | Example |
|---------|-------------|---------|
| `open <url>` | Navigate to a URL | `bunx playwright-cli open http://localhost:3000` |
| `snapshot` | Get page accessibility snapshot with element refs | `bunx playwright-cli snapshot` |
| `screenshot [ref]` | Take a screenshot (of page or element by ref) | `bunx playwright-cli screenshot` |
| `click <ref>` | Click an element by ref | `bunx playwright-cli click e15` |
| `type <text>` | Type text into focused element | `bunx playwright-cli type "Hello World"` |
| `fill <ref> <text>` | Fill text into a specific element | `bunx playwright-cli fill e12 "test@example.com"` |
| `select <ref> <value>` | Select dropdown option | `bunx playwright-cli select e20 "option1"` |
| `hover <ref>` | Hover over an element | `bunx playwright-cli hover e8` |
| `close` | Close the browser | `bunx playwright-cli close` |

### Navigation Commands

| Command | Description |
|---------|-------------|
| `go-back` | Navigate back in history |
| `go-forward` | Navigate forward in history |
| `reload` | Reload current page |

### Workflow

1. **Open a page**: `bunx playwright-cli open <url>`
2. **Get element refs**: `bunx playwright-cli snapshot` - This returns a structured view of the page with element references (e.g., e1, e2, e15)
3. **Interact with elements**: Use the refs from snapshot to click, type, fill, etc.
4. **Verify changes**: Take another snapshot or screenshot

### Options

- `--headed` - Show the browser window (useful for debugging)
- `--browser <name>` - Use specific browser: chrome, firefox, webkit, msedge
- `--session <name>` - Use a named session to persist cookies/state

### Session Management

Use sessions to persist login state between runs:

```bash
# Set environment variable for session
export PLAYWRIGHT_CLI_SESSION=vibetrader

# Or pass as option
bunx playwright-cli open http://localhost:3000 --session vibetrader
```

### Examples

```bash
# Test a login flow
bunx playwright-cli open http://localhost:3000/login
bunx playwright-cli snapshot
bunx playwright-cli fill e12 "test@example.com"
bunx playwright-cli fill e15 "password123"
bunx playwright-cli click e18

# Take screenshot for verification
bunx playwright-cli screenshot login-result.png
```

## Notes

- Element refs (e1, e2, etc.) are obtained from the `snapshot` command
- Always run `snapshot` before interacting to get current element refs
- The browser runs in headless mode by default, add `--headed` to see it
