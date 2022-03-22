import IDocument from "./IDocument"

export default class Autre implements IDocument {
  id: number

  constructor(id: number) {
    this.id = id
  }
  get(): string {
    return `Autre document moins important ${this.id}`
  }
}
