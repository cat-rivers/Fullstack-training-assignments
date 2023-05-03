/* Discounted Price
1. Create variables for 
  -price
  -discount percentage
2. Calculate and console.log:
  -original price
  -discount percentage
  -discounted price
*/


const priceInEuros = 30
const discountPercentage = 15

const discountCalculator = (price, percentage) => {
  const newPrice = price - (price * percentage / 100)
  console.log(
    `
    original price: ${price}€
    discount percentage: ${percentage}%
    discounted price: ${newPrice}€
    `
  )
}


discountCalculator(priceInEuros, discountPercentage)