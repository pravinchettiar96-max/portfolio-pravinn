'use client';

// Q2. ProfileBadge Component
// Create a ProfileBadge component that:
// - Accepts username and isOnline
// - Displays:
//   - Green dot "Online" if isOnline === true
//   - Red dot "Offline" if false

export default function ProfileBadge({ username, isOnline }) {
  return (
    <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-100 rounded-full border border-gray-300 shadow-sm">
      <div className="flex items-center gap-2">
        {/* Status indicator dot */}
        <div
          className={`w-3 h-3 rounded-full ${
            isOnline ? 'bg-green-500' : 'bg-red-500'
          }`}
        ></div>
        
        {/* Status text */}
        <span
          className={`font-semibold ${
            isOnline ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {isOnline ? 'Online' : 'Offline'}
        </span>
      </div>
      
      {/* Username */}
      <span className="text-gray-800 font-medium">{username}</span>
    </div>
  );
}

// Example usage:
// <ProfileBadge username="Alice" isOnline={true} />
// <ProfileBadge username="Bob" isOnline={false} />
