// 헤더 8

import React from "react";
import styled from "styled-components";
//react에서 css 를 편리하게 쓰려고 또는 JS 기능을 넣고싶을때 사용 

const Header = () =>{
    return (
        <StContainer>
            <div>My Todo List</div>
            <div>React</div>
        </StContainer>

        // react-components 로 제작된 컴포넌트
    );
};

export default Header;

// 만들어진 컴포넌트를 사용하고 싶을대는 반드시 export 사용


const StContainer =styled.div`
    border : 1px solid #ddd;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 20px;
    margin-bottom: 24px;`;