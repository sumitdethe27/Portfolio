

document.addEventListener("DOMContentLoaded",function(){
  let head=document.querySelector("header");
     function showcontent(){
      
            const menu=document.querySelector(".menu-items");
            
            menu.style.height="100%"
            
            console.log(menu.style.height);

          if(head.style.display==='none'){
            head.style.display='flex';
            document.querySelector("#close-menu").style.display='none';
            
          }else{
            head.style.display='none'
          }
        
    }
   
    
    function closecontent(){
      
            const menu=document.querySelector("section.menu-items");
        
            menu.style.height="0"
              
           
           
          if(head.style.display==='none'){
            head.style.display='flex';
            
          }else{
            head.style.display='none'
            
          }
    }
    function close(){
    const items=document.querySelectorAll("section.menu-items nav ul>li")
    for (const iterator of items) {
        iterator.addEventListener("click",closecontent)
    }
   }
    document.querySelector("#menu").addEventListener("click",showcontent)
    document.querySelector("#close-menu").addEventListener("click",closecontent)

    close()

  const proj1=document.querySelector("#proj-1")
  proj1.addEventListener("click",function(){
    console.log("hi")

    window.open("https://github.com/sumitdethe27/Chess","_blank")
  })

  const proj2=document.querySelector("#proj-2")
  proj2.addEventListener("click",function(){
  

    window.open("https://github.com/sumitdethe27/Sneaker-Store","_blank")
  })



  const proj3=document.querySelector("#proj-3")
  proj3.addEventListener("click",function(){
    console.log("hi")
    window.open("https://github.com/sumitdethe27/qr-code-generator","_blank")
  })

  const proj4=document.querySelector("#proj-4")
  proj4.addEventListener("click",function(){
    console.log("hi")

    window.open("https://github.com/sumitdethe27/cred-clone","_blank")
  })
  })