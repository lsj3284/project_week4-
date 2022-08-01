//레이아웃 7

import React from "react";
import styled from "styled-components";

const Layout =  ({children}) =>{
    return <StLayout>{children}</StLayout>
    // layout 태그 안쪽의 자식 태그를 받아올때 사용
    // 
};

export default Layout;

const StLayout = styled.div`
    max-width: 1200px;
    min-width: 800px;
    margin : 0 auto;
    `;


