# Bayesian A/B Testing

## What it is

Bayesian A/B testing is a statistical framework for comparing two variants (or more) that expresses results as probability distributions rather than binary pass/fail p-values. Instead of asking "is this result statistically significant?" it asks "given the data we have, what is the probability that variant B is better than variant A, and by how much?" The output is intuitive for business decisions: "B has a 94% chance of beating A, with an expected lift of 8.3% and an expected loss of 0.4% if we ship it."

## When to use

**Bayesian wins when:**
- Sample sizes are small and you cannot wait for frequentist significance (e.g., low-traffic features)
- You want to monitor results as they come in without being penalized for early stopping
- Stakeholders need to make a decision before the experiment is "done"
- You have meaningful prior knowledge (e.g., previous similar tests)
- The cost of shipping a loser is low relative to the cost of delaying a winner

**Frequentist wins when:**
- You need defensible results for legal, regulatory, or external audit (p-values remain the scientific standard)
- Your organization has strict pre-registered experimental protocols
- You want zero prior influence on results (fully agnostic)
- A/A test calibration is critical (Bayesian metrics can behave counterintuitively in A/A tests)

**Use both when:** Your testing platform supports it — run Bayesian for speed of decision-making, report frequentist for external defensibility.

## Core components / steps

### 1. Prior beliefs

Before collecting any data, you encode your starting assumption about conversion rates into a prior distribution. Common choices:
- **Uninformative (flat) prior** — "I have no idea" — rarely correct; even historical baselines are informative
- **Weakly informative prior** — based on historical conversion data for similar experiments
- **Strongly informative prior** — for repeated tests in a stable product area

For conversion rate testing, the Beta distribution is the standard prior (it is bounded between 0 and 1, matching probability space).

### 2. Posterior probability

As experiment data arrives, the prior is updated into a posterior distribution using Bayes' theorem:

```
Posterior = Prior × Likelihood(data)
```

The posterior answers: "Given everything I knew before AND the data I've collected, what is my current belief about the true conversion rate of each variant?"

Unlike frequentist testing, you can meaningfully update the posterior at any point during the experiment — this is what makes continuous monitoring legitimate in Bayesian frameworks.

### 3. Credible intervals vs confidence intervals

**Bayesian credible interval:** "There is a 95% probability that the true conversion rate falls between 4.2% and 5.8%." This is the intuitive interpretation most people incorrectly assign to frequentist confidence intervals.

**Frequentist confidence interval:** "If we ran this experiment 100 times, 95 of the resulting intervals would contain the true conversion rate." Not the same statement — the 95% applies to the procedure, not this specific interval.

For business communication, credible intervals are almost always clearer.

### 4. Expected loss framework

Expected loss is the best decision criterion for Bayesian testing. It answers: "If I ship variant B and it is actually worse, how much conversion rate do I expect to lose on average?"

Example: Variant B shows 92% probability of beating A. Expected loss if you ship B: 0.3 percentage points. At your traffic volume, that is $800 in annual revenue downside. Expected gain: 6.2 percentage points, worth $22,000 annually. Ship B.

Most Bayesian testing tools compute expected loss automatically. Decision threshold: typically "ship when expected loss < 1% relative" but calibrate to your stakes.

### 5. Making the decision

Frequentist: wait for p < 0.05, then stop.
Bayesian: stop when:
- Probability to beat baseline exceeds your threshold (typically 95%), AND
- Expected loss is below your risk tolerance, OR
- You have reached maximum sample size without reaching threshold

### Tools

- **VWO** — Bayesian mode with probability-to-beat and expected revenue impact
- **AB Tasty** — Bayesian statistical engine, "chance to beat" metric
- **Dynamic Yield** — Bayesian testing for personalization and recommendations
- **Statsig** — supports both frequentist and Bayesian, developer-friendly
- **Eppo** — frequentist-primary but good comparison framework explanations
- **Convert.com** — Bayesian statistics primer, accessible for non-statisticians

## Key questions to ask

- What is our expected loss threshold, and how did we choose it?
- Do we have meaningful prior data from similar experiments?
- What is the business cost of shipping a loser vs. the cost of delaying a winner?
- Are stakeholders prepared to make decisions at 90% probability, or do they demand 99%?
- Is our testing platform calibrated correctly? (Run A/A tests to verify)

## Common mistakes

**Assuming Bayesian eliminates peeking problems.** Bayesian methods reduce the penalty for early stopping — they do not eliminate it. Peeking at results too early and stopping at a convenient moment still inflates false positive rates. The advantage is that Bayesian false positive inflation is smaller and more controllable.

**Setting thresholds too low.** "Probability to beat = 70%" sounds good but means 30% of decisions ship losers. For high-traffic, high-stakes tests, use 95%+ threshold.

**Ignoring practical significance.** A 0.1% conversion lift may reach 99% probability of being positive, but it is not worth shipping if the implementation cost is high or it introduces UI complexity.

**Using strong priors without documentation.** Prior assumptions should be recorded and justified. Undocumented priors make experiments non-reproducible.

**Confusing "probability to be best" with "expected value."** In multi-variant tests, the variant with highest probability to be best is not always the highest expected value winner. Use expected loss, not probability ranking, for multi-armed decisions.

## Quick reference

| Concept | Frequentist | Bayesian |
|---------|------------|---------|
| Output | p-value, confidence interval | Probability to beat, credible interval |
| Decision trigger | p < 0.05 | Expected loss < threshold |
| Early stopping | Penalized (inflates false positives) | Handled better, still requires care |
| Business communication | "Statistically significant" | "94% chance B is better" |
| Prior knowledge | Not incorporated | Explicitly incorporated |
| Best for | Regulatory defensibility, large samples | Speed, small samples, business decisions |

## Sources

- [Convert: Frequentist vs Bayesian A/B Testing](https://www.convert.com/blog/a-b-testing/frequentist-vs-bayesian-ab-testing/)
- [Dynamic Yield: Bayesian Testing Lesson](https://www.dynamicyield.com/lesson/bayesian-testing/)
- [Statsig: Bayesian A/B Testing Beyond Frequentist](https://www.statsig.com/perspectives/bayesian-ab-testing-beyond)
- [AB Tasty: Frequentist vs Bayesian AB Testing](https://www.abtasty.com/blog/bayesian-ab-testing/)
- [Eppo: Comparing Frequentist vs Bayesian Approaches](https://www.geteppo.com/blog/comparing-frequentist-vs-bayesian-approaches)
- [Variance Explained: Is Bayesian A/B Testing Immune to Peeking?](http://varianceexplained.org/r/bayesian-ab-testing/)

[[pm-knowledge-base]]
