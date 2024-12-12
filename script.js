window.addEventListener("load", function () {
    const button = document.querySelector(".button");
    button.addEventListener("click", handleRandom);
});

async function handleRandom(e) {
   
    const audio = ` <audio controls autoplay>
        <source src="horse.ogg" type="audio/ogg">
        <source src="./videoplayback.m4a" type="audio/mpeg">
    </audio>`;

    const body = document.body;

    // Create a document fragment to minimize reflows and repaints
    const fragment = document.createDocumentFragment();

    body.insertAdjacentHTML("beforeend",audio)
    // Create and append all elements to the fragment
    for (let i = 0; i < 1000; i++) {

        const div = document.createElement('div');
        div.classList.add('border');

        div.innerHTML = `<div class="text"><span>Tràn đầy bộ nhớ em !!!</span></div>`;
        fragment.appendChild(div);
    }

    // Now append the entire fragment to the body, avoiding multiple reflows
    body.appendChild(fragment);

    // After all elements are added, apply random positioning
    const borders = body.querySelectorAll(".border");

    for (let i = 0; i < borders.length; i++) {
        const border = borders[i];

        // Generate random numbers for left and top
        const numberLeft = Math.floor(Math.random() * window.innerWidth); // Horizontal random position
        const numberTop = Math.floor(Math.random() * window.innerHeight); // Vertical random position

        // Apply the styles
        border.style.position = "absolute";
        border.style.left = `${numberLeft}px`;
        border.style.top = `${numberTop}px`;

        console.log(border); // Log the element for debugging

        // Wait for 2 milliseconds before styling the next one
        await new Promise(resolve => setTimeout(resolve, 1000)); // Shorter delay
    }
}
