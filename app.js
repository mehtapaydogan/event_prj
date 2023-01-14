
// 1 ile 100 arasında  rastgele sayı tutar

const randomNumber= Math.round(Math.random()*100);
console.log(randomNumber)


document.querySelector(".btn").addEventListener("click",() => {const guessNumber=Number(document.querySelector(".input").value);
const bodyBgColor = document.querySelector(".container");
const newH4= document.querySelector("h4")
const newImg=document.querySelector("img")

  
if(randomNumber >guessNumber){
    alert("Up")
   
    
} else if( randomNumber< guessNumber){
    alert("Down")

}else{
    alert("wonderfull")
    bodyBgColor.getElementsByClassName.background="green"
    newH4.textContet="WODERFULL MEHTAP"
    newImg.style.borderRadius="30px"
    document.querySelector("body").style.backgroundImages =
      "url(https://www.google.com/imgres?imgurl=https%3A%2F%2Ficdn.tgrthaber.com.tr%2Fstatic%2Fhaberler%2F22-06%2F17%2Fdolar-1.jpg&imgrefurl=https%3A%2F%2Fwww.tgrthaber.com.tr%2Fekonomi%2Fdolar-hiz-kesmedi-fedin-karari-sonrasi-ibreler-yukari-2833384&tbnid=xQNTCXlfQiCsdM&vet=10CAEQMyjQAWoXChMIsO6j7qzH_AIVAAAAAB0AAAAAEAQ..i&docid=kmy0WHNUjYvZ6M&w=1200&h=581&itg=1&q=kazan%C4%B1lan%20hediye%20paketi%20foto%C4%9Fraf%C4%B1&ved=0CAEQMyjQAWoXChMIsO6j7qzH_AIVAAAAAB0AAAAAEAQ)";
}
document.quertySelector(".input").value="";
document.querySelector(".input").focus="";
})
