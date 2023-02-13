const $formEl = document.getElementById(`form`);
let $ghost = document.getElementById(`ghost`);

$formEl.addEventListener('focusin', (event) => {
    $ghost.style.display = "block";
});

$formEl.addEventListener('focusout', (event) => {
    $ghost.style.display = "none";
});





