# Getting Started with headless-pm

> From zero to your first AI-powered PM workflow — no coding required.

## Choose your OS

→ [macOS](#macos) · [Linux](#linux) · [Windows WSL2](#windows-wsl2)

---

<a name="macos"></a>
## macOS

### 1. Prerequisites

Before you start, make sure you have accounts on these three platforms. All of them offer free tiers that work with headless-pm.

| Account | What it's for | Sign up |
|---|---|---|
| **Anthropic** | Claude CLI — your main AI assistant | [claude.ai](https://claude.ai) |
| **Google** | Gemini CLI — free unlimited tier, great for long documents | [gemini.google.com](https://gemini.google.com) |
| **OpenAI** | Codex CLI — code generation and scripting | [platform.openai.com](https://platform.openai.com) |

You don't need to add a credit card or create API keys. headless-pm connects via browser login.

---

### 2. Open Terminal

Press **Cmd + Space**, type **Terminal**, press **Enter**.

You'll see a window with a prompt that looks like this:

```
username@MacBook ~ %
```

That `%` (or `$`) means Terminal is ready for your commands. Everything in this guide gets typed here.

> **Tip:** Want a nicer terminal experience? Install [Warp](https://warp.dev) — it has autocomplete and is easier to use than the default Terminal.
> ```bash
> # Optional: paste this to install Warp
> brew install --cask warp
> ```

**Verify:** You see a prompt with `%` or `$`.

---

### 3. Install Node.js

headless-pm runs on Node.js. First, install Homebrew (macOS package manager), then Node.js.

**Step 1 — Install Homebrew** (if you don't have it):

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

This will ask for your Mac password. Type it (nothing appears on screen — that's normal) and press Enter.

**Step 2 — Install Node.js:**

```bash
brew install node
```

**Verify:**

```bash
node --version
```

Expected output: `v20.x.x` or higher (any v18+ is fine).

---

### 4. Install AI CLIs

Install all three CLIs with one command each. Each one opens your browser for login — no API keys needed.

**Claude CLI:**

```bash
npm install -g @anthropic-ai/claude-code
claude
```

Your browser opens → log in with your Anthropic account → close the browser tab → return to Terminal.

**Verify:**
```bash
claude --version
```

**Gemini CLI:**

```bash
npm install -g @google/gemini-cli
gemini
```

Your browser opens → log in with your Google account → close the browser tab → return to Terminal.

**Verify:**
```bash
gemini --version
```

**Codex CLI:**

```bash
npm install -g @openai/codex
codex
```

Your browser opens → log in with your OpenAI account → close the browser tab → return to Terminal.

**Verify:**
```bash
codex --version
```

All three commands should print a version number. If one fails, that's fine — headless-pm works with whichever CLIs you have installed.

---

### 5. Set Up Your Workspace

headless-pm reads a `.pm/` folder in your project directory. This folder holds your product context — sprint state, focus, blockers — so the AI always knows what you're working on.

Create the workspace for your product:

```bash
mkdir -p ~/projects/my-product/.pm/artifacts
cd ~/projects/my-product
```

Replace `my-product` with the name of your actual product (e.g., `my-saas-app`, `analytics-platform`).

Your workspace structure:

```
my-product/
  .pm/
    STATE.md       ← sprint state, focus, blockers
    artifacts/     ← PRD, backlog, sprint plans, etc.
```

**Verify:**

```bash
ls .pm/
```

Expected output: `artifacts/`

---

### 6. Load Your Product Context

The easiest way is to let `/pm-onboarding` do it for you after install (Step 8). It asks 8 quick questions and creates `.pm/STATE.md` automatically.

Or create it manually now:

```bash
# Open the file in nano (simple editor):
nano .pm/STATE.md
```

Paste this template and fill it in:

```markdown
- Product: [your product name]
- Phase: Discover
- Sprint: 1 (ends 2026-06-01)
- Focus: [what you're working on this sprint]
- Blockers: none
```

Save: press **Ctrl+O**, then **Enter**, then **Ctrl+X** to exit.

**Verify:** Run `cat .pm/STATE.md` — you should see your content.

---

### 7. Install headless-pm

```bash
npx headless-pm install
```

What happens:
- Detects which CLIs you have installed (Claude, Gemini, Codex)
- Installs all 88 PM skills into each one
- Installs the knowledge base to `~/.headless/pm/`
- Asks if you want to connect Notion, Linear, or other tools (press Enter to skip for now)

**If you have a license key** for the `/pm` orchestrator: enter it when prompted.

**Verify:**

```bash
claude --version
```

If Claude installed successfully: `npx headless-pm install` has finished.

---

### 8. First Run

Open Claude Code in your product folder:

```bash
cd ~/projects/my-product
claude
```

**If you skipped Step 6**, run the onboarding wizard first:

```
/pm-onboarding
```

It asks 8 questions and creates `.pm/STATE.md` for you. Then you're ready to use any skill.

**Try these:**

```
/pm-prd           # write a PRD for your current focus
/cusdev           # prepare a customer interview (Mom Test)
/pm-sprint-plan   # plan your sprint
```

**If you have the `/pm` orchestrator** (license key): just type `/pm` — it reads your STATE.md and routes to the right skill automatically.

---

### Troubleshooting (macOS)

| Problem | Fix |
|---|---|
| `brew: command not found` | Homebrew isn't installed. Run the install script from Step 3. |
| `npm: command not found` | Run `brew install node` first. |
| `claude: command not found` | Run `npm install -g @anthropic-ai/claude-code` again. Then run `claude` to log in. |
| `npx: command not found` | Run `brew install node`. npx comes with Node.js. |
| `node --version` shows v16 or lower | Run `brew upgrade node`. |
| Browser doesn't open during `claude` login | Try `claude --no-browser` and follow the manual login instructions. |
| `/pm` shows "No skills found" | Run `npx headless-pm install` again from your product folder. |
| Permission error on `npm install -g` | Run `sudo npm install -g @anthropic-ai/claude-code` (adds sudo). |

---

<a name="linux"></a>
## Linux

> These instructions are tested on Ubuntu 22.04 / Debian 12. For Fedora/RHEL, swap `apt` commands for `dnf`.

### 1. Prerequisites

| Account | What it's for | Sign up |
|---|---|---|
| **Anthropic** | Claude CLI | [claude.ai](https://claude.ai) |
| **Google** | Gemini CLI | [gemini.google.com](https://gemini.google.com) |
| **OpenAI** | Codex CLI | [platform.openai.com](https://platform.openai.com) |

---

### 2. Open Terminal

Press **Ctrl + Alt + T**. On most Linux distros this opens the default terminal.

If that doesn't work: open your Applications menu and search for "Terminal".

**Verify:** You see a prompt with `$`.

---

### 3. Install Node.js

**Ubuntu / Debian:**

```bash
sudo apt update
sudo apt install -y nodejs npm
```

**Fedora / RHEL:**

```bash
sudo dnf install -y nodejs npm
```

**Verify:**

```bash
node --version
```

Expected: `v18.x.x` or higher. If you get v16 or lower, install a newer version:

```bash
# Ubuntu/Debian — install Node.js 20 via NodeSource:
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

---

### 4. Install AI CLIs

**Claude CLI:**

```bash
npm install -g @anthropic-ai/claude-code
claude
```

Your browser opens → log in with Anthropic account → return to Terminal.

**Verify:** `claude --version`

**Gemini CLI:**

```bash
npm install -g @google/gemini-cli
gemini
```

Your browser opens → log in with Google account → return to Terminal.

**Verify:** `gemini --version`

**Codex CLI:**

```bash
npm install -g @openai/codex
codex
```

Your browser opens → log in with OpenAI account → return to Terminal.

**Verify:** `codex --version`

> **Note:** On some Linux systems, `npm install -g` requires sudo: `sudo npm install -g @anthropic-ai/claude-code`

---

### 5. Set Up Your Workspace

```bash
mkdir -p ~/projects/my-product/.pm/artifacts
cd ~/projects/my-product
```

**Verify:** `ls .pm/` → shows `artifacts/`

---

### 6. Load Your Product Context

The easiest way is to let `/pm-onboarding` do it after install (Step 8). Or create it manually:

```bash
nano .pm/STATE.md
```

Paste and fill in:

```markdown
- Product: [your product name]
- Phase: Discover
- Sprint: 1 (ends 2026-06-01)
- Focus: [what you're working on this sprint]
- Blockers: none
```

Save: **Ctrl+O** → **Enter** → **Ctrl+X**

**Verify:** `cat .pm/STATE.md`

---

### 7. Install headless-pm

```bash
npx headless-pm install
```

Installs all 88 PM skills. Enter your license key if you have one (for the `/pm` orchestrator), or press Enter to skip.

---

### 8. First Run

```bash
cd ~/projects/my-product
claude
```

**If you skipped Step 6**, run the onboarding wizard first:

```
/pm-onboarding
```

Then try:

```
/pm-prd           # write a PRD
/cusdev           # customer interview prep
/pm-sprint-plan   # plan your sprint
```

**If you have the `/pm` orchestrator**: just type `/pm` — it routes automatically.

---

### Troubleshooting (Linux)

| Problem | Fix |
|---|---|
| `node --version` shows v16 or lower | Install Node.js 20 via NodeSource (see Step 3). |
| `npm: command not found` | Run `sudo apt install npm` (Ubuntu) or `sudo dnf install npm` (Fedora). |
| Permission error on `npm install -g` | Add `sudo` prefix, or configure npm prefix: `mkdir ~/.npm-global && npm config set prefix ~/.npm-global && echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc && source ~/.bashrc` |
| Browser doesn't open during CLI login | Run the CLI command, then manually open the URL it prints in your browser. |
| `/pm` shows "No skills found" | Run `npx headless-pm install` again. |

---

<a name="windows-wsl2"></a>
## Windows (WSL2)

> headless-pm runs inside WSL2 (Windows Subsystem for Linux). This gives you a full Linux environment on Windows. Setup takes about 10 minutes.

### 1. Prerequisites

| Account | What it's for | Sign up |
|---|---|---|
| **Anthropic** | Claude CLI | [claude.ai](https://claude.ai) |
| **Google** | Gemini CLI | [gemini.google.com](https://gemini.google.com) |
| **OpenAI** | Codex CLI | [platform.openai.com](https://platform.openai.com) |

---

### 2. Install WSL2 and Open Terminal

**Step 1 — Open PowerShell as Administrator:**

Press **Win + X** → click **Windows PowerShell (Admin)** or **Terminal (Admin)**.

**Step 2 — Install WSL2 with Ubuntu:**

```powershell
wsl --install
```

This installs WSL2 + Ubuntu automatically. It will ask you to restart your computer.

**Step 3 — After restart:**

Ubuntu setup opens automatically. Create your Linux username and password:

```
Enter new UNIX username: yourname
New password: ••••••••
```

> The password won't show as you type — that's normal. Press Enter when done.

From now on, all commands run in this Ubuntu window (not PowerShell).

**Step 4 — Open WSL terminal anytime:**

Press **Win**, type **Ubuntu**, press **Enter**.

**Verify:** You see a prompt like `yourname@DESKTOP:~$`

---

### 3. Install Node.js

Inside your Ubuntu (WSL2) terminal:

```bash
sudo apt update
sudo apt install -y nodejs npm
```

**Verify:**

```bash
node --version
```

Expected: `v18.x.x` or higher. If v16 or lower:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

---

### 4. Install AI CLIs

**Claude CLI:**

```bash
npm install -g @anthropic-ai/claude-code
claude
```

A browser window opens on Windows → log in with Anthropic account → return to Ubuntu terminal.

**Verify:** `claude --version`

**Gemini CLI:**

```bash
npm install -g @google/gemini-cli
gemini
```

Browser opens → log in with Google account.

**Verify:** `gemini --version`

**Codex CLI:**

```bash
npm install -g @openai/codex
codex
```

Browser opens → log in with OpenAI account.

**Verify:** `codex --version`

---

### 5. Set Up Your Workspace

```bash
mkdir -p ~/projects/my-product/.pm/artifacts
cd ~/projects/my-product
```

> **Note:** Your Linux home directory (`~/`) is stored inside WSL2 — it's separate from your Windows `C:\Users\` folder. This is intentional and keeps things clean.

**Verify:** `ls .pm/` → shows `artifacts/`

---

### 6. Load Your Product Context

The easiest way is to let `/pm-onboarding` do it after install (Step 8). Or create it manually:

```bash
nano .pm/STATE.md
```

Paste and fill in:

```markdown
- Product: [your product name]
- Phase: Discover
- Sprint: 1 (ends 2026-06-01)
- Focus: [what you're working on this sprint]
- Blockers: none
```

Save: **Ctrl+O** → **Enter** → **Ctrl+X**

**Verify:** `cat .pm/STATE.md`

---

### 7. Install headless-pm

```bash
npx headless-pm install
```

Installs all 88 PM skills. Enter your license key if you have one (for the `/pm` orchestrator), or press Enter to skip.

---

### 8. First Run

```bash
cd ~/projects/my-product
claude
```

**If you skipped Step 6**, run the onboarding wizard first:

```
/pm-onboarding
```

Then try:

```
/pm-prd           # write a PRD
/cusdev           # customer interview prep
/pm-sprint-plan   # plan your sprint
```

**If you have the `/pm` orchestrator**: just type `/pm` — it routes automatically.

---

### Troubleshooting (Windows WSL2)

| Problem | Fix |
|---|---|
| `wsl --install` fails | Make sure Windows is updated to version 2004 or later (Win+R → `winver`). |
| After restart, Ubuntu doesn't open automatically | Press Win → type Ubuntu → Enter. |
| `node --version` shows v16 or lower | Install Node.js 20 via NodeSource (see Step 3). |
| Permission error on `npm install -g` | Add `sudo` prefix. |
| Browser doesn't open during CLI login | Run the command, copy the URL it prints, paste it in your Windows browser manually. |
| Can't find files in Windows Explorer | Your WSL files are at `\\wsl$\Ubuntu\home\yourname\` in File Explorer. |
| `/pm` shows "No skills found" | Run `npx headless-pm install` again. |
