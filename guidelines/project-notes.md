# PIXEL HEALTH — Project Notes & Honest Assessment

> Written as open discussion / reference. Update this as the team learns and decisions get made.

---

## The Short Version

The high-level plan is solid — the architecture is real-world and the milestones make sense. But the current tickets are **not atomic enough for 30-min story points**, and there are a few **technical decisions left open** that will cause friction the moment someone sits down to start. Both are totally fixable. Notes below.

---

## 1. Are the current tickets atomic enough?

**Honest answer: No, not for complete beginners.**

Right now each ticket reads like a feature, not a task. For someone brand new to Swift, Kafka, or mobile development, "Request HealthKit authorization" is not 1 story point — it's probably 6–10 (3–5 hours) when you factor in:

- Setting up Xcode and understanding the project structure
- Learning what HealthKit even is and how Apple's permission model works
- Finding out that HealthKit **does not work on the iOS Simulator** (real device required — this alone will burn an hour the first time)
- Editing `Info.plist` to add the required usage description keys
- Writing the actual authorization call
- Handling the three states: granted, denied, not determined

Same issue across the board:

| Current Ticket | Realistic SP (30 min each) |
|---|---|
| iOS: HealthKit authorization | ~6–8 SP |
| Android: Health Connect authorization | ~6–8 SP |
| Live BPM display | ~4–6 SP |
| Stand up Kafka cluster | ~6–10 SP |
| POST /api/heart-rate/batch | ~4–6 SP |
| SQL + NoSQL schema | ~6–8 SP |

The goal should be tickets where someone can sit down for 30 minutes, make a clear and observable piece of progress, and stop without feeling lost. That means breaking each current ticket into 3–6 sub-tasks.

### What "atomic" looks like in practice

Take iOS HealthKit auth as an example. Instead of one ticket, it becomes:

1. **[Setup]** Create new Xcode project, add HealthKit capability in signing & capabilities (30 min)
2. **[Setup]** Add `NSHealthShareUsageDescription` to `Info.plist`, understand what it does (30 min)
3. **[Build]** Write `requestAuthorization()` call with Heart Rate type, test it compiles (30 min)
4. **[Build]** Display a different UI state based on permission granted vs. denied (30 min)
5. **[Test]** Run on real device (not simulator), verify permission dialog appears correctly (30 min)

Each of these is completable in a sitting, has a clear done state, and teaches something specific. The person working on it never hits a wall where they don't know what to do next.

**Recommendation:** Before building, add a `[Setup]` ticket for each domain area. Dev environment setup is invisible work that always gets underestimated.

---

## 2. Is the technical plan sufficient for this exercise?

**The skeleton is good. The detail layer is missing.**

The Figma plan does a great job of showing *what* gets built — the data flow, the architecture, the API shape. What it doesn't cover yet is *how to actually get started*, which is where beginners get stuck.

### Gaps worth filling

**Undecided tech choices that need to be locked in:**
- FastAPI vs Flask? (FastAPI is the better call — async-native, auto-docs, cleaner for an API-only service)
- PostgreSQL vs MySQL? (PostgreSQL, no real debate here)
- Firestore vs MongoDB? (Firestore if anyone has GCP credits; MongoDB Atlas free tier otherwise)
- Where does the backend run locally and in prod? (Railway, Render, or Fly.io are all free-tier friendly)

**Missing "getting started" foundation:**
- No ticket exists for setting up a shared GitHub repo for the actual app code (separate from this plan repo)
- No ticket for agreeing on a branching strategy (even just: `main` = stable, `dev` = working branch, feature branches off `dev`)
- No ticket for a shared `.env` template so Kafka credentials, DB connection strings etc. are managed consistently across the team

**The Kafka question:**
Worth being honest here — Kafka is genuinely complex, even with Aiven handling the infrastructure. The core concepts (topics, partitions, consumer groups, offsets) take a full session just to internalize. For MVP, the live BPM display on the phone doesn't actually *need* Kafka — it reads directly from HealthKit/Health Connect on-device. The Kafka piece is really about what happens after the data leaves the phone (backend ingestion, persistence, future analytics).

This is not a reason to remove Kafka from MVP — learning it is the whole point — but it's worth being explicit with the team that Kafka is a "learn deeply" goal, not just a box to check. Suggest adding a dedicated **"Kafka: Conceptual Foundations"** ticket that is just reading + a working local producer/consumer with dummy data, before the team tries to wire it into the app.

**HealthKit on simulator:**
Already mentioned above, but worth calling out explicitly in the iOS ticket: HealthKit requires a physical device. This is a known gotcha that will catch someone off guard if it's not documented upfront. Galaxy Watch similarly requires a real Android device — the emulator can simulate Health Connect but it's unreliable.

---

## 3. Open questions / things to decide as a team

- **Who owns what?** iOS, Android, Backend — are these one-person domains or is everyone touching everything? If it's a learning project, the latter is more valuable but slower.
- **Do you have physical devices?** At least one iPhone with an Apple Watch and one Android with a Galaxy Watch are needed to actually test MVP. If not, this changes the timeline significantly.
- **Is there a shared backend environment?** Or is everyone running the Python backend locally? Suggest deploying it early to a free-tier host (Railway/Render) so mobile clients have a stable URL to hit.
- **Story point tracking:** 30 min = 1 SP is a good unit. Suggest estimating each sub-ticket when you create it and tracking a weekly velocity. Side projects drift hard without some form of this.

---

## 4. Suggested next steps

1. **Break the 6 MVP tickets into sub-tasks** (see example above for HealthKit). Aim for each sub-task to be 1–2 SP.
2. **Add a `[Setup]` ticket for each team member's environment** — Xcode setup, Android Studio setup, Python/FastAPI setup, Kafka local testing.
3. **Lock in the undecided tech choices** (FastAPI, PostgreSQL, Firestore or MongoDB Atlas, Railway for hosting).
4. **Add a "Kafka Foundations" ticket** — just understanding producers, consumers, and topics with a hello-world example before touching the real app.
5. **Create the actual app code repo(s)** — this plan repo is great for the spec, but you'll want separate repos (or a monorepo) for the iOS app, Android app, and backend.

---

## 5. What's genuinely strong about the current plan

Don't let the gaps above overshadow what's already good:

- The **data flow architecture is real-world**. Kafka + dual DB + platform-specific health APIs is not a toy stack — building this will teach the team patterns used at production scale.
- The **gamification angle** (RPG dashboard, AI-generated avatars) gives the project personality and a reason to keep coming back to it. Side projects die when they feel like homework.
- The **6-milestone roadmap** is well-scoped. MVP is appropriately minimal. M2 adds depth without exploding scope. WHOOP in M3 is a natural extension.
- The **Figma plan itself** (this repo) is a great communication tool — having a live URL to share with collaborators beats a PDF or Notion doc.

---

*Last updated: 2026-03-29*
