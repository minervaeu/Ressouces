/* ========================
!    Toggle 90deg animation by element 
========================== */
export default function toggle90degAnimation (element) {

    if(!element.classList.contains('add90degAni')){
      element.classList.add('add90degAni');
      element.classList.remove('remove90degAni');
    } else {
      element.classList.remove('add90degAni');
      element.classList.add('remove90degAni');
    };
  
// ? required and adaptable css-rules
/* 
.add90degAni{
  animation: add90degAnimation .1s forwards 1 ease-in; 
}

.remove90degAni{
  animation: remove90degAnimation .1s forwards 1 ease-in; 
}

@keyframes add90degAnimation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
}

@keyframes remove90degAnimation {
  0% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
*/

};