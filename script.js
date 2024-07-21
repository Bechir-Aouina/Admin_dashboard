const special_li_btn=document.querySelector(".special_li_btn");
const special_li_ul=document.querySelector(".special_li_ul");
const date=document.querySelector(".date")
special_li_btn.addEventListener('click',()=>{
   if(special_li_ul.style.display==="none"){

    special_li_ul.style.cssText="display:block;";
   }
   else{
    special_li_ul.style.display="none";
   }
})
let month =new Date().getUTCMonth()+1 ;
let currentdate=new Date().getDate() +"/"+month + "/"+new Date().getUTCFullYear();
date.textContent=currentdate;