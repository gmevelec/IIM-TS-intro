// /*

// Gestion de documents

// Types:
//   - Factures
//   - Devis
//   - Autres

// Ajouter un document
// Lister tous les documents
// Lister toutes les factures
// Lister tous les devis
// Lister tous les autres
// Consulter un document
// Supprimer un document

// */

import Documents from "./Documents"
import Facture from "./Facture"
import Devis from "./Devis"
import Autre from "./Autre"

const documents = new Documents()
const devis1 = new Devis(1)
const devis2 = new Devis(2)
const devis3 = new Devis(3)
const devis4 = new Devis(4)
documents.add(devis1)
documents.add(devis2)
documents.add(devis3)
documents.add(devis4)

const facture1 = new Facture(1)
const facture2 = new Facture(2)
const facture3 = new Facture(3)
const facture4 = new Facture(4)
documents.add(facture1)
documents.add(facture2)
documents.add(facture3)
documents.add(facture4)

const autre1 = new Autre(1)
const autre2 = new Autre(2)
const autre3 = new Autre(3)
const autre4 = new Autre(4)
documents.add(autre1)
documents.add(autre2)
documents.add(autre3)
documents.add(autre4)


console.log('---------')
console.log('Tous')
console.log('---------')
documents.listAll()
console.log('---------')
console.log('\nFactures')
console.log('---------')
documents.listFactures()
console.log('---------')
console.log('\nDevis')
console.log('---------')
documents.listDevis()
console.log('---------')
console.log('\nAutre')
console.log('---------')
documents.listAutre()
console.log('---------')

try {
  console.log(documents.getFacture(1).get())
  console.log(documents.getDevis(2).get())
  console.log(documents.getAutre(4).get())  
  console.log(documents.getFacture(123).get())  
} catch (e: any) {
  console.log(e)
}

try {
  console.log('---------')
  console.log('\nTest suppression facture')
  console.log('---------')
  documents.deleteFacture(1)
  documents.listFactures()
} catch (e: any) {
  console.log(e)
}

try {
  console.log('---------')
  console.log('\nTest suppression devis')
  console.log('---------')
  documents.deleteDevis(3)
  documents.listDevis()
} catch (e: any) {
  console.log(e)
}

try {
  console.log('---------')
  console.log('\nTest suppression autre')
  console.log('---------')
  documents.deleteAutre(4)
  documents.listAutre()
} catch (e: any) {
  console.log(e)
}











