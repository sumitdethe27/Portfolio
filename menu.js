

  document.addEventListener("DOMContentLoaded",function(){
    let head=document.querySelector("header");
    let ogdisplay=head.style.display
    
   function showcontent(){
      
            const menu=document.querySelector("section.menu-items");
        
            menu.style.height="100%"

            contentvisible=true;

          const head=document.querySelector("header");
          if(head.style.display==='none'){
            head.style.display=ogdisplay
          }else{
            head.style.display='none'
          }
        
    }
   
    
    function closecontent(){
      
            const menu=document.querySelector("section.menu-items");
        
            menu.style.height="0"
            
            if(head.style.display==='none'){
              head.style.display=ogdisplay
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


  })