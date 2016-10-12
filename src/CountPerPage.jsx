import React from 'react';

export default (props) => {
    var entries = [3, 8, 16]

    var options = entries.map(count => <option key={count} value={count}>{count}</option>)

    return <select value={props.countEntriesPerPage}
                   onChange={e => props.onChange(parseInt(e.target.value, 10))}>{options}</select>
}