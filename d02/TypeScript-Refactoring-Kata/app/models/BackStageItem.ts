import { Item } from './item'

export class BackStageItem extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality)
  }

  updateQuality() {
    this.sellIn = this.sellIn - 1;
    if (this.sellIn < 0) {
      this.destroy();
    } else {
      this.increaseQuality();
      // If backstage and less than 10 days, increase once more (+2)
      if (this.sellIn < 11) {
        this.increaseQuality();
        // If backstage and less than 5 days, increase once more (+3)
        if (this.sellIn < 6) {
          this.increaseQuality();
        }
      }
    }
  }
}
