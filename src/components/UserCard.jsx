'use client';

// Q1. UserCard Component
// Create a UserCard component that:
// - Accepts name, email, and role as props
// - Displays them inside a bordered card
// - Uses prop destructuring

export default function UserCard({ name, email, role }) {
  return (
    <div className="border-2 border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">Email:</span> {email}
      </p>
      <p className="text-gray-600">
        <span className="font-semibold">Role:</span> {role}
      </p>
    </div>
  );
}

// Example usage:
// <UserCard name="John Doe" email="john@example.com" role="Developer" />
// <UserCard name="Jane Smith" email="jane@example.com" role="Designer" />
// <UserCard name="Bob Johnson" email="bob@example.com" role="Manager" />
