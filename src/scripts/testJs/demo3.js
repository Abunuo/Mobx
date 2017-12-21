// import { observable, computed, autorun } from 'mobx';
const { observable, computed, autorun } = require('mobx');
let numbers = observable([1,2,3]);
let sum = computed(() => numbers.reduce((a, b) => a + b, 0));
let disposer1 = autorun(() => console.log(`sum:${sum.get()}`));
let disposer2 = autorun(() => console.log(`length:${numbers.length}`));
// sum:6
// length:3
numbers.push(4);
// sum:10
// length:4
disposer2();  //注销当钱 autorun
numbers.push(5);
// sum:15
