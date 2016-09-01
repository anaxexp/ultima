// import external dependencies
import 'jquery'
import 'bootstrap/dist/js/bootstrap'


// import local dependencies
import Router from './util/router';
import common from './routes/Common';
import home from './routes/Home';
import about_us from './routes/About';
import activity from './routes/Activity';
import add_listing from './routes/Listing';
import cart from './routes/Cart';
import checkout from './routes/Checkout';
import events from './routes/Event';
import categories from './routes/Catagories';
import locations from './routes/Location';
import my_bookings from './routes/Booking';
import tags from './routes/Tags';
import gd_home from './routes/GdHome';
import groups from './routes/Groups';
import info from './routes/Info';
import listing_preview from './routes/Listing';
import listing_success from './routes/Listing';
import location from './routes/Location';
import members from './routes/Member';
import my_account from './routes/Member';
import login from './routes/Login';
import activation from './routes/Activation';
import registration from './routes/Registration';


// Use this variable to set up the common and page specific functions. If you
// rename this variable, you will also need to rename the namespace below.
const routes = {
  // All pages
  common,
  // Home page
  home,
  // About us page, note the change from about-us to about_us.
  about_us,
  // Buddypress Activity page.
  activity,
  // Add Listing
  add_listing,
  // Cart
  cart,
  // Checkout
  checkout,
  // Events
  events,
  // categori
  categories,
  // locations
  locations,
  // My Bookings
  my_bookings,
  // Tags
  tags,
  // gd home
  gd_home,
  // Groups
  groups,
  // Info
  info,
  // Listing Preview
  listing_preview,
  // Listing Success
  listing_success,
  // location
  location,
  // Login
  login,
  // Members
  members,
  // My Account
  my_account,
  // Activation
  activation,
  // Registration
  registration
};

// Load Events
$(document).ready(() => new Router(routes).loadEvents());
