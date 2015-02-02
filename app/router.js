import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("categories", function() {
    this.route("show", { path: "/:id" });
  });

  this.route("packages", function() {
    this.route("show", { path: "/:id" });
  });
});

export default Router;