function Basket() {
    this.basketForApples = [];
    this.basketForPear = [];
    this.basketForOrange = [];
    this.basketForAll= [];
    this.addProduct = function (fruct) {
        // if (fruct.constructor.name === 'Apple') {
        //     this.basketForApples.push(fruct);
        // }
        // if (fruct.constructor.name === 'Pear') {
        //     this.basketForPear.push(fruct);
        // }
        // if (fruct.constructor.name === 'Orange') {
        //     this.basketForOrange.push(fruct);
        // }

        this.basketForAll.push(fruct);
    }
    this.clear = function () {
        this.basketForApples = [];
        this.basketForPear = [];
        this.basketForOrange = [];
    }
    this.washFruct = function (fruct) {
        var ob;
        for (let i = 0; i < this.basketForApples.length; i++) {
            ob = this.basketForApples[i];
            ob.isDirty = false;

        }
        for (let i = 0; i < this.basketForPear.length; i++) {
            ob = this.basketForPear[i];
            ob.isDirty = false;

        }
        for (let i = 0; i < this.basketForOrange.length; i++) {
            ob = this.basketForOrange[i];
            ob.isDirty = false;

        }
    }
    this.rottenOrNot = function (object){
        this.basketForApples;
        for (let i = 0; i < this.basketForApples.length; i++) {
            if(this.basketForApples[i].rottedCallback){
                object.rottedCallback();
            }
            
        }

    }
}