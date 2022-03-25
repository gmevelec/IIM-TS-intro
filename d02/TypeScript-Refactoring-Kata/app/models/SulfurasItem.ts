import { Item } from './item'

export class SulufurasItem extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality)
  }

  updateQuality() {
  }
}
