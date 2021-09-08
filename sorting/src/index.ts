import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './sorter';

const numbersCollection = new NumbersCollection([10, -4, 3, 77, 45, 2]);

const sorter = new Sorter(numbersCollection);
sorter.sort();

console.log(numbersCollection.data);
