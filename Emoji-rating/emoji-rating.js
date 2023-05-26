const ratingE1=document.querySelectorAll('.fa-star');
const emojiE1=document.querySelectorAll('.far');
ratingE1.forEach((rating,index)=>{
    rating.addEventListener('click',()=>{
        updaterating(index);
    });
});
function updaterating(index){
    ratingE1.forEach((rating,idx)=>{
        if(idx<index+1) {
            rating.classList.add('active');
        }
        else{
            rating.classList.remove('active');
        }
})
emojiE1.forEach((emoji)=>{
    emoji.style.transform= `translateX(-${(index*50)+1}px)`;
});
}