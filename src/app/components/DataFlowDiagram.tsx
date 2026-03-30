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
  CheckCircle2
} from 'lucide-react';

export function DataFlowDiagram() {
  return (
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
                  <span>Collect heart rate, HRV, sleep, workouts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Send events to backend</span>
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
                  <span>Collect heart rate, HRV, sleep, workouts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Send events to backend</span>
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
                <CardTitle className="text-lg">Kafka Broker</CardTitle>
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
  );
}
