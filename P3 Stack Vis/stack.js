const push = document.getElementById("push")
const pop = document.getElementById("pop")
const peek = document.getElementById("peek")
const ta = document.getElementById("txt")
const container = document.querySelector(".container")

function clicking(element) {
    element.style.backgroundColor = "white";
    element.style.color = "black";
    setTimeout(() => {
        element.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
        element.style.color = "white";
    }, 100);
}

function pushClicked() {
    if (ta.value === "") {
        alert("Enter something to push")
    } else {
        let newdiv = document.createElement("div");
        newdiv.textContent = ta.value;
        newdiv.classList.add("child");
        container.prepend(newdiv);
        ta.value = "";
    }
}

push.addEventListener("click", () => {
    pushClicked();
});

ta.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && ta.value === "") {
        alert("Enter something");
        event.preventDefault();
    } else if (event.key === "Enter" && ta.value != "") {
        pushClicked();
        event.preventDefault();
    }
})

const outContent = document.getElementById("outcontent")
pop.addEventListener("click", () => {
    POPandPEEK(true);
})
peek.addEventListener("click", () => {
    POPandPEEK(false);
})

function POPandPEEK(pop) {
    if (container.hasChildNodes()) {
        const firstChild = container.firstElementChild;
        outContent.innerHTML = firstChild.innerHTML;
        (pop == true) ? firstChild.remove() : '';
    } else {
        outContent.innerHTML = "Stack is empty";
        outContent.style.color = "red";
        setTimeout(() => {
            outContent.innerHTML = "N/A";
            outContent.style.color = "white"
        }, 2000);
    }
}