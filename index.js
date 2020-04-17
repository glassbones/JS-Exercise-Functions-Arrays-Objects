// ⭐️ Example Challenge start ⭐️

function addNumbers(num1, num2) {
  return num1 + num2;
}
/**
 * ### Challenge `sayGoodbye` 
*/
function sayGoodbye(name) {
  return "Goodbye, " + String(name) + ". Have a great day."
}
/**
 * ### Challenge `temperatureCtoF`
*/
function temperatureCtoF(celsius) {
  return Math.round((celsius/5)*9+32)
}
/**
 * ### Challenge `temperatureInF`
*/
function temperatureInF(value, char) {
  /* code here */
  if (char === 'C'){
    return String(Math.round((value/5)*9+32)) + "F";
  }
  else{
    return String(value) + "F";
  }
}
/**
 * ### Challenge `makePersonObject`
*/
function makePersonObject(id, name, email) {
  let obj = {};
  obj.id = id;
  obj.name = name;
  obj.email = email;
  return obj;
}
/**
 * ### Challenge `getName`
*/
function getName(obj) {return `Hello, my name is ${obj.name}.`}
/**
 * ### Challenge `appleIndex`
*/
function appleIndex(arr) {
  let i = arr.length;
  for (i>0; i--;){
    if (arr[i] === 'apple'){
      return i}; 
  }
}
/**
 * ### Challenge `isItAnApple`
 */
function isItAnApple(arr) {
  let i = arr.length;
  for (i>0; i--;){
    (arr[i] === 'apple') ? arr[i] = true : arr[i] = false ;
  }  return arr;
}
/**
 * ### Challenge `getCarInfoByIndex`
*/
function getCarInfoByIndex(inv, index) {
  return `This is a ${inv[index].car_make} ${inv[index].car_model}`  
}
/**
 * ### Challenge `getLastCarInfo`
 */
function getLastCarInfo(arr) {
  let i = arr.length;
  for (i > 0; i--;){
    return `This is a ${arr[i].car_make} ${arr[i].car_model}`
  }
}
/**
 * ### Challenge `getModelYears`
 */
function getModelYears(arr) {
  let i = arr.length;
  let newArr = [];
  for (i>0; i--;){
    newArr[i] = arr[i].car_year;
  }   return newArr;}
/**
 * ### Challenge `getCarInfoById`
 */
function getCarInfoById(inv, index) {
  return `This is a ${inv[index-1].car_make} ${inv[index-1].car_model}`}
/**
 * ### Challenge `getOlderCars`
 */
function getOlderCars(arr, maxYear) { 
 let i = arr.length;
 let newArr = [];

 for (i>=0; i--;){
   if ( arr[i].car_year <= maxYear ){
     newArr.unshift(arr[i]);
   }
 } return newArr;
}
/**
 * ### Challenge `getGermanCars`
*/
function getGermanCars(arr) {
  let i = arr.length;
  let newArr = [];

  for (i>=0; i--;){
    if ( arr[i].car_make === `Audi` || arr[i].car_make === `Mercedes-Benz` ){
      newArr.unshift(arr[i]);
    }
    else if (arr[i].car_make === `BMW` || arr[i].car_make === `Volkswagen`){
      newArr.unshift(arr[i]);
    }
  }
  return newArr;
}
/**
 * ### Challenge `carMaker`
 * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
 * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
 * 
 * @instructions
 * This function takes a single odometer argument (a number) and returns an object.
 * The returned object has the following characteristics:
 *     it has an `odometer` property that contains the argument passed in.
 *     it has a `drive` method that takes a distance as its argument, and
 *         (1) causes the odometer in the object to be increased by the distance,
 *         (2) returns the updated value of the `odometer`.
*/
function carMaker(cb){
  this.odometer = cb;
  this.drive = function(distance){
    carMaker(distance + this.odometer);
     return this.odometer;}
     
  return this;
}




/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (addNumbers) { module.exports.addNumbers = addNumbers }
  if (sayGoodbye) { module.exports.sayGoodbye = sayGoodbye }
  if (temperatureCtoF) { module.exports.temperatureCtoF = temperatureCtoF }
  if (temperatureInF) { module.exports.temperatureInF = temperatureInF }
  if (makePersonObject) { module.exports.makePersonObject = makePersonObject }
  if (getName) { module.exports.getName = getName }
  if (appleIndex) { module.exports.appleIndex = appleIndex }

  if (isItAnApple) { module.exports.isItAnApple = isItAnApple }
  

  
  if (carMaker) { module.exports.carMaker = carMaker }
  if (getCarInfoByIndex) { module.exports.getCarInfoByIndex = getCarInfoByIndex }
  if (getLastCarInfo) { module.exports.getLastCarInfo = getLastCarInfo }
  if (getCarInfoById) { module.exports.getCarInfoById = getCarInfoById }

  if (getModelYears) { module.exports.getModelYears = getModelYears }
  if (getOlderCars) { module.exports.getOlderCars = getOlderCars }
  if (getGermanCars) { module.exports.getGermanCars = getGermanCars }
 
}