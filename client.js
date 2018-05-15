console.log('hello world');

class Order {
  constructor(pizzas) {
    this.pizzas = pizzas;
    this.total = 0;
  }

  addErganerga(pizza) {
    this.pizzas.push(pizza);
  }

  getOrderPrice() {
    this.total = 0;
    this.pizzas.forEach(pizza => {
      pizza.getPrice();
      this.total += pizza.price;
    });
  }
}

class Pizza {
  constructor(type, ingredients) {
    this.type = type;
    this.price = 10;
    this.ingredients = ingredients;
    if (this.ingredients.length == 0) {
      this.ingredients = ['cheese'];
    }
  }

  getPrice() {
    if (this.ingredients.indexOf('cheese') == -1) {
      this.price = 10 + 0.99 * this.ingredients.length;
    } else {
      this.price = 10 + 0.99 * (this.ingredients.length - 1);
    }
  }
}

const pizza1 = new Pizza('Bacon Pepperonni', ['Bacon', 'cheese', 'pepperonni']);
const pizza2 = new Pizza('Bacon Pepperonni', ['Bacon', 'pepperonni']);
const pizza3 = new Pizza('TEST', []);

const order = new Order( [ pizza1, pizza2, pizza3 ] );

order.getOrderPrice();

console.log(order);