import React from 'react';
import styled from 'styled-components';
import MemoItem from './memoItem';

const MemoListBlock = styled.div`
    width: 460px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
`

function MemoList({memos, getItem, onChangeSelectedMemo}){
    return (
        <MemoListBlock>
            {memos.map(memo => 
                <MemoItem onChangeSelectedMemo={onChangeSelectedMemo} memo={memo} getItem={getItem} key={memo.id}></MemoItem>
            )}
        </MemoListBlock>
    )
}

export default MemoList;