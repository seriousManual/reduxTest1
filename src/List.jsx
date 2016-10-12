import React from 'react';

export default (props) => {
    var list = props.list.map(entry => <li key={entry}>{entry}</li>)

    return <ul>{list}</ul>
}