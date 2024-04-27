var Car = /** @class */ (function () {
  function Car(title, priceCode) {
    if (this._title === undefined) {
      this._title = null;
    }
    if (this._priceCode === undefined) {
      this._priceCode = 0;
    }
    this._title = title;
    this._priceCode = priceCode;
  }
  Car.prototype.getPriceCode = function () {
    return this._priceCode;
  };
  Car.prototype.setPriceCode = function (arg) {
    this._priceCode = arg;
  };
  Car.prototype.getTitle = function () {
    return this._title;
  };
  Car.MUSCLE = 2;
  Car.ECONOMY = 0;
  Car.SUPERCAR = 1;
  return Car;
})();
Car['__class'] = 'Car';
var Rental = /** @class */ (function () {
  function Rental(car, daysRented) {
    if (this._car === undefined) {
      this._car = null;
    }
    if (this._daysRented === undefined) {
      this._daysRented = 0;
    }
    this._car = car;
    this._daysRented = daysRented;
  }
  Rental.prototype.getDaysRented = function () {
    return this._daysRented;
  };
  Rental.prototype.getCar = function () {
    return this._car;
  };
  return Rental;
})();
Rental['__class'] = 'Rental';
var Customer = /** @class */ (function () {
  function Customer(name) {
    if (this._name === undefined) {
      this._name = null;
    }
    this._rentals = [];
    this._name = name;
  }
  Customer.prototype.addRental = function (arg) {
    /* add */ this._rentals.push(arg) > 0;
  };
  Customer.prototype.getName = function () {
    return this._name;
  };
  Customer.prototype.billingStatement = function () {
    var totalAmount = 0;
    var frequentRenterPoints = 0;
    var rentals = (function (a) {
      var i = 0;
      return {
        next: function () {
          return i < a.length ? a[i++] : null;
        },
        hasNext: function () {
          return i < a.length;
        },
      };
    })(this._rentals);
    var result = 'Rental Record for ' + this._name + '\n';
    while (rentals.hasNext()) {
      {
        var thisAmount = 0;
        var each = rentals.next();
        switch (each.getCar().getPriceCode()) {
          case Car.ECONOMY:
            thisAmount += 80;
            if (each.getDaysRented() > 2)
              thisAmount += (each.getDaysRented() - 2) * 30;
            break;
          case Car.SUPERCAR:
            thisAmount += each.getDaysRented() * 200;
            break;
          case Car.MUSCLE:
            thisAmount += 200;
            if (each.getDaysRented() > 3)
              thisAmount += (each.getDaysRented() - 3) * 50;
            break;
        }
        frequentRenterPoints++;
        if (
          each.getCar().getPriceCode() === Car.SUPERCAR &&
          each.getDaysRented() > 1
        )
          frequentRenterPoints++;
        result +=
          '\t' +
          each.getCar().getTitle() +
          '\t' +
          /* valueOf */ String(thisAmount).toString() +
          '\n';
        totalAmount += thisAmount;
      }
    }
    result +=
      'Final rental payment owed ' +
      /* valueOf */ String(totalAmount).toString() +
      '\n';
    result +=
      'You received an additional ' +
      /* valueOf */ String(frequentRenterPoints).toString() +
      ' frequent customer points';
    return result;
  };
  return Customer;
})();
Customer['__class'] = 'Customer';
var rental1 = new Rental(new Car('Mustang', Car.MUSCLE), 5);
var rental2 = new Rental(new Car('Lambo', Car.SUPERCAR), 20);
var customer = new Customer('Ayran');
customer.addRental(rental1);
customer.addRental(rental2);
console.info(customer.billingStatement());
