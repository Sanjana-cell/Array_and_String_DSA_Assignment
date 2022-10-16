var originalString = "sanjana";
var splitString = originalString.split("");
var reverseArr = splitString.reverse();
var reverseString = reverseArr.join("")
console.log(reverseString)
if(originalString == reverseString){
    console.log(originalString + " is Palindrome ");
}else{
    console.log(originalString + " is not Palindrome ")
}