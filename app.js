const imageContainer = document.getElementById('imageContainer');
const zoomImage = document.getElementById('zoomImage');

let isMouseOver = false;

event();
function event() {
    imageContainer.addEventListener('mouseenter', isOver);

    imageContainer.addEventListener('mouseleave', isOut);

    imageContainer.addEventListener('mousemove', handleMouseMove);

}


function isOver() {
    imageContainer.classList.add('zoomed');
    isMouseOver = true;
}


function isOut() {
    imageContainer.classList.remove('zoomed');
    isMouseOver = false;
}

function handleMouseMove(event) {
    if (!isMouseOver) return;
    const rect = imageContainer.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const xPercent = x / rect.width;
    const yPercent = y / rect.height;

    const originX = (xPercent * 100) + '%';
    const originY = (yPercent * 100) + '%';

    zoomImage.style.transformOrigin = `${originX} ${originY}`;

    console.log(`Posición mouse: X=${x.toFixed(0)}, Y=${y.toFixed(0)}`);
    console.log(`Origen transform: ${originX} ${originY}`);
}