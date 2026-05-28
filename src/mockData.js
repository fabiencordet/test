export const mockPatient = {
  id: "p1",
  nom: "Martin",
  prenom: "Sophie",
  dateNaissance: "12/04/1984",
  antecedents: "Myopie forte, Suspicion de glaucome",
  prisesEnCharge: [
    {
      id: "pec-1",
      date: "15/01/2026",
      statut: "Terminée",
      conclusion: "Tension oculaire stable, à surveiller dans 6 mois.",
      examens: [
        {
          id: "ex-1",
          nom: "Examen de contrôle annuel",
          observationsTextuelles: { anamnese: "Pas de plainte visuelle majeure", motif: "Contrôle" },
          observationsStructurees: { tensionOD: 16, tensionOG: 15, pachymetrieOD: 540 },
          imageries: ["OCT_Macula_OD.jpg"],
          prescription: "Larmes artificielles si besoin",
          conclusion: "RAS"
        }
      ]
    },
    {
      id: "pec-2",
      date: "28/05/2026",
      statut: "En cours",
      conclusion: "",
      examens: []
    }
  ]
};
