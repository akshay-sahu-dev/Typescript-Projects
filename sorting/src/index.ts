import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './sorter';

const numbersCollection = new NumbersCollection([10, -4, 3, 77, 45, 2]);
const charactersCollection = new CharactersCollection('yuAhjdAa');

// const sorter = new Sorter(numbersCollection);
// sorter.sort();

// console.log(numbersCollection.data);

const sorter = new Sorter(charactersCollection);
sorter.sort();

console.log(charactersCollection.data);
