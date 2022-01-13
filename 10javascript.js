// Start HW1
// let person = {
//     name:       'Bob',
//     occupation: 'web developer',
//     hobbies:    'painting',
// };
//console.log(person.name);
//console.log(person.occupation);
//console.log(person.hobbies);
//console.log(person["name"]);
//console.log(person["occupation"]);
//console.log(person["hobbies"]);
// End HW1

// Start HW2
// let obj = {
//     b: 2,
//     a: 1,
//     c: 3,
// };
// console.log(Object.keys(obj).toString().toUpperCase().split(","));
// End HW2

// Start HW3
// function family(quantity, member, location){
//     this.quantity = quantity;
//     this.member = member;
//     this.location = location;
// }
// let myFamily = new family(4,["Dad","Mom", "Me", "Daughter"],"Vietnam")
// console.log(myFamily);
// End HW3

// Start HW4
let obj = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
};
function obj606Change(){
    obj.bar[3].xyz  = 606;
    console.log(obj);
    return obj;
}
obj606Change();
// End HW4