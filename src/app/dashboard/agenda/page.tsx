import dados from '@/data/dados.json'

function formatarData(data: string) {
  const [ano, mes, dia] = data.split('-')
  return `${dia}/${mes}/${ano}`
}

export default function AgendaPage() {
  const { agenda } = dados

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-2">📅 Agenda</h1>
      <p className="text-[#888] text-sm mb-8">Seus compromissos</p>

      <div className="bg-[#1a1a2e] border border-[#333] rounded-xl p-5">
        <div className="space-y-3">
          {agenda.map((item) => (
            <div key={item.id} className="p-4 bg-[#0d0d1a] rounded-lg border-l-4 border-[#ff6b35]">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-white font-semibold">{item.titulo}</span>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  item.tipo === 'entrevista' ? 'bg-blue-500/20 text-blue-400' :
                  item.tipo === 'saude' ? 'bg-green-500/20 text-green-400' :
                  item.tipo === 'viagem' ? 'bg-purple-500/20 text-purple-400' :
                  'bg-orange-500/20 text-orange-400'
                }`}>{item.tipo}</span>
              </div>
              <div className="text-[#888] text-sm">
                📅 {formatarData(item.data)} às {item.hora}
              </div>
              {item.detalhes && (
                <div className="mt-2 text-[#888] text-xs space-y-1">
                  {Object.entries(item.detalhes).map(([key, value]) => (
                    <div key={key}>• {key}: {String(value)}</div>
                  ))}
                </div>
              )}
              {item.local && (
                <a href={item.local} target="_blank" rel="noopener" className="text-[#ff6b35] text-xs mt-2 inline-block">
                  📍 Ver localização
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
