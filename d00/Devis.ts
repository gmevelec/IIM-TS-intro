import IDocument from "./IDocument"

export default class Devis implements IDocument {
  id: number

  constructor(id: number) {
    this.id = id
  }
  get(): string {
    return `Devis ${this.id}`
  }
}
