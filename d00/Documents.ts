import IDocument from "./IDocument"
import Facture from "../Facture"
import Devis from "./Devis"
import Autre from "./Autre"

export default class Documents {
  documents: Array<IDocument> = []

  add(document: IDocument): void {
    this.documents.push(document)    
  }

  listAll(): void {
    this.list()
  }

  listFactures(): void {
    this.list(Facture)
  }

  listDevis(): void {
    this.list(Devis)
  }

  listAutre(): void {
    this.list(Autre)
  }

  getFacture(id: number): IDocument {
    return this.getDocument(id, Facture)
  }

  getDevis(id: number): IDocument {
    return this.getDocument(id, Devis)
  }

  getAutre(id: number): IDocument {
    return this.getDocument(id, Autre)
  }

  deleteFacture(id: number): void {
    this.deleteDocument(id, Facture)
  }

  deleteDevis(id: number): void {
    this.deleteDocument(id, Devis)
  }

  deleteAutre(id: number): void {
    this.deleteDocument(id, Autre)
  }

  private deleteDocument(id: number, type: any) {
    const index = this.getDocumentIndex(id, type)
    this.documents.splice(index, 1)
    console.log(`${type.name} ${id} has been deleted`)
  }


  private getDocumentIndex(id: number, type: any): number {
    const index = this.documents.findIndex((d) => d.id === id && d instanceof type)
    if (index === -1)
      throw new Error(`Unable to find ${type.name}: ${id}`)
    return index
  }

  private getDocument(id: number, type: any): IDocument {
    const document = this.documents.find((d) => d.id === id && d instanceof type)
    if (!document)
      throw new Error(`Unable to find ${type.name}: ${id}`)
    return document
  }

  private list(filter?: any): void {
    this.documents.forEach((d) => {
      if (!filter || d instanceof filter)
        console.log(d.get())
    })
  }
}
