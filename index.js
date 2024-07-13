const optionDivs = document.getElementsByClassName('option');
const allPagesCheckbox = document.getElementById('check-all');
const checkboxes = document.getElementsByClassName('custom-checkbox');

for (let i = 0; i < optionDivs.length; i++) {
    const div = optionDivs[i];
    const checkbox = div.getElementsByClassName("custom-checkbox")[0];

    div.addEventListener("mousedown", function () {
        checkbox.classList.toggle('mousedown');
    });

    div.addEventListener("mouseup", function () {
        if(checkbox !== allPagesCheckbox){
            checkbox.checked = !checkbox.checked;
        }
        checkbox.classList.remove('mousedown');
        checkbox.classList.toggle('mouseup');
        if(allPagesCheckbox.checked && checkbox !== allPagesCheckbox){
            allPagesCheckbox.checked = false
            allPagesCheckbox.classList.remove("mouseup")
        }
    });
}

function checkAll() {
    allPagesCheckbox.checked = !allPagesCheckbox.checked
    for (let i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i] === allPagesCheckbox){
            continue;
        }
        checkboxes[i].checked = allPagesCheckbox.checked;
        if (allPagesCheckbox.checked) {
            checkboxes[i].classList.add('mouseup');
        } else {
            checkboxes[i].classList.remove('mouseup');
        }
    }
}
