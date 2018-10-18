
function Engine(parOne, parTwo, parThree) {
    this.power = parOne;
    this.capacity = parTwo;
    this.hasTurbo = parThree;

}

function Car(model, weight, par) {
    this.model = model;
    this.weight = weight;
    this._engine = par;
    this.hasTurboEngine = function () {
        if (this._engine.hasTurbo === true){
            console.log(true);
        }
        if (this._engine.hasTurbo === false){
            console.log(false);
        }
    }
}


var engine1 = new Engine(111, 1.01, true);
var engine2 = new Engine(222, 2.02, false);
var engine3 = new Engine(333, 3.03, true);
var engine4 = new Engine(444, 4.04, false);

var car1 = new Car('reno', 11111, engine1);
var car2 = new Car('bmw', 22222, engine2);
var car3 = new Car('mercedes', 33333, engine3);
var car4 = new Car('ford', 44444, engine4);


car1.hasTurboEngine();

car2.hasTurboEngine();

car3.hasTurboEngine();

car4.hasTurboEngine();