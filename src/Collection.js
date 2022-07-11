import Task from "./Task";

export default class CollectionTask {
    constructor(persistenceEngine) {
        this.collection = [];
        this.filterStr  = '';
        this.persistenceEngine = persistenceEngine;
        this.persistenceId = 'collection';
        this.load();
    }

    create(label, isDone = false, id = null){
        const task = new Task(label, isDone, id );
        this.add(task);
    }

    add(item) {
        const nextId = this.collection.length;
        item.setId(nextId);
        this.collection.push(item);
        this.save();
    }

    sort() {
        return this.collection.sort((a,b) => a.compare(b));
    }

    remove(item) {
        const indexToRemove = this.findIndex(item);
        this.collection.splice(indexToRemove, 1);
        this.save();
    }

    findIndex(item) {
        return this.collection.findIndex((i) => i.getId() === item.getId());
    }

    empty() {
        return this.collection < 1
    }

    filter(filterStr) {
        this.filterStr = filterStr;
    }

    filteredItems() {
        return this.collection.filter(item => item.match(this.filterStr));
    }

    save() {
        this.persistenceEngine.save(this.persistenceId, this.collection);
    }

    load() {
        const rawTasks = this.persistenceEngine.load(this.persistenceId);
        this.collection = [];
        rawTasks.forEach(rawTask => {
            this.create(rawTask.label, rawTask.done, rawTask.id);
        });
    }
}