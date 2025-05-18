export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="mt-4">This is a protected route. You need to be authenticated to see this page.</p>
    </div>
  );
} 