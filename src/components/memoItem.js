import React from 'react';
import styled from 'styled-components';

const MemoItemBlock = styled.div`
    height:98px;
    background: #1c1d1f;
    &:hover {
        background: #27282c;
        border-left: 4px solid gray;
    }
    padding: 20px;
    border: 1px solid rgba(0,0,0,1);
    display: flex;
    h1,p {
        margin: 0
    }
    h1 {
        font-size: 20px;
        margin-bottom: 10px;
        color: #9fa9ab;
    }
    p {
        color: #525254;
        font-weight: 700;
        font-size: 16px;
    }
`



function MemoItem({memo}){
    const 지금 = new Date();
    const 과거 = new Date(지금); //딱 지정하고 안 바껴야함.
    const 흐른시간 = 지금-과거; 
    return (
    <div className="memoItemCSS">

        <MemoItemBlock>
            <div className="AfterTime">{흐른시간}초</div>
            <div>
                <h1>{memo.Title}</h1>
                <p>{memo.Content}</p>
            </div>
        </MemoItemBlock>
    </div>
    )
}

export default MemoItem;