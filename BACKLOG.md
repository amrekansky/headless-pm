# headless-pm Product Backlog

_Updated: 2026-05-13_

## UX Improvements

- [ ] MCP setup: добавить видимую опцию "Skip / I don't use any of these" в checkbox (сейчас можно нажать Enter без выбора — работает, но не очевидно)
- [ ] MCP setup: добавить опцию "Other — enter URL manually" для кастомных MCP серверов (SSE URL)

- [ ] Codex: pm-sprint не показывает интерактивное меню фаз ("До спринта / Во время / Конец / Полный сетап") — сразу генерирует ответ самостоятельно. Поведение должно матчиться с Claude: задавать вопрос о фазе и ждать выбора пользователя, не угадывать

- [x] skill.md отвечает на английском независимо от языка пользователя — исправлено в v0.6.6: Universal Rules injected во все 51 скил ("Respond in the same language the user writes in")
- [x] Gemini переспрашивает данные, которые уже есть в контексте — исправлено в v0.6.6: Universal Rules ("Before asking questions, identify what is already provided")
- [x] Gemini/Codex задают открытые вопросы без вариантов ответа — исправлено в v0.6.6: Universal Rules ("always offer 3-4 ready-made options with a smart default; last option: Enter your own")

## Known Issues

- [x] installer не копирует `knowledge/` директорию — исправлено в v0.6.5: installTools() теперь копирует knowledge/ → ~/.headless/pm/knowledge/ (41 файл)

- [x] Gemini интерпретирует skill.md агентски — исправлено в v0.6.5: добавлен HTML-комментарий "Generate all output directly as text. Do not run any shell commands."
