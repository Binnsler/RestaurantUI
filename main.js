// Drinks

var Drink = function(name, description, price, ingredients){

	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;

}

Drink.prototype.create = function(){

	// return $('<div class="menu-item"></div>').text(this.name +  ' ' + this.description + ' ' + this.price + ' ' + this.ingredients);

}


// Plates 

var Plate = function(name, description, price, ingredients){

	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;

}

Plate.prototype.create = function(){

	// return $('<div class="menu-item"></div>').text(this.name + ' ' + this.description + ' ' + this.price + ' ' + this.ingredients)

}


// Order

var Order = function(plates){

	this.plates = plates;

}

Order.prototype.create = function(){

	// return $('<div class="order-container"></div>')

}



// Menu

var Menu = function(plates){

	this.plates = plates;

}

Menu.prototype.create = function(){


	this.plates.forEach(function(element){

		// var itemParagraph = $('<p class="item-paragragh"></p>')
		var itemName = $('<p class="item-paragragh"></p>').text(element.name)
		var itemDescription = $('<p class="item-paragragh"></p>').text(element.description)
		var itemIngredients = $('<p class="item-paragragh"></p>').text(element.ingredients)
		var itemPrice = $('<p class="item-paragragh"></p>').text(element.price)
		var itemButton = $('<button class="price-button">Add to order</button>')

		var menuContainer = $('<div class="menu-container"></div>').append(itemName, itemDescription, itemIngredients, itemPrice, itemButton)

		$('.restaurant-container').append(menuContainer);

	})

}

// Restaurants

var Restaurant = function(name, description, menu){

	this.name = name;
	this.description = description;
	this.menu = menu;
}

Restaurant.prototype.create = function(){

	var restaurantContainer = $('<div class="restaurant-container"></div>')
	return restaurantContainer;

}

// Customer

var Customer = function(dietaryPreference){

	this.dietaryPreference = dietaryPreference;


}

Customer.prototype.create = function(){

	var string = 'This customer is: ' + this.dietaryPreference;
}

 // Pseudocode

 // When the browser loads, a restaurant name is rendered inside a container. Within this container
 // each menu item renders its own container/div, which contains paragraph tags and a button.
 // Clicking on a button adds its respective menu item to the order, which tallies the price.

// Below are the objects objects
var whiskeyDrink = new Drink('Whiskey Drink', 'Whiskey on the rocks with lime.', 3.50, ['whiskey', 'ice', 'lime'])
var sodaDrink = new Drink('Soda', 'Just a fresh fountain soda with ice.', 1.50, ['soda', 'ice'])
var guacamolePlate = new Plate('Guacamole', 'Our fresh homemade guacamole.', 6.75, ['avocado', 'citrus', 'tomato', 'salt', 'onion'])
var burritoPlate = new Plate('Burrito', 'A delightful vegan burrito for your taste buds.', 3.50, ['flour', 'rice', 'beans', 'onions', 'citrus', 'lettuce', 'tomato'])

var lacasitaRestaurant = new Restaurant('La Casita','Your neighbordhood pupusa place.', lacasitaMenu)
var lacasitaMenu = new Menu([whiskeyDrink, sodaDrink, guacamolePlate, burritoPlate])

// $('body').append(lacasitaRestaurant.create())
// $('body').append(whiskeyDrink.create())
// $('body').append(sodaDrink.create())
// $('body').append(guacamolePlate.create())
// $('body').append(burritoPlate.create())

$(document).on('ready', function(){
	// Render restaurantContainer and restaurant.name within it
	// For each restaurant.menu item, we append the plate to the restaurantContainer
	// When appending a plate, we create a menu-item div, and within this div we append
	// <p> tags for plate.name, plate.description, plate.price, plate.ingredients, AND plate.button
	// When a button is clicked, it adds this.price to the order total price and render it to the order container

	$('body').prepend(lacasitaRestaurant.create());


	$('.restaurant-container').append(lacasitaMenu.create());

	$('body').append('<div class="order-container"></div>');

	var total = 0.00;


	$('.order-container').append('<div> Total : $ <span class="total">' + total + '</span></div>');

	$('body').on('click', '.price-button', function(){
		var orderPrice = Number($(this).prev().text());
		total += orderPrice;
		console.log(total)
		$('.total').text(total)
	})


})



// container.append($('<p></p))







