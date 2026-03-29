import dados from '@/data/dados.json'

export default function AgentesPage() {
  const { agentes } = dados

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-2">🤖 Agentes</h1>
      <p className="text-[#888] text-sm mb-8">Status dos seus agentes</p>

      {agentes.map((agente, i) => (
        <div key={i} className="bg-[#1a1a2e] border border-[#333] rounded-xl p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#f7931e] flex items-center justify-center text-white font-bold text-xl">
              J
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">{agente.nome}</h2>
              <div className="flex items-center gap-2 mt-1">
                <div className={`w-2 h-2 rounded-full ${agente.status === 'online' ? 'bg-[#4ade80]' : 'bg-red-500'}`}></div>
                <span className={agente.status === 'online' ? 'text-[#4ade80]' : 'text-red-500'}>
                  {agente.status === 'online' ? 'Online' : 'Offline'}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-[#0d0d1a] rounded-lg p-4">
              <div className="text-[#888] text-sm">Modelo</div>
              <div className="text-white font-medium">{agente.modelo}</div>
            </div>
            <div className="bg-[#0d0d1a] rounded-lg p-4">
              <div className="text-[#888] text-sm">Uptime</div>
              <div className="text-white font-medium">{agente.uptime}</div>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-white mb-3">🧠 Skills</h3>
          <div className="grid grid-cols-3 gap-3">
            {agente.skills.map((skill, j) => (
              <div key={j} className="bg-[#0d0d1a] rounded-lg p-3 text-center border border-[#333]">
                <div className="text-2xl mb-1">{skill.icone}</div>
                <div className="text-white text-sm">{skill.nome}</div>
                <div className={`text-xs mt-1 ${skill.status === 'ativo' ? 'text-[#4ade80]' : 'text-[#fbbf24]'}`}>
                  {skill.status === 'ativo' ? '● Ativo' : '○ Pendente'}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
