var lno=9;
for(var line=1;line<=5;line++){
  sum="";
  for(var space=line-1;space>0;space--){
    sum=sum + " " + " ";
  }
  for(var no=1;no<=lno;no++){
   sum=sum + no + " ";
  }
  for(var space=line-1;space>0;space--){
    sum=sum + " " + " ";
  }
  lno-=2;
  console.log(sum);
}