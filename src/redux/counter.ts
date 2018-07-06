
// interface Counter<T> {
//     (state?: T, action?: object): T
// }

const counter: <T>(T, object) => T = (state = 0, action = {}) => {
    switch (action.type){
        case "INCREMENT":
            return state + 1;
        default: return state;
    }
}

export default counter;