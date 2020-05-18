const name = "katy";
let age = 28;
let isWoman = true;
let feature = {
    name: "win7",
    age: 29
};

console.log("in service");
export {
    name,
    age,
    isWoman,
    feature
}

function test(){
    console.log("test");
}

export var m = 10;
export default test;
// export default age;

// function test(){
//     var obj = {dfd: 1221};
//     export default obj;
// }

// export default 12
// test();