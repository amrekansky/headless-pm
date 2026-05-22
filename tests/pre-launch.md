# headless-pm Pre-Launch Checklist

_Last run: 2026-05-12 (partial — Block 1 steps 1.1–1.11 passed, 1.12–1.14 manual, Block 2 pending)_

**Gate:** All checkboxes pass → headlesspm.com domain can be connected.

---

## Prerequisites

- [x] claude, gemini, codex CLIs installed and logged in
- [x] Test license key ready — `REDACTED-TEST-KEY`
- [ ] Stripe Sandbox Payment Link available

---

## Block 1: Technical Readiness

Note: `npx headless-pm install` installs for all detected CLIs in one run.

### 1.1 Reset all CLI directories

```bash
rm -rf ~/.headless/pm \
       ~/.claude/skills/pm* ~/.claude/skills/cusdev \
       ~/.gemini/commands/headless-pm \
       ~/.codex/skills/pm* ~/.codex/skills/cusdev
```

- [x] Done, no errors

### 1.2 Install without license

```bash
npx headless-pm install
```

Expected output includes:
```
✓ paid tools (stubs — license required)
Installing pm skills → ~/.claude/skills/
Installing pm skills → ~/.gemini/commands/headless-pm/
Installing pm skills → ~/.codex/skills/
```

- [x] No errors in console

### 1.3 Verify free-state — claude

```bash
ls ~/.claude/skills/ | grep pm-sprint
```
- [x] Empty (no output) — pm-sprint NOT installed yet

```bash
ls ~/.claude/skills/ | grep -E "^pm|^cusdev" | sort
```
- [x] Shows: pm, cusdev, pm-discover, pm-discovery, pm-persona, pm-survey, pm-cjm, pm-jtbd, pm-market, pm-hypothesis, pm-define, pm-prd, pm-story, pm-epic, pm-acceptance

### 1.4 Verify free-state — gemini

```bash
ls ~/.gemini/commands/headless-pm/ | grep pm-sprint
```
- [x] Empty — pm-sprint.toml NOT present

```bash
ls ~/.gemini/commands/headless-pm/ | head -5
```
- [x] Shows free skill toml files (pm.toml, cusdev.toml, etc.)

### 1.5 Verify free-state — codex

```bash
ls ~/.codex/skills/ | grep pm-sprint
```
- [x] Empty — pm-sprint NOT present

### 1.6 Test invalid key

```bash
npx headless-pm setup --key=FAKE-KEY-0000
echo "Exit: $?"
```
- [x] Output: `Invalid license key.`
- [x] Exit code: 1

```bash
ls ~/.claude/skills/ | grep pm-sprint
```
- [x] Still empty — paid skills NOT installed on invalid key

### 1.7 Setup with valid key

```bash
npx headless-pm setup --key=<YOUR-LICENSE-KEY>
```

- [x] Output: `✓ License valid. Installing full toolkit...`
- [ ] Output: `Full Headless PM toolkit installed.` — не показано (MCP prompt без TTY обрывает вывод)

### 1.8 Verify paid skills — claude

```bash
ls ~/.claude/skills/ | grep pm-sprint
```
- [x] pm-sprint present

```bash
ls ~/.claude/skills/ | grep -E "^pm|^cusdev" | wc -l
```
- [x] Count = 51

### 1.9 Verify paid skills — gemini

```bash
ls ~/.gemini/commands/headless-pm/ | grep pm-sprint
```
- [x] pm-sprint.toml present

### 1.10 Verify paid skills — codex

```bash
ls ~/.codex/skills/ | grep pm-sprint
```
- [x] pm-sprint present

### 1.11 List command

```bash
npx headless-pm list
```
- [x] Tools listed under `~/.headless/pm/`
- [x] Skills listed under `~/.claude/skills/`
- [x] No errors

### 1.12 Run paid skill — claude

Open claude: `claude`

Type `/pm-sprint` and paste:
```
Company: Clearfund — B2B expense management SaaS, 400 SMB customers
Squads: Onboarding (4 eng), Payments Core (5 eng), Reporting (3 eng)
Problems:
- Sprint planning runs 3h instead of 1h
- 40% of tickets carry over sprint-to-sprint without explanation
- No shared sprint brief format — every squad does it differently
Tools: Notion (docs), Linear (tasks), Slack, Figma
Burning task: standardize sprint brief format across all squads by end of month
```

- [x] Skill responds (asks clarifying question or generates output)
- [x] No crash, no "skill not found" error

### 1.13 Run paid skill — gemini

Open gemini: `gemini`

Type `/pm-sprint` (if not recognized, try `/headless-pm/pm-sprint`).
Paste same context as above.

- [ ] Skill responds
- [ ] No crash

### 1.14 Run paid skill — codex

Open codex: `codex`

Type `$pm-sprint` (Codex uses `$` prefix, not `/`). Paste same context.

- [x] Skill responds
- [x] No crash

---

## Block 2: CJM

### 2.1 Open Stripe Sandbox Payment Link

Go to Stripe Dashboard → enable **Test mode** → Payment Links → open headless-pm sandbox link.

- [ ] Payment link opened

### 2.2 Pay with test card

Fill checkout form:
- Card: `4242 4242 4242 4242`
- Expiry: `12/28`
- CVC: `123`
- Email: `amrekanski@gmail.com`

- [ ] Payment submitted successfully

### 2.3 License email received

Check `amrekanski@gmail.com`. Timeout: 5 minutes.

If not received: check Render → headless-license → Logs for `[license] issued` line.

- [ ] Email received within 5 minutes
- [ ] License key present in email (format: `HEAD-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX`)

### 2.4 Verify product in Render logs

In Render logs, find:
```
[license] issued HEAD-... → amrekanski@gmail.com (headless-pm)
```

- [ ] Product = `headless-pm` (not `headless-ops`)

### 2.5 Setup with key from email

```bash
npx headless-pm setup --key=<KEY_FROM_EMAIL>
```

- [ ] Output: `✓ License valid. Installing full toolkit...`

### 2.6 Run paid skill in claude

Open claude: `claude`

Type `/pm-sprint`, paste:
```
Company: Clearfund — B2B expense management SaaS, 400 SMB customers
Squads: Onboarding (4 eng), Payments Core (5 eng), Reporting (3 eng)
Problems:
- Sprint planning runs 3h instead of 1h
- 40% of tickets carry over sprint-to-sprint without explanation
- No shared sprint brief format — every squad does it differently
Tools: Notion (docs), Linear (tasks), Slack, Figma
Burning task: standardize sprint brief format across all squads by end of month
```

- [ ] Skill responds

---

## Result

- [ ] Block 1 fully passed (all 1.1–1.14 checked)
- [ ] Block 2 fully passed (all 2.1–2.6 checked)

**→ headlesspm.com domain can be connected.**

If any step failed: fix, re-run from that step only.
