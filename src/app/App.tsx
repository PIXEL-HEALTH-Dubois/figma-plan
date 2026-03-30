import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { 
  Activity, 
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { MvpSection } from './components/MvpSection';
import { Milestone2Section } from './components/Milestone2Section';

export default function App() {
  const [expandedMilestone, setExpandedMilestone] = useState<'mvp' | 'm2' | null>('mvp');

  const toggleMilestone = (milestone: 'mvp' | 'm2') => {
    setExpandedMilestone(expandedMilestone === milestone ? null : milestone);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Activity className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl">Health Metrics App - Development Plan</h1>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Real-time health data collection with Kafka streaming, gamified dashboard with pixelated avatars, and dual database architecture
          </p>
        </div>

        <div className="space-y-6">
          {/* MVP Section */}
          <Card className="border-2 border-blue-300 bg-gradient-to-r from-blue-50 to-white">
            <CardHeader 
              className="cursor-pointer hover:bg-blue-100/50 transition-colors rounded-t-lg"
              onClick={() => toggleMilestone('mvp')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                    MVP
                  </div>
                  <div>
                    <CardTitle className="text-2xl">MVP - Basic Permissions & Live HR</CardTitle>
                    <p className="text-sm text-slate-600 mt-1">
                      Get health data permissions and display real-time heart rate
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-600">In Progress</Badge>
                  {expandedMilestone === 'mvp' ? (
                    <ChevronDown className="w-6 h-6 text-slate-600" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-slate-600" />
                  )}
                </div>
              </div>
            </CardHeader>
            {expandedMilestone === 'mvp' && (
              <CardContent className="bg-white rounded-b-lg pt-6">
                <MvpSection />
              </CardContent>
            )}
          </Card>

          {/* Milestone 2 Section */}
          <Card className="border-2 border-purple-300 bg-gradient-to-r from-purple-50 to-white">
            <CardHeader 
              className="cursor-pointer hover:bg-purple-100/50 transition-colors rounded-t-lg"
              onClick={() => toggleMilestone('m2')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
                    M2
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Milestone 2 - User Profiles & Extended Metrics</CardTitle>
                    <p className="text-sm text-slate-600 mt-1">
                      Authentication, AI-generated pixelated avatars, and gamified health dashboard
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-slate-100">Planned</Badge>
                  {expandedMilestone === 'm2' ? (
                    <ChevronDown className="w-6 h-6 text-slate-600" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-slate-600" />
                  )}
                </div>
              </div>
            </CardHeader>
            {expandedMilestone === 'm2' && (
              <CardContent className="bg-white rounded-b-lg pt-6">
                <Milestone2Section />
              </CardContent>
            )}
          </Card>

          {/* Future Milestones Teaser */}
          <Card className="border-slate-300">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-400 text-white flex items-center justify-center font-bold text-sm">
                  M3+
                </div>
                Future Milestones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <FutureMilestone
                  number="M3"
                  title="WHOOP Integration"
                  description="Connect WHOOP API for advanced strain, recovery, and HRV analytics"
                />
                <FutureMilestone
                  number="M4"
                  title="Social & Challenges"
                  description="Friend connections, health challenges, and leaderboards"
                />
                <FutureMilestone
                  number="M5"
                  title="AI Insights"
                  description="Personalized recommendations, anomaly detection, and predictive health alerts"
                />
                <FutureMilestone
                  number="M6"
                  title="Export & Integrations"
                  description="Export to CSV/PDF, Strava integration, and Apple Health sync"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

interface FutureMilestoneProps {
  number: string;
  title: string;
  description: string;
}

function FutureMilestone({ number, title, description }: FutureMilestoneProps) {
  return (
    <div className="border border-slate-200 rounded-lg p-4 space-y-2">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-700">
          {number}
        </div>
        <div className="font-medium">{title}</div>
      </div>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}