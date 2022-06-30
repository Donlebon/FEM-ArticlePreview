
// Share Button

let articleShare = document.querySelector(".article_share")

let articleShared = document.querySelector(".article-share")


let paths = document.querySelector("path")

let toggle = document.querySelector(".article-toggle")
let articleshare2 = document.querySelector(".article-contact2")

let on = 0

function active(){
   if (on == 0){
      paths.setAttribute('style', 'fill: white');
      on += 1
      articleshare2.classList.add("index2")
      articleshare2.classList.remove("index")
   } else {
      paths.setAttribute('style', 'fill: #6E8098');
      articleshare2.classList.add("index")
      articleshare2.classList.remove("index2")
      on -= 1
   }
   articleShare.classList.toggle("article_toggle_2")
   articleShare.classList.toggle(".article-toggle2")
   articleshare2.classList.toggle("article-toggle2")
}



articleShare.addEventListener("click", active)

// Share Animation
