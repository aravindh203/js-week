var date=new Date();
var day=date.getDay();
console.log(day)

if(day==0 || day==6){
	document.write("week end")
}
else{
	document.write("week day")
}
