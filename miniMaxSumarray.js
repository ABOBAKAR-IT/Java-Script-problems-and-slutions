function miniMaxSum(arr) {
    arr.sort()
    let a=0
    let b=0
    for(let i=0;i<arr.length;i++)
    {
        if(i!=0)
        {
            a+=arr[i]
        }
        if(i!=arr.length-1)
        {
            b+=arr[i]
        }
    }
  console.log(b+" "+a)
  }
  