// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) {
        return str[0] === str[1];
    }
    
    const outsideEquals = str[0] === str[str.length - 1];
    if(!outsideEquals) return false;
    
    return isPalindrome(str.substring(1,str.length - 1));
}