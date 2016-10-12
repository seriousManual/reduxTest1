import React from 'react';

export default function PagedList(WrappedComponent) {
    return class PagedList extends React.Component {
        render() {
            var paging = this.props.paging
            var myList = this.props.list

            var start = paging.currentPage * paging.countEntriesPerPage
            var end = start + paging.countEntriesPerPage

            return <WrappedComponent list={myList.slice(start, end)}/>
        }
    }
}