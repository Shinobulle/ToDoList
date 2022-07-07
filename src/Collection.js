export default class Collection {
    constructor() {
        this.collection = [];
    }

    add(item) {
        const nextId = this.collection.length;
        item.setId(nextId);
        this.collection.push(item);
    }

    sort() {
        return this.collection.sort((a,b) => a.compare(b));
    }

    remove(item) {
        const indexToRemove = this.findIndex(item);
        this.collection.splice(indexToRemove, 1);
    }

    findIndex(item) {
        return this.collection.findIndex((i) => i.getId() === item.getId());
    }

    empty() {
        return this.collection < 1
    }

    search(regex) {
        return this.collection.filter(element => element.label.match(regex));
    }
}