import {observable,action} from 'mobx';

var scopeState = observable({
    index: 123
});

export default scopeState;
