console.log("Hello World!");

document.addEventListener("mousemove", function(event) {
    const mouseX = event.pageX;
    const mouseY = event.pageY;
  
    const gradientSize = 100;
    const halfGradientSize = gradientSize / 2;
  
    const gradient = document.createElement("div");
    gradient.classList.add("gradient");
    gradient.style.left = mouseX - halfGradientSize + "px";
    gradient.style.top = mouseY - halfGradientSize + "px";
  
    document.body.appendChild(gradient);
  
    setTimeout(() => {
      gradient.remove();
    }, 500);
  });

