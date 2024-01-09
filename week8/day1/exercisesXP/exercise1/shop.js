const products = require('./products');

function findProductByName(productName) {
    const product = products.find(item => item.name === productName);
    return product;
}

const product1 = findProductByName('iPhone');
const product2 = findProductByName('Galaxy');
const product3 = findProductByName('Xiaomi');

// printing

console.log('Product1:', product1);
console.log('Product2:', product2);
console.log('Product3:', product3);

















