let lenth=10
for(let i=0;i<lenth;i++)
{
    for (let j = 0; j <lenth-i; j++) {
        process.stdout.write(" ")
    }
    for (let k = 0; k < i; k++) {
        process.stdout.write("$ ")
        
    }
    console.log();
}