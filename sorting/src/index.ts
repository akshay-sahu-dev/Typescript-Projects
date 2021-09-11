import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './sorter';

// const numbersCollection = new NumbersCollection([10, -4, 3, 77, 45, 2]);
// numbersCollection.sort();
// console.log(numbersCollection.data);
// --------------------------------------------------------- //

// const charactersCollection = new CharactersCollection('yuAhjdAa');
// charactersCollection.sort();
// console.log(charactersCollection.data);

// --------------------------------------------------------- //
const linkedlist = new LinkedList();

linkedlist.add(4);
linkedlist.add(2);
linkedlist.add(49);
linkedlist.add(12);
linkedlist.add(-3);

linkedlist.sort();

linkedlist.print();

// --------------------------------------------------------- //
