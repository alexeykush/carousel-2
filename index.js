let index = 0

let carouselImages = document.getElementsByClassName("carousel-item")
carouselImages[index].classList.add("active")

let sliderForBlocks = document.getElementsByClassName("slider-for-container")
sliderForBlocks[index].classList.add("active")

function handleActive(){
  for(let i = 0; i<carouselImages.length;i++){
    carouselImages[i].classList.remove("active")
  }
  carouselImages[index].classList.add("active")

  for(let i = 0; i<sliderForBlocks.length;i++){
    sliderForBlocks[i].classList.remove("active")
  }
  sliderForBlocks[index].classList.add("active")
}

document.getElementById("btn-right").onclick = function(e){
  index++
  if(index == carouselImages.length){
    index = 0
  }
  handleActive()
}

document.getElementById("btn-left").onclick = function(e){
  index--
  if(index == -1){
    index = carouselImages.length-1
  }
  handleActive()
}

document.getElementById("carousel-container").addEventListener("click",function(e){
  if(e.target.classList.contains("carousel-item-img")){
      index = [...document.getElementsByClassName("carousel-item-img")].indexOf(e.target)
      handleActive()
  }
})
