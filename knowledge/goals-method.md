# Goals as definition-of-done

A goal in headless-pm is not just an OKR label. It is a **verifiable definition-of-done** — a target concrete enough that you (or a loop) can check whether work has actually met it.

## What makes a goal usable

A usable goal has three parts:

1. **Objective** — qualitative, inspiring, time-bound. Not a metric. Example: "Make first-run setup something users finish in one sitting."
2. **Key Results** — 3-5 measurable outcomes with `baseline → target (now: current)`. Outcome-based, not output-based. "Activation 38% → 55%" not "ship onboarding wizard".
3. **done when** — a single verifiable success condition the work can be checked against. Example: "Activation hits 55% for two consecutive weeks." This is what `/pm-loop` reads as a stop condition.

70% achievement of a stretch KR counts as success (per okr-implementation). Mark anti-goals — what you are explicitly not optimizing this quarter — so drift checks have a reference.

## Three health checks

- **stale** — an Objective whose `reviewed:` date is older than 14 days. Goals rot silently; surface them.
- **drift** — work in the backlog / sprint that advances no active Objective. Either link it to a goal or question why it is in flight.
- **orphan** — an active Objective with no work pointing at it. The goal exists but nothing is moving it.

## Alignment

Every meaningful piece of work should advance at least one active Objective. When scoring work against goals, name the Objective each item advances; flag items that advance none (drift) and Objectives with no items (orphan). Record findings in the Alignment log so the next check sees movement.

## Provenance

Goals come from strategy work: `/pm-okr` drafts OKRs, `/pm-roadmap` sets themes. `/pm-goals` is the home that keeps them live and checks work against them — it does not re-author strategy, it maintains and verifies it.
