import React from 'react';

export default (props) => {
    var paging = props.paging
    var onNext = props.onNext
    var onPrev = props.onPrev
    var onSpecific = props.onSpecific

    var pageHandles = (new Array(paging.countPages)).join(',').split(',').map((_, i) => {
        var style = {fontWeight: paging.currentPage === i ? 'bold' : 'normal'}

        return <span key={i} onClick={() => onSpecific(i)} style={style} >&nbsp;{i + 1}&nbsp;</span>
    })

    if (paging.countPages === 0) pageHandles = []

    var prevHandle = paging.currentPage > 0 ?
        <span onClick={onPrev}>&lt;</span> :
        null

    var nextHandle = paging.currentPage < paging.countPages - 1 ?
        <span onClick={onNext}>&gt;</span> :
        null

    return <div>
        {prevHandle}
        {pageHandles}
        {nextHandle}
    </div>
}