// button plus
var btnPlus=document.getElementsByClassName('butt')
for(let i=0;i<btnPlus.length;i++){
    btnPlus[i].addEventListener('click',function(e){
        let qte=e.target.nextElementSibling;
       qte.innerHTML=parseInt(qte.innerHTML)+1;
        totality()
    
    })
}


// button minus
var btnMinus=document.getElementsByClassName('buttMinus')
for(let i=0;i<btnMinus.length;i++){
    btnMinus[i].addEventListener('click',function(e){
    
         let sum=e.target.previousElementSibling;
        if(parseInt(sum.innerHTML)>0){
            sum.innerHTML=parseInt(sum.innerHTML)-1;
        }
        totality()
            
    })
}


//lasommetotal

let prix =document.getElementsByClassName('prix');
let quantity = document.getElementsByClassName('score');
function totality(){
    let total = 0;
for(let i=0;i<prix.length;i++){

total = total + parseInt(prix[i].innerHTML)*parseInt(quantity[i].innerHTML);


}
document.getElementById('total').innerHTML=total;

}





// button like

    var element = document.getElementsByClassName("like");
   
   
    for(let i=0;i<element.length;i++){
        element[i].addEventListener('click',function(e){
     
        element[i].classList.toggle("likered");
   
      })

    }


    //trash button 

    // function Hide() {
    //     var x = document.getElementById("article");
    //     if (x.style.display === "none") {
    //       x.style.display = "block";
    //     } else {
    //       x.style.display = "none";
    //     }
       
    //   }

    var btnt = document.querySelectorAll('.trash');
    

    for(let i=0;i<element.length;i++){
        btnt[i].addEventListener('click',function(e){
     
            btnt[i].parentElement.parentElement.remove();
            totality()
   
      });

    }
    
      