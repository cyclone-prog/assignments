let testValue = 1234;
let array = Array.from(String(testValue));
let revArray;
for(let i = array.length-1;i>=0;i--){
 console.log(array[i]);
revArray= array[i];
}
console.log(revArray)