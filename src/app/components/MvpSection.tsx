import React from 'react';
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
  Activity,
  Shield,
  Zap
} from 'lucide-react';
import { MobileAppMockup } from './MobileAppMockup';

export function MvpSection() {
  return (
    <div className="space-y-8">
      {/* Data Flow */}
      <div>
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Activity className="w-6 h-6 text-blue-600" />
          Data Flow
        </h3>
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
                      <span>Request user permissions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Collect heart rate data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Batch and send to backend endpoint</span>
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
                      <span>Request user permissions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Collect heart rate data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Batch and send to backend endpoint</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center gap-1">
            <ArrowDown className="w-8 h-8 text-slate-400" />
            <span className="text-xs text-slate-400">HTTPS batch POST every 30s</span>
          </div>

          {/* Step 2: FastAPI Backend */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-purple-600">2. FastAPI Backend (Python)</Badge>
            </div>
            <Card className="border-purple-300 bg-gradient-to-br from-purple-50 to-white">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Server className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">FastAPI Backend</CardTitle>
                    <p className="text-xs text-slate-600">Python — receives data, publishes to Kafka</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Endpoint: <code className="bg-slate-200 px-1 rounded text-xs">POST /api/heart-rate/batch</code></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Validates payload with Pydantic models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Publishes each reading to Kafka as a producer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Auto-generated API docs at <code className="bg-slate-200 px-1 rounded text-xs">/docs</code></span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center gap-1">
            <ArrowDown className="w-8 h-8 text-slate-400" />
            <span className="text-xs text-slate-400">Kafka producer publish</span>
          </div>

          {/* Step 3: Kafka */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-yellow-600">3. Kafka Message Broker (Aiven)</Badge>
            </div>
            <Card className="border-yellow-300 bg-gradient-to-br from-yellow-50 to-white">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Apache Kafka</CardTitle>
                    <p className="text-xs text-slate-600">Event streaming — Aiven free tier</p>
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
                    <span>Persists events in an ordered, replayable log</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Decouples producers from consumers — each side scales independently</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* M2 Divider */}
          <div className="flex items-center gap-3 pt-2">
            <div className="flex-1 border-t-2 border-dashed border-slate-300" />
            <Badge variant="outline" className="text-slate-400 border-slate-300 text-xs whitespace-nowrap">
              Below this line → Milestone 2
            </Badge>
            <div className="flex-1 border-t-2 border-dashed border-slate-300" />
          </div>

          {/* Step 4: Kafka Consumers — M2 */}
          <div className="opacity-50">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline" className="border-slate-400 text-slate-500">4. Kafka Consumers — M2</Badge>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="border-red-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-red-400 w-10 h-10 rounded-lg flex items-center justify-center">
                      <Bell className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Alerting</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-xs text-slate-500 space-y-1">
                  <p>Monitor BPM thresholds</p>
                  <p>Push notification if HR &gt; 100 BPM</p>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-400 w-10 h-10 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Analytics</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-xs text-slate-500 space-y-1">
                  <p>5-min rolling BPM averages</p>
                  <p>Real-time windowed stats</p>
                </CardContent>
              </Card>

              <Card className="border-indigo-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-indigo-400 w-10 h-10 rounded-lg flex items-center justify-center">
                      <Archive className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Storage</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-xs text-slate-500 space-y-1">
                  <p>Persist to PostgreSQL</p>
                  <p>Profile data to MongoDB Atlas</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* App Roadmap */}
      <div>
        <h3 className="text-xl font-bold mb-4">App Roadmap</h3>
        <div className="space-y-6">
          {/* Mobile App Mockups */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* iOS MVP */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-blue-600" />
                <h4 className="font-medium">iOS App (HealthKit)</h4>
              </div>
              <div className="mx-auto max-w-[300px]">
                <MobileAppMockup platform="ios" type="mvp" />
              </div>
            </div>

            {/* Android MVP */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-green-600" />
                <h4 className="font-medium">Android App (Health Connect)</h4>
              </div>
              <div className="mx-auto max-w-[300px]">
                <MobileAppMockup platform="android" type="mvp" />
              </div>
            </div>
          </div>

          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Permission notification on first launch</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Request HealthKit/Health Connect authorization</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Display live BPM with animated heart icon</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Simple, clean UI focused on single metric</span>
            </li>
          </ul>
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
              description="User launches the iOS or Android app for the first time"
              platform="iOS/Android"
            />
            <UserFlowStep
              number={2}
              title="Request Health Data Access"
              description="App displays permission dialog to access heart rate data"
              platform="iOS: HealthKit | Android: Health Connect"
            />
            <UserFlowStep
              number={3}
              title="User Grants Permission"
              description="User approves access to heart rate data"
              platform="iOS/Android"
            />
            <UserFlowStep
              number={4}
              title="Display Live Heart Rate"
              description="App shows real-time BPM with animated heart icon"
              platform="iOS/Android"
            />
            <UserFlowStep
              number={5}
              title="Batch & Send Data"
              description="App collects heart rate readings and sends batched data to backend"
              platform="Backend"
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
                  "Python",
                  "FastAPI",
                  "Apache Kafka (Aiven)",
                  "PostgreSQL (Supabase)",
                  "MongoDB Atlas"
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
            <CardContent>
              <div className="space-y-4">
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
    },
    {
      "user_id": "abc123",
      "source": "healthkit",
      "platform": "ios",
      "device_id": "device-789",
      "timestamp": "2026-03-29T17:22:11Z",
      "heart_rate_bpm": 74
    }
  ]
}`}</pre>
                  </div>

                  <div className="mt-3 space-y-2">
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Platform:</strong> Aiven for Apache Kafka (free tier)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Backend:</strong> Python (FastAPI)</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Kafka Topic:</strong> <code className="bg-slate-200 px-1 rounded text-xs">user-heart-rate</code></span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
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
