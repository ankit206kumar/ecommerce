// var pro=document.querySelector(".pro");
// var img=document.querySelector("img");
// img.addEventListener("click",()=>{
//     pro.style.backgroudColor="red";
//     // document.querySelector(".feat-detail").style.opacity="1";
// })
const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const close=document.getElementById('close');
const addc=document.querySelectorAll('.addc')
// var cookie = new HTTP.Cookies();
var cartct=0;
var prod=[]

window.addEventListener('load',function(){
cartct = Number(sessionStorage.getItem('mydata'));
proddata=JSON.parse(sessionStorage.getItem('prod'));
console.log(cartct)
console.log(proddata)
document.querySelector('.cartct').innerHTML=cartct;
document.querySelector('.cart-item').innerHTML= proddata.map((ele)=>
                                                `<tr>
                                                <td><a href="#"><i class="far fa-times-circle"></i></a></td>
                                                <td><img src="${ele.imgsrc}" alt=""></td>
                                                <td>${ele.title}</td>
                                                <td>${ele.price}</td>
                                                <td><input type="number" value="1">
                                                </td><td class="totalpr">${ele.price}</td>
                                                </tr> `
)
const pr=document.querySelectorAll(".totalpr")
var totalprice=0;
pr.forEach(element => {
   totalprice+=  Number(element.innerHTML.substring(1,element.innerHTML.lemgth))
});
document.querySelector(".totprice").innerHTML="$"+totalprice;
document.querySelector(".prtot").innerHTML="$"+totalprice;
});
if(bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    });
}
if(close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    });
}
addc.forEach(element => {
    element.addEventListener('click',()=>{
        const prods={};
        prods.imgsrc=element.parentElement.firstChild.nextSibling.src
        prods.title=(element.parentElement.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.innerHTML)
        prods.price=(element.parentElement.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML)
        prod=JSON.parse(sessionStorage.getItem('prod'))
        if(prod===null)
        prod=[]
        prod.push(prods)
        sessionStorage.setItem('prod',JSON.stringify(prod));
        cartct++;
        document.querySelector('.cartct').innerHTML=cartct;
        
        sessionStorage.setItem('mydata', cartct);
     })
});
