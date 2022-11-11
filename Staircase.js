function staircase(n) {
    for(let i=0;i<n;i++)
 {
     for(let j=1;j<n-i;j++)
     {
           process.stdout.write(" ");         
     }
   for(let j=0;j<=i;j++)
     {
           process.stdout.write("#");
           
     }
     console.log();
 }
 }

 staircase(6)