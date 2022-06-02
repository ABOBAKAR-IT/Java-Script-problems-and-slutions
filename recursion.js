function sum(n){
    let s=0;
    for(let i=1;i<=n;i++){
       s=s+i;
    }
    return s;
}
console.log(sum(5));

/*****Recursion */

function sum2(n){
    let s=0;
   if(n<=1)
   {
       return 1;
   }
   else{
       return n+sum2(n-1)
   }

}
console.log(sum2(5));