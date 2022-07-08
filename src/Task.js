export default class Task {
  constructor(label, isDone = false, id = null) {
    if (label == "") throw new Error('Vous devez entrer le nom de la tâche !');
    this.label = label;
    this.done  = isDone;
    this.id    = id;
  }

  markAsDone(isDone = true) {
    this.done = isDone;
  }

  rename(name) {
    this.label = name;
  }

  setId(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  compare(taskToCompare) {
    const label1 = this.label.toUpperCase();
    const label2 = taskToCompare.label.toUpperCase();
    return label1 == label2 ? 0 : (label1 > label2 ? 1 : -1);
  }

  match(filterStr) {
    const regex = new RegExp("[A-Za-z]*(" + ((filterStr.normalize("NFD")).toLowerCase()).replaceAll(' ', '|') + ")"  , 'g');
    return ((this.label.normalize("NFD")).toLowerCase()).match(regex);
  }
}