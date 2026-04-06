'use client';
import UserCard from './UserCard';
import ProfileBadge from './ProfileBadge';
import Counter from './Counter';

// Demo page showing all three components together
export default function ReactExamples() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Q1: UserCard Component */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Q1. UserCard Component</h2>
          <p className="text-gray-600 mb-4">
            Create a <code className="bg-gray-200 px-2 py-1 rounded">UserCard</code> component that:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
            <li>Accepts name, email, and role as props</li>
            <li>Displays them inside a bordered card</li>
            <li>Uses prop destructuring</li>
          </ul>
          <p className="text-sm text-red-600 mb-4">📌 Render 3 UserCard components with different data</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <UserCard 
              name="John Doe" 
              email="john@example.com" 
              role="Developer" 
            />
            <UserCard 
              name="Jane Smith" 
              email="jane@example.com" 
              role="Designer" 
            />
            <UserCard 
              name="Bob Johnson" 
              email="bob@example.com" 
              role="Manager" 
            />
          </div>
        </section>

        {/* Q2: ProfileBadge Component */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Q2. ProfileBadge Component</h2>
          <p className="text-gray-600 mb-4">
            Create a <code className="bg-gray-200 px-2 py-1 rounded">ProfileBadge</code> component that:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
            <li>Accepts username and isOnline</li>
            <li>Displays:</li>
            <ul className="list-none ml-8 space-y-1">
              <li>🟢 Online if <code className="bg-gray-200 px-2 py-1 rounded">isOnline === true</code></li>
              <li>🔴 Offline if <code className="bg-gray-200 px-2 py-1 rounded">false</code></li>
            </ul>
          </ul>
          
          <div className="flex flex-wrap gap-6">
            <ProfileBadge username="Alice" isOnline={true} />
            <ProfileBadge username="Bob" isOnline={false} />
            <ProfileBadge username="Charlie" isOnline={true} />
          </div>
        </section>

        {/* Q3: Counter Component */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Q3. Counter Component</h2>
          <p className="text-gray-600 mb-4">
            Create a <code className="bg-gray-200 px-2 py-1 rounded">Counter</code> component that:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
            <li>Shows a number starting from 0</li>
            <li>Has "+" and "-" buttons</li>
            <li>Uses <code className="bg-gray-200 px-2 py-1 rounded">useState</code></li>
          </ul>
          <p className="text-sm text-red-600 mb-4">📌 Extra: Disable "-" button if count is 0</p>
          
          <div className="flex justify-center">
            <Counter />
          </div>
        </section>

      </div>
    </div>
  );
}
