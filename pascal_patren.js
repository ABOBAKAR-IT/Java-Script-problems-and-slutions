let lenth=10
let arr1=[1,1]
let arr2=[]
let arr3=[1]
let check=0
for(let i=0;i<lenth;i++)
{
    for (let j = 0; j <lenth-i; j++) {
        process.stdout.write(" ")
    }
    for (let k = 0; k < i; k++) {
     
        process.stdout.write(arr1[k]+" ")
       
    }
   for (let l = 0; l < i; l++) {
   if (i>1) {
    let v=arr1[l]+arr1[l+1]
    arr2.push(v)
    //console.log(arr1);
    arr3=[1,...arr2,1]
    arr1=[...arr3]
   }
       
   }
    console.log();
}