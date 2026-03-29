'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Calendar, CheckSquare, Bot, FileText, Settings } from 'lucide-react'

const menuItems = [
  { href: '/dashboard', label: 'Visão Geral', icon: Home },
  { href: '/dashboard/agenda', label: 'Agenda', icon: Calendar },
  { href: '/dashboard/tarefas', label: 'Tarefas', icon: CheckSquare },
  { href: '/dashboard/agentes', label: 'Agentes', icon: Bot },
  { href: '/dashboard/documentos', label: 'Documentos', icon: FileText },
  { href: '/dashboard/configuracoes', label: 'Configurações', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0a0a0a] border-r border-[#333] flex flex-col">
      <div className="p-6 border-b border-[#333]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#ff6b35] flex items-center justify-center text-white font-bold text-sm">
            KC
          </div>
          <div>
            <h1 className="text-white font-semibold text-lg">Jão Dashboard</h1>
            <p className="text-[#888] text-xs">Painel de Controle</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                isActive
                  ? 'bg-[#7c3aed]/10 text-[#7c3aed] border border-[#7c3aed]/20'
                  : 'text-[#888] hover:text-white hover:bg-[#1a1a2e]/50 border border-transparent'
              }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-[#333]">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-[#1a1a2e] flex items-center justify-center text-xs text-[#888]">
            L
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white truncate">Leandro</p>
            <p className="text-xs text-[#555]">Admin</p>
          </div>
          <div className="w-2 h-2 rounded-full bg-[#4ade80]"></div>
        </div>
      </div>
    </aside>
  )
}
