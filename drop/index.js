import Drop from "./drop.js";
import data from "./../data.js"
let i = 0;
let drop = new Drop();
const reset = document.querySelector("#reset");
const final = document.querySelector("#final");
const added = document.querySelector("#overview");
const id = document.querySelector("#id");
const chance = document.querySelector("#chance");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");
const amount = document.querySelector("#amount");
btn.addEventListener("click", () => {
    drop.add_item(id.value, amount.value, chance.value);
    i++;
    added.innerHTML = "added " + i;
});
result.addEventListener("click", () => {
    drop.get_result(data);
    final.innerHTML = drop.drop_group;
});
reset.addEventListener("click", () => {
    window.location.reload();
});
