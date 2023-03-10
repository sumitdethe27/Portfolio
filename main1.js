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
document.querySelector("button").addEventListener("click",()=>{
    alert("ThankYou ")
})
