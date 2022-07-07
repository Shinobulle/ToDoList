import Task from "./Task";

export default class Collection {
    constructor() {
        this.collection = [];
    }

    add(name) {
        const item = this.createItem(name);
        const nextId = this.collection.length;
        item.setId(nextId);
        this.collection.push(item);
        this.collection.sort();
        return this.name = '';
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

    createItem(name){
        const item = new Task(name);
        return item;
    }

}