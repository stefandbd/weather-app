class Car {
  constructor(title, priceCode) {
    this._title = title || null;
    this._priceCode = priceCode || 0;
  }

  getPriceCode() {
    return this._priceCode;
  }

  setPriceCode(arg) {
    this._priceCode = arg;
  }

  getTitle() {
    return this._title;
  }

  static get MUSCLE() {
    return 2;
  }

  static get ECONOMY() {
    return 0;
  }

  static get SUPERCAR() {
    return 1;
  }
}

class Rental {
  constructor(car, daysRented) {
    this._car = car || null;
    this._daysRented = daysRented || 0;
  }

  getDaysRented() {
    return this._daysRented;
  }

  getCar() {
    return this._car;
  }
}

class Customer {
  constructor(name) {
    this._name = name || null;
    this._rentals = [];
  }

  addRental(rental) {
    this._rentals.push(rental);
  }

  getName() {
    return this._name;
  }

  billingStatement() {
    let totalAmount = 0;
    let frequentRenterPoints = 0;
    let result = `Rental Record for ${this._name}\n`;

    for (const rental of this._rentals) {
      let thisAmount = 0;
      switch (rental.getCar().getPriceCode()) {
        case Car.ECONOMY:
          thisAmount += 80;
          if (rental.getDaysRented() > 2)
            thisAmount += (rental.getDaysRented() - 2) * 30;
          break;
        case Car.SUPERCAR:
          thisAmount += rental.getDaysRented() * 200;
          break;
        case Car.MUSCLE:
          thisAmount += 200;
          if (rental.getDaysRented() > 3)
            thisAmount += (rental.getDaysRented() - 3) * 50;
          break;
      }
      frequentRenterPoints++;
      if (
        rental.getCar().getPriceCode() === Car.SUPERCAR &&
        rental.getDaysRented() > 1
      )
        frequentRenterPoints++;
      result += `\t${rental.getCar().getTitle()}\t${thisAmount}\n`;
      totalAmount += thisAmount;
    }

    result += `Final rental payment owed ${totalAmount}\n`;
    result += `You received an additional ${frequentRenterPoints} frequent customer points`;
    return result;
  }
}

const rental1 = new Rental(new Car('Mustang', Car.MUSCLE), 5);
const rental2 = new Rental(new Car('Lambo', Car.SUPERCAR), 20);
const customer = new Customer('Ayran');
customer.addRental(rental1);
customer.addRental(rental2);
console.info(customer.billingStatement());
