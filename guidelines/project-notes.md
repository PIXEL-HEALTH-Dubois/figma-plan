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

---

---

# Technical Deep Dives

The sections below are meant to give each team member enough context to get started without drowning in documentation. These are not exhaustive — they point you at what matters and flag what will trip you up.

---

## Deep Dive: HealthKit (iOS)

### What it is
HealthKit is Apple's health data platform. It acts as a central, on-device repository for health and fitness data from any source — iPhone sensors, Apple Watch, third-party apps. Your app doesn't own the data; it requests read/write access to Apple's shared store.

### How the permission model works
Apple takes health privacy seriously. The flow is:
1. Your app declares which data types it needs in `Info.plist`
2. At runtime you call `HKHealthStore.requestAuthorization(toShare:read:)` — this shows the system permission dialog
3. Apple **never tells your app if the user denied a specific type** (only that the request completed). This is intentional — apps can't fingerprint which health data a user has or doesn't have.

This last point is subtle and trips people up. The way to handle it: after authorization completes, try to query data. If you get no results and the user said they'd authorize, surface a "check your permissions in Settings" message.

### Key classes to know
| Class | What it does |
|---|---|
| `HKHealthStore` | The entry point. One instance per app. Use it to request auth and execute queries. |
| `HKQuantityType` | Represents a measurable data type, e.g. heart rate, steps. |
| `HKQuantitySample` | A single reading: a quantity + a time range + metadata. |
| `HKAnchoredObjectQuery` | The right query type for live/streaming data. Returns new samples since the last query using an "anchor" (like a bookmark). |
| `HKObserverQuery` | Tells your app when new data arrives. Pair with `HKAnchoredObjectQuery` for live updates. |

### How to read live heart rate
```swift
let heartRateType = HKQuantityType.quantityType(forIdentifier: .heartRate)!
let query = HKAnchoredObjectQuery(
    type: heartRateType,
    predicate: nil,
    anchor: nil,
    limit: HKObjectQueryNoLimit
) { query, samples, deletedObjects, anchor, error in
    // samples contains new HKQuantitySample objects
    // Extract BPM: sample.quantity.doubleValue(for: HKUnit(from: "count/min"))
}
store.execute(query)
```

### Apple Watch specifics
- Apple Watch continuously measures heart rate during workouts and periodically at rest
- The data flows from Watch → iPhone via HealthKit sync automatically when the Watch is paired
- You read it from the iPhone's HealthKit store — you don't talk to the Watch directly in MVP
- For truly continuous readings (not just periodic), the user needs an active workout session on the Watch

### Key gotcha summary
- HealthKit is **disabled on the iOS Simulator** — always test on a real device
- You must have the HealthKit entitlement enabled in Xcode (Signing & Capabilities) AND the Info.plist keys — both are required
- Background delivery (`enableBackgroundDelivery`) requires a real device and the app to have background modes enabled

---

## Deep Dive: Health Connect (Android)

### What it is
Health Connect is Google's equivalent of HealthKit — a centralized health data store on Android that aggregates data from Galaxy Watch, Wear OS devices, Fitbit, and other apps. It was introduced in 2022 and became built into Android 14+.

### How it differs from HealthKit
| | HealthKit (iOS) | Health Connect (Android) |
|---|---|---|
| Data model | Streaming / real-time observer queries | Record-based read/write (polling) |
| Live data | `HKObserverQuery` triggers on new data | Must poll — no push callbacks |
| Watch connection | Watch syncs to iPhone automatically | Galaxy Watch syncs via Samsung Health app |
| Minimum OS | iOS 8 | Android 9 (API 28), but Health Connect app may need manual install on Android 9–13 |

### How the permission model works
Similar to HealthKit: you declare permissions, request them at runtime, user approves in a system dialog. Unlike HealthKit, Health Connect **does** tell you which permissions were granted.

```kotlin
val permissions = setOf(
    HealthPermission.getReadPermission(HeartRateRecord::class)
)
val requestPermissions = registerForActivityResult(
    PermissionController.createRequestPermissionResultContract()
) { granted ->
    if (granted.containsAll(permissions)) {
        // Permission granted — start reading data
    }
}
```

### Reading heart rate records
Health Connect stores discrete records, not a stream. To get the latest heart rate:
```kotlin
val response = healthConnectClient.readRecords(
    ReadRecordsRequest(
        HeartRateRecord::class,
        timeRangeFilter = TimeRangeFilter.between(
            Instant.now().minus(Duration.ofMinutes(5)),
            Instant.now()
        )
    )
)
// response.records is a list of HeartRateRecord
```

### Galaxy Watch specifics
- Galaxy Watch syncs heart rate data to the Samsung Health app on the paired Android phone
- Samsung Health writes this data into Health Connect
- The chain is: Galaxy Watch → Samsung Health app → Health Connect → your app
- If Samsung Health isn't installed or isn't syncing, your app gets no data

### Key gotcha summary
- Health Connect is a **separate app** on Android 9–13 — users may need to install it from the Play Store
- Real-time streaming doesn't exist in Health Connect — polling every 5–10s is the MVP approach
- Galaxy Watch data availability depends entirely on Samsung Health syncing — test this chain early

---

## Deep Dive: Apache Kafka

### What it is
Kafka is a distributed event streaming platform. The mental model: it's a persistent, ordered log of messages that producers write to and consumers read from. Unlike a traditional message queue (which deletes messages after they're consumed), Kafka retains messages for a configurable period — any consumer can replay from any point.

For PIXEL HEALTH, Kafka sits between the mobile app and the backend services. The phone doesn't write directly to a database — it sends events to Kafka, and backend consumers process them independently.

### Core concepts

**Topic** — A named stream of messages. Think of it like a table in a database, or a channel in Slack. We have one: `user-heart-rate`. All BPM readings from all users and all devices flow into this topic.

**Partition** — Topics are split into partitions for parallelism. For MVP on Aiven free tier, one partition is fine.

**Producer** — Any client that writes messages to a topic. In our case: the FastAPI backend endpoint that receives data from the mobile app.

**Consumer** — Any client that reads messages from a topic. In M2 we'll have three: alerting, analytics, and storage. For MVP we're just validating the producer side.

**Consumer Group** — A group of consumers sharing the work of reading a topic. Each message goes to one consumer in the group. In M2, the alerting consumer and the storage consumer will be in separate groups so they each see every message.

**Offset** — A sequential ID for each message in a partition. Consumers track their offset to know where they left off. Kafka remembers this — if your consumer crashes and restarts, it picks up where it left off.

### Why Kafka instead of posting directly to the database?

This is a fair question for MVP scale. The short answer: it decouples producers from consumers.

Without Kafka:
- Mobile app → HTTP → Backend → writes to DB
- If the DB is slow, the mobile app waits
- If you want to add analytics later, you modify the write path

With Kafka:
- Mobile app → HTTP → Backend → publishes to Kafka (fast, fire-and-forget)
- Storage consumer → reads from Kafka → writes to DB (independently)
- Analytics consumer → reads from Kafka → does its own thing
- Adding a new consumer doesn't touch existing code

For a team learning distributed systems, internalizing this decoupling is the real value of including Kafka in MVP.

### The data flow for PIXEL HEALTH
```
iPhone/Galaxy Watch
       ↓  (HTTPS batch POST every 30s)
FastAPI backend
       ↓  (Kafka producer)
user-heart-rate topic
       ↓                    ↓                   ↓
[Storage Consumer]  [Alerting Consumer]  [Analytics Consumer]
  → PostgreSQL         → Push notification    → 5-min averages
                         if BPM > 100
```

### Setting up on Aiven
Aiven manages the Kafka cluster for you — you don't run Kafka locally. What you get from Aiven:
- A hostname + port to connect to
- A CA certificate for TLS
- A username and password

Everything goes in your `.env`. The `kafka-python` connection:
```python
from kafka import KafkaProducer
import json, os

producer = KafkaProducer(
    bootstrap_servers=f"{os.getenv('KAFKA_HOST')}:{os.getenv('KAFKA_PORT')}",
    security_protocol="SASL_SSL",
    sasl_mechanism="PLAIN",
    sasl_plain_username=os.getenv("KAFKA_USER"),
    sasl_plain_password=os.getenv("KAFKA_PASSWORD"),
    ssl_cafile="ca.pem",
    value_serializer=lambda v: json.dumps(v).encode("utf-8")
)
```

### Key gotcha summary
- Aiven free tier clusters **expire after 30 days of inactivity** — keep a note, or set a calendar reminder to ping the cluster
- Never commit `ca.pem` or `.env` to git — add both to `.gitignore` immediately
- Kafka is overkill for a 4-person side project at MVP scale, but the learning value is the point. Embrace the complexity as the curriculum.

---

## Deep Dive: FastAPI (Python Backend)

### Why FastAPI over Flask
Flask is fine, but FastAPI is the better choice here for three reasons:
1. **Auto-generated docs**: go to `/docs` after starting the server and you get a live Swagger UI. Perfect for a team where the mobile devs need to understand the API.
2. **Pydantic validation built in**: define your request/response shapes as Python classes, get automatic validation and error messages for free.
3. **Async-native**: better performance for I/O-heavy work (like Kafka publishing), and the patterns transfer well to production code.

### Project structure for the backend
```
backend/
├── main.py           # FastAPI app + lifespan (Kafka setup)
├── models.py         # Pydantic request/response models
├── kafka_producer.py # Kafka connection + publish helper
├── database.py       # PostgreSQL + MongoDB connections
├── routers/
│   └── heart_rate.py # POST /api/heart-rate/batch
├── .env              # Credentials (never commit)
├── .env.example      # Template to share with team (commit this)
└── requirements.txt
```

### The batch endpoint in full
```python
# models.py
from pydantic import BaseModel
from datetime import datetime

class HeartRateReading(BaseModel):
    user_id: str
    bpm: int
    timestamp: datetime
    source: str  # "apple_watch" | "galaxy_watch"

class HeartRateBatch(BaseModel):
    batch: list[HeartRateReading]

# routers/heart_rate.py
from fastapi import APIRouter
from models import HeartRateBatch
from kafka_producer import publish

router = APIRouter()

@router.post("/api/heart-rate/batch")
async def ingest_heart_rate(payload: HeartRateBatch):
    for reading in payload.batch:
        await publish("user-heart-rate", reading.model_dump())
    return {"accepted": len(payload.batch)}
```

### Running locally
```bash
pip install fastapi uvicorn kafka-python python-dotenv psycopg2-binary pymongo
uvicorn main:app --reload
# API docs: http://localhost:8000/docs
```

### Key gotcha summary
- Initialize the Kafka producer once at startup using FastAPI's `lifespan` context manager — not inside the route handler. Creating a new producer connection on every request is slow and will exhaust connections.
- Use `.env.example` (committed) + `.env` (not committed) pattern from day one. Debugging "why does it work on my machine" across a 4-person team is painful.

---

## Deep Dive: Dual Database Architecture

### Why two databases?

This is the question worth internalizing before writing a line of schema code.

**PostgreSQL (SQL)** is the right choice for data that has a consistent, known shape and benefits from relational integrity: users, workouts, daily metrics. You know exactly what columns a "workout" has. You want to be able to join users to their workouts. You want foreign key constraints to prevent orphaned records.

**MongoDB (NoSQL)** is the right choice for data that is flexible, schema-optional, or varies per user: profiles, settings, avatar metadata. Different users might have different settings keys. The avatar generation pipeline in M2 might attach arbitrary metadata. You don't want to run a migration every time the profile shape changes.

The dual-DB pattern is common in production apps. The rule of thumb: if it has a fixed schema and participates in joins → SQL. If it's flexible and document-like → NoSQL.

### The link between them
The `user_id` UUID is the single source of truth. It's created in PostgreSQL and then used as the primary identifier in MongoDB too. There is no enforced foreign key between the two systems (different DBs can't do that) — the application layer is responsible for keeping them in sync.

```
PostgreSQL: users.user_id = "550e8400-e29b-41d4-a716-446655440000"
MongoDB:    user_profiles.user_id = "550e8400-e29b-41d4-a716-446655440000"
```

When you create a new user: insert into PostgreSQL first, get the UUID back, then create the MongoDB document with that same UUID. If the MongoDB insert fails, you have a dangling SQL row — in M2 we'll handle this with a transaction wrapper, but for MVP just be aware of the pattern.

### Hosting recommendations (free tier)
| Database | Free Tier Option | Notes |
|---|---|---|
| PostgreSQL | [Supabase](https://supabase.com) | Includes a web UI and REST API out of the box. 500MB free. |
| MongoDB | [MongoDB Atlas](https://www.mongodb.com/atlas) | 512MB free. No credit card required. |

Both are managed services — you don't run anything locally in production. For local dev, you can run both via Docker if you want, but the free cloud tiers are easier for a team.

### Key gotcha summary
- Use UUIDs (not auto-increment integers) for `user_id` — they're globally unique across both systems and don't leak record counts
- Never store plain passwords. Use `bcrypt` to hash before inserting. `pip install bcrypt`.
- Supabase gives you a PostgreSQL connection string that works with standard `psycopg2` — no special client needed

---

## Decisions Log

Track decisions here as they get made so there's a single source of truth.

| Decision | Choice | Rationale | Date |
|---|---|---|---|
| Backend framework | FastAPI | Async-native, auto-docs via Swagger, Pydantic validation | — |
| SQL database | PostgreSQL | Industry standard, better JSON support than MySQL, free on Supabase | — |
| NoSQL database | MongoDB Atlas | Flexible schema for profiles/settings, generous free tier | — |
| Backend hosting | TBD (Railway / Render) | — | — |
| Kafka hosting | Aiven free tier | Managed, no infra to maintain | — |
| Story point unit | 30 minutes = 1 SP | Side project constraint, keeps sessions achievable | 2026-03-29 |
| Branching strategy | TBD | — | — |
| Repo structure | TBD (monorepo vs separate repos) | — | — |

---

*Last updated: 2026-03-29*
