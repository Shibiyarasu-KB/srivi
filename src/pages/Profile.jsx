import { useAuth } from '../useAuth';

export default function Profile() {
  const { user } = useAuth();

  if (!user) return null;

  const displayName = user.name || user.firstname || 'User';

  return (
    <div className="min-h-screen bg-center bg-cover bg-fixed py-10">
      <div className="container mx-auto p-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Profile</h1>
        <p className="text-lg mb-2">
          <span className="font-semibold">Name:</span> {displayName}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p className="text-lg mb-2">
          <span className="font-semibold">Contact:</span> {user.contact}
        </p>
      </div>
    </div>
  );
}
