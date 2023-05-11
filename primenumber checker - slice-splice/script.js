// prime number checker
function test(num){
if(num<=1){
    return false;
}
for(let i=2;i<num;i++){
    if(num%i===0){
        return false;
    }
}
return true;
}
test(13)?console.log('prime number'):console.log('not prime number');
//slice
    let arr = ['will smith','harry prashad','john prashad'];
    const maxLength = 3;
    for(let i= 0;i<arr.length;i++){
        if(arr[i].length>maxLength){
            arr[i]=arr[i].slice(0,maxLength)+'...';
            
        }

       
    }
    console.log(arr)
// splice
let test1 = ['roshan pujara','ram prashad','sham prashad'];
const maxlen=3;
for(let i= 0;i<maxlen;i++){
      if(test1[i].length>maxlen){
             test1[i]=test1[i].splice(4,maxlen,'....');
      }}
    //   console.log(test1)
// box with dom