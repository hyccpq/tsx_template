
interface Counter {
    (state: object, action: object): object
}

const counter: Counter = (state = {}, action = {}) => {
    switch (action.type){
        default: return state;
    }
}

export default counter;