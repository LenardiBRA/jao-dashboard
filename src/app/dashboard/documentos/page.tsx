import dados from '@/data/dados.json'
import { FileText } from 'lucide-react'

export default function DocumentosPage() {
  const { documentos } = dados
  const categorias = [...new Set(documentos.map(d => d.categoria))]

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-2">📄 Documentos</h1>
      <p className="text-[#888] text-sm mb-8">Seus documentos armazenados</p>

      {categorias.map((categoria) => (
        <div key={categoria} className="mb-6">
          <h2 className="text-lg font-semibold text-white mb-3">📁 {categoria}</h2>
          <div className="space-y-2">
            {documentos.filter(d => d.categoria === categoria).map((doc, i) => (
              <div key={i} className="bg-[#1a1a2e] border border-[#333] rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#ff6b35]/20 flex items-center justify-center">
                  <FileText size={20} className="text-[#ff6b35]" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-medium">{doc.nome}</div>
                  <div className="text-[#888] text-xs">{doc.data} · {doc.tipo} · {doc.tamanho}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
