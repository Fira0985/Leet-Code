
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    var subString = ""
    var number = 0
    var tracker = 0
    var subStringArray = []

    for (let i = 0; i < s.length; i++) {
        subString = subString + s[i]
        console.log(s[i] + "before entering")
        console.log(subString.length - 1 + "length of sub")

        if (subString.length > 1){
            for (let j = 0; j < (subString.length - 1); j++){ // iterating through the substring except the last character
                console.log(subString[j] + "after entering first")
                if (subString[j] == s[i]){
                    console.log("entered")
                    subString = subString.slice(0,-1)
                    subStringArray.push(subString)
                    subString = ""
                    i = tracker
                    tracker = tracker + 1
                }
            }
        }
    }

    subStringArray.push(subString)

    for (let i = 0; i < subStringArray.length; i++){
        if (subStringArray[i].length > number){
            number = subStringArray[i].length
        }
    }

    return number;
};

var s = "abcadefa"

var value = lengthOfLongestSubstring(s)
console.log(value)