var removeCardItemsButtons = document.getElementsByClassName('card-remover')
console.log(removeCardItemsButtons)
for(var i=0 ; i< removeCardItemsButtons.length ; i++){
    var button = removeCardItemsButtons[i]
    button.addEventListener('click',function(event){
    var buttonClicked =  event.target
    buttonClicked.parentElement.remove()   
    })
}