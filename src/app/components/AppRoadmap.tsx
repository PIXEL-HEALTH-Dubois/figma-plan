import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Activity, 
  Bell, 
  User, 
  Camera, 
  Lock, 
  TrendingUp, 
  Moon, 
  Zap,
  CheckCircle2,
  Circle,
  ArrowRight,
  Smartphone,
  Waves,
  PersonStanding,
  Bike,
  Dumbbell,
  LockIcon
} from 'lucide-react';
import pixelAvatar from 'figma:asset/4b11b2904922ad1b8e6814eb7db5db3e34509ced.png';

export function AppRoadmap() {
  const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-3">📱 App Development Roadmap</h2>
        <p className="text-slate-600">Pixel Health - From MVP to Full-Featured App</p>
      </div>

      {/* Timeline */}
      <div className="space-y-8">
        {/* MVP Milestone */}
        <MilestoneCard
          number={1}
          title="MVP - Basic Permissions & Live HR"
          status="in-progress"
          description="Get health data permissions and display real-time heart rate"
        >
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

            <FeatureList
              features={[
                "Permission notification on first launch",
                "Request HealthKit/Health Connect authorization",
                "Display live BPM with animated heart icon",
                "Simple, clean UI focused on single metric"
              ]}
            />
          </div>
        </MilestoneCard>

        {/* Milestone 2 */}
        <MilestoneCard
          number={2}
          title="User Profiles & Extended Metrics"
          status="planned"
          description="Add authentication, profile creation with AI-generated pixelated avatars, and comprehensive health metrics"
        >
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
        </MilestoneCard>

        {/* Future Milestones Preview */}
        <Card className="border-slate-300">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Circle className="w-5 h-5 text-slate-400" />
              <CardTitle>Future Milestones</CardTitle>
            </div>
            <CardDescription>Planned features for future releases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <FutureMilestone
                number={3}
                title="WHOOP Integration"
                features={[
                  "Connect WHOOP API",
                  "Strain & Recovery scores",
                  "Advanced HRV analytics"
                ]}
              />
              <FutureMilestone
                number={4}
                title="Social & Challenges"
                features={[
                  "Friend connections",
                  "Health challenges",
                  "Leaderboards"
                ]}
              />
              <FutureMilestone
                number={5}
                title="AI Insights"
                features={[
                  "Personalized recommendations",
                  "Anomaly detection",
                  "Predictive health alerts"
                ]}
              />
              <FutureMilestone
                number={6}
                title="Export & Integrations"
                features={[
                  "Export to CSV/PDF",
                  "Strava integration",
                  "Apple Health sync"
                ]}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

interface MobileAppMockupProps {
  platform: 'ios' | 'android';
  type: 'mvp' | 'login' | 'photo-upload';
}

function MobileAppMockup({ platform, type }: MobileAppMockupProps) {
  const borderColor = platform === 'ios' ? 'border-blue-300' : 'border-green-300';
  const bgColor = platform === 'ios' ? 'from-blue-50 to-white' : 'from-green-50 to-white';

  if (type === 'mvp') {
    return (
      <div className={`bg-gradient-to-br ${bgColor} border-2 ${borderColor} rounded-2xl aspect-[9/16] p-6 flex flex-col`}>
        {/* Status Bar */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-xs">9:41</div>
          <div className="flex gap-1">
            <div className="w-4 h-3 bg-slate-400 rounded-sm"></div>
          </div>
        </div>

        {/* Permission Notification */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-md border border-slate-200">
          <div className="flex items-start gap-3">
            <Bell className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="font-medium text-sm mb-1">Health Data Access</div>
              <div className="text-xs text-slate-600 mb-3">
                Allow Pixel Health to access your heart rate data?
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white text-xs py-2 rounded-lg">
                  Allow
                </button>
                <button className="flex-1 bg-slate-200 text-slate-700 text-xs py-2 rounded-lg">
                  Deny
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Live HR Display */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <Activity className="w-16 h-16 text-red-500 mb-4 animate-pulse" />
          <div className="text-6xl font-bold text-slate-900 mb-2">72</div>
          <div className="text-sm text-slate-600 mb-4">BPM - Resting</div>
          <Badge className="bg-green-500">Live</Badge>
        </div>
      </div>
    );
  }

  if (type === 'login') {
    return (
      <div className={`bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 rounded-2xl aspect-[9/16] p-6 flex flex-col`}>
        {/* Logo */}
        <div className="text-center mb-12 mt-8">
          <div className="text-3xl font-bold text-white tracking-wider mb-2" style={{ fontFamily: 'monospace' }}>
            PIXEL HEALTH
          </div>
          <div className="text-xs text-slate-400">Your Health, Pixelated</div>
        </div>

        {/* Login Form */}
        <div className="flex-1 flex flex-col justify-center space-y-3 px-2">
          <input
            type="text"
            placeholder="Email or Username"
            className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-400"
            disabled
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-400"
            disabled
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg mt-2">
            Sign In
          </button>
          <div className="text-center text-xs text-slate-400 mt-4">
            Don't have an account?{' '}
            <span className="text-blue-400 underline">Sign Up</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'photo-upload') {
    return (
      <div className={`bg-gradient-to-br from-white to-slate-50 border-2 ${borderColor} rounded-2xl aspect-[9/16] p-6 flex flex-col`}>
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="font-bold text-lg mb-1">Create Your Avatar</h3>
          <p className="text-xs text-slate-600">Upload a photo to generate your pixel character</p>
        </div>

        {/* Upload Area */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center bg-slate-50">
            <Camera className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <div className="text-sm font-medium text-slate-700 mb-1">Upload Photo</div>
            <div className="text-xs text-slate-500 mb-4">Take a selfie or choose from gallery</div>
            <button className="bg-blue-600 text-white text-sm px-6 py-2 rounded-lg">
              Choose Photo
            </button>
          </div>
        </div>

        <div className="text-xs text-center text-slate-500 mt-4">
          Your photo will be converted to a pixel art style using AI
        </div>
      </div>
    );
  }

  return null;
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

interface MilestoneCardProps {
  number: number;
  title: string;
  status: 'completed' | 'in-progress' | 'planned';
  description: string;
  children: React.ReactNode;
}

function MilestoneCard({ number, title, status, description, children }: MilestoneCardProps) {
  const statusColors = {
    completed: 'bg-green-100 text-green-700 border-green-300',
    'in-progress': 'bg-blue-100 text-blue-700 border-blue-300',
    planned: 'bg-slate-100 text-slate-700 border-slate-300'
  };

  const statusIcons = {
    completed: CheckCircle2,
    'in-progress': Activity,
    planned: Circle
  };

  const StatusIcon = statusIcons[status];

  return (
    <Card className={`border-2 ${statusColors[status]}`}>
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-white border-2 flex items-center justify-center flex-shrink-0 font-bold text-lg">
            {number}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <CardTitle className="text-xl">{title}</CardTitle>
              <Badge variant="outline" className="gap-1">
                <StatusIcon className="w-3 h-3" />
                {status.replace('-', ' ')}
              </Badge>
            </div>
            <CardDescription className="text-slate-700">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="bg-white rounded-b-lg">
        {children}
      </CardContent>
    </Card>
  );
}

interface FeatureListProps {
  features: string[];
}

function FeatureList({ features }: FeatureListProps) {
  return (
    <ul className="space-y-2 text-sm">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
          <span className="text-slate-700">{feature}</span>
        </li>
      ))}
    </ul>
  );
}

interface FutureMilestoneProps {
  number: number;
  title: string;
  features: string[];
}

function FutureMilestone({ number, title, features }: FutureMilestoneProps) {
  return (
    <div className="border border-slate-200 rounded-lg p-4 space-y-3">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold">
          {number}
        </div>
        <div className="font-medium text-sm">{title}</div>
      </div>
      <ul className="space-y-1.5 text-xs text-slate-600">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-1.5">
            <Circle className="w-2 h-2 flex-shrink-0 mt-1.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
