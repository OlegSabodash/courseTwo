


function BasketView() {

    var basketMain = new Basket();
    this.create = document.querySelector('#create');
    this.one = document.querySelector('#one');
    this.two = document.querySelector('#two');
    this.three = document.querySelector('#three');
    this.selected = document.querySelector('#selected');
    this.basket = document.querySelector('#basket');
    this.input = document.querySelector('#input');
    this.inputOne = document.querySelector('#inputOne');
    this.nameFruct = '';
    this.fructsPutInBasket = '';



    this.createFruct = function () {
        var that = this;


        create.addEventListener('click', function (e) {
            that.basket.innerHTML = '';
            that.fructsPutInBasket = '';

            if (selected.value === 'apple') {
                var apple = new Apple();
                apple.name = that.input.value;
                basketMain.addProduct(apple);

            }
            if (selected.value === 'pear') {
                var pear = new Pear();
                pear.name = that.input.value;
                basketMain.addProduct(pear);
            }

            if (selected.value === 'orange') {
                var orange = new Orange();
                orange.name = that.input.value;
                basketMain.addProduct(orange);
            }
            for (let i = 0; i < basketMain.basketForAll.length; i++) {
                that.nameFruct = basketMain.basketForAll[i].constructor.name;

                that.fructsPutInBasket += that.nameFruct + ' ' + basketMain.basketForAll[i].name + '<br>';
            }

            that.basket.innerHTML = that.fructsPutInBasket;

        });
    }




}

