// function tikla(){
//     var sayi=document.getElementById("button1").innerText;
// console.log(sayi);}



// function tikla() {

//    var sayi= document.getElementById("button1").innerHTML;

//    console.log(sayi);




// }


// document.getElementById("result").value=sayi;

// const buttons = document.querySelectorAll(".button");
// buttons.forEach(myfunction)


// buttons.onclick=function myfunction(buton){
//     console.log(buton.innerText);
//     myfunction();
//     document.getElementById("result").innerHTML;
// }
// const buttons = document.querySelectorAll(".button");

//         function myfunction(button) {
//             var result = document.getElementById("result");
//             console.log(button.innerText);
//             result.innerHTML = button.innerText;
//         }

//         buttons.forEach(function(button) {
//             button.addEventListener("click", function() {
//                 myfunction(button);
//             });
//         });



























//butonları inputa yazdırdım
let myFunction = () => {
    var result = document.("result"); 
    console.log(result);
    var clickedButton = event.target; 
    var buttonValue = clickedButton.innerText;
    ikinci=result.value+=buttonValue;

}   

let x
//ilk sayıyı çekti
let inp = (event) => {
    x = event.target.value
}
let day
;
let fn = (v) => {
    
    var ikinci;
    // var deneme;
    
    //let inputValue = x;
    switch (v) {
        case "+":
            onclick=document.getElementById('result').value = '';//ilk girilen sayıyı gizledim
            console.log(x);
            var dene=(document.getElementById('result').value);
           
            day = x+dene;
        
            break;
        case "-":
            day = deneme - ikinci;
            onclick=document.getElementById('result').value = '';
            break;
        case "*":
            day = deneme * ikinci;
            onclick=document.getElementById('result').value = '';
            break;
        case "/":
            if (deneme !== 0) {
                day = deneme / ikinci;
                onclick=document.getElementById('result').value = '';
            } else {
                alert("0'a bölemezsin");
                onclick=document.getElementById('result').value = '';
            }
            break;
        case "=":
            
            break;
        default:
            alert("geçersiz işlem seçtinin");
        // if(document.getElementById('button=').clicked == true){
        //     console.log(day);
        // }
    }
}

































































// if (buttonValue === "=") {
//     result.value = sonuc;

// } 
// if (buttonValue === "=") {
    
//     result.value = sonuc;
// //     if(document.getElementById("button+")){
// //         buttonValue=clickedButton+clickedButton;
        

// //     }
// //     result.value=buttonValue;
    
// // } else {
// //     result.value += buttonValue; 
// } 
// var buttonsvalue =clickedButton.innerText;
// var islemler;
//result.value += buttonValue; 
//result.value += buttonsvalue; 
// if(buttonValue=="="){
    
//     // islemler=buttonValue+buttonsvalue;
//     result.value = islemler;
// }
// else{
//     alert("yanlış işlem yaptınız!!!");
// }
/*
switch("result"){
    
    case "+":
        result.value += buttonsvalue;
        islemler=buttonValue+buttonsvalue;
        result.value = islemler;
    break;

}
*/


//     function(button) {
//     button.addEventListener("click", function() {
//     var number = button;
    
//     input.value = number.innerHTML;
//     });
//  });


//    var sayi1= document.getElementById("button2").innerHTML;
//    var sayi2= document.getElementById("button3").innerHTML;
//    var sayi3= document.getElementById("button4").innerHTML;
//    var sayi4= document.getElementById("button5").innerHTML;
//    var sayi5= document.getElementById("button6").innerHTML;
//    var sayi6= document.getElementById("button7").innerHTML;
//    var sayi7= document.getElementById("button8").innerHTML;
//    var sayi8= document.getElementById("button9").innerHTML;
//    var sayi9= document.getElementById("button0").innerHTML;
//    var yazi=document.getElementById("result");
//    yazi.value=sayi.innerHTML;
//     console.log(sayi);
//     console.log(sayi1);
//     console.log(sayi2);
//     console.log(sayi3);
//     console.log(sayi4);
//     console.log(sayi5);
//     console.log(sayi6);
//     console.log(sayi7);
//     console.log(sayi8);
//     console.log(sayi9);}


// document.getElementById("button1").click("onclick",click);

// var sayi=document.getElementById("button2").innerHTML;
// console.log(sayi);


/*


var buttons = document.getElementById("button1");
var buttonlar = document.getElementsByClassName("button");
var input = document.getElementById("result");
// */
// document.addEventListener("DOMContentLoaded".function())
// {
//     var yazi;
//     //var input = document.getElementById("result");
//     var sayilar = document.getElementById("button1").value;
//     console.log(sayilar);

//     document.getElementById("clicker").onclick = function() {

//         //var buttonlar = document.getElementsByClassName("button");

//         switch("sayilar") {
//             case "one":
//                 yazi="1";
//             break;
            
//         }
//         document.getElementById("result").innerHTML = yazi;
//     }
// }



// Her bir button elementine tıklama olayı ekle
/*buttons.forEach(function(button) {
    buttons.addEventListener("click", function() {
  // Button elementinin değerini al
    var number = button;
    //var number=buttonlar;
  // Input elementinin değerine ekle
    input.value = number.innerHTML;
    });
});
/*
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Button elementinin değerini al
        var number = button.innerHTML;
        
        // Input elementinin değerine ekle
        input.value = number.innerHTML;
    });
});
*/

