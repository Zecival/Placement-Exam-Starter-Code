// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Christian Perez" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 1
let x = document.getElementById('qty-gb')
let y = document.getElementById('qty-cc')
let z = document.getElementById('qty-sugar')
let a = document.getElementById('qty-total')
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    gb = gb + 1
    document.getElementById('qty-gb').innerHTML = gb
    console.log(gb)
    console.log(x)
    document.getElementById('qty-total').innerHTML = total
    total = gb + cc + sugar + 1
})

document.getElementById('add-cc').addEventListener('click', function() {
    cc = cc + 1
    document.getElementById('qty-cc').innerHTML = cc
    console.log(cc)
    console.log(y)
    document.getElementById('qty-total').innerHTML = total
    total = cc + gb + sugar + 1
})

document.getElementById('add-sugar').addEventListener('click', function() {
    sugar = sugar + 1
    document.getElementById('qty-sugar').innerHTML = sugar
    console.log(sugar)
    console.log(z)
    document.getElementById('qty-total').innerHTML = total
    total = sugar + gb + cc + 1
})

document.getElementById('minus-gb').addEventListener('click', function() {
    gb = gb - 1
    document.getElementById('qty-gb').innerHTML = gb
    console.log(gb)
    console.log(x)
    document.getElementById('qty-total').innerHTML = total
    total = sugar + gb + cc - 1
})

document.getElementById('minus-cc').addEventListener('click', function() {
    cc = cc - 1
    document.getElementById('qty-cc').innerHTML = cc
    console.log(cc)
    console.log(y)
    document.getElementById('qty-total').innerHTML = total
    total = sugar + gb + cc - 1
})

document.getElementById('minus-sugar').addEventListener('click', function() {
    sugar = sugar - 1
    document.getElementById('qty-sugar').innerHTML = sugar
    console.log(sugar)
    console.log(z)
    document.getElementById('qty-total').innerHTML = total
    total = sugar + gb + cc - 1
})
