let a = [344,1,2,84,1,3,44,44,6];
for(let i=1;i<a.length;i++)
{
  let j =i;
  while(j>0)
  { 
    if(a[j]<a[j-1])
    {
       let temp = a[j];
       a[j]= a[j-1];
       a[j-1]=temp;
    }
    j--;
  }
}

console.log(a);
