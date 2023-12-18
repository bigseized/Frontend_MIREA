// Animation Script
function animateCombined(elementId) {
    const element = document.getElementById(elementId);

    // const newSize = Math.floor(Math.random() * 150) + 50;

    const newColor = getRandomColor();

    element.style.transform = `translate(-50%, -50%) scale()`;
    element.style.backgroundColor = newColor;
    element.style.rotate = getShape(element.style.rotate)
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getShape(curr) {
    let radius  = curr;
    radius = radius.replaceAll("deg","");
    let angle = Number(radius) + 40;
    radius = angle.toString() + "deg";
    return radius;
}

// Cart Script
let totalPrice = 0;

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const draggedItemId = event.dataTransfer.getData("text");
    const draggedItem = document.getElementById(draggedItemId);
    const price = parseFloat(draggedItem.getAttribute("data-price"));

    totalPrice += price;
    document.getElementById("totalPrice").innerText = `Итого: $${totalPrice.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item");
    items.forEach((item) => {
        item.addEventListener("dragstart", (event) => {
            event.dataTransfer.setData("text", event.target.id);
        });
    });
});

// Image Gallery Script
document.getElementById('contents').addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
        const isConfirmed = confirm('Покинуть страницу?');
        if (!isConfirmed) {
            event.preventDefault();
        }
    }
});

function changeImage(newSrc) {
    const mainImage = document
        .getElementById("mainImage")
        .getElementsByTagName("img")[0];
    mainImage.src = newSrc;
}

// Selectable List Script
document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById("selectableList");

    list.addEventListener("click", function (event) {
        const clickedElement = event.target;

        if (event.ctrlKey || event.metaKey) {
            clickedElement.classList.toggle("selected");
        } else {
            if (clickedElement.classList.contains("selected")) {
                clickedElement.classList.remove("selected");
            } else {
                const allItems = list.getElementsByTagName("li");
                for (const item of allItems) {
                    item.classList.remove("selected");
                }
                clickedElement.classList.add("selected");
            }
        }
    });
});

// Slider Script
const slider = document.getElementById("slider");
const handle = document.getElementById("slider-handle");
let isDragging = false;

handle.addEventListener("mousedown", (event) => {
    isDragging = true;
    handle.style.transition = "left 0.05s ease-out";
    startDragging(event);
});

document.addEventListener("mouseup", () => {
    if (isDragging) {
        isDragging = false;
    }
});

document.addEventListener("mousemove", (event) => {
    if (isDragging) {
        startDragging(event);
    }
});

function startDragging(event) {
    const sliderRect = slider.getBoundingClientRect();
    const handleRect = handle.getBoundingClientRect();

    let left = event.clientX - sliderRect.left - handleRect.width / 2;
    const maxLeft = slider.clientWidth - handleRect.width;

    left = Math.max(0, Math.min(left, maxLeft));
    handle.style.left = `${left}px`;
}
