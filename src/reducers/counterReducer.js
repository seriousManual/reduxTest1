export default (state = 0, action) => {
    var foo = state
    if (action.type === 'INC') {
        foo = state + 1
    } else if (action.type === 'DEC') {
        foo = state - 1;
    }

    return foo
}