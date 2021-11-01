console.log('work like hell .............');
const students = [];
const addStudent = (stname, stage, stdatesWhenAbsent, staddress) => {
    const student = {
        name: stname,
        age: stage,
        Whenabsent: stdatesWhenAbsent,
        address: staddress
    }
    students.push(student);
};
addStudent('john', 23, [5, 9], {
    street: '22 kokuji',
    pincode: '1234',
    city: 'tokyo'
});
addStudent('john', 23, [5, 9], {
    street: '22 kokuji',
    pincode: '1234',
    city: 'tokyo'
});
console.log(JSON.stringify("Total student " + students.length));
console.log(JSON.stringify(`Total student :${students.length}`));
console.log(JSON.stringify(students));
const a = 10;
const b = 5;
let result = a > b && a || b;
console.log(result);
result = a < b && a || b;
console.log(result);

const sum = (a, b) =>
    a + b;

console.log(sum(2, 3));
let x = 2;
let y = 2;
x++;
console.log(x);
// console.log(x++);
//  console.log(x++);
if (x === y) {
    console.log(x === y);
} else {
    console.log(typeof(x !== y));
}
//modulus
console.log(8 % 2); // 0
console.log(5 % 4); // 1

//1
console.log(Math.pow(5, 2)); // 25 
//2 
console.log(typeof(2 ** 4));
console.log(1 + 1);
console.log(+"p");
console.log(typeof(NaN));
console.log(1 === "1");
console.log(1 === 1);
//オブジェクトの場合は異なると
//同じオブジェクトの場合のみtrue
const obj1 = {};
const obj2 = {};
console.log(obj1 === obj2); //false 
console.log(obj1 === obj1); //true 
console.log(1 !== 1);
console.log(1 !== 2);
console.log(0 === false);
console.log(1 == "1");
console.log(0 == null);
console.log(9 & 15);
const str = "name";
if (str.includes("n")); {
    console.log("n が見つかりました");
}
console.log(8 % 2); //余りを出す出す
console.log(7 % 2);
console.log(Math.pow(2, 4)); //2の４乗

//OBj are not equal 
const objA = {};
const objB = {};
if (objA === objB) {
    console.log("Both bbjects are  equal");
} else {
    console.log("Both object arenot equal");
}
if (objA !== objB) {
    console.log("Both object arenot equal");
} else {
    console.log("Both bbjects are  equal");
}

//Array
const array = [1, 2];
console.log(array[0]);

//Object : In object there is a key and value 
//    const A={"key":"value"};
//プロパティ名`key` の値を、変数`key`として定義
　
const obj = { "name": "kamal" };
const myname = obj.name;
console.log(myname);
console.log(typeof(myname));
console.log(typeof(obj));
/* 
falsyな値とは次の7種類の値のことを言います。

false
undefined
null
0
0n
NaN
""（空文字列）
*/
console.log(!false); // => true
console.log(!true); // => false
console.log(Math.pow(2, 4)); //16