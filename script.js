const info = document.querySelector('.info')
const assets = document.querySelector('.assets')
const suptext= document.querySelectorAll('.scroll-item')
const circle = document.querySelector('.circle')
let index=1;

document.addEventListener('wheel', scrollHandle);
// Function for scroll handling
function scrollHandle(event) {
  if (checkScrollDirectionIsUp(event)) {
    if (index>0){
      index-=1;
      // move the list elements of scrollable text
      suptext.forEach(e=>{
        e.style.transform=`translateY(-${index*100}%)`
      })
    }   
  } else if (index<6){
      index+=1;
      // move the list elements of scrollable text
      suptext.forEach(e=>{
        e.style.transform=`translateY(-${index*100}%)`
      })
    } 

  // created css variables based on index
  info.style.background = `var(--bg-${index})`
  circle.style.background = `var(--bg-${index})`
  assets.style.background = `var(--bg-secondary-${index})`
  console.log(index);
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}
