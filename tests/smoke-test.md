# headless-pm Smoke Test

## Предусловия
- Node.js 18+
- `claude` CLI установлен и залогинен
- Чистая машина (или `rm -rf ~/.headless/pm ~/.claude/skills/pm*`)
- Валидный лицензионный ключ под рукой
- Интернет (для headless-license.onrender.com)

---

## 1. CLI — базовые команды

### 1.1 install (без лицензии)
```bash
npx headless-pm install
```
**Ожидаем:**
- [ ] Детектирует `claude` CLI
- [ ] Копирует `pm-interview-prep` и `pm-sprint-brief` в `~/.headless/pm/`
- [ ] Копирует скилы в `~/.claude/skills/`
- [ ] Paid tools показывает как stubs: "(license required)"
- [ ] Нет ошибок в консоли

### 1.2 list
```bash
npx headless-pm list
```
**Ожидаем:**
- [ ] Показывает установленные tools из `~/.headless/pm/`
- [ ] Показывает PM скилы из `~/.claude/skills/`

### 1.3 init
```bash
mkdir test-project && cd test-project
npx headless-pm init
```
**Ожидаем:**
- [ ] Создает `.pm/` директорию в текущей папке
- [ ] Нет ошибок

### 1.4 mcp --list
```bash
npx headless-pm mcp --list
```
**Ожидаем:**
- [ ] Показывает Notion, Jira, Linear, Miro
- [ ] Для каждого — нужные env vars

### 1.5 statusline
```bash
npx headless-pm statusline
```
**Ожидаем:**
- [ ] Выводит строку или пустую строку (не крашится)

---

## 2. License flow

### 2.1 Валидный ключ
```bash
npx headless-pm setup --key=REAL_KEY_HERE
```
**Ожидаем:**
- [ ] `✓ License valid`
- [ ] Устанавливает paid tools
- [ ] Записывает ключ в конфиг
- [ ] `npx headless-pm list` показывает paid tools

### 2.2 Невалидный ключ
```bash
npx headless-pm setup --key=FAKE-KEY-0000
```
**Ожидаем:**
- [ ] `Invalid license key.`
- [ ] Exit code 1
- [ ] Paid tools НЕ установлены

### 2.3 Нет интернета
```bash
# Отключи интернет, потом:
npx headless-pm setup --key=ANY_KEY
```
**Ожидаем:**
- [ ] `Could not validate license. Check your connection.`
- [ ] Graceful exit, не crash

### 2.4 update после setup
```bash
npx headless-pm update
```
**Ожидаем:**
- [ ] Читает сохраненный ключ из конфига
- [ ] Обновляет tools и skills без повторного ввода ключа

---

## 3. Free tools (без лицензии)

### 3.1 pm-interview-prep
```bash
claude --tool ~/.headless/pm/pm-interview-prep "Senior PM, Revolut, интервью через 2 дня"
```
**Ожидаем:**
- [ ] Запускается без ошибок
- [ ] Задает уточняющие вопросы или выдает prep plan
- [ ] Не требует ключ

### 3.2 pm-sprint-brief
```bash
claude --tool ~/.headless/pm/pm-sprint-brief "Sprint 24, цель: запустить onboarding flow"
```
**Ожидаем:**
- [ ] Генерирует sprint brief
- [ ] Не требует ключ

---

## 4. Скилы — роутинг через /pm

После `npx headless-pm install` запускаем `claude`:

### 4.1 Оркестратор /pm
```
/pm
```
**Ожидаем:**
- [ ] Показывает меню или спрашивает контекст
- [ ] Роутит к нужному скилу по запросу

### 4.2 Прямой вызов скила
```
/pm-discovery
/pm-sprint
/pm-roadmap
```
**Ожидаем:**
- [ ] Каждый скил запускается без ошибок
- [ ] Задает первый вопрос или показывает инструкции

### 4.3 /cusdev
```
/cusdev
```
**Ожидаем:**
- [ ] Запускается customer discovery wizard
- [ ] Первый вопрос про контекст интервью

---

## 5. Test Data — 5 PM Personas (US/Canada)

For each persona: context block to paste into claude chat or pass via `--context`.

---

### Persona 1: Product Operations PM — Jordan (Toronto)

**Profile:** Ops PM at a Series B fintech startup (80 ppl), runs 3 squads, everything in Notion + Linear.

**Context:**
```
Company: Clearfund — B2B expense management SaaS, 400 SMB customers
Squads: Onboarding (4 eng), Payments Core (5 eng), Reporting (3 eng)
Problems:
- Sprint planning runs 3h instead of 1h
- 40% of tickets carry over sprint-to-sprint without explanation
- No shared sprint brief format — every squad does it differently
- Retros happen once a month, not weekly
Tools: Notion (docs), Linear (tasks), Slack, Figma
Burning task: standardize sprint brief format across all squads by end of month
```

**Test scenarios:**
- `/pm-sprint` → give context → verify it generates a unified brief template
- `/pm-retro` → give carryover problem → verify diagnostic output
- `/pm-standup` → give 3-squad context → verify standup format
- `/pm-dependencies` → describe cross-squad blockers → dependency map

---

### Persona 2: Growth PM — Priya (San Francisco)

**Profile:** Growth PM at a B2C consumer app (Series C), owns activation and retention, works with data team.

**Context:**
```
Company: Routify — commute optimization app, 3.5M MAU
Metrics:
- Activation rate: 31% (target 50%)
- D7 retention: 19% (target 32%)
- Funnel: install → signup → first route → repeat use
- Drop-off: 65% leave after signup, before first route
Current hypotheses:
- H1: Simplify onboarding (remove 3 steps) → +9% activation
- H2: Push notification 48h after signup → +6% D7
- H3: Free premium week on first login → +14% activation (expensive)
Data stack: Mixpanel, dbt, Snowflake
Next sprint: 2 weeks, 1 engineer available
```

**Test scenarios:**
- `/pm-ab` → give hypotheses → verify prioritization and test design
- `/pm-hypothesis` → give funnel metrics → verify hypothesis framing
- `/pm-metrics` → give activation/retention data → funnel diagnostic
- `/pm-prioritize` → give 3 hypotheses + 1 engineer → what goes in sprint

---

### Persona 3: Product PM — Marcus (New York)

**Profile:** Product PM at a B2B SaaS HR platform (mid-market), balances UX research and delivery pressure.

**Context:**
```
Company: HireIQ — hiring automation platform, 300 customers (50–500 employee companies)
Current quarter: launching Candidate Analytics module
Status: design complete, 60% dev done, 3 weeks to deadline
Problems:
- Enterprise client (BuildCo, 600 ppl) requesting custom report — 2 weeks of work
- UX research shows users confused by current dashboard layout
- CTO wants to refactor data layer in parallel — adds 1 week
Stakeholders: CEO (wants BuildCo case study), CTO (wants refactor), Sales (wants custom report)
Team: 2 backend, 1 frontend, 1 designer
```

**Test scenarios:**
- `/pm-decision` → give stakeholder conflict → verify decision framework
- `/pm-stakeholder` → give 3 stakeholders with conflicting goals → comms plan
- `/pm-prd` → give Candidate Analytics module → PRD structure
- `/pm-epic` → give feature + 3 weeks + 4 people → epic/stories breakdown

---

### Persona 4: Technical PM — Alex (Seattle)

**Profile:** Technical PM at a developer-facing API company, works at the product/engineering boundary.

**Context:**
```
Company: FlowPay — payments API platform, 200 B2B clients
Current project: monolith to microservices migration
Technical context:
- Monolith: Ruby on Rails, 9 years old, 450K lines
- New architecture: Go microservices, Kafka, Kubernetes
- 3 services already migrated: auth, notifications, analytics
- Next: payments core — highest criticality, 99.95% uptime SLA
Risks:
- 2 key engineers leaving in 6 weeks
- Legacy code: 25% test coverage
- Enterprise client Meridian Bank requires audit trail for all transactions
SLA: payments must not be down > 2 minutes
```

**Test scenarios:**
- `/pm-sla-slo` → give uptime requirements → SLI/SLO/error budget
- `/pm-incident-response` → simulate: payments core down 7 minutes → triage
- `/pm-dependencies` → give migration + 3 completed services → dependency map
- `/pm-release-lifecycle` → payments core migration → smoke→alpha→beta→GA plan

---

### Persona 5: Platform PM — Sarah (Vancouver)

**Profile:** Platform PM at an enterprise tech company, builds internal developer platform for 15 product teams.

**Context:**
```
Company: Nexora — enterprise software (1,200 employees), internal platform serves 15 product teams
Platform: shared services — auth, notifications, storage, feature flags, analytics
Current metrics:
- 15 teams on platform
- Developer satisfaction: 3.1/5
- Average new team onboarding: 4 weeks (target: 3 days)
- 45% of support tickets: "how do I connect X"
Team pain points:
- Docs outdated or missing for 6 of 12 services
- Breaking changes shipped without notice (3 incidents last quarter)
- No self-service: everything through tickets to platform team
Platform team: 10 engineers, 1 PM (Sarah)
Next quarter goal: cut onboarding from 4 weeks to 3 days
```

**Test scenarios:**
- `/pm-okr` → give onboarding goal + metrics → quarterly OKR
- `/pm-adoption` → give low satisfaction + 4-week onboarding → adoption strategy
- `/pm-sunset-deprecation` → legacy notifications API needs removal, 9 teams depend on it → plan
- `/pm-customer-health` → give 15 teams + satisfaction 3.1/5 → health scoring

---

## 6. Чеклист перед продом

- [ ] Все 7 CLI команд отработали без ошибок
- [ ] License valid flow + invalid flow + no internet — все три сценария
- [ ] Free tools запускаются без лицензии
- [ ] Paid tools блокируются без лицензии (stubs)
- [ ] Paid tools работают с валидной лицензией
- [ ] /pm роутит к правильным скилам
- [ ] Протестированы минимум 2 скила на каждую из 5 персон
- [ ] Stripe: тестовый платеж → webhook → license выдан → setup --key работает
- [ ] Stripe: live mode (после верификации)
