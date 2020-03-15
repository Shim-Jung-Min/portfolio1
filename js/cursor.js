
function trackMovement(e){
    const cursor = document.querySelector(".cursor");
    
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
}

window.addEventListener("mousemove", trackMovement);