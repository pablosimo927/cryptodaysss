// Load More feature
// Load more btn 
let loadBtn = document.querySelector("#load-more");
let currentItems = 3;

loadBtn.onclick = () => {
    let airdropBoxes = [...document.querySelectorAll(".box")];
    for (let i = currentItems; i < currentItems + 3; i++) {
        if (airdropBoxes[i]) {
            airdropBoxes[i].style.display = "block";
        }
    }
    currentItems += 3;

    // Use setTimeout to delay the check until after the DOM updates are processed
    setTimeout(() => {
        if (currentItems >= airdropBoxes.length) {
            document.getElementById("load-more").style.display = "none";
        }
    }, 0);
}


// // Here IS The logic behind THE Scrolling Effect Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        // else {
        //     entry.target.classList.remove("show");
        // }
    });
});

const hiddenCards = document.querySelectorAll(".hidden");
hiddenCards.forEach((el) => observer.observe(el));