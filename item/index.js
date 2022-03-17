import data from "./../data.js";

const id = document.querySelector("#id");
const amount = document.querySelector("#amount");
const chance = document.querySelector("#chance");
const add = document.querySelector(".add");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");
const final = document.querySelector(".final");

let items_group = "";
let items = [];
let sum = 0;
function addItem(id, amount, chance) {
    items.push([
        id.trim().replace(",", "."),
        amount.trim(),
        chance.trim().replace(",", "."),
    ]);
}
function get_result(data) {
    items.forEach((item, index) => {
        items_group +=
            "{{{" + `${data[item[0]]};${item[1]}}};${item[2]}` + "};";
        sum += item[2];
        if(sum>100){
            document.body.append("chance > 100%")
        }
    });
}

add.addEventListener("click", () => {
    addItem(id.value, amount.value, chance.value);
    console.log(items);
});
result.addEventListener("click", () => {
    get_result(data);
    final.style.display = "block";
    final.innerHTML = items_group;
});
reset.addEventListener("click", () => {
    window.location.reload();
});
