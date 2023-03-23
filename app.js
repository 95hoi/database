const url = 'https://database-2ux.pages.dev/food.json'

async function getData() {
const response = await fetch(url)
const food = await response.json()

console.log(food)
}

getData()