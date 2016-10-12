import React, { Component } from 'react';

import CountPerPages from './CountPerPage.jsx'
import List from './List.jsx'
import wrapWithPaging from './PagedList.jsx'
import Paging from './Paging.jsx'

class App extends Component {
    render() {
        let {state, store} = this.props

        var PagedList = wrapWithPaging(List)

        return (
            <div className="App">
                <PagedList paging={state.paging} list={state.list}/>
                <CountPerPages countEntriesPerPage={state.paging.countEntriesPerPage}
                               onChange={newCount => store.dispatch({type: 'ENTRIES_PER_PAGE', countEntriesPerPage: newCount})}
                />
                <Paging paging={state.paging}
                        onNext={() => store.dispatch({type: 'NEXT_PAGE'})}
                        onPrev={() => store.dispatch({type: 'PREVIOUS_PAGE'})}
                        onSpecific={page => store.dispatch({type: 'SPECIFIC_PAGE', page: page})}
                />

                <br/><br/><br/>

                <button onClick={() => {
                    var list = (new Array(12 + Math.ceil(Math.random() * 50))).join(',').split(',').map((_, index) => index)
                    store.dispatch({type: 'LIST', list: list})
                }}>Generate List</button>
            </div>
        );
    }
}

export default App;
