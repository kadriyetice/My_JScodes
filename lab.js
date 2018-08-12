//1-Create 5 variables for 5 vegetables and print them on the console




var veg1,veg2,veg3,veg4,veg5;

veg1="cucumber";
veg2="tomatoes";
veg3="onion";
veg4="pepper";
veg5="carrot";



console.log("list of vegetables");

console.log(veg1);
console.log(veg2);
console.log(veg3);
console.log(veg4);
console.log(veg5);

//2-Create a program that asks user to enter amount for each vegetables and make sure results are number

var veg1Amount,veg2Amount,veg3Amount,veg4Amount,veg5Amount;
veg1Amount=parseInt(prompt("Please enter the amount of "+ veg1));
veg2Amount=parseInt(prompt("Please enter the amount of "+ veg2));
veg3Amount=parseInt(prompt("Please enter the amount of "+ veg3));
veg4Amount=parseInt(prompt("Please enter the amount of "+ veg4)); 
veg5Amount=parseInt(prompt("Please enter the amount of "+ veg5));

//3-Create price for each product

var veg1Price,veg2Price,veg3Price,veg4Price,veg5Price;
veg1Price=2.5;
veg2Price=3;
veg3Price=1.5;
veg4Price=2;
veg5Price=4;

//4-Calculate and show price of each veg with following format
//  1 cucumber is 2.5 Dollar

var total1,total2,total3,total4,total5;
total1=veg1Amount*veg1Price;
total2=veg2Amount*veg2Price;
total3=veg3Amount*veg3Price;
total4=veg4Amount*veg4Price;
total5=veg5Amount*veg5Price;

console.log(veg1Amount+" "+ veg1+" is "+total1+" Dollars");
console.log(veg2Amount+" "+veg2+" is "+total2+" Dollars");
console.log(veg3Amount+" "+veg3+" is "+total3+" Dollars");
console.log(veg4Amount+" "+veg4+" is "+total4+" Dollars");
console.log(veg5Amount+" "+veg5+" is "+total5+" Dollars");

































