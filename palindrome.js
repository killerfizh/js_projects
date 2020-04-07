function palindrome(stri){
  if (stri == stri.split('').reverse().join('')){
    console.log('yes');
  }
  else{
    console.log('no');
  }
}
stri = 'papap'
palindrome(stri)
