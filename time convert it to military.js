function timeConversion(s) {
    // Write your code here
    let a=s[0]+s[1] 
    var tm
    var b
    a=Number(a)
if("P"==s[8])
{
  
   if(a<12){
       a+=12
       b=String(a)
         tm=b+":"+s[3]+s[4]+":"+s[6]+s[7]
    
   }
   else{
       tm=s[0]+s[1]+":"+s[3]+s[4]+":"+s[6]+s[7]
   }
   
}
else if("A"==s[8]){
    if(a==12||a==0){
        
          tm="00:"+s[3]+s[4]+":"+s[6]+s[7]
     
    }
    else{
        tm=s[0]+s[1]+":"+s[3]+s[4]+":"+s[6]+s[7]
    }
}
return tm
}
console.log(timeConversion("00:05:45AM"))