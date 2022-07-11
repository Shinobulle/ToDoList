import StorageInterface from "./StorageInterface";

export default class StorageLocal extends StorageInterface {
    save(id, data) {
        localStorage.setItem(id, JSON.stringify(data));
    }

    load(id) {
        const rawData = localStorage.getItem(id);
        return JSON.parse(rawData);
    }
}