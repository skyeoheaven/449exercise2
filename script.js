const box = document.getElementById('interactive-box');
const header = document.getElementById('header-text');

box.addEventListener('click', function() {
    header.textContent = "well done you clicked once";
    box.style.backgroundColor = "lightcoral";
});

box.addEventListener('mouseover', function() {
    box.style.transform = "scale(1.3)";
});

box.addEventListener('mouseout', function() {
    box.style.transform = "scale(1)";
});

box.addEventListener('dblclick', function() {
    header.textContent = "wowee you double clicked!";
    box.style.backgroundColor = "lightgreen";
});