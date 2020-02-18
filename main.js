const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 1; i < 6; i++) { //set max to 6 to run 1-5 for pic id
    const newImage = document.createElement('img');
    let xxx = 'images/pic'+[i]+'.jpg'; //declared xxx to replace w/ custom image location 
    newImage.setAttribute('src', xxx);
    thumbBar.appendChild(newImage);
    newImage.onclick = function() {
        displayedImage.setAttribute('src', xxx); //sets attribute of current newImage as displayedImage
    }
}

/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
    if (btn.getAttribute('class') === "dark") {
        btn.setAttribute('class', "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute('class', "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}

