// let name = 'Ivan'
// var name2 = "John 'Drago"
// var name2 = 'Elena'
// const name3 = `Jane` 
// const hello = "Привет"
// console.log(hello + name)
// console.log(hello + name2) 
// console.log(`${hello} ${name3}!!!!!`) 

const array = ['John','Ivan','Jane']
const hello = ['Hello','Привет']

for (let helloindex = 0; helloindex < hello.length; helloindex++) {

for (let index = 0; index < array.length; index++) {
    console.log(hello[helloindex] + ' ' + array[index])
}
}

