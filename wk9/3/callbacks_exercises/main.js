var transactions = [
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'CJ Cherryh',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XS Doodad', price: -0.50 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Basic Gadget', price: -2.00 },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Frederik Pohl',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Clarke Computing',
    items: [
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Neal Stephenson',
    items: [
      { name: 'kilobyte', price: 1024.00 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
    ]
  }
];

// Example

var totalTransactions = transactions.length;

console.log( 'The total number of transactions is:', totalTransactions );

// 1

var onlySales = transactions.filter(each => each.type === 'sale')

var numSales = onlySales.length;

console.log( 'The total number of sales is:', numSales );

// 2

var onlyPurchases = transactions.filter(each => each.type === "purchase");

var numPurchases = onlyPurchases.length;

console.log( 'The total number of purchases is:', numPurchases );

// 3

var onlyCashSales = onlySales.filter(each => each.paymentMethod === 'cash')
var numCashSales = onlyCashSales.length;

console.log( 'The total number of cash sales is:', numCashSales );

// 4

var onlyCreditPurchases = onlyPurchases.filter(each => each.paymentMethod === 'credit')
var numCreditPurchases = onlyCreditPurchases.length;

console.log( 'The total number of credit purchases is:', numCreditPurchases );

// 5

var vendors = onlyPurchases.map(each => each.vendor)
var uniqueVendors = [...new Set(vendors)];

console.log("The unique vendors are:", uniqueVendors.join(", "));

// 6

var customers = onlySales.map(each => each.customer);
var uniqueCustomers = [...new Set(customers)];

console.log("The unique customers are:", uniqueCustomers.join(", "));

// 7

var bigSpenders = onlySales.filter(each => each.items.length >= 5).map(
  each => ({name: each.customer, numItems: each.items.length})
);

console.log( 'The "big spenders" are:', bigSpenders.map(each=>each.name).join(", ") );

// 8

var allSaleTotals = onlySales.map(eachSale => {
  var total = 0;
  eachSale.items.forEach(eachItem => (total += eachItem.price));
  return total;
})

var sumSales = allSaleTotals.reduce( (sum, eachSaleTotal) => {
    return sum + eachSaleTotal
  }
);

console.log( 'The sum of all sales is:', sumSales );

// 9

var allPurchaseTotals = onlyPurchases.map(eachPurchase => {
  var total = 0;
  eachPurchase.items.forEach(eachItem => (total += eachItem.price));
  return total;
});

var sumPurchases = allPurchaseTotals.reduce((sum, eachPurchaseTotal) => {
  return sum + eachPurchaseTotal;
});

console.log( 'The sum of all purhcases is:', sumPurchases );

// 10

var netProfit = sumSales + sumPurchases;

console.log( 'The net profit is:', netProfit );

// 11


var mostItems = onlySales.reduce((max, currentSale) => {
  return currentSale.items.length > max ? currentSale.items.length : max;
}, 0);

console.log( 'The most items sold in a single transaction is:', mostItems );


// 12

var smallestPurchase = onlyPurchases.reduce((currentSmallestPurchase, eachPurchase) => {
  return eachPurchase.items.length < currentSmallestPurchase.items.length ? eachPurchase : currentSmallestPurchase;
}, onlyPurchases[0]);

var sumOfSmallestPurchase = smallestPurchase.items.reduce((sum, eachItem) => {
  return sum + eachItem.price;
}, 0);

console.log( 'The sum of the smallest purchase is:', sumOfSmallestPurchase );
