class Sharpie {
    constructor(color = '', width = .0, inkAmount = 100.0) {
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount;
    }

    use() {
        this.inkAmount -= 1.0;
    }
}


aSharpie = new Sharpie(color = 'black', width = 12.5);
aSharpie.use();
console.log(aSharpie);