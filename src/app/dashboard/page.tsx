import dados from '@/data/dados.json'
import { Calendar, CheckSquare, Bot, Activity } from 'lucide-react'

function formatarData(data: string) {
  const [ano, mes, dia] = data.split('-')
  return `${dia}/${mes}/${ano}`
}

function MiniCalendario({ agenda }: { agenda: any[] }) {
  const hoje = new Date()
  const ano = hoje.getFullYear()
  const mes = hoje.getMonth()
  const diasNoMes = new Date(ano, mes + 1, 0).getDate()
  const primeiroDiaSemana = new Date(ano, mes, 1).getDay()
  const diasComEvento = new Set(agenda.map(a => {
    const [aAno, aMes, aDia] = a.data.split('-')
    if (parseInt(aAno) === ano && parseInt(aMes) === mes + 1) return parseInt(aDia)
    return -1
  }).filter(d => d > 0))
  const nomesMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  const diasSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

  return (
    <div className="bg-[#1a1a2e] border border-[#333] rounded-xl p-5">
      <h3 className="text-white font-semibold mb-3">📅 {nomesMeses[mes]} {ano}</h3>
      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {diasSemana.map((d, i) => (
          <div key={i} className="text-[#555] font-medium py-1">{d}</div>
        ))}
        {Array.from({ length: primeiroDiaSemana }).map((_, i) => (
          <div key={`empty-${i}`}></div>
        ))}
        {Array.from({ length: diasNoMes }).map((_, i) => {
          const dia = i + 1
          const temEvento = diasComEvento.has(dia)
          const ehHoje = dia === hoje.getDate()
          return (
            <div key={dia} className={`py-1.5 rounded-md text-xs ${
              temEvento ? 'bg-[#ff6b35] text-white font-bold' :
              ehHoje ? 'border border-[#7c3aed] text-[#7c3aed]' :
              'text-[#888]'
            }`}>
              {dia}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function DashboardPage() {
  const { stats, agenda, tarefas, agentes } = dados
  const proximoCompromisso = agenda[0]
  const pendentes = tarefas.pendentes.length

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-2">Visão Geral</h1>
      <p className="text-[#888] text-sm mb-8">Painel de controle do Jão</p>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-[#1a1a2e] border border-[#333] rounded-xl p-5">
          <div className="flex items-center gap-2 text-[#888] text-sm mb-2">
            <Calendar size={16} />
            <span>Próximo</span>
          </div>
          <div className="text-white font-semibold">{proximoCompromisso?.titulo}</div>
          <div className="text-[#888] text-xs mt-1">{formatarData(proximoCompromisso?.data)} às {proximoCompromisso?.hora}</div>
        </div>

        <div className="bg-[#1a1a2e] border border-[#333] rounded-xl p-5">
          <div className="flex items-center gap-2 text-[#888] text-sm mb-2">
            <CheckSquare size={16} />
            <span>Pendentes</span>
          </div>
          <div className="text-[#fbbf24] font-semibold text-2xl">{pendentes}</div>
        </div>

        <div className="bg-[#1a1a2e] border border-[#333] rounded-xl p-5">
          <div className="flex items-center gap-2 text-[#888] text-sm mb-2">
            <Bot size={16} />
            <span>Modelo</span>
          </div>
          <div className="text-white font-semibold">{agentes[0]?.modelo}</div>
        </div>

        <div className="bg-[#1a1a2e] border border-[#333] rounded-xl p-5">
          <div className="flex items-center gap-2 text-[#888] text-sm mb-2">
            <Activity size={16} />
            <span>Status</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#4ade80]"></div>
            <span className="text-[#4ade80] font-semibold">Online</span>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1a2e] border border-[#333] rounded-xl p-5 mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-[#888]">Uso do dia</span>
          <span className="text-white">{stats.requests_hoje}/{stats.requests_limite} requests</span>
        </div>
        <div className="bg-[#333] rounded-full h-3">
          <div
            className="bg-gradient-to-r from-[#ff6b35] to-[#f7931e] h-3 rounded-full transition-all"
            style={{ width: `${(stats.requests_hoje / stats.requests_limite) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="col-span-2 bg-[#1a1a2e] border border-[#333] rounded-xl p-5">
          <h2 className="text-lg font-semibold text-white mb-4">📅 Próximos Compromissos</h2>
          <div className="space-y-3">
            {agenda.map((item) => (
              <div key={item.id} className="flex items-center gap-3 p-3 bg-[#0d0d1a] rounded-lg border-l-4 border-[#ff6b35]">
                <div className="text-sm">
                  <span className="text-[#888]">{formatarData(item.data)}</span>
                  <span className="text-white font-medium ml-2">{item.hora}</span>
                </div>
                <div className="text-white text-sm">{item.titulo}</div>
                <span className={`ml-auto text-xs px-2 py-1 rounded-full ${
                  item.tipo === 'entrevista' ? 'bg-blue-500/20 text-blue-400' :
                  item.tipo === 'saude' ? 'bg-green-500/20 text-green-400' :
                  item.tipo === 'viagem' ? 'bg-purple-500/20 text-purple-400' :
                  'bg-orange-500/20 text-orange-400'
                }`}>{item.tipo}</span>
              </div>
            ))}
          </div>
        </div>
        <MiniCalendario agenda={agenda} />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#1a1a2e] border border-[#333] rounded-xl p-5 text-center">
          <div className="text-[#888] text-sm">Áudios transcritos</div>
          <div className="text-[#ff6b35] text-2xl font-bold">{stats.audios_transcritos}</div>
        </div>
        <div className="bg-[#1a1a2e] border border-[#333] rounded-xl p-5 text-center">
          <div className="text-[#888] text-sm">PDFs extraídos</div>
          <div className="text-[#ff6b35] text-2xl font-bold">{stats.pdfs_extraidos}</div>
        </div>
        <div className="bg-[#1a1a2e] border border-[#333] rounded-xl p-5 text-center">
          <div className="text-[#888] text-sm">Skills ativas</div>
          <div className="text-[#ff6b35] text-2xl font-bold">{stats.skills_ativas}</div>
        </div>
      </div>
    </div>
  )
}
