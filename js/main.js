const plane = document.querySelector('.plane');
const clouds = document.querySelectorAll('.cloud');

const planeRatioX = plane.getAttribute('ratioX');
const planeRatioY = plane.getAttribute('ratioY');

const cursorTracking = (e) => {
   const currentCursorPosX = e.clientX;
   const currentCursorPosY = e.clientY;

   plane.style.transform = `translate(${currentCursorPosX * -planeRatioX}px, ${currentCursorPosY * -planeRatioY}px)`;

   clouds.forEach(cloud => {
      const cloudRatio = cloud.getAttribute('ratio');
      
      cloud.style.transform = `translate(${currentCursorPosX * -cloudRatio}px, ${currentCursorPosY * -cloudRatio}px)`;
   });
}




document.addEventListener('mousemove', (e) => cursorTracking(e));