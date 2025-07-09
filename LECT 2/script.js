// // console.log("SCRIPT START");

// // setTimeout(()=> {
// //     console.log("I am going to restaurent");
// // },4000);

// // setTimeout(()=>{
// //     console.log("I am checking the menu for ordering");
// // },3000);

// function walkInRestaurent(cb) {
//     console.log("I am walking inside the restaurent");
//     setTimeout(cb,3000);
//     // menuCheck(cb);
// }

// function menuCheck(cb) {
//     console.log("I am checking the menu");
//     setTimeout(cb,2000);
//     // foodOrder(cb);
// }

// function foodOrder(cb) {
//     console.log("I am ordering the food");
//     setTimeout(cb,6000);
//     // havingLunch(cb);
// }

// function havingLunch(cb) {
//     console.log("I am having the food");
//     setTimeout(cb,8000);
//     // payBill(cb);
// }

// function payBill(cb) {
//     console.log("I am paying the bill");
//     setTimeout(cb,3000);
//     // walkAwayFromRes(cb);
// }

// function walkAwayFromRes() {
//     console.log("I am walking away from restaurent");
// }

// // walkInRestaurent(cb);

// function cb() {
//     console.log();
// }

// walkInRestaurent(()=>{
//     menuCheck(()=>{
//         foodOrder(()=>{
//             havingLunch(()=>{
//                 payBill(()=>{
//                     walkAwayFromRes();
//                     console.log("SCRIPT END")
//                 })
//             })
//         })
//     })
// })

// let arr1 = [1,2,3,4,5];

// function doubleArrVal(arr) {
//     let output = [];

//     for(let i=0;i<5;i++) {
//         output.push(arr[i]*2);
//     }

//     return output;
// }

// let output = doubleArrVal(arr);

// for(let i=0;i<5;i++) {
//     console.log(output[i]);
// }

// // prototype learning
// Array.prototype.doubleArrVal = function(data) {
//     let output = [];

//     for(let i=0;i<this.length;i++) {
//         output.push(this[i]*2);
//     }

//     return output;
// }

// const output = arr1.doubleArrVal(arr1);

// console.log(output);

// // for(let i=0;i<output.length;i++) {
// //     console.log(output[i]);
// // }





