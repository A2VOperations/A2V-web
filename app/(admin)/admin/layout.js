'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogOut, LayoutDashboard, Briefcase, User as UserIcon } from 'lucide-react';

export default function AdminLayout({ children }) {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  // Don't show admin sidebar/header on login page
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-[#050505] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0a0a0a] border-r border-white/10 flex flex-col">
        <div className="p-6 border-b border-white/10">
          <Link href="/admin/portfolio" className="flex items-center gap-2 no-underline">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">A</div>
            <span className="text-xl font-bold tracking-tight text-white">A2V Admin</span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/admin/portfolio"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 no-underline ${
              pathname === '/admin/portfolio'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Briefcase size={20} />
            <span className="font-medium">Portfolio</span>
          </Link>
          {/* Add more links here as needed */}
        </nav>

        <div className="p-4 border-t border-white/10 space-y-4">
          {session && (
            <div className="px-4 py-3 flex items-center gap-3 bg-white/5 rounded-xl">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                <UserIcon size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate m-0">{session.user.name}</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider m-0">{session.user.role}</p>
              </div>
            </div>
          )}
          <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all duration-200"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}
