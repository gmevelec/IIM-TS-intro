import {Item} from "./models/item";
import {ItemTypeEnum} from "./enums/ItemType.enum";

export class GildedRose {
    private readonly items: Array<Item>;

    constructor(items: Array<Item> = []) {
        this.items = items;
    }

    updateQuality(): Array<Item> {
        this.items.forEach((currentItem: Item) => {
            currentItem.updateQuality();
        })
        return this.items;
    }
}
