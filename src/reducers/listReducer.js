export default (state = [], action) => {
    if (action.type === 'LIST') {
        return action.list
    }

    return state
}