// const leapYears = function(year) {
//     if (year%100 === 0) {
//         if ( year%400 === 0){
//             return true
//         } 
//         return false
//     } 

//     if (year % 4 === 0) {
//         return true
//     } 
        
//     return false;
// };

// // Simplified version
// const leapYears = function(year) {
//     if (year % 4 !== 0) return false;
//     if (year % 100 !== 0) return true;
//     if (year % 400 === 0) return true;
//     return false;
// };

// pro version
const leapYears = year =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// Do not edit below this line
module.exports = leapYears;
