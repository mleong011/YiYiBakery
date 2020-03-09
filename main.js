// show charset

// waits for html page to load before running ready to listen for button events
if(document.readyState == 'loading'){
   document.addEventListener('DOMContentLoaded', ready);
 }else{
   ready();
 }

 function ready(){


// removes cart items
  var rmcartitems = document.getElementsByClassName('btn-danger'); //looks for buttons with classname danger
  for(var i = 0; i<rmcartitems.length; i++){
    var button = rmcartitems[i];
    button.addEventListener('click',function(event){
      var buttonClicked = event.target;
      buttonClicked.parentElement.parentElement.remove();  //removed cart item with div
      updateCartTotal();
    })
  }

  var quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for(var i = 0; i < quantityInputs.length;i++){
    var input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
  }

  var addToCartButton = document.getElementsByClassName('btn');
  for(var i = 0; i < addToCartButton.length;i++){
    var button = addToCartButton[i];
    button.addEventListener('click', addToCartClicked);
  }


}


  function addToCartClicked(event){
    var button= event.target;
    
  }



 function quantityChanged(event){
  var input = event.target;
  if(isNAN(input.value) || inputvalue <= 5){
    input.value=6;
  }
  updateCartTotal();
}


// adds price of items in cart and updates total
function updateCartTotal(){
  var cartItems = document.getElementsByClassName("cart-items")[0]; //array-first element
  var cartRows = cartItems.getElementsByClassName("cart-row");
  var total = 0;
  for(var i =0; i<cartRows.length; i++){
    var cartRow = cartRows[i];
    var price = cartRow.getElementsByClassName('cart-price')[0];
    var quantity = cartRow.getElementsByClassName('cart-quantity-input')[0];
    var priceValue = parseFloat(price.innerText.replace('$', ' ')); //returns a float to be added to total
    var quantityValue = quantity.value;
    total += (priceValue * quantityValue);
  }
  total = Math.round(total * 100)/100;
  document.getElementsByClassName('cart-total-price')[0].innerText = `$` + total;

}
