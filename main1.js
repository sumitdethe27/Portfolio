const list=["Software Engineer...","Student...","Human Being..."]
let prof=document.getElementById("typewriter");
let listindx=0;
let indx=0;
const typespeed=160;
const deletespeed=80;
function printletters(text){
    if(indx==text.length){
        clearletters();
    }
    else if(indx<text.length){
        prof.textContent+=text[indx]
        indx+=1;
        setTimeout(function(){
            printletters(text)
        },typespeed)
    }
}
function clearletters(){
    if(indx==-1){
        listindx=(listindx+1)%list.length;
        indx=0;
        printletters(list[listindx]);
    }
   else if(indx>-1){
        let newtext="";
        for(let i=0;i<indx;i++){
            newtext+=list[listindx].charAt(i);
        }
        prof.textContent=newtext
        indx-=1;

        setTimeout(clearletters,deletespeed )
    }

}
printletters(list[listindx])
document.querySelector("#send").addEventListener("click",()=>{
    alert("ThankYou ")
})
document.addEventListener("scroll",()=>{
    let intro=document.querySelector(".intro")

    if(window.scrollY>=intro.offsetHeight+intro.offsetTop){
        document.querySelector(".header").style.position="sticky"
    }else{
        document.querySelector(".header").style.position="revert"

    }
})
let img=document.querySelector('#landing-img')
let main=document.querySelector('body')
main.addEventListener('mousemove',function(e){
   
    
img.style.left=1-(e.x*0.02) + "px"
img.style.top=1- (e.y*0.02) + "px"

})
document.addEventListener("DOMContentLoaded",function(){

    gsap.from(".card",{
    scale:0.5,
    rotate: 180, // Initial rotation (in degrees)
    x: "-100%", // Initial horizontal translation
    y: "-100%", // Initial vertical translation
    opacity: 0,
    ease: "ease-out", // Easing function
   
    scrollTrigger:{
        trigger:".card",
        scroll:"body",
        start:"top 90%",
        end:"top 80%",
        
    }
})
gsap.from(".proj-1", {
    y: window.scrollY * -0.5,
    x: "170%",
    skewX: 30,
    opacity:0,
    duration: 1, // Increase the duration for a smoother effect
    ease: "power3.out", // Use a smoother ease curve
    scrollTrigger: {
      trigger: ".proj-1",
      start: "top 80%", // Adjust start and end values for when you want the animation to begin and end
      end: "top 30%",
      scrub: true, // Use scrub to make the animation smoother
    },
  });
  gsap.from(".contact", {
    x: "-170%",
    skewX: 30,
    duration: 1, // Increase the duration for a smoother effect
    ease: "power3.out", // Use a smoother ease curve
    scrollTrigger: {
      trigger: ".contact",
      stagger:0.1
    }
  });
 
 })
 gsap.from(".profile-img",{
    x:"100%",
    duration:0.5,

    opacity:0.5,
    scrollTrigger: {
        trigger: ".profile-img",
        
        start: "top center", // Adjust start and end values for when you want the animation to begin and end
    //   end: "top 30%",
           
        animation:1,
        stagger:0.1
      }
 })
 gsap.from(".about",{
    x:"-100%",
    opacity:0.5,
    duration:0.5,
    scrollTrigger: {
        trigger: ".about",
        animation:1,
        start: "top center", // Adjust start and end values for when you want the animation to begin and end
    //   end: "top 30%",
           
        stagger:0.1
      }
 })