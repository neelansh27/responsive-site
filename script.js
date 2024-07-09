gsap.fromTo(".img1",{autoAlpha:0,x:0,y:200},{autoAlpha:1,x:0,y:0},1)
gsap.fromTo(".img2",{autoAlpha:0,x:0,y:200},{autoAlpha:1,x:0,y:0},1.3)
const info = document.querySelector('.info')
const assets = document.querySelector('.assets')
const suptext= document.querySelectorAll('.scroll-item')
const circle = document.querySelector('.circle')
const svgPath = document.querySelector('svg .transrgwht')
const svgBorders = document.querySelectorAll(".dotsstro")
const svgBalls = document.querySelectorAll(".dotsst")
const pathLengths=[0,130,280,410,530,680,810]
let index=0;

document.addEventListener('wheel', scrollHandle);

// Function for scroll handling
function scrollHandle(event) {
  const directionUp =  checkScrollDirectionIsUp(event);
    if (directionUp) {
      handleIndexChange(index-1)
  } else {
      handleIndexChange(index+1)
    } 

}

function handleIndexChange(idx){
  if (idx==7 || idx==-1 || idx==index) return;
  let i=index;
  index=idx;
  direction = idx<i;
  // changing index based on direction
  if (direction){
    for (i;i>index;i--){
      svgBalls[i].style.fill='rgba(255,255,255,0.4)'
      svgBorders[i].style.opacity=0.4;
    }
  } else {
    for (i;i<=index;i++){
      svgBalls[i].style.fill='var(--ball-color)';
      svgBorders[i].style.opacity=1;
    }
  }

  suptext.forEach(e=>{
    e.style.transform=`translateY(-${index*100}%)`
  })

  svgPath.style.strokeDasharray=`${pathLengths[index]},1000`
  assetSwitch(index,direction);
  document.querySelector("#page-1").style.opacity=(index==0) ? 1:0;
  document.querySelector("#page-6").style.opacity=(index==6) ? 1:0;
  // created css variables based on index
  info.style.background = `var(--bg-${index})`
  circle.style.background = `var(--bg-${index})`
  assets.style.background = `var(--bg-secondary-${index})`
}

// This switch handles image switching when we are scrolling down
function assetSwitch(index,direction){
  // A switch to remove elements
  switch (index){
    case 0:
      if (direction){
           gsap.to("#img3",{autoAlpha:0,x:0,y:100})
           gsap.to("#img4",{autoAlpha:0,x:0,y:-100},"<.3")
      }
    case 1:
      if (direction){
           gsap.to("#img5",{autoAlpha:0,x:0,y:"70%"})
           gsap.to("#img6",{autoAlpha:0,x:0,y:-100},"<.3")
      } else {
           gsap.to(".img1",{autoAlpha:0,x:0,y:200})
           gsap.to(".img2",{autoAlpha:0,x:0,y:200,delay:0.3})
      }
      case 2:
      if (direction){
         gsap.to("#img7",{autoAlpha:0,x:-100,y:-100,delay:0.3})
         gsap.to("#img8",{autoAlpha:0,x:0,y:100,delay:0.1})
         gsap.to("#img9",{autoAlpha:0,x:0,y:-100,delay:0.2})
         gsap.to("#img10",{autoAlpha:0,x:100,y:-100,delay:0.4})
         gsap.to("#img11",{autoAlpha:0,x:100,y:100,delay:0.5})
      } else {
          gsap.to("#img3",{autoAlpha:0,x:0,y:100})
          gsap.to("#img4",{autoAlpha:0,x:0,y:-100})
        }
      break
      case 3:
      if (direction){
         gsap.to("#img12",{autoAlpha:0,x:0,y:-100})
         gsap.to("#img13",{autoAlpha:0,x:0,y:100,delay:0.3})
         gsap.to("#img14",{autoAlpha:0,x:0,y:-100,delay:0.4})
         gsap.to("#img15",{autoAlpha:0,x:0,y:"100%",delay:0.5})
         gsap.to("#img16",{autoAlpha:0,x:0,y:"-100%",delay:0.6})
      } else {
         gsap.to("#img5",{autoAlpha:0,x:0,y:"70%"})
         gsap.to("#img6",{autoAlpha:0,x:0,y:-100,delay:0.3})
      }
      break;
    case 4:
      if (direction){
        gsap.to("#img17",{autoAlpha:0,x:0,y:"100%"})
      } else {
         gsap.to("#img7",{autoAlpha:0,x:-100,y:-100,delay:0.3})
         gsap.to("#img8",{autoAlpha:0,x:0,y:100,delay:0.1})
         gsap.to("#img9",{autoAlpha:0,x:0,y:-100,delay:0.2})
         gsap.to("#img10",{autoAlpha:0,x:100,y:-100,delay:0.4})
         gsap.to("#img11",{autoAlpha:0,x:100,y:100,delay:0.5})
      }
      default: break;
    case 5:
      if (direction){
         gsap.to("#img18",{autoAlpha:0,x:0,y:100})
         gsap.to("#img19",{autoAlpha:0,x:"28%",y:100})
      } else {
         gsap.to("#img12",{autoAlpha:0,x:0,y:-100})
         gsap.to("#img13",{autoAlpha:0,x:0,y:100,delay:0.3})
         gsap.to("#img14",{autoAlpha:0,x:0,y:-100,delay:0.4})
         gsap.to("#img15",{autoAlpha:0,x:0,y:"100%",delay:0.5})
         gsap.to("#img16",{autoAlpha:0,x:0,y:"-100%",delay:0.6})
      }
      break;
    case 6:
      if (!direction){
        gsap.to("#img17",{autoAlpha:0,x:0,y:"100%"})
      }
  }
  for (let i=0;i<7;i++){
    if (i==index) {
      document.querySelector(`.img-container-${i}`).style.opacity=1;
    } else {
      document.querySelector(`.img-container-${i}`).style.opacity=0;
    }
  }
  
  // Switch to add elements
  switch(index){
    case 0:
      const timeline1= gsap.timeline({duration:1})
      // "<.3 means 0.3s delay relative to previous element"
      timeline1
        .fromTo(".img1",{autoAlpha:0,x:0,y:200},{autoAlpha:1,x:0,y:0})
        .fromTo(".img2",{autoAlpha:0,x:0,y:200},{autoAlpha:1,x:0,y:0},"<.3")
      break
    case 1:
      const timeline2= gsap.timeline({duration:1})
      timeline2
        .fromTo("#img3",{autoAlpha:0,x:0,y:100},{autoAlpha:1,x:0,y:0},0.3)
        .fromTo("#img4",{autoAlpha:0,x:0,y:-100},{autoAlpha:1,x:0,y:0},"<.2")
      break;
    case 2:
      const timeline3 = gsap.timeline({duration: 1})
      timeline3
        .fromTo("#img5",{autoAlpha:0,x:0,y:"65%"},{autoAlpha:1,x:0,y:"53%"},0.3)
        .fromTo("#img6",{autoAlpha:0,x:0,y:-100},{autoAlpha:1,x:0,y:0},"<.3")
      break
    case 3:
      const timeline4 = gsap.timeline({duration:1});
      timeline4
        .fromTo("#img7",{autoAlpha:0,x:-100,y:-100},{autoAlpha:1,x:0,y:0})
        .fromTo("#img8",{autoAlpha:0,x:0,y:100},{autoAlpha:1,x:0,y:0},"<.3")
        .fromTo("#img9",{autoAlpha:0,x:0,y:-100},{autoAlpha:1,x:0,y:"45%"},"<.3")
        .fromTo("#img10",{autoAlpha:0,x:100,y:-100},{autoAlpha:1,x:0,y:0},"<.1")
        .fromTo("#img11",{autoAlpha:0,x:100,y:100},{autoAlpha:1,x:0,y:0},"<.1")
      break;
    case 4:
      const timeline5 = gsap.timeline({duration:1})
      timeline5
        .fromTo("#img12",{autoAlpha:0,x:0,y:-100},{autoAlpha:1,x:0,y:0},0.3)
        .fromTo("#img13",{autoAlpha:0,x:0,y:100},{autoAlpha:1,x:0,y:0},"<.3")
        .fromTo("#img14",{autoAlpha:0,x:0,y:-100},{autoAlpha:1,x:0,y:0},"<.3")
        .fromTo("#img15",{autoAlpha:0,x:0,y:"100%"},{autoAlpha:1,x:0,y:"45%"},"<.3")
        .fromTo("#img16",{autoAlpha:0,x:0,y:"-100%"},{autoAlpha:1,x:0,y:"50%"},"<.3")
    break;
    case 5:
      gsap.fromTo("#img17",{autoAlpha:0,x:0,y:"100%"},{autoAlpha:1,x:0,y:"50%",duration:1})
      break;
    case 6:
      gsap.fromTo("#img18",{autoAlpha:0,x:0,y:100},{autoAlpha:1,x:0,y:0,duration:1})
      gsap.fromTo("#img19",{autoAlpha:0,x:"28%",y:100},{autoAlpha:1,x:"28%",y:0,duration:1,delay:0.3})
      break;
    default:
      break
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}
