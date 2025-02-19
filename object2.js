const product = {
    name: "laptop",
    price: 50000,
    color: "black",
    quantity: 5,

    full: function () {
        return this.name + " " + this.price;
    }
}
console.log(product.full());

//add a method
