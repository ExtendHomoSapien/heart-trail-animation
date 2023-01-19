const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover",(event)=>{
    console.log(event.pageY - btnEl.offsetTop)
    console.log(event.pageX - btnEl.offsetLeft)
    const xCoord=event.pageX - btnEl.offsetLeft
    const yCoord=event.pageY - btnEl.offsetTop

    btnEl.style.setProperty("--xPos", xCoord + "px")
    btnEl.style.setProperty("--yPos", yCoord + "px")
});