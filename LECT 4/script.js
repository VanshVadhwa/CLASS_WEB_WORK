// async function getMyProducts() {
//     try {
//         const responseFromAPI = await fetch('https://dummyjson.com/products')
//         const parsedProductData = await responseFromAPI.json()

//         // Get only the title, description, and price from each product
//         const myProductList = parsedProductData.products.map((singleProduct) => ({
//             productTitle: singleProduct.title,
//             productDescription: singleProduct.description,
//             productPrice: singleProduct.price,
//         }))

//         console.log(myProductList)
//     } catch (fetchError) {
//         console.log('AN ERROR OCCURRED: ', fetchError.message)
//     }
// }

// getMyProducts()




// function greetMyStudents(greetingText, farewellText) {
//     console.log(
//         greetingText +
//             ' ' +
//             this.nameOfStudent +
//             ' studies in class ' +
//             this.classOfStudent +
//             '. ' +
//             farewellText
//     )
// }

// const firstStudent = {
//     nameOfStudent: 'Yash',
//     classOfStudent: 'G4',
// }
// const secondStudent = {
//     nameOfStudent: 'Arnav',
//     classOfStudent: 'G6',
// }

// // CALL EXAMPLES

// greetMyStudents.call(firstStudent, 'Hello', 'See you!')
// greetMyStudents.call(secondStudent, 'Hi', 'Goodbye!')

// // BIND EXAMPLES

// greetMyStudents.bind(firstStudent, 'Hello', 'See you!')
// greetMyStudents.bind(secondStudent, 'Hi', 'Goodbye!')

// // NORMAL FUNCTION

// // function addThreeNumbers(x, y, z) {
// //     console.log(x + y + z)
// // }

// // addThreeNumbers(1, 2, 3)

// // CURRIED FUNCTION

// // function addThreeNumbersCurried(x) {
// //     return function (y) {
// //         return function (z) {
// //             return x + y + z
// //         }
// //     }
// // }

// // console.log(addThreeNumbersCurried(2)(4)(6))

// // EVENT CAPTURING & BUBBLING

// // const myGrandParent = document.getElementById('grandParent')
// // const myParent = document.getElementById('parent')
// // const myChild = document.getElementById('child')

// // myGrandParent.addEventListener('click', () => {
// //     console.log('MY GRANDPARENT CLICKED')
// // })

// // myParent.addEventListener('click', () => {
// //     console.log('MY PARENT CLICKED')
// // })

// // myChild.addEventListener('click', () => {
// //     console.log('MY CHILD CLICKED')
// // })

// // myGrandParent.addEventListener(
// //     'click',
// //     () => {
// //         console.log('MY GRANDPARENT CLICKED')
// //     },
// //     true
// // )

// // myParent.addEventListener(
// //     'click',
// //     () => {
// //         console.log('MY PARENT CLICKED')
// //     },
// //     true
// // )

// // myChild.addEventListener('click', () => {
// //     console.log('MY CHILD CLICKED')
// // })
