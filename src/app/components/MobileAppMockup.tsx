import React from 'react';
import { Badge } from './ui/badge';
import { Activity, Bell, Camera } from 'lucide-react';
import pixelAvatar from '@/assets/4b11b2904922ad1b8e6814eb7db5db3e34509ced.png';

interface MobileAppMockupProps {
  platform: 'ios' | 'android';
  type: 'mvp' | 'login' | 'photo-upload';
}

export function MobileAppMockup({ platform, type }: MobileAppMockupProps) {
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
