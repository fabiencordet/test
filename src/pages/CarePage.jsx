import React, { useState } from 'react';
import { mockPatient } from '../mockData';
import Breadcrumbs from '../components/Breadcrumbs';
import HistorySidebar from '../components/HistorySidebar';

export default function CarePage() {
  // Gestion locale du formulaire de saisie du jour
  const [formData, setFormData] = useState({
    anamnese: '',
    tensionOD: '',
    tensionOG: '',
    conclusion: ''
  });

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      
      {/* PANNEAU LATÉRAL HISTORIQUE EN LECTURE SEULE */}
      <HistorySidebar history={mockPatient.prisesEnCharge} />

      {/* ZONE PRINCIPALE DE TRAVAIL / FOCUS DU JOUR */}
      <main className="flex-1 flex flex-col p-6 overflow-y-auto">
        
        {/* FIL D'ARIANE DYNAMIQUE */}
        <Breadcrumbs paths={[
          { label: `Patient: ${mockPatient.prenom} ${mockPatient.nom}`, href: `/patient/${mockPatient.id}` },
          { label: "Nouvelle Consultation (Saisie Active)" }
        ]} />

        {/* Formulaire de Consultation Actif */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex-1">
          <div className="border-b border-gray-200 pb-4 mb-6">
            <h1 className="text-xl font-bold text-gray-900">🩺 Consultation du jour (Écriture)</h1>
            <p className="text-sm text-gray-500">Patient : {mockPatient.prenom} {mockPatient.nom}</p>
          </div>

          <form className="space-y-6">
            {/* Section Observations Textuelles */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Observations Textuelles (Anamnèse / Motif)</label>
              <textarea 
                rows="3" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Renseigner les plaintes du patient..."
                value={formData.anamnese}
                onChange={(e) => setFormData({...formData, anamnese: e.target.value})}
              />
            </div>

            {/* Section Observations Structurées */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">🔢 Mesures Structurées (Tension Oculaire)</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Œil Droit (OD) - mmHg</label>
                  <input 
                    type="number" 
                    className="w-full p-2 border border-gray-300 rounded-md" 
                    value={formData.tensionOD}
                    onChange={(e) => setFormData({...formData, tensionOD: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Œil Gauche (OG) - mmHg</label>
                  <input 
                    type="number" 
                    className="w-full p-2 border border-gray-300 rounded-md" 
                    value={formData.tensionOG}
                    onChange={(e) => setFormData({...formData, tensionOG: e.target.value})}
                  />
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Conclusion de l'examen</label>
              <input 
                type="text" 
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Ex: RAS ou Réfraction stable"
                value={formData.conclusion}
                onChange={(e) => setFormData({...formData, conclusion: e.target.value})}
              />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
              <button type="button" className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">Annuler</button>
              <button type="submit" className="px-5 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 shadow">Enregistrer l'examen</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
