class Drop {
    constructor() {
        this.drop_group = "{{";
        this.group_chance = 0;
        this.items = [];
    }

    add_item(item, count, chance) {
        this.items.push([
            item.trim().replace(",", "."),
            count.trim(),
            chance.trim().replace(",", "."),
        ]);
    }
    get_result(data) {
        this.items.forEach((item) => (this.group_chance += Number(item[2])));
        this.items.forEach((item, index) => {
            const item_chance = (100 * Number(item[2])) / this.group_chance;
            this.drop_group +=
                "{" + `${data[item[0]]};1;${item[1]};${item_chance}` + "}";
            if (index === this.items.length - 1) {
                this.drop_group += `};${this.group_chance}}`;
            } else {
                this.drop_group += ";";
            }
        });
    }
}
export default Drop;
