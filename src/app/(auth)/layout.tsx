import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-gray-100 p-4">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/dashboard" className="hover:text-blue-500">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/settings" className="hover:text-blue-500">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
} 