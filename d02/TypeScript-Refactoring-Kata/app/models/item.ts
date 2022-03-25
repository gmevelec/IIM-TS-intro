export class Item {
    readonly name: string;
    sellIn: number;
    private quality: number;
    private maxQuality: number = 50

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    updateQuality() {
        this.sellIn = this.sellIn - 1;
        this.decreaseQuality()
    }

    getQuality(): number {
        return this.quality
    }

    destroy(): void {
        this.quality = 0
    }

    increaseQuality(): void {
        if (this.quality < this.maxQuality)
            this.quality++
    }

    decreaseQuality(step: number = 1): void {
        this.quality -= step
        if (this.sellIn < 0) {
            this.quality -= step
        }
        if (this.quality < 0)
            this.quality = 0
    }
}
