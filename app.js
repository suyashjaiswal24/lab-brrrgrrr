// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 170;
let price = document.querySelector(".price-details");

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
    document.querySelector(".patty").style.display = "inherit";
  } else {
    patty.style.display = "none";
    document.querySelector(".patty").style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");
  if (state.Cheese) {
    cheese.style.display = "inherit";
    document.querySelector(".cheese").style.display = "inherit";
  } else {
    cheese.style.display = "none";
    document.querySelector(".cheese").style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomato = document.querySelector("#tomato");
  if (state.Tomatoes) {
    tomato.style.display = "inherit";
    document.querySelector(".tomato").style.display = "inherit";
  } else {
    tomato.style.display = "none";
    document.querySelector(".tomato").style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onion = document.querySelector("#onion");
  if (state.Onions) {
    onion.style.display = "inherit";
    document.querySelector(".onion").style.display = "inherit";
  } else {
    onion.style.display = "none";
    document.querySelector(".onion").style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce");
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
    document.querySelector(".lettuce").style.display = "inherit";
  } else {
    lettuce.style.display = "none";
    document.querySelector(".lettuce").style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  if(state.Patty){
    wholeWheatBun += ingredients.Patty;
  }
  else{
    wholeWheatBun -= ingredients.Patty;
  }
  price.innerHTML = "INR " + wholeWheatBun
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  if(state.Cheese){
    wholeWheatBun += ingredients.Cheese;
  }
  else{
    wholeWheatBun -= ingredients.Cheese;
  }
  price.innerHTML = "INR " + wholeWheatBun
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  if(state.Tomatoes){
    wholeWheatBun += ingredients.Tomatoes;
  }
  else{
    wholeWheatBun -= ingredients.Tomatoes;
  }
  price.innerHTML = "INR " + wholeWheatBun
  renderAll();
};


// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  if(state.Onions){
    wholeWheatBun += ingredients.Onions;
  }
  else{
    wholeWheatBun -= ingredients.Onions;
  }
  price.innerHTML = "INR " + wholeWheatBun
  renderAll();
};


// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  if(state.Lettuce){
    wholeWheatBun += ingredients.Lettuce;
  }
  else{
    wholeWheatBun -= ingredients.Lettuce;
  }
  price.innerHTML = "INR " + wholeWheatBun
  renderAll();
};


//Challenge 1 - Add/Remove the class active to the buttons based on state


//Challenge 2 - Render only the items selected in the ingredients board based on the state


//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

