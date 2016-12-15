/**
 * Created by mhoe1 on 11/29/2016.
 */
import { Cuisine } from '../../api/cuisine/cuisine.js';

var cuisineSeeds = [
  {name: "Local", flavor: "Savory", vendors: "L&L", location: "Paradise Palms"},
  {name: "Chinese", flavor: "Savory", vendors: "Panda Express", location: "Paradise Palms"},
  {name: "Chinese", flavor: "Savory", vendors: "Stir-Fresh", location: "Campus Center"},
  {name: "Mexican", flavor: "Spicy", vendors: "Gateway Dining", location: "Dorms"},
  {name: "Vietnamese", flavor: "Salty", vendors: "Bale", location: "Hemenway Hall"},
];

if (Cuisine.find().count() === 0) {
  _.each(cuisineSeeds, function(cuisine) {
    Cuisine.insert(cuisine);
  });
}