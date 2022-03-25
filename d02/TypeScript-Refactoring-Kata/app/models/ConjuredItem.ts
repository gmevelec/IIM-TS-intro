import { Item } from './item'

export class ConjuredItem extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality)
  }

  updateQuality() {
    this.sellIn = this.sellIn - 1;
    this.decreaseQuality(2)
  }
}
