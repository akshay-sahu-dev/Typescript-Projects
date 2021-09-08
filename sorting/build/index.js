"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var sorter_1 = require("./sorter");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, -4, 3, 77, 45, 2]);
var sorter = new sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
