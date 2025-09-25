
function isPalindrome(input) {

    // If input is not a string, stop right away.
    if (typeof input !== "string") return false;

    const noPunctuation = input.replace(/[^\w\s]|_/g, '');
    const noSpaces = noPunctuation.replace(/\s/g, '');
    const toLowerCase = noSpaces.toLowerCase();

    // Simple check char-by-char if it's a pali.
    for (let i = 0; i < toLowerCase.length/2; i++) {

        // If we have any mismatch - stop right away.
        if (toLowerCase.charAt(i) !== toLowerCase.charAt(toLowerCase.length-i-1)) return false;
    }

    // If we made it all the way here, it's a palindrome.
    return true;
}


module.exports = { isPalindrome };