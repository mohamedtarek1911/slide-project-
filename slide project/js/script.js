

let imgs =Array.from(document.querySelectorAll(".col img"));
let lightBoxShadow =document.getElementById("lightBoxShadow");
let lightBoxItem = document.getElementById("lightBoxItem");
let nextBtn=document.getElementById("next");
let prevBtn=document.getElementById("prev");
let closeBtn=document.getElementById("close");
let currentIndex= 0;

for(let i=0;i<imgs.length;i++){
    imgs[i].addEventListener("click",function(e){
        currentIndex=imgs.indexOf(e.target)
        lightBoxShadow.style.display="flex";
        let imgSrc=e.target.getAttribute("src");
        // console.log(imgSrc);
        lightBoxItem.style.backgroundImage="url("+imgSrc+")";

    })
}


function nextSlide(){
    currentIndex++;
    if(currentIndex===imgs.length){
        currentIndex=0;
    }
    let imgSrc=imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage="url("+imgSrc+")";



}
nextBtn.addEventListener("click",nextSlide);



function prevSlide(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex=imgs.length-1;
    }
    let imgSrc=imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage="url("+imgSrc+")";



}
prevBtn.addEventListener("click",prevSlide);



function closeSlide(){
    lightBoxShadow.style.display="none";

}


closeBtn.addEventListener("click",closeSlide);


document.addEventListener("keydown",function(event){
    if(event.key==="ArrowRight"){
        nextSlide();

    }
    else if (event.key==="ArrowLeft"){
        prevSlide();

    }

    else if (event.key==="Escape"){
        closeSlide();

    }

})


// lightBoxShadow.addEventListener("click",closeSlide);


// lightBoxShadow.addEventListener("click",function(eventInfo){
//     if(219<eventInfo.clientX<657&&80<eventInfo.clientX<576){
//         lightBoxShadow.style.display="flex";
//     }
//     // else if(eventInfo.clientX==="657"&&eventInfo.clientX==="80"){
//     //     lightBoxShadow.style.display="flex";
//     // }
//     // else if(eventInfo.clientX==="220"&&eventInfo.clientX==="576"){
//     //     lightBoxShadow.style.display="flex";
//     // }
//     // else if(eventInfo.clientX==="670"&&eventInfo.clientX==="576"){
//     //     lightBoxShadow.style.display="flex";
//     // }
//     else {
//         closeSlide();
//     }
// })
