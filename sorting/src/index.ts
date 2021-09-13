import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './sorter';

const numbersCollection = new NumbersCollection([10, -4, 3, 77, 45, 2]);
const charactersCollection = new CharactersCollection('yuAhjdAa');

const linkedlist = new LinkedList();

linkedlist.add(4);
linkedlist.add(2);
linkedlist.add(49);
linkedlist.add(12);
linkedlist.add(-3);

const sorter = new Sorter(linkedlist);
sorter.sort();
linkedlist.print();

// const sorter = new Sorter(numbersCollection);
// sorter.sort();

// console.log(numbersCollection.data);

// const sorter = new Sorter(charactersCollection);
// sorter.sort();

// console.log(charactersCollection.data);
