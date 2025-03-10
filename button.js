document.getElementById("confetti-1").onclick = function () {
    confetti()
}

document.getElementById("confetti-2").onclick = function () {
    confetti()
}

function confetti() {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    for (let i = 0; i < 20; i++) {
        const div = document.createElement("div");

        div.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

        const size = Math.random() * 100 + 5;
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.textContent = "CONFETTI";
        div.style.fontSize = `${size / 2}px`;
        div.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

        div.style.position = "absolute";
        div.style.top = `${Math.random() * containerHeight}px`;
        div.style.left = `${Math.random() * containerWidth}px`;

        document.body.appendChild(div);

        // Remove confetti after animation
        setTimeout(() => {
            div.remove();
        }, 3000); // Remove after 3 seconds
    }
}

