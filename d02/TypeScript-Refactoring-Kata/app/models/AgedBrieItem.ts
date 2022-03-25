import { Item } from './item'

export class AgedBrieItem extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality)
  }

  updateQuality() {
    this.sellIn = this.sellIn - 1;
    this.increaseQuality()
  }
}
