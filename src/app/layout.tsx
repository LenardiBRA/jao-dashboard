import './globals.css'
import Sidebar from '@/components/Sidebar'

export const metadata = {
  title: 'Jão Dashboard',
  description: 'Painel de Controle do Jão',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#0a0a0a] text-white min-h-screen">
        <div className="flex">
          <Sidebar />
          <main className="ml-64 flex-1 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
