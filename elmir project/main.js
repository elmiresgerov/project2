const inpt = document.getElementById("input");
const lst = document.getElementById("alllist");
const icn = document.querySelector(".sort");
const div = document.querySelector(".listdiv");
const icn2 = document.querySelector(".removeinput");
const data = [];

div.style.display = 'none';
icn.style.display = 'none';

function addTask() {
    if (inpt.value.trim() === '') {
        return;
    } else {
        let li = document.createElement("li");
        let p = document.createElement("p");
        p.textContent = inpt.value.trim();
        data.push(inpt.value.trim());

        lst.appendChild(li);
        div.style.display = 'block';
        icn.style.display = 'block';

        const removeIcon = document.createElement('i');
        removeIcon.className = 'fa-solid fa-xmark removetask';
        li.appendChild(p);
        li.appendChild(removeIcon);

        new Sortable(lst, {
            animation: 360,
            chosenClass: "boxShadow",
            dragClass: "drag",
        });

        removeIcon.addEventListener('click', function() {
            const index = data.indexOf(p.textContent);
            if (index !== -1) {
                data.splice(index, 1);
            }
            li.remove();
        });
    }
    inpt.value = "";
}

let ascendingOrder = true;

icn.addEventListener('click', function() {
    const liList = lst.querySelectorAll('li p');
    if (ascendingOrder) {
        data.sort();
        ascendingOrder = false;
    } else {
        data.reverse();
        ascendingOrder = true;
    }
    for (let i = 0; i < data.length; i++) {
        liList[i].innerText = data[i];
    }
});

icn2.addEventListener('click', function() {
    inpt.value = "";
});
