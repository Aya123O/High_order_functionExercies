/*****************High Order Function******************** */
/*Assigment=>1*/
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let result=mix.map(function(i){
  return isNaN(parseInt(i))?i:"";
}).reduce(function(acc,curr){
  return `${acc}${curr}`;
});
console.log(` the Answer IS ${result}`);
//////////////////////////////////////////////////////////////////////////////////////////////////
/*Assigment=> 2 */
let myString = "EElllzzzzzzzeroo";

let result2=myString.split("").filter(function(e,i){
   return myString.split("").indexOf(e)===i ;
}).join("");
console.log(result2);
/************************************************************************************************/
/*Assigment =>3 */
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let result3=[].concat.apply([],myArray).reduce(function(acc,curr){
  return `${acc}${curr}`
})
console.log(result3);
/********************************************************************************************* */
/*Assigment=>4 */
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let result4=numsAndStrings.filter(function(ele){
  return !isNaN(parseInt(ele));
}).map(function(ele){
  return -ele;
})
console.log(result4);// [-1, -10, 10, 20, -5, -3]
///////////////////////////////////////////////////////////////////////////////////////////////////
/*Assigment =>5 */
let nums = [2, 12, 11, 5, 10, 1, 99];
let result5=nums.reduce(function(acc,curr){
   if(curr%2!=0){
    return curr+acc;
   }else{
    return acc*curr ;
   }

},1)
console.log(result5);// 500
////////////////////////////////////////////////////////////////////////////////////////////////////////






