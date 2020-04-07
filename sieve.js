function Sieve(n){
  prime = [];
  for (var i=0; i<n+1; i++){
    prime.push(true);
  }
  var p=2;
  while (p*p <= n){
    if (prime[p] == true){
      for (var j = p*p; j <n+1; j+=2){
        prime[j] = false;
      }
      p+=1
    }
  }
  if (prime[n]){
    console.log("y")
  }
  else{
    console.log("n")
  }
}
Sieve(11)
