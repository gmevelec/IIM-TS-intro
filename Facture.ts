import IDocument from "./IDocument"

export default class Facture implements IDocument {
  id: number
  private date: Date = new Date()

  constructor(id: number) {
    this.id = id
  }

  private dateToString(): string {
    return this.date.toLocaleString('fr-FR', { timeZone: 'UTC' })
  }

  getId(): number {
    return this.id
  }

  get(): string {
    return `Facture ${this.id}: ${this.dateToString()}`
  }
}
