// console.log("HELLO WORLD");

// var a = 123;

// console.log(a);

// hgf();

// abc();

// function abc() {
//     console.log("This is function ABC");

//     function hgf() {
//         console.log("This is nested function HGF");
//     }
//     hgf();
// }

// function def() {
//     console.log()
// }

// abc();

// var b = 300;

// console.log(b);

// console.log();

// {
//     // Grandparent
//     let a = 100;
//     let b = 200;
//     let c = 300;
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log();

//     {
//         // Parent
//         console.log(a);
//         console.log(b);
//         console.log(c);
//         console.log();

//         {
//             // Child 
//             console.log(a);
//             console.log(b);
//             console.log(c);
//         }
//     }
// }

// function abc() {
//     var a = 100;
//     var b = 200;
//     var c = 300;
//     function def() {
//         var d = 400;
//         ghi();
//         function ghi() {
//             console.log(a);
//             console.log(b);
//             console.log(c);
//             console.log(d+2);
//             // return 1;
//         }
//         // return 1;
//         // ghi();
//     }
//     // return 1;
//     def();
// }
// abc();


// though let can solve the below problem, but we will use something named "closure"
// for(var i=0;i<=5;i++) {
//     function closure() {
//         setTimeout(()=>{
//             console.log(i);
//         },2000);
//     }
//     closure();
// }

// we created a callback
// function xyz(cb) {
//     console.log("I am a XYZ Function");
//     cb();
// }

// function cb() {
//     console.log("i am a CB function");
// }

// xyz(cb);