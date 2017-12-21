import {observable} from 'mobx';

console.log('--------');
const map = observable.map({ key: "value"});
console.log(map.get('key'));
map.set("key", "new value");
console.log(map.get('key'));

const list = observable([1, 2, 4]);
console.log(list.get(2));
list[2] = 3;
console.log(list.get(2));

const person = observable({
    firstName: "Clive Staples",
    lastName: "Lewis"
});
console.log(person.firstName);
person.firstName = "C.S.";
console.log(person.firstName);

const temperature = observable(20);
console.log(temperature.value);
temperature.set(25);
console.log(temperature.value);
