const allProductsContainer = document.querySelector('.all_products')
const allProducts = document.querySelectorAll('.all_product')
const totalAllProducts = allProducts.length;
const allVisibleCount = 1;
let allCurrentIndex = 0;
let allI = 0

const bestProductsContainer = document.querySelector('.best_products')
const bestProducts = document.querySelectorAll('.best_product')
const totalBestProducts = bestProducts.length;
const bestVisibleCount = 1;
let bestCurrentIndex = 0;
let bestI = 0

let year = document.querySelector('.copyright_year')
let date = new Date()

console.log(date.getSeconds())

moveAllProducts()
moveBestProducts()

allProducts.forEach(function(){
    allI += 1
  })
  
  allProductsContainer.style.gridTemplateColumns = `repeat(${allI},16.5rem)`
  
  function moveAllProducts() {
      allCurrentIndex += allVisibleCount;
      
      if (allCurrentIndex + 3 >= totalAllProducts) {
          allCurrentIndex = 0;
        }
        
        allProductsContainer.style.transform = `translateX(${allCurrentIndex * 18.15}rem)`;
}
    
    
bestProducts.forEach(function(){
    bestI += 1
})
    
bestProductsContainer.style.gridTemplateColumns = `repeat(${bestI},16.5rem)`
    
function moveBestProducts() {
    bestCurrentIndex += bestVisibleCount;
        
    if (bestCurrentIndex + 3 >= totalBestProducts) {
        bestCurrentIndex = 0;
    }
        
        bestProductsContainer.style.transform = `translateX(-${bestCurrentIndex * 18.15}rem)`;
        
}
    
    setInterval(moveAllProducts, 2500);
    setInterval(moveBestProducts, 2500);

year.innerHTML = date.getFullYear()

