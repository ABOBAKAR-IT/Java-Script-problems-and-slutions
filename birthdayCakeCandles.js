function birthdayCakeCandles(candles) {
    let l=candles.length
     let bv=candles[0]
     let cv=1
     
     for(let i=0;i<candles.length;i++)
     {
         if(bv<candles[1+i])
         {
             bv=candles[1+i]
             cv=1
         }
       else  if(bv==candles[1+i])
         {
             cv++;
         }
         else{

         }
     }
  return cv
 }
 let a=[3, 3, 14, 3]

 
 console.log(birthdayCakeCandles(a))