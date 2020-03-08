// show charset

console.log(rmcartitems);

var rmcartitems = document.getElementsByClassName('danger'); //looks for buttons with classname danger
for(var i = 0; i<rmcartitems.length; i++){
  var button = rmcartitems[i];
  button.addEventListener('click',function(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();  //removed cart item
  })
}

console.log(rmcartitems);
