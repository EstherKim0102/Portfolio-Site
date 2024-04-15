
const coords = {x: 0, y: 0};
const circles = document.querySelectorAll(".circle");
const colors = ["#47ff97", "#6fff87", "#8cfe78", "#a6fd69", "#befb5c", "#d4f951", "#eaf648", "#fff242"];
let navLinks = document.querySelectorAll('.nav-lnks li');


document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX; // Get the mouse X-coordinate
    const mouseY = event.clientY; // Get the mouse Y-coordinate
});


document.addEventListener('click', function(event) {
    for (let i = 0; i < 5; i++) {
        const clover = document.createElement('img');
        clover.src = '/assets/clover.png';
        clover.classList.add('clover');
        document.body.appendChild(clover);

        const size = Math.random() * 40 + 10;
        const angle = Math.random() * 360;
        const distance = Math.random() * 50 + 10;
        const x = event.clientX + Math.cos(angle) * distance;
        const y = event.clientY + Math.sin(angle) * distance;

        clover.style.left = x + 'px';
        clover.style.top = y + 'px';
        clover.style.width = size + 'px'; 
        clover.style.height = size + 'px'; 
        clover.style.transform = `rotate(${angle}deg)`; 
        setTimeout(() => {
            clover.remove();
        }, 2000);
    }
});


      
   const cursor = document.querySelector(".cursor");

    //follow cursor on mouse move
    document.addEventListener("mousemove", (e) => {
        let x = e.pageX;
        let y = e.pageY;

        cursor.style.top = y + "px";
        cursor.style.left = x + "px";
        cursor.style.display = "block";

        //cursor effects on mouse stopped
        function mouseStopped(){
            cursor.style.display = "none";
        }
        timeout = setTimeout(mouseStopped, 1000);
    });

    //cursor effects on mouseout
    document.addEventListener("mouseout", () => {
        cursor.style.display = "none";
    });


// circles.forEach(function(circle, index){
//     circle.x = 0;
//     circle.y = 0;
//     circle.style.backgroundColor = colors[index % colors.length];
// });

// window.addEventListener("mousemove", function(ev){
//     coords.x = ev.clientX;
//     coords.y = ev.clientY;
    // console.log(ev.clientX, ev.clientY);
      
    // circle.style.top = y + "px";
    // circle.style.left = x + "px";
    // circle.style.display = "block";

    // //cursor effects on mouse stopped
    // function mouseStopped(){
    //     circle.style.display = "none";
    // }
    // // cleaerTimeout(timeout);
    // timeout = setTimeout(mouseStopped, 1000);
    // //cursor effects on mouseout
    // document.addEventListener("mouseout", () => {
    //     circle.style.display = "none";
    // });

// });


// animateCircles();


// function animateCircles() {
//     let x = coords.x;
//     let y = coords.y;

//     circles.forEach(function (circle, index) {
//         circle.style.left = x + "px";
//         circle.style.top = y + "px";

//         circle.style.scale = (circles.length - index) / circles.length;

//         circle.x = x;
//         circle.y = y;

//         const nextCircle = circles[index + 1] || circles[0];
//         x += (nextCircle.x - x) * 0.9;
//         y += (nextCircle.y - y) * 0.9;
       
//     });

    // navLinks.forEach(link => {
    //     link.addEventListener("mouseleave", () =>{
    //         circles.classList.remove('link-grow');
    //         circle.classList.remove('link-grow');
    //     });
    //     link.addEventListener("mouseover", () =>{
    //         circles.classList.add('link-grow');
    //         circle.classList.add('link-grow');
    //     });
    // });

    

//     requestAnimationFrame(animateCircles);
// }





            


