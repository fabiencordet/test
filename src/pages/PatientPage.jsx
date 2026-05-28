import React from 'react';
import { mockPatient } from '../mockData';
import Breadcrumbs from '../components/Breadcrumbs';

export default function PatientPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      <Breadcrumbs paths={[{ label: `Patient: ${mockPatient.prenom} ${mockPatient.nom}` }]} />

      {/* Header Fiche Patient */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{mockPatient.prenom} {mockPatient.nom}</h1>
          <p className="text-sm text-gray-500">Née le {mockPatient.dateNaissance}</p>
          <p className="mt-2 text-sm text-red-600 font-medium">⚠️ Antécédents : {mockPatient.antecedents}</p>
        </div>
        
        {/* BOUTON PROMINENT DE NOUVELLE PRISE EN CHARGE */}
        <button 
          onClick={() => window.location.href = `/patient/${mockPatient.id}/nouvelle-prise-en-charge`}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-200 flex items-center gap-2"
        >
          ➕ Nouvelle prise en charge
        </button>
      </div>

      {/* Grille Tendances & Historique */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bloc Tendances / Mesures clés */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 md:col-span-1">
          <h2 className="text-lg font-bold text-gray-900 mb-4">📈 Tendances des mesures</h2>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm mb-3">
            <span className="font-semibold text-blue-800">Dernière Tension Oculaire :</span>
            <div className="flex justify-between mt-1">
              <span>OD : 16 mmHg</span>
              <span>OG : 15 mmHg</span>
            </div>
          </div>
        </div>

        {/* Historique Longitudinal des Prises en charge */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 md:col-span-2">
          <h2 className="text-lg font-bold text-gray-900 mb-4">📜 Historique des Prises en charge</h2>
          <div className="space-y-4">
            {mockPatient.prisesEnCharge.map((pec) => (
              <div key={pec.id} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition cursor-pointer">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800">Prise en charge du {pec.date}</span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${pec.statut === 'Terminée' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                    {pec.statut}
                  </span>
                </div>
                {pec.conclusion && <p className="text-sm text-gray-600 italic">Conclusion : {pec.conclusion}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
