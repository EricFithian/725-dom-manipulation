function palindrome (string) {
    // // Create a string that's the same but backwards!
    // let backwardsString = string.split('');
    // let arr = backwardsString.reverse();
    // let opposite = arr.join('');
    // console.log(opposite);
    // // Compare the original and new string
    // return opposite === string;
    // return string === string.split('').reverse().join('');

    for(nonsense = 0; nonsense < string.length / 2; nonsense++) {
        if(string[nonsense] !== string[string.length - 1 - nonsense]) return false;
    }
    return true;
}

console.log(palindrome("racecar"));
console.log(palindrome("something"));