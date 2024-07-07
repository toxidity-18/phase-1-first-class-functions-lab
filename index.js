function returnFirstTwoDrivers(driverList) {
  const firstTwo = driverList.slice(0, 2);
  return firstTwo;
}

function returnLastTwoDrivers(driverList) {
  const lastTwo = driverList.slice(-2);
  return lastTwo;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, selectionFunction){
  return selectionFunction(arrayOfDrivers.slice()); 
}
module.exports = {
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
  selectingDrivers,
  createFareMultiplier,
  fareDoubler, 
  fareTripler, 
  selectDifferentDrivers,
};
