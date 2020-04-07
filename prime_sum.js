function Sieve(n){
  prime = [];
  for (var i=2; i<n+1; i++){
    prime.push(true);
  }
  var p=2;
  while (p*p < n+1){
    if (prime[p] == true){
      for (var j = p*p; j < n+1; j+=p){
        prime[j] = false;
      }
    }
    p+=1;
  }
  for (var k=2; k<=n; k++){
  if (prime[k] && prime[n-k]){
    console.log(k, n-k)
    break
  }
  }
}
var num = window.prompt()
Sieve(num)

