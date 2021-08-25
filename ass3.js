let food=[];
food.push({
  name:"Biryani",
  price:250,
  quantity:1
});
food.push({
  name:"Ice-Cream",
  price:80,
  quantity:1
});
food.push({
  name:"paneer-butter-masala",
  price:300,
  quantity:1
});
for(let i=0;i<food.length;i++)
console.log("the cost of "+food[i].quantity+" "+food[i].name+" is "+food[i].price);
