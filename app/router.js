import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('tickets');
  this.route('listen');
  this.route('merch');
  this.route('contact');
});

export default Router;
