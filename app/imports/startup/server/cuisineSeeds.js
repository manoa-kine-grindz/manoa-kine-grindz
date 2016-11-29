/**
 * Created by mhoe1 on 11/29/2016.
 */
import { Cuisine } from '../../api/cuisine/cuisine.js';

var cuisineSeeds = [
  {name: "Local", flavor: "Savory", vendors: "L&L"}
];

if (Cuisine.find().count() === 0) {
  _.each(cuisineSeeds, function(cuisine) {
    Cuisine.insert(cuisine);
  });
}