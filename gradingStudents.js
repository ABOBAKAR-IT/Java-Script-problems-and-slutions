function gradingStudents(grades) {
    let arr=[]
    let val
    for(let i=0; i<grades.length; i++) {
   if(grades[i]<=100 && grades[i]>95)
   {
      if(100-grades[i]<3){

          val=grades[i]+2
          arr.push(val)
      }
   }
   else if(grades[i]<=95 && grades[i]>90)
   {
    if(95-grades[i]<3){

        val=grades[i]+2
        arr.push(val)
    }
   }
   else if(grades[i]<=90 && grades[i]>85)
   {
    if(90-grades[i]<3){

        val=grades[i]+2
        arr.push(val)
    }
   }
   else if(grades[i]<=85 && grades[i]>80)
   {
    if(85-grades[i]<3){

        val=grades[i]+2
        arr.push(val)
    }
   }
   else if(grades[i]<=80 && grades[i]>75)
   {
    if(80-grades[i]<3){

        val=grades[i]+2
        arr.push(val)
    }
   }
   else if(grades[i]<=75 && grades[i]>70)
   {
    if(75-grades[i]<3){

        val=grades[i]+2
        arr.push(val)
    }
   }
   else if(grades[i]<=70 && grades[i]>65)
   {
    if(70-grades[i]<3){

        val=grades[i]+2
        arr.push(val)
    }
   }
   else if(grades[i]<=65 && grades[i]>60)
   {
    if(65-grades[i]<3){

        val=grades[i]+2
        arr.push(val)
    }
   }
   else if(grades[i]<=60 && grades[i]>55)
   {
    if(60-grades[i]<3){

        val=grades[i]+2
        arr.push(val)
    }
   }
   else if(grades[i]<=55 && grades[i]>50)
   {
    if(55-grades[i]<3){

        val=grades[i]+2
        arr.push(val)
    }
   }
   else if(grades[i]<=50 && grades[i]>45)
   {
    if(50-grades[i]<3){

        val=grades[i]+2
        arr.push(val)
    }
   }
   else if(grades[i]<=45 && grades[i]>40)
   {
    if(45-grades[i]<3){

        val=grades[i]+2
        arr.push(val)
    }
   }  else if(grades[i]<=40 && grades[i]>35)
   {
    if(40-grades[i]<3){

        val=grades[i]+2
        arr.push(val)
    }
   }
   else{

   }}
   return arr
}
let a=[65,38,74]
console.log(gradingStudents(a))