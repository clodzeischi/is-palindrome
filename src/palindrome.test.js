const {isPalindrome} = require("./palindrome");

describe("Basic functionality", () => {
    test("Does isPalindrome function exist?", () => {
        expect(typeof isPalindrome).toBe("function");
    });
    test("Does isPalindrome accept only one param?", () => {
        expect(isPalindrome.length).toBe(1);
    });
});

describe("Datatype validation", () => {
    types = [NaN, [], true, {}, null, undefined];

    types.forEach((type) => {
        test(`Does it return false when receiving ${type}`, () => {
            expect(isPalindrome(type)).toBe(false);
        });
    });
});

describe("Correctly identify palindromes", () => {
    test("Identifies simple palindromes?", () => {
        expect(isPalindrome("racecar")).toBe(true);
    });
    test("Identifies mixed case palindromes?", () => {
        expect(isPalindrome("racecAr")).toBe(true);
    });
    test("Identifies palindromes with spaces?", () => {
    })
    test("Strips punctuation and white spaces?", () => {
        expect(isPalindrome("  r@aceca*%_r; ")).toBe(true);
    });
    test("Identifies non-palindromes?", () => {
        expect(isPalindrome("not a racecar")).toBe(false);
    });
});