//Ejemplo de estructura de una función en JavaScript

function suma (a,b){
    return a + b;
}

console.log(suma(4,4));

function calculateDiscountedPrice(price, discountPercentage){
    const discount = (price * discountPercentage) / 100;
    const discountedPrice = price - discount;
    return discountedPrice;
}

const originalPrice = 100;
const discountPercentage = 20;
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage);

console.log(`Original price: $${originalPrice}`);
console.log(`Discounted price: $${finalPrice}`);
console.log(`Final price after discount: $${finalPrice}`);

