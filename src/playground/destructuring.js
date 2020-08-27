// 
// Object Destructuring
// 

// const person = {
//     name: 'Sahil',
//     age: 17,
//     location: {
//         city: 'Janakpur',
//         temp: 36
//     }
// }

// const { name: firstName = 'Anonymous', age } = person

// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location

// if (temperature && city) {
//     console.log(`Its ${temperature} in ${city}.`)
// }


// const book = {
//     title: 'Do the work',
//     author: 'Steven Pressfield',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName)

// 
// Array Destructuring
// 

const address = ['Janakinagar', 'Janakpur', 'Province 2', '45600']
const [, city, state = 'Nepal'] = address
console.log(`You are in ${city} in ${state} `)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [name, , price] = item
console.log(`A medium ${name} costs ${price}`)