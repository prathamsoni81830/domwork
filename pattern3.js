sno=1;
for(var line=5;line>=1;line--){
  sum="";
  for(var no=sno;no>=1;no--){
    sum=sum + no + " ";
  }
  for(space=line-sno;space>=1;space--){
    sum=sum+ " " + " ";
  }
  sno++;
  console.log(sum);
}
for(var line2=4;line2>=1;line2--){
  sum2="";
  for(var no2=line2;no2>=1;no2--){
    sum2=sum2 + no2 + " ";
  }
  for(var space2=5-line2;space2<5;space2++){
    sum2=sum2+ " " + " ";
  }
  console.log(sum2);
}