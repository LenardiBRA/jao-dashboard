import dados from '@/data/dados.json'

export default function ConfiguracoesPage() {
  const { custos } = dados

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-2">⚙️ Configurações</h1>
      <p className="text-[#888] text-sm mb-8">Configurações do dashboard</p>

      <div className="bg-[#1a1a2e] border border-[#333] rounded-xl p-5 mb-6">
        <h2 className="text-lg font-semibold text-white mb-4">💰 Custos</h2>
        <div className="space-y-3">
          <div className="flex justify-between p-3 bg-[#0d0d1a] rounded-lg">
            <span className="text-[#888]">{custos.hospedagem.descricao}</span>
            <span className="text-[#ff6b35] font-medium">{custos.hospedagem.valor}</span>
          </div>
          <div className="flex justify-between p-3 bg-[#0d0d1a] rounded-lg">
            <span className="text-[#888]">{custos.modelos.descricao}</span>
            <span className="text-[#4ade80] font-medium">{custos.modelos.valor}</span>
          </div>
          <div className="flex justify-between p-3 bg-[#0d0d1a] rounded-lg">
            <span className="text-[#888]">{custos.byok.descricao}</span>
            <span className="text-[#4ade80] font-medium">{custos.byok.valor}</span>
          </div>
          <div className="flex justify-between p-3 bg-[#ff6b35]/10 rounded-lg border border-[#ff6b35]/30">
            <span className="text-white font-semibold">Total</span>
            <span className="text-[#ff6b35] font-bold">{custos.total}</span>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1a2e] border border-[#333] rounded-xl p-5">
        <h2 className="text-lg font-semibold text-white mb-4">🔗 Conexão KiloClaw</h2>
        <div className="space-y-4">
          <div>
            <label className="text-[#888] text-sm block mb-1">Gateway URL</label>
            <input
              type="text"
              defaultValue="ws://127.0.0.1:3001"
              className="w-full bg-[#0d0d1a] border border-[#333] rounded-lg px-4 py-2 text-white text-sm"
            />
          </div>
          <div>
            <label className="text-[#888] text-sm block mb-1">Token</label>
            <input
              type="password"
              placeholder="Insira seu token..."
              className="w-full bg-[#0d0d1a] border border-[#333] rounded-lg px-4 py-2 text-white text-sm"
            />
          </div>
          <button className="bg-[#ff6b35] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#e55a2b] transition">
            Salvar Configurações
          </button>
        </div>
      </div>
    </div>
  )
}
