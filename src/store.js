import { createStore } from 'redux';

// Redux action
// - type (string)
// - payload => object => { taskTitle }
import reducer from './reducer';

const store = createStore(reducer);

export default store;
