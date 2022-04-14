/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 var nextGreatestLetter = function(letters, target) {
    let res = letters[0]
    for(let i = 0, len = letters.length; i < len; i++) {
        const item = letters[i]
        if(item > target) {
            res = item
            break
        }
    }
    return res
}