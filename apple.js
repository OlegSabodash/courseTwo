function Apple(parOne, parTwo, callback) {
    this.name = parOne;
    this.isWinter = parTwo;
    this.isDirty = true;
    this.isRotten = false;
    this.rottedCallback = callback;
}