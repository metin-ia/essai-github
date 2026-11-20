// Calculs de prix d'exemple (projet d'essai de Metin 2.0).

/** total d'une liste de lignes { prix, quantite } */
export function total(lignes) {
  return lignes.reduce((somme, l) => somme + l.prix * l.quantite, 0);
}

/** prix après une remise en pourcentage (0 à 100) */
export function remise(prix, pourcent) {
  // À FAIRE : refuser un pourcentage négatif ou plus grand que 100
  return prix - (prix * pourcent) / 100;
}

/** prix toutes taxes comprises, avec un taux de TVA en pourcentage */
export function ttc(prixHT, taux) {
  return Math.round(prixHT * (1 + taux / 100) * 100) / 100;
}
