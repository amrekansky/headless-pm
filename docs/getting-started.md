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

### 5. Install headless-pm

```bash
npx headless-pm install
```

What this does:
- Detects which CLIs you installed (Claude, Gemini, Codex)
- Installs all 101 PM skills into each one
- Installs the knowledge base to `~/.headless/pm/`
- Asks about optional integrations (Notion, Linear, Miro) — press Enter to skip for now

**License key for the `/pm` orchestrator:** Enter it when prompted, or press Enter to continue with the free tier.

**Verify:** Open your CLI and run a skill:

| CLI | Command |
|-----|---------|
| Claude | `/pm-sprint-brief` |
| Gemini | `/pm-sprint-brief` |
| Codex | `$pm-sprint-brief` |

If the skill loads, you're all set.

---

### 6. Set Up Your Workspace

How you set up depends on where you are:

---

#### Scenario A — You have existing materials

You have docs, PRDs, specs, notes, Notion exports, or slide decks. Don't start from a blank workspace — feed Claude your context first.

**Step 1 — Convert your documents to Markdown.**

Install [markitdown](https://github.com/microsoft/markitdown) — it handles DOCX, PDF, PPTX, XLSX, and more:

```bash
brew install python  # if pip is not found
pip install markitdown
```

Convert your files:

```bash
markitdown your-prd.docx > your-prd.md
markitdown your-roadmap.pdf > your-roadmap.md
```

Run this for every document you want Claude to read.

**Step 2 — Open Claude in your project folder:**

```bash
cd ~/projects/my-product
claude
```

**Step 3 — Share your context.**

Just talk. No template, no structure. Tell Claude:
- What you're working on and why
- What you want to achieve
- What's blocking you or causing friction

Think of it like onboarding a new colleague — the more honest and specific you are, the better Claude understands your situation.

**Step 4 — At the end of the session, initialize your workspace:**

```
/pm-onboarding
```

This creates your `.pm/` workspace based on the conversation.

---

#### Scenario B — You're starting from scratch

No existing docs. That's fine — start with a conversation.

```bash
mkdir -p ~/projects/my-product
cd ~/projects/my-product
claude
```

Describe what you're planning to build: the product, the problem it solves, who it's for, where you are in the process. Just talk — no agenda required.

At the end of the session, run:

```
/pm-onboarding
```

---

After init, your workspace looks like this:

```
my-product/
  .pm/
    STATE.md        ← current sprint state, focus, blockers
    situation.md    ← product context
    goals.md        ← what you're trying to achieve
    artifacts/      ← PRDs, sprint plans, interview notes, etc.
```

---

### 7. Your First Skills (Free Tier)

You have 101 PM skills. Start with what's most useful right now:

| Skill | Claude / Gemini | Codex |
|-------|----------------|-------|
| Write a PRD | `/pm-prd` | `$pm-prd` |
| Customer interview prep | `/cusdev` | `$cusdev` |
| Sprint brief | `/pm-sprint-brief` | `$pm-sprint-brief` |
| Competitive analysis | `/pm-competitive-scan` | `$pm-competitive-scan` |
| Discovery framework | `/discovery` | `$discovery` |

Each skill reads your `.pm/STATE.md` for context. The more specific your workspace, the better the output.

---

### 8. The /pm Orchestrator (Paid Tier)

If you have a license key, the `/pm` orchestrator becomes your single entry point. One command instead of five.

Re-run install to enter your key:

```bash
npx headless-pm install
```

Then open your CLI in your project folder and type:

| CLI | Command |
|-----|---------|
| Claude | `/pm` |
| Gemini | `/pm` |
| Codex | `$pm` |

It reads your `STATE.md`, understands where you are in the PM workflow, and routes to the right skill automatically.

Get a license key at [headlesspm.com](https://headlesspm.com).

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

### 5. Install headless-pm

```bash
npx headless-pm install
```

What this does:
- Detects which CLIs you installed (Claude, Gemini, Codex)
- Installs all 101 PM skills into each one
- Installs the knowledge base to `~/.headless/pm/`
- Asks about optional integrations (Notion, Linear, Miro) — press Enter to skip for now

**License key for the `/pm` orchestrator:** Enter it when prompted, or press Enter to continue with the free tier.

**Verify:** Open your CLI and run a skill:

| CLI | Command |
|-----|---------|
| Claude | `/pm-sprint-brief` |
| Gemini | `/pm-sprint-brief` |
| Codex | `$pm-sprint-brief` |

If the skill loads, you're all set.

---

### 6. Set Up Your Workspace

How you set up depends on where you are:

---

#### Scenario A — You have existing materials

You have docs, PRDs, specs, notes, Notion exports, or slide decks. Don't start from a blank workspace — feed Claude your context first.

**Step 1 — Convert your documents to Markdown.**

Install [markitdown](https://github.com/microsoft/markitdown) — it handles DOCX, PDF, PPTX, XLSX, and more:

```bash
sudo apt install python3-pip  # if pip is not found
pip install markitdown
```

Convert your files:

```bash
markitdown your-prd.docx > your-prd.md
markitdown your-roadmap.pdf > your-roadmap.md
```

Run this for every document you want Claude to read.

**Step 2 — Open Claude in your project folder:**

```bash
cd ~/projects/my-product
claude
```

**Step 3 — Share your context.**

Just talk. No template, no structure. Tell Claude:
- What you're working on and why
- What you want to achieve
- What's blocking you or causing friction

Think of it like onboarding a new colleague — the more honest and specific you are, the better Claude understands your situation.

**Step 4 — At the end of the session, initialize your workspace:**

```
/pm-onboarding
```

This creates your `.pm/` workspace based on the conversation.

---

#### Scenario B — You're starting from scratch

No existing docs. That's fine — start with a conversation.

```bash
mkdir -p ~/projects/my-product
cd ~/projects/my-product
claude
```

Describe what you're planning to build: the product, the problem it solves, who it's for, where you are in the process. Just talk — no agenda required.

At the end of the session, run:

```
/pm-onboarding
```

---

After init, your workspace looks like this:

```
my-product/
  .pm/
    STATE.md        ← current sprint state, focus, blockers
    situation.md    ← product context
    goals.md        ← what you're trying to achieve
    artifacts/      ← PRDs, sprint plans, interview notes, etc.
```

---

### 7. Your First Skills (Free Tier)

You have 101 PM skills. Start with what's most useful right now:

| Skill | Claude / Gemini | Codex |
|-------|----------------|-------|
| Write a PRD | `/pm-prd` | `$pm-prd` |
| Customer interview prep | `/cusdev` | `$cusdev` |
| Sprint brief | `/pm-sprint-brief` | `$pm-sprint-brief` |
| Competitive analysis | `/pm-competitive-scan` | `$pm-competitive-scan` |
| Discovery framework | `/discovery` | `$discovery` |

Each skill reads your `.pm/STATE.md` for context. The more specific your workspace, the better the output.

---

### 8. The /pm Orchestrator (Paid Tier)

If you have a license key, the `/pm` orchestrator becomes your single entry point. One command instead of five.

Re-run install to enter your key:

```bash
npx headless-pm install
```

Then open your CLI in your project folder and type:

| CLI | Command |
|-----|---------|
| Claude | `/pm` |
| Gemini | `/pm` |
| Codex | `$pm` |

It reads your `STATE.md`, understands where you are in the PM workflow, and routes to the right skill automatically.

Get a license key at [headlesspm.com](https://headlesspm.com).

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

### 5. Install headless-pm

Inside your Ubuntu (WSL2) terminal:

```bash
npx headless-pm install
```

What this does:
- Detects which CLIs you installed (Claude, Gemini, Codex)
- Installs all 101 PM skills into each one
- Installs the knowledge base to `~/.headless/pm/`
- Asks about optional integrations (Notion, Linear, Miro) — press Enter to skip for now

**License key for the `/pm` orchestrator:** Enter it when prompted, or press Enter to continue with the free tier.

**Verify:** Open your CLI and run a skill:

| CLI | Command |
|-----|---------|
| Claude | `/pm-sprint-brief` |
| Gemini | `/pm-sprint-brief` |
| Codex | `$pm-sprint-brief` |

If the skill loads, you're all set.

---

### 6. Set Up Your Workspace

How you set up depends on where you are:

---

#### Scenario A — You have existing materials

You have docs, PRDs, specs, notes, Notion exports, or slide decks. Don't start from a blank workspace — feed Claude your context first.

**Step 1 — Convert your documents to Markdown.**

Install [markitdown](https://github.com/microsoft/markitdown) — it handles DOCX, PDF, PPTX, XLSX, and more:

```bash
sudo apt install python3-pip  # if pip is not found
pip install markitdown
```

To convert files from your Windows folders, access them via `/mnt/c/Users/yourname/Documents/`:

```bash
markitdown /mnt/c/Users/yourname/Documents/your-prd.docx > your-prd.md
```

Run this for every document you want Claude to read.

**Step 2 — Open Claude in your project folder:**

```bash
cd ~/projects/my-product
claude
```

**Step 3 — Share your context.**

Just talk. No template, no structure. Tell Claude:
- What you're working on and why
- What you want to achieve
- What's blocking you or causing friction

Think of it like onboarding a new colleague — the more honest and specific you are, the better Claude understands your situation.

**Step 4 — At the end of the session, initialize your workspace:**

```
/pm-onboarding
```

This creates your `.pm/` workspace based on the conversation.

---

#### Scenario B — You're starting from scratch

No existing docs. That's fine — start with a conversation.

```bash
mkdir -p ~/projects/my-product
cd ~/projects/my-product
claude
```

Describe what you're planning to build: the product, the problem it solves, who it's for, where you are in the process. Just talk — no agenda required.

At the end of the session, run:

```
/pm-onboarding
```

---

After init, your workspace looks like this:

```
my-product/
  .pm/
    STATE.md        ← current sprint state, focus, blockers
    situation.md    ← product context
    goals.md        ← what you're trying to achieve
    artifacts/      ← PRDs, sprint plans, interview notes, etc.
```

> **Note:** Your Linux home directory (`~/`) is stored inside WSL2 — it's separate from your Windows `C:\Users\` folder. This is intentional and keeps things clean. Find your files in Windows Explorer at `\\wsl$\Ubuntu\home\yourname\`.

---

### 7. Your First Skills (Free Tier)

You have 101 PM skills. Start with what's most useful right now:

| Skill | Claude / Gemini | Codex |
|-------|----------------|-------|
| Write a PRD | `/pm-prd` | `$pm-prd` |
| Customer interview prep | `/cusdev` | `$cusdev` |
| Sprint brief | `/pm-sprint-brief` | `$pm-sprint-brief` |
| Competitive analysis | `/pm-competitive-scan` | `$pm-competitive-scan` |
| Discovery framework | `/discovery` | `$discovery` |

Each skill reads your `.pm/STATE.md` for context. The more specific your workspace, the better the output.

---

### 8. The /pm Orchestrator (Paid Tier)

If you have a license key, the `/pm` orchestrator becomes your single entry point. One command instead of five.

Re-run install to enter your key:

```bash
npx headless-pm install
```

Then open your CLI in your project folder and type:

| CLI | Command |
|-----|---------|
| Claude | `/pm` |
| Gemini | `/pm` |
| Codex | `$pm` |

It reads your `STATE.md`, understands where you are in the PM workflow, and routes to the right skill automatically.

Get a license key at [headlesspm.com](https://headlesspm.com).

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
