import CollectionTask from "@/Collection";
import StorageLocal from "@/StorageLocal";
import { defineStore } from "pinia";

export const useCollectionStore = defineStore("CollectionStore", {
    state: () =>{
        return {
            collection: new CollectionTask((new StorageLocal)),
            error: '',
            name: '',
            search: ''
        }
    },
    actions:{
        addTask(){
            try{
              this.collection.create(this.name);
              this.name ='';
              this.error='';
            }catch(e){
              this.error = "Erreur: "+e.message;
            }
          },
          setSearch(){
            this.collection.filter(this.search);
          },
    }
});