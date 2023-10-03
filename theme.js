document.addEventListener('DOMContentLoaded',()=>{
    let renderTheme=()=>{
        if(preferTheme.matches){
            theme.textContent=preferTheme.matches?"Light":"Dark";    
            document.body.classList.toggle('light-theme')
        }
        else{
            theme.textContent=preferTheme.matches?"Dark":"Light";    

            document.body.classList.toggle('dark-theme')
        }
        
    }
    let preferTheme=window.matchMedia('(prefers-color-scheme:Dark)');   
    
    let theme=document.getElementById('theme-button');
    
    
        
    
    theme.addEventListener('click',renderTheme)

 
})