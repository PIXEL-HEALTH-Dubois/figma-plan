import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Smartphone, 
  Server, 
  Database, 
  Bell, 
  BarChart3, 
  Archive,
  ArrowDown,
  CheckCircle2,
  Lock,
  User,
  Shield,
  Waves,
  PersonStanding,
  Bike,
  Dumbbell,
  LockIcon
} from 'lucide-react';
import { MobileAppMockup } from './MobileAppMockup';
import pixelAvatar from '@/assets/4b11b2904922ad1b8e6814eb7db5db3e34509ced.png';

export function Milestone2Section() {
  const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      {/* Data Flow */}
      <div>
        <h3 className="text-xl font-bold mb-4">Data Flow</h3>
        <div className="space-y-6">
          {/* Mobile Producers */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-blue-600">1. Mobile Producers</Badge>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {/* iOS Card */}
              <Card className="border-blue-300 bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">iOS App (Swift)</CardTitle>
                      <p className="text-xs text-slate-600">Apple Watch / iPhone</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>HealthKit API integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Collect heart rate, HRV, sleep, workouts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>User authentication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Send batched events to backend</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Android Card */}
              <Card className="border-green-300 bg-gradient-to-br from-green-50 to-white">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Android App</CardTitle>
                      <p className="text-xs text-slate-600">Galaxy Watch / Phone</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Health Connect API</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Collect heart rate, HRV, sleep, workouts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>User authentication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Send batched events to backend</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowDown className="w-8 h-8 text-slate-400" />
          </div>

          {/* Backend & Kafka */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-purple-600">2. Backend & Message Broker</Badge>
            </div>
            <Card className="border-purple-300 bg-gradient-to-br from-purple-50 to-white">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Server className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Kafka Broker (Aiven Free Tier)</CardTitle>
                    <p className="text-xs text-slate-600">Event Streaming Platform</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Topic: <code className="bg-slate-200 px-1 rounded text-xs">user-heart-rate</code></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Message queueing and event streaming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Distribute events to multiple consumers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Scalable, fault-tolerant architecture</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowDown className="w-8 h-8 text-slate-400" />
          </div>

          {/* Consumers */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-orange-600">3. Kafka Consumers</Badge>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {/* Alerting Consumer */}
              <Card className="border-red-300 bg-gradient-to-br from-red-50 to-white">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-red-500 w-10 h-10 rounded-lg flex items-center justify-center">
                      <Bell className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-base">Alerting</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5 text-xs">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Monitor HR thresholds</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Trigger notifications</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Alert if HR {">"} 100 BPM</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Python/Java service</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Analytics Consumer */}
              <Card className="border-orange-300 bg-gradient-to-br from-orange-50 to-white">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-500 w-10 h-10 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-base">Analytics</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5 text-xs">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Kafka Streams processing</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>5-min averages</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Real-time windowing</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Statistical analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Storage Consumer */}
              <Card className="border-indigo-300 bg-gradient-to-br from-indigo-50 to-white">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-indigo-500 w-10 h-10 rounded-lg flex items-center justify-center">
                      <Archive className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-base">Storage</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5 text-xs">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Write to databases</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Long-term persistence</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Historical queries</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Data warehousing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowDown className="w-8 h-8 text-slate-400" />
          </div>

          {/* Databases */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-teal-600">4. Data Storage</Badge>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {/* SQL Database */}
              <Card className="border-teal-300 bg-gradient-to-br from-teal-50 to-white">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-teal-500 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">SQL Database</CardTitle>
                      <p className="text-xs text-slate-600">PostgreSQL / MySQL</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Users table:</strong> user_id, email, created_at</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Workouts:</strong> activity type, duration, date</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Daily metrics:</strong> aggregated health data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Time-series optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* NoSQL Database */}
              <Card className="border-violet-300 bg-gradient-to-br from-violet-50 to-white">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-violet-500 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">NoSQL / Datastore</CardTitle>
                      <p className="text-xs text-slate-600">Firestore / MongoDB</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>User profiles:</strong> pixelated avatar, name, bio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Settings:</strong> preferences, notifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>1:1 relationship with SQL users table</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Flexible schema for profile data</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Database Relationship Diagram */}
          <Card className="bg-gradient-to-r from-slate-50 to-slate-100 border-slate-300">
            <CardHeader>
              <CardTitle className="text-base">Database Architecture (1:1 Relationship)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <div className="bg-teal-100 border-2 border-teal-500 rounded-lg p-4 min-w-[200px]">
                    <div className="font-bold text-sm mb-2">SQL: users</div>
                    <div className="text-xs text-left space-y-1 text-slate-700">
                      <div>• user_id (PK)</div>
                      <div>• email</div>
                      <div>• password_hash</div>
                      <div>• created_at</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-2xl font-bold text-slate-400">⟷</div>
                
                <div className="text-center">
                  <div className="bg-violet-100 border-2 border-violet-500 rounded-lg p-4 min-w-[200px]">
                    <div className="font-bold text-sm mb-2">NoSQL: user_profiles</div>
                    <div className="text-xs text-left space-y-1 text-slate-700">
                      <div>• user_id (FK)</div>
                      <div>• avatar_url</div>
                      <div>• display_name</div>
                      <div>• preferences {}</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-center text-slate-600 mt-4">
                SQL stores structured auth/workout data • NoSQL stores flexible profile data
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* App Roadmap */}
      <div>
        <h3 className="text-xl font-bold mb-4">App Roadmap</h3>
        <div className="space-y-6">
          {/* Auth Flow */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-blue-600" />
              <h4 className="font-medium">Authentication Flow</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center space-y-2">
                <div className="text-lg font-bold">1</div>
                <div className="text-sm font-medium">Sign Up / Login</div>
                <div className="mx-auto max-w-[240px]">
                  <MobileAppMockup platform="ios" type="login" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-lg font-bold">2</div>
                <div className="text-sm font-medium">Upload Photo</div>
                <div className="mx-auto max-w-[240px]">
                  <MobileAppMockup platform="ios" type="photo-upload" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-lg font-bold">3</div>
                <div className="text-sm font-medium">AI Avatar Generation</div>
                <div className="mx-auto max-w-[240px]">
                  <div className="bg-gradient-to-br from-purple-100 to-white border-2 border-purple-300 rounded-2xl aspect-[9/16] p-6 flex flex-col items-center justify-center">
                    <div className="text-sm mb-4">Generating your pixel avatar...</div>
                    <img 
                      src={pixelAvatar} 
                      alt="Pixelated avatar" 
                      className="w-32 h-32 rounded-lg"
                      style={{ imageRendering: 'pixelated' }}
                    />
                    <div className="text-xs text-slate-600 mt-4 text-center">
                      Photo sent to ChatGPT API to generate pixelated style
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Character Stats View */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-purple-600" />
              <h4 className="font-medium">Character Stats (Video Game Style)</h4>
            </div>
            <div className="mx-auto max-w-[360px]">
              <CharacterStatsView 
                selectedWorkout={selectedWorkout}
                onWorkoutSelect={setSelectedWorkout}
              />
            </div>
          </div>
        </div>
      </div>

      {/* User Flow */}
      <div>
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-blue-600" />
          User Flow
        </h3>
        <Card>
          <CardContent className="pt-6 space-y-6">
            <UserFlowStep
              number={1}
              title="User Opens App"
              description="User launches the app and sees the login/signup screen"
              platform="iOS/Android"
            />
            <UserFlowStep
              number={2}
              title="Authentication"
              description="User creates account or logs in with existing credentials"
              platform="Backend: Auth Service"
            />
            <UserFlowStep
              number={3}
              title="Upload Photo"
              description="User uploads a photo to generate their pixelated avatar"
              platform="iOS/Android"
            />
            <UserFlowStep
              number={4}
              title="AI Avatar Generation"
              description="Photo is sent to ChatGPT API to generate pixel art style avatar"
              platform="Backend: ChatGPT API"
            />
            <UserFlowStep
              number={5}
              title="Request Health Permissions"
              description="App requests access to health data (HR, HRV, sleep, workouts)"
              platform="iOS: HealthKit | Android: Health Connect"
            />
            <UserFlowStep
              number={6}
              title="Display Character Dashboard"
              description="User sees their pixelated avatar with RPG-style health stats"
              platform="iOS/Android"
            />
            <UserFlowStep
              number={7}
              title="Continuous Data Collection"
              description="App collects health metrics and sends batched data to backend"
              platform="Backend: Kafka"
            />
          </CardContent>
        </Card>
      </div>

      {/* Tech & Backend */}
      <div>
        <h3 className="text-xl font-bold mb-4">Tech & Backend</h3>
        <div className="space-y-6">
          {/* Tech Stack */}
          <Card>
            <CardHeader>
              <CardTitle>Technology Stack</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <TechStackItem
                category="Mobile"
                technologies={[
                  "Swift (iOS)",
                  "Kotlin/Java (Android)",
                  "HealthKit",
                  "Health Connect"
                ]}
              />
              <TechStackItem
                category="Backend"
                technologies={[
                  "Python (FastAPI/Flask)",
                  "Aiven for Apache Kafka (free tier)",
                  "Kafka Streams",
                  "REST APIs"
                ]}
              />
              <TechStackItem
                category="Database"
                technologies={[
                  "PostgreSQL / MySQL (SQL)",
                  "Firestore / MongoDB (NoSQL)",
                  "Time-series optimization"
                ]}
              />
              <TechStackItem
                category="AI & Services"
                technologies={[
                  "ChatGPT API (avatar generation)",
                  "Push Notifications",
                  "Authentication service"
                ]}
              />
            </CardContent>
          </Card>

          {/* Backend Endpoints */}
          <Card className="border-purple-300 bg-gradient-to-br from-purple-50 to-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="w-6 h-6 text-purple-600" />
                Backend Endpoints
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Heart Rate Batch Endpoint */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-blue-600">POST</Badge>
                  <code className="text-sm font-mono">/api/heart-rate/batch</code>
                </div>
                <p className="text-sm text-slate-700 mb-3">
                  Receives batched heart rate data from mobile clients and publishes to Kafka
                </p>
                
                <div className="bg-slate-900 text-slate-50 rounded-lg p-4 text-xs font-mono overflow-x-auto">
                  <div className="text-green-400 mb-2">// Request Payload (Batched)</div>
                  <pre>{`{
  "batch": [
    {
      "user_id": "abc123",
      "source": "healthkit",
      "platform": "ios",
      "device_id": "device-789",
      "timestamp": "2026-03-29T17:21:11Z",
      "heart_rate_bpm": 72
    }
  ]
}`}</pre>
                </div>
              </div>

              {/* Auth Endpoints */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-green-600">POST</Badge>
                  <code className="text-sm font-mono">/api/auth/signup</code>
                  <Badge className="bg-green-600">POST</Badge>
                  <code className="text-sm font-mono">/api/auth/login</code>
                </div>
                <p className="text-sm text-slate-700">
                  User authentication endpoints for signup and login
                </p>
              </div>

              {/* Avatar Generation Endpoint */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-purple-600">POST</Badge>
                  <code className="text-sm font-mono">/api/avatar/generate</code>
                </div>
                <p className="text-sm text-slate-700 mb-3">
                  Sends user photo to ChatGPT API to generate pixelated avatar style
                </p>
              </div>

              {/* Metrics Endpoints */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-orange-600">GET</Badge>
                  <code className="text-sm font-mono">/api/user/{'{user_id}'}/stats</code>
                </div>
                <p className="text-sm text-slate-700">
                  Retrieve aggregated health stats (avg HR, HRV, sleep time) for dashboard
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

interface CharacterStatsViewProps {
  selectedWorkout: string | null;
  onWorkoutSelect: (workout: string | null) => void;
}

function CharacterStatsView({ selectedWorkout, onWorkoutSelect }: CharacterStatsViewProps) {
  const workouts = [
    { id: 'swimming', icon: Waves, name: 'Swimming', count: 3, unlocked: true, color: 'bg-blue-500' },
    { id: 'running', icon: PersonStanding, name: 'Running', count: 1, unlocked: true, color: 'bg-green-500' },
    { id: 'cycling', icon: Bike, name: 'Cycling', count: 0, unlocked: false, color: 'bg-yellow-500' },
    { id: 'strength', icon: Dumbbell, name: 'Strength', count: 0, unlocked: false, color: 'bg-red-500' },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 rounded-2xl aspect-[9/16] p-4 text-white overflow-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-3">
        <div className="text-xs text-slate-400">PLAYER STATS</div>
        <div className="text-xs text-green-400">● ONLINE</div>
      </div>

      {/* Avatar */}
      <div className="flex items-center gap-4 mb-6 bg-slate-800/50 rounded-lg p-3">
        <img 
          src={pixelAvatar} 
          alt="Character" 
          className="w-20 h-20 rounded-lg border-2 border-yellow-500"
          style={{ imageRendering: 'pixelated' }}
        />
        <div className="flex-1">
          <div className="font-bold text-lg mb-1">Player_2024</div>
          <div className="text-xs text-slate-400">Level 5 • Health Warrior</div>
        </div>
      </div>

      {/* Character Stats */}
      <div className="space-y-3 mb-6">
        <div className="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-2">Base Stats</div>
        
        <StatBar 
          label="Average HR" 
          value="72 BPM" 
          percentage={72}
          color="bg-red-500"
        />
        <StatBar 
          label="HRV (SDNN)" 
          value="42 ms" 
          percentage={60}
          color="bg-blue-500"
        />
        <StatBar 
          label="Sleep Time" 
          value="7h 23m" 
          percentage={92}
          color="bg-purple-500"
        />
      </div>

      {/* Workouts Section */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs font-bold text-yellow-400 uppercase tracking-wider">
            Activities (Last 30 Days)
          </div>
          {selectedWorkout && (
            <button 
              onClick={() => onWorkoutSelect(null)}
              className="text-xs text-blue-400 hover:underline"
            >
              Close
            </button>
          )}
        </div>

        {!selectedWorkout ? (
          <div className="grid grid-cols-2 gap-2">
            {workouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
                onClick={() => workout.unlocked && onWorkoutSelect(workout.id)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-slate-800/50 rounded-lg p-3">
            <div className="text-sm font-bold mb-2">
              {workouts.find(w => w.id === selectedWorkout)?.name} Details
            </div>
            <div className="text-xs text-slate-400 space-y-1">
              <div>• Last 7 days: 2 sessions</div>
              <div>• Avg duration: 45 min</div>
              <div>• Total this month: {workouts.find(w => w.id === selectedWorkout)?.count}x</div>
            </div>
          </div>
        )}
      </div>

      {/* Achievement Badge */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg p-3 text-center border border-yellow-500">
        <div className="text-xs font-bold mb-1">🏆 Achievement Unlocked</div>
        <div className="text-xs">First Week Complete</div>
      </div>
    </div>
  );
}

interface StatBarProps {
  label: string;
  value: string;
  percentage: number;
  color: string;
}

function StatBar({ label, value, percentage, color }: StatBarProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <div className="text-xs text-slate-300">{label}</div>
        <div className="text-xs font-bold text-white">{value}</div>
      </div>
      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

interface WorkoutCardProps {
  workout: {
    id: string;
    icon: React.ElementType;
    name: string;
    count: number;
    unlocked: boolean;
    color: string;
  };
  onClick: () => void;
}

function WorkoutCard({ workout, onClick }: WorkoutCardProps) {
  const Icon = workout.icon;

  return (
    <button
      onClick={onClick}
      disabled={!workout.unlocked}
      className={`
        relative rounded-lg p-3 text-left transition-all
        ${workout.unlocked 
          ? 'bg-slate-800 hover:bg-slate-700 cursor-pointer border border-slate-600' 
          : 'bg-slate-900/50 cursor-not-allowed border border-slate-800'
        }
      `}
    >
      {!workout.unlocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-lg">
          <LockIcon className="w-6 h-6 text-slate-500" />
        </div>
      )}
      <div className={`${workout.color} w-8 h-8 rounded flex items-center justify-center mb-2 ${!workout.unlocked && 'opacity-30'}`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div className={`text-xs font-medium ${!workout.unlocked && 'text-slate-600'}`}>
        {workout.name}
      </div>
      {workout.unlocked && (
        <div className="text-xs text-green-400 font-bold">{workout.count}x</div>
      )}
    </button>
  );
}

interface UserFlowStepProps {
  number: number;
  title: string;
  description: string;
  platform: string;
}

function UserFlowStep({ number, title, description, platform }: UserFlowStepProps) {
  return (
    <div className="flex gap-4">
      <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-medium">
        {number}
      </div>
      <div className="flex-1 pb-6 border-l-2 border-slate-200 pl-6 -ml-4">
        <h4 className="font-medium mb-1">{title}</h4>
        <p className="text-sm text-slate-600 mb-2">{description}</p>
        <Badge variant="outline" className="text-xs">{platform}</Badge>
      </div>
    </div>
  );
}

interface TechStackItemProps {
  category: string;
  technologies: string[];
}

function TechStackItem({ category, technologies }: TechStackItemProps) {
  return (
    <div>
      <div className="font-medium text-sm mb-2 text-slate-700">{category}</div>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, idx) => (
          <Badge key={idx} variant="secondary" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}
