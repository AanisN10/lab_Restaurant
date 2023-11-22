const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype
ScranAdvisor.prototype.canCountRestaurants = function(restaurant){
    return this.restaurants.length;
}

ScranAdvisor.prototype.findRestaurantByFullName = function(nameOfRestaurant) {

    // for (let i = 0; i < this.restaurants.length; i++) {
    //     if(this.restaurants[i].name == nameOfRestaurant){
    //         return this.restaurants[i];
    //     }
    // }
    // return null;

    // refactored code

    return this.restaurants.find((restaurants)=> restaurants.name === nameOfRestaurant)

};



ScranAdvisor.prototype.findNameOfAllRestaurants = function (){
    return this.restaurants.map((restaurants)=>restaurants.name);
};

ScranAdvisor.prototype.findGlasgow = function(locationName){
    return this.restaurants.filter((restaurants) => restaurants.location.town === locationName); 
};



module.exports = ScranAdvisor;