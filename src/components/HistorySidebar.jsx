import React from 'react';

export default function HistorySidebar({ history }) {
  return (
    <aside className="w-80 bg-gray-900 text-gray-100 h-full p-4 overflow-y-auto border-r border-gray-700">
      <h3 className="text-md font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
        📖 Historique (Lecture seule)
      </h3>
      <div className="space-y-6">
        {history.map((pec) => (
          <div key={pec.id} className="border-l-2 border-blue-500 pl-3 py-1">
            <p className="text-xs text-blue-400 font-semibold">{pec.date}</p>
            <p className="text-xs font-medium text-gray-300 italic mb-2">Conclusion : {pec.conclusion || "Aucune"}</p>
            
            {pec.examens.map((ex) => (
              <div key={ex.id} className="mt-2 bg-gray-800 p-2 rounded text-xs space-y-1">
                <p className="font-semibold text-gray-200">{ex.nom}</p>
                <p className="text-gray-400"><span className="text-gray-500">Tension OD/OG :</span> {ex.observationsStructurees.tensionOD}/{ex.observationsStructurees.tensionOG}</p>
                <p className="text-gray-400 truncate"><span className="text-gray-500">Obs :</span> {ex.observationsTextuelles.anamnese}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}
