
import { defineStore } from "pinia";
import Task from "@/Task";
import StorageLocal from "@/StorageLocal";


export const useCollectionStore = defineStore("CollectionStore", {
    state: () =>{
        return {
            collection: [],
            filterStr: '',
            persistenceEngine: new StorageLocal(),
            persistenceId : 'collection',
        }
    },
    actions:{
        create(label, isDone = false, id = null){
            const task = new Task(label, isDone, id );
            this.add(task);
        },
        add(item) {
            const nextId = this.collection.length;
            item.setId(nextId);
            this.collection.push(item);
            this.save();
        },
        sort() {
            return this.collection.sort((a,b) => a.compare(b));
        },
        remove(item) {
            const indexToRemove = this.findIndex(item);
            this.collection.splice(indexToRemove, 1);
            this.save();
        },
        findIndex(item) {
            return this.collection.findIndex((i) => i.getId() === item.getId());
        },
        empty() {
            return this.collection < 1
        },
        filter(filterStr) {
            this.filterStr = filterStr;
        },
        filteredItems() {
            return this.collection.filter(item => item.match(this.filterStr));
        },
        save() {
            this.persistenceEngine.save(this.persistenceId, this.collection);
        },
        load() {
            const rawTasks = this.persistenceEngine.load(this.persistenceId);
            if (rawTasks == null) return this.collection;
            this.collection = [];
            rawTasks.forEach(rawTask => {
                this.create(rawTask.label, rawTask.done, rawTask.id);
            });
        },
    }
});