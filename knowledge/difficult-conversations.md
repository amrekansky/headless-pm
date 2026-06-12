# Difficult Conversations

## What it is

Difficult conversations are interactions where the stakes are high, opinions differ, and emotions are involved. For PMs, they are a daily occurrence: saying no to a VP's feature request, pushing back on engineering estimates, resolving a roadmap conflict with sales, delivering negative feedback to a designer, or escalating a decision that nobody wants to own. PMs without this skill become bottlenecks — they avoid the conversations that would unblock their teams and instead let tension fester into misalignment.

The foundational texts are: *Difficult Conversations* (Stone, Patton, Heen — Harvard Negotiation Project), *Radical Candor* (Kim Scott), *Never Split the Difference* (Chris Voss — negotiation), and Roger Fisher's *Getting to Yes* (principled negotiation, BATNA). The PM application synthesizes negotiation theory with the specific organizational dynamics of cross-functional product work.

## When to use

- When you need to say no to a stakeholder without destroying the relationship
- When pushing back on an executive's direction with your own recommendation
- When there is a persistent conflict between engineering, design, and business
- When giving critical feedback to a teammate or cross-functional partner
- When escalating a decision that has been stuck in disagreement for too long

## Core components / steps

### BATNA — Know Your Walk-Away Position

**BATNA** (Best Alternative to a Negotiated Agreement) is the most powerful concept in negotiation (Roger Fisher, *Getting to Yes*). Before entering any negotiation or difficult conversation, define:
- What is your ideal outcome?
- What is your acceptable outcome?
- What is your BATNA — what will you do if no agreement is reached?

**In product context:**
- "I'm negotiating for Q3 launch. My BATNA is: ship a limited version in Q3 with full launch Q4, which I can defend to stakeholders."
- "I'm asking for 2 engineers. My BATNA is: descope the feature to fit 1 engineer."

Knowing your BATNA removes anxiety from the conversation. You no longer need to win — you need to find an outcome that beats your alternative.

**The other side's BATNA**: Anticipate what happens for them if this conversation fails. What are they afraid of? What do they stand to lose? Understanding their BATNA makes it easier to find solutions that work for both sides.

### Managing Up: Delivering Bad News and Saying No

**The rule**: Deliver bad news early, with a plan. Late bad news without a plan is a crisis. Early bad news with a plan is a request for support.

**Structure for delivering bad news upward:**
1. **Lead with the signal**: "The Q3 launch is at risk."
2. **Give the cause**: "We discovered a scope dependency we didn't account for in planning."
3. **Present options**: "We have three paths: (A) delay by 3 weeks, (B) descope 2 features and ship on time, (C) add a contractor."
4. **Make a recommendation**: "I recommend B because it preserves the Q3 date and the descoped features are low usage."
5. **Ask for a decision**: "Can you approve the descope by Thursday so engineering can replan?"

**Saying no to an executive's feature request:**
- Never say a flat no. Say "not now" with a reason tied to priorities.
- Use the "yes, and" or "yes, if": "Yes, we can build this — if we deprioritize X and Y. Is that the right tradeoff?"
- Anchor to shared goals: "Our Q3 goal is activation. This feature serves retention. I'd rather invest there in Q4."
- Offer the alternative: "Here is what we can do now that serves the same underlying need."

### Engineering / Design / Business Tension Patterns

PM sits at the intersection of three functions with different incentives. Recurring tension patterns and how to resolve them:

**"Engineering says it will take 3 months, we need it in 6 weeks":**
- Separate the spec from the implementation: Is there a version that achieves the core outcome in 6 weeks?
- Bring engineering into the problem, not just the solution: "What would need to be true for this to ship in 6 weeks?"
- If genuinely impossible: escalate the tradeoff (scope vs timeline vs resources) to whoever owns all three.

**"Design wants to redo the whole UI, engineering wants to patch":**
- Neither side is wrong. The PM's job is to frame the decision: "A full redesign achieves [goal] but takes [time] and has [risk]. A patch achieves [lower bar] in [less time]. Which do we do given [launch constraint]?"
- Document the decision and the tradeoff explicitly. Both sides need to feel heard, not overruled.

**"Sales promised a feature to a customer, it's not on the roadmap":**
- This is an alignment problem, not a product problem. The fix is process (sales/product alignment meeting), not accommodation.
- In the short term: clarify what was actually committed vs what the customer heard.
- In the long term: establish a mechanism for sales to understand the roadmap before promising features.

### Disagree and Commit

Amazon's principle: once a decision is made through appropriate process, team members disagree and commit — meaning they execute fully, even if they had a different opinion.

**Disagree and commit as a PM:**
- State your disagreement clearly and once, with evidence
- Accept the decision gracefully if overruled by the appropriate authority
- Execute the decision with full effort
- Track the outcome — if your concern proves valid, use that data in future discussions

**Escalation as a last resort:**
When to escalate: the disagreement is about a high-stakes decision, the decision is stuck, and the stuck state is blocking the team. Escalation is not complaining — it is a request for a higher-authority decision.

**How to escalate well:**
1. "I've tried to resolve this with [person/team] and we're stuck."
2. "The decision that needs to be made is [specific decision]."
3. "The options are [A vs B]. I recommend [A] because [reason]."
4. "Can you decide by [date] so we can keep the team moving?"

### Radical Candor Framework

Kim Scott's model: the best managers and peers are both personally caring and directly challenging. Avoiding directness ("ruinous empathy") is as harmful as being harsh without caring.

| | Caring | Not caring |
|---|--------|-----------|
| **Direct** | Radical Candor ✓ | Obnoxious Aggression |
| **Not direct** | Ruinous Empathy | Manipulative Insincerity |

**PM application**: When a designer's work misses the mark, or an engineer is underperforming, the temptation is ruinous empathy — stay quiet to preserve the relationship. Radical Candor says: give the feedback directly and caringly, in private, with specific examples.

**Feedback formula (SBI — Situation-Behavior-Impact):**
- **Situation**: "In yesterday's design review..."
- **Behavior**: "...you showed a flow that didn't account for the error state we discussed."
- **Impact**: "...the engineers spent 30 minutes debating it, and we lost the session to that."

## Key questions to ask

- What is my BATNA in this conversation? Do I know what "no deal" means for me?
- What is the other side's real concern? (Often not the same as their stated position.)
- Am I avoiding this conversation because it is uncomfortable, or because timing is genuinely wrong?
- Is this a disagreement about facts (resolvable with data) or values (requires explicit tradeoff decision)?
- Have I delivered this message directly and specifically, or have I hedged it into uselessness?

## Common mistakes

- **Avoiding the conversation entirely**: The longer it waits, the higher the stakes and the harder the conversation becomes.
- **Arguing position instead of interest**: "I want X" vs "I need [outcome] — X is one way to get there." Arguing interests opens solution space.
- **Giving feedback in public**: Critical feedback always in private. Praise in public.
- **Escalating prematurely**: Escalation before direct conversation erodes trust with the person you escalated over.
- **Conflating disagreement with conflict**: Disagreement is healthy. Conflict is disagreement that has become personal. PMs must keep the former and prevent the latter.

## Quick reference

```
BATNA: your walk-away position — define before every negotiation
Bad news formula: signal → cause → options → recommendation → ask

Managing up: "Yes, if..." instead of "No"
            Anchor to shared goals, not your preference
            Make the tradeoff explicit, ask for the decision

Disagree and commit: state disagreement once with evidence → execute fully → track outcome
Radical Candor: direct + caring (private feedback, specific behavior, named impact)
SBI feedback: Situation → Behavior → Impact
```

| Pattern | Wrong | Right |
|---------|-------|-------|
| Bad news | Late, no plan | Early, with options |
| No to exec | Flat no | "Yes, if we deprioritize X" |
| Eng/design conflict | Pick a side | Frame the tradeoff, ask for decision |
| Disagreement | Argue louder | State once, commit |
| Feedback | Vague, in public | SBI, in private |

## Sources

- [Difficult Conversations — Stone, Patton & Heen (2010, Harvard Negotiation Project)](https://www.amazon.com/Difficult-Conversations-Discuss-What-Matters/dp/0143118447)
- [Radical Candor — Kim Scott (2017)](https://www.amazon.com/Radical-Candor-Revised-Kick-Ass-Humanity/dp/1250235375)
- [Getting to Yes — Roger Fisher & William Ury (1981)](https://www.amazon.com/Getting-Yes-Negotiating-Agreement-Without/dp/0143118757)
- [Never Split the Difference — Chris Voss (2016)](https://www.amazon.com/Never-Split-Difference-Negotiating-Depended/dp/0062407805)
- [SBI Feedback Model — Center for Creative Leadership](https://www.ccl.org/articles/leading-effectively-articles/closing-the-gap-between-intent-and-impact/)

[[pm-knowledge-base]]
