
console.log("работает")
const startbtn = document.getElementById("startbtn")

let counter = 1;
startbtn.addEventListener("click", () => {
    counter += 1;
    
    if (counter < 16) {
        for (let i = 0; i < counter; i++) {
            createrandombtn();
        }
    } 
    else {
        location.reload();
    }
});

function createrandombtn() {
    const newbtn = document.createElement("button")
    newbtn.textContent = "Нажми меня"
    newbtn.classList.add("btn")
    newbtn.style.position = "absolute";
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    newbtn.style.left = `${x}px`;
    newbtn.style.top = `${y}px`;

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let r2 = Math.floor(Math.random() * 256);
    let g2 = Math.floor(Math.random() * 256);
    let b2 = Math.floor(Math.random() * 256);

    newbtn.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    newbtn.style.borderColor = `rgb(${r2}, ${g2}, ${b2})`;

    newbtn.addEventListener("click", () => {
    counter += 2;

    if (counter < 16) {
        for (let i = 0; i < counter; i++) {
            createrandombtn();
        }
    } 
    else {
        location.reload();
    }
  });


    document.body.appendChild(newbtn)

}