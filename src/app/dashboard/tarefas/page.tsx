import dados from '@/data/dados.json'

export default function TarefasPage() {
  const { tarefas } = dados

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-2">📋 Tarefas</h1>
      <p className="text-[#888] text-sm mb-8">Suas tarefas e pendências</p>

      <div className="bg-[#1a1a2e] border border-[#333] rounded-xl p-5 mb-6">
        <h2 className="text-lg font-semibold text-[#4ade80] mb-4">✅ Concluídas</h2>
        <div className="space-y-2">
          {tarefas.concluidas.map((item) => (
            <div key={item.id} className="flex items-center gap-3 p-3 bg-[#0d0d1a] rounded-lg border-l-4 border-[#4ade80] opacity-80">
              <span className="text-lg">{item.icone}</span>
              <span className="text-white text-sm">{item.titulo}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#1a1a2e] border border-[#333] rounded-xl p-5">
        <h2 className="text-lg font-semibold text-[#fbbf24] mb-4">⏳ Pendentes</h2>
        <div className="space-y-2">
          {tarefas.pendentes.map((item) => (
            <div key={item.id} className="p-3 bg-[#0d0d1a] rounded-lg border-l-4 border-[#fbbf24]">
              <div className="flex items-center gap-3">
                <span className="text-lg">{item.icone}</span>
                <div>
                  <span className="text-white text-sm font-medium">{item.titulo}</span>
                  <p className="text-[#888] text-xs mt-1">{item.descricao}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
