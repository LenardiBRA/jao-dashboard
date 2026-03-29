import { Clock, Play, Pause } from 'lucide-react'

const crons = [
  {
    id: '1',
    nome: 'agenda-diaria',
    descricao: 'Agenda diária às 7h (Brasília)',
    schedule: '0 7 * * *',
    timezone: 'America/Sao_Paulo',
    ativo: true,
    proximaExecucao: 'Amanhã às 07:00',
    ultimaExecucao: 'Hoje às 07:00'
  },
  {
    id: '2',
    nome: 'heartbeat',
    descricao: 'Verificação de saúde a cada 30min',
    schedule: '*/30 * * * *',
    timezone: 'America/Sao_Paulo',
    ativo: true,
    proximaExecucao: 'Em ~15 min',
    ultimaExecucao: 'Há 15 min'
  }
]

export default function CronPage() {
  const ativos = crons.filter(c => c.ativo)
  const inativos = crons.filter(c => !c.ativo)

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-2">⏰ Cron Jobs</h1>
      <p className="text-[#888] text-sm mb-8">Gerencie suas tarefas agendadas</p>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-[#4ade80] mb-4 flex items-center gap-2">
          <Play size={18} />
          Ativos ({ativos.length})
        </h2>
        <div className="space-y-3">
          {ativos.map((cron) => (
            <div key={cron.id} className="bg-[#1a1a2e] border border-[#333] rounded-xl p-5">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4ade80]"></div>
                    <span className="text-white font-semibold">{cron.nome}</span>
                  </div>
                  <p className="text-[#888] text-sm mt-1">{cron.descricao}</p>
                </div>
                <span className="bg-[#4ade80]/20 text-[#4ade80] text-xs px-2 py-1 rounded-full">Ativo</span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-[#0d0d1a] rounded-lg p-3">
                  <div className="text-[#555]">Schedule</div>
                  <div className="text-white font-mono">{cron.schedule}</div>
                </div>
                <div className="bg-[#0d0d1a] rounded-lg p-3">
                  <div className="text-[#555]">Próxima execução</div>
                  <div className="text-white">{cron.proximaExecucao}</div>
                </div>
                <div className="bg-[#0d0d1a] rounded-lg p-3">
                  <div className="text-[#555]">Última execução</div>
                  <div className="text-white">{cron.ultimaExecucao}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {inativos.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-[#fbbf24] mb-4 flex items-center gap-2">
            <Pause size={18} />
            Inativos ({inativos.length})
          </h2>
          <div className="space-y-3">
            {inativos.map((cron) => (
              <div key={cron.id} className="bg-[#1a1a2e] border border-[#333] rounded-xl p-5 opacity-60">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#fbbf24]"></div>
                      <span className="text-white font-semibold">{cron.nome}</span>
                    </div>
                    <p className="text-[#888] text-sm mt-1">{cron.descricao}</p>
                  </div>
                  <span className="bg-[#fbbf24]/20 text-[#fbbf24] text-xs px-2 py-1 rounded-full">Inativo</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
