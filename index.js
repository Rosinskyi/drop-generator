import Drop from "./drop.js";

let drop = new Drop();
const final = document.querySelector("#final");
const added = document.querySelector("#overview");
const id = document.querySelector("#id");
const chance = document.querySelector("#chance");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");
const count = document.querySelector("#count");
btn.addEventListener("click", () => {
    drop.add_item(id.value, count.value, chance.value);
    added.innerHTML = "added";
});
result.addEventListener("click", () => {
    drop.get_result();
    final.innerHTML = drop.drop_group;
});
