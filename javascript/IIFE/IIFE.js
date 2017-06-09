let memorial_card = {};

// Module Pattern
// In fact, .js files are not independent in front-end development
// IIFE is used to create module in javascript environment by not putting everything in global namespace
// To prevent global namspace pollution, use IIFE patterns
let another_memorial_card = (function(){
  return {};
}());
