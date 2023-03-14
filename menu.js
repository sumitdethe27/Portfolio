

  document.addEventListener("DOMContentLoaded",function(){
    
   function showcontent(){
      
            const menu=document.querySelector("section.menu-items");
        
            menu.style.height="100%"

            contentvisible=true;

        
    }
   
    
    function closecontent(){
      
            const menu=document.querySelector("section.menu-items");
        
            menu.style.height="0"
            

        
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