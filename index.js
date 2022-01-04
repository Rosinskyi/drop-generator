import Drop from "./drop.js";
let i = 0;
let drop = new Drop();
const reset = document.querySelector("#reset");
const final = document.querySelector("#final");
const added = document.querySelector("#overview");
const id = document.querySelector("#id");
const chance = document.querySelector("#chance");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");
const count = document.querySelector("#count");
btn.addEventListener("click", () => {
    drop.add_item(id.value, count.value, chance.value);
    i++;
    added.innerHTML = "added " + i;
});
result.addEventListener("click", () => {
    drop.get_result();
    final.innerHTML = drop.drop_group;
});
reset.addEventListener("click", () => {
    window.location.reload();
});
