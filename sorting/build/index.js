"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([10, -4, 3, 77, 45, 2]);
// numbersCollection.sort();
// console.log(numbersCollection.data);
// --------------------------------------------------------- //
// const charactersCollection = new CharactersCollection('yuAhjdAa');
// charactersCollection.sort();
// console.log(charactersCollection.data);
// --------------------------------------------------------- //
var linkedlist = new LinkedList_1.LinkedList();
linkedlist.add(4);
linkedlist.add(2);
linkedlist.add(49);
linkedlist.add(12);
linkedlist.add(-3);
linkedlist.sort();
linkedlist.print();
// --------------------------------------------------------- //
