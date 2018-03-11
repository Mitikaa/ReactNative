// the first time reducer is called, state will be returned with value of undefined
// so always initialize state with some default value. This default value will be used only if the argument is undefined
export default (state = null, action)  => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            // always have deafult with reducers. Never return undefined
            // Redux will throw an error if undefined is returned from the reducer
            // returning state means whatever was returned the last time will be returned
            return state;
    }
};