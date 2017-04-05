(function() {

//Declare module for website application 
angular.module('app', []);

//Application page directives
	app.directive('homePage', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/home-page.html'
		};
	});

	app.directive('ourStory', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/our-story.html'
		};
	});

	app.directive('ourWedding', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/our-wedding.html'
		};
	});


	app.directive('travelLogistics', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/travel-logistics.html'
		};
	});

	app.directive('whyMadison', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/why-madison.html'
		};
	});

	app.directive('ourRegistries', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/our-registries.html'
		};
	});

	app.directive('galleryPage', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/gallery-page.html'
		};
	});

//Controller manages viewing array of Madison activities
app.controller('ActivityController', function(){
	this.list = madison;
	
});

//Array of Madison activities for everything-madison.html
var madison = [{
	category: 'Must',
	items: [{
		name: 'Dane County Farmers Market',
		description: 'Saturday 6 am - 1 pm, The capitol square is filled with local farmers selling delicious food. Look for cheese samples - there are dozens of award-winning cheeses! Make it a lunch and hit the food trucks too.',
		link: 'http://dcfm.org/',
		picture: "images.jpg",
		map: 'https://www.google.com/maps/place/Wisconsin+State+Capitol/@43.0747126,-89.3865672,17z/data=!3m1!4b1!4m5!3m4!1s0x880656a97df881e5:0x503974506f6ebae4!8m2!3d43.0747126!4d-89.3843732'
	}, {
		name: 'Old Fashioned',
		description: 'Often cited as the best fried cheese curds in Madison, the Old Fashioned is a one stop place to find all the local treasures.',
		link: 'http://www.theoldfashioned.com/',
		picture: "images.jpg",
		map: 'https://www.google.com/maps/place/The+Old+Fashioned/@43.0763038,-89.3858332,17z/data=!3m1!4b1!4m5!3m4!1s0x88065340a82a181f:0x18a416d89380b324!8m2!3d43.0763038!4d-89.3836392'
	}, {
		name: 'Wisconsin State Capitol',
		description: 'The beautiful building sits right on the square, overlooking both lakes. Visitors can go to a lookout to see the lakes and cities. Hands down, best use of badger statues.',
		link: 'http://tours.wisconsin.gov/',
		picture: "images.jpg",
		map: 'https://www.google.com/maps/place/Wisconsin+State+Capitol/@43.0747126,-89.3865672,17z/data=!3m1!4b1!4m5!3m4!1s0x880656a97df881e5:0x503974506f6ebae4!8m2!3d43.0747126!4d-89.3843732'
	}]
}, {
	category: 'Food',
	items: [{
		name: 'Tipsy Cow',
		description: 'The best burger in Madison - not to mention their Bulgogi fries. Also boasts one of the largest local tap lists.',
		link: 'http://www.tipsycowmadison.com/',
		picture: "images.jpg",
		map: 'https://www.google.com/maps/place/Tipsy+Cow/@43.0747897,-89.3837106,17z/data=!3m1!4b1!4m5!3m4!1s0x8806533fa1794d05:0x8ed80142620cbd69!8m2!3d43.0747897!4d-89.3815166'
	}]
}, {
	category: 'Drinks',
	items: [{
		name: 'Hop Cat',
		description: 'Hopcat boasts 200 taps, and includes many of the Midwest favorites. Look for Surly, New Glarus, and Central Waters in particular. Their crack fries were voted best in the nation.',
		link: 'https://hopcat.com/madison',
		picture: "images.jpg",
		map: 'https://www.google.com/maps/place/HopCat/@43.07499,-89.393844,17z/data=!3m1!4b1!4m5!3m4!1s0x88065336368fdd39:0xe512fb6de3e4776b!8m2!3d43.07499!4d-89.39165'
	}, {
		name: 'The Robin Room',
		description: 'Hands down best use of badgers',
		link: 'http://www.robinroombar.com/',
		picture: "images.jpg",
		map: 'https://www.google.com/maps/place/The+Robin+Room/@43.07499,-89.393844,17z/data=!4m5!3m4!1s0x88065368ff37b581:0xe22809618b8009f8!8m2!3d43.0836191!4d-89.3771361'
}]}];

//Controller manages viewing array of Gallery Photos
app.controller('GalleryController', function(){
	this.photos = gallery;
});

//Array of Photos for gallery-page.html
var gallery = [{
	image: 'images/gallery/Tarrie-12-13.jpg',
	date: 'December 2013',
	location: 'Chicago Kristkindlemarkt',
	description: 'We visited the popular German Christmas market in downtown Chicago'
}, {
	image: 'images/gallery/Tarrie-06-14.jpg',
	date: 'June 2014',
	location: 'Vienna Botanical Gardens',
	description: 'We spent a wonderful day in Vienna for Hunter and Gabrielles wedding'
	}, {
	image: 'images/gallery/Tarrie-08-14.jpg',
	date: 'August 2014',
	location: 'Palisades Park',
	description: 'We hiked the palisades park in Decorah Iowa'
}, {
	image: 'images/gallery/Tarrie-08-14-2.jpg',
	date: 'August 2014',
	location: 'Minnetrista',
	description: 'We hit the gorgeous Minnetrista in Muncie, IN while visiting Toms grandmother'
}, {
	image: 'images/gallery/Tarrie-10-14.jpg',
	date: 'October 2014',
	location: 'Downtown Madison',
	description: 'Halloween - the Dark Nighty Night and Man of Steal hit the town!'
}, {
	image: 'images/gallery/Tarrie-07-15.JPG',
	date: 'July 2015',
	location: 'Antwerp, Belgium',
	description: 'Us being cute in the Antwerp zoo!'
}, {
	image: 'images/gallery/Tarrie-01-16.jpeg',
	date: 'January 2016',
	location: 'Vintage Bar and Grill',
	description: 'Us enjoying a five course meal with friends at the Vintage bar and Grille in Madison'
}, {
	image: 'images/gallery/Tarrie-07-16.jpg',
	date: 'July 2016',
	location: 'Pikes Peak',
	description: 'Nothing like a selfie on the summit of an enormous mountain!'
}];

})();
