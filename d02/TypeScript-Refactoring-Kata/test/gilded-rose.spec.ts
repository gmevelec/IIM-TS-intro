import { GildedRose } from '../app/gilded-rose';
import { Item } from "../app/models/item"
import { AgedBrieItem } from '../app/models/AgedBrieItem'
import { ConjuredItem } from '../app/models/ConjuredItem'
import { BackStageItem } from '../app/models/BackStageItem'
import { SulufurasItem } from '../app/models/SulfurasItem'

describe('Gilded Rose', function () {
    describe('NORMAL ITEMS CASES', function() {
        it('should quality decrease normally if day has not passed', function() {
            const normalItem = new Item("+5 Dexterity Vest", 10, 20);
            const gildedRose = new GildedRose([normalItem]);
            const initialQuality = normalItem.getQuality();
            gildedRose.updateQuality();
            expect(initialQuality - normalItem.getQuality()).toEqual(1);
        });

        // Once the sell by date has passed, Quality degrades twice as fast
        it('should quality decrease twice faster if day has passed', function() {
            const normalItem = new Item("+5 Dexterity Vest", 0, 20);
            const gildedRose = new GildedRose([normalItem]);
            const initialQuality = normalItem.getQuality();
            gildedRose.updateQuality();
            expect(initialQuality - normalItem.getQuality()).toEqual(2);
        });

        // The Quality of an item is never negative
        it('should quality never been negative', function() {
            const normalItem = new Item("+5 Dexterity Vest", 10, 0);
            const gildedRose = new GildedRose([normalItem]);
            gildedRose.updateQuality();
            expect(normalItem.getQuality()).toEqual(0);
        });
    });

    describe('AGED BRIE CASES', function () {
        // "Aged Brie" actually increases in Quality the older it gets
        it('should increase quality with time', function () {
            const brieItem = new AgedBrieItem("Aged Brie", 2, 0);
            const gildedRose = new GildedRose([brieItem]);
            const initialQuality = brieItem.getQuality();
            gildedRose.updateQuality();
            expect(initialQuality - brieItem.getQuality()).toEqual(-1);
        });

        // The Quality of an item is never more than 50
        it('should quality never be more than 50', function () {
            const brieItem = new AgedBrieItem("Aged Brie", 2, 50);
            const gildedRose = new GildedRose([brieItem]);
            gildedRose.updateQuality();
            expect(brieItem.getQuality()).toEqual(50);
        });
    });

    describe('SULFURA CASES', function () {
        // "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
        it('should days and quality not moving', function () {
            const sulfuraItem = new SulufurasItem("Sulfuras, Hand of Ragnaros", 2, 80);
            const gildedRose = new GildedRose([sulfuraItem]);
            const initialQuality = sulfuraItem.getQuality();
            const initialDays = sulfuraItem.sellIn;
            gildedRose.updateQuality();
            expect(initialQuality - sulfuraItem.getQuality()).toEqual(0);
            expect(initialDays - sulfuraItem.sellIn).toEqual(0);
        });
    });

    describe('BACKSTAGE PASSES CASES', function () {
        // "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
        it('should increase quality with time (> 10 days)', function () {
            const backstageItem = new BackStageItem("Backstage passes to a TAFKAL80ETC concert", 15, 20);
            const gildedRose = new GildedRose([backstageItem]);
            const initialQuality = backstageItem.getQuality();
            const initialDays = backstageItem.sellIn;
            expect(initialDays).toBeGreaterThan(10);
            gildedRose.updateQuality();
            expect(initialQuality - backstageItem.getQuality()).toEqual(-1);
        });

        // Quality increases by 2 when there are 10 days or less
        it('should increase quality with time (> 5 and <= 10 days)', function () {
            const backstageItem = new BackStageItem("Backstage passes to a TAFKAL80ETC concert", 10, 20);
            const gildedRose = new GildedRose([backstageItem]);
            const initialQuality = backstageItem.getQuality();
            const initialDays = backstageItem.sellIn;
            expect(initialDays).toBeLessThanOrEqual(10);
            expect(initialDays).toBeGreaterThan(5);
            gildedRose.updateQuality();
            expect(initialQuality - backstageItem.getQuality()).toEqual(-2);
        });

        // Quality increases by 3 when there are 5 days or less
        it('should increase quality with time (> 0 day and <= 5 days)', function () {
            const backstageItem = new BackStageItem("Backstage passes to a TAFKAL80ETC concert", 5, 20);
            const gildedRose = new GildedRose([backstageItem]);
            const initialQuality = backstageItem.getQuality();
            const initialDays = backstageItem.sellIn;
            expect(initialDays).toBeLessThanOrEqual(5);
            expect(initialDays).toBeGreaterThan(0);
            gildedRose.updateQuality();
            expect(initialQuality - backstageItem.getQuality()).toEqual(-3);
        });

        // Quality drops to 0 after the concert
        it('should be 0 after the concert', function () {
            const backstageItem = new BackStageItem("Backstage passes to a TAFKAL80ETC concert", 0, 20);
            const gildedRose = new GildedRose([backstageItem]);
            gildedRose.updateQuality();
            expect(backstageItem.getQuality()).toEqual(0);
        });
    });

    describe('CONJURED CASES', function () {
        // "Conjured" items degrade in Quality twice as fast as normal items
        it('should decrease twice as fast as normal items', function () {
            const conjuredItem = new ConjuredItem("Conjured Mana Cake", 3, 6);
            const gildedRose = new GildedRose([conjuredItem]);
            const initialQuality = conjuredItem.getQuality();
            gildedRose.updateQuality();
            expect(initialQuality - conjuredItem.getQuality()).toEqual(2);
        });
    });
});
