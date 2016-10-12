export default (state = {currentPage: 0, countPages: 0, countEntriesPerPage: 8, countEntries: 0}, action) => {
    if (action.type === 'LIST') {
        return {
            ...state,
            countEntries: action.list.length,
            countPages: calculateCountPages(action.list.length, state.countEntriesPerPage)
        }
    } else if (action.type === 'SPECIFIC_PAGE') {
        return {
            ...state,
            currentPage: action.page
        }
    } else if (action.type === 'NEXT_PAGE') {
        return {
            ...state,
            currentPage: (state.currentPage + 1) % state.countPages
        }
    } else if (action.type === 'PREVIOUS_PAGE') {
        return {
            ...state,
            currentPage: Math.max(state.currentPage - 1 , 0)
        }
    } else if (action.type === 'ENTRIES_PER_PAGE') {
        return {
            ...state,
            currentPage: 0,
            countEntriesPerPage: action.countEntriesPerPage,
            countPages: calculateCountPages(state.countEntries, action.countEntriesPerPage)
        }
    }

    return state
}

function calculateCountPages(countEntries, countPerPage) {
    return Math.ceil(countEntries / countPerPage)
}