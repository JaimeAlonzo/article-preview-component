let isOpen = false;

const shareBtns=document.querySelectorAll('.share-btn');

shareBtns.forEach(btn=>{
 btn.addEventListener('click',toggleShare);
})

function toggleShare(){
    const shareTab=document.querySelector(".share-tab");
    if(!isOpen){
        shareTab.classList.add('open');
        isOpen=true;
    }else{
        shareTab.classList.remove('open');
        isOpen=false;
    }
}