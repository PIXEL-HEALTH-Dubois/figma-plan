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
          <div className="flex items-center justify-center gap-3 mb-3">
            <Activity className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-bold tracking-tight">PIXEL HEALTH</h1>
          </div>
          <p className="text-slate-400 text-sm uppercase tracking-widest mb-3">Your Health, Pixelated</p>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Real-time health data from Apple Watch &amp; Galaxy Watch, streamed through Kafka, displayed in a gamified pixel-art dashboard.
          </p>
          <a
            href="https://github.com/orgs/PIXEL-HEALTH-Dubois/projects/1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-slate-900 text-white text-sm hover:bg-slate-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            View Project Board
          </a>
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