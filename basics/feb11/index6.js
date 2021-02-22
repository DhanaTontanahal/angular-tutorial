function firstNonRepeatedCharacter(string) {
    for (var i = 0; i < string.length; i++) {
        var c = string.charAt(i);
        if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
            return c;
        }
    }
    return null;
}

var someString = 'aabcbd';
console.log(firstNonRepeatedCharacter(someString));



// function firstNonRepeatedCharacter(string){
//     for(var i = 0 ; i < string.length ; i++){
//         var charAtI = string.charAt(i);
//         if(string.indexOf(charAtI) == i && string.indexOf(charAtI , i+1) == -1){
//             return charAtI
//         }
//     }
//     return null;
// }