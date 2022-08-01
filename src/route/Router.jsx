import React from "react"; //2
import { BrowserRouter  , Route, Routes} from "react-router-dom";
// 리액트 라우터를 사용하기위한 패키지 import
import Detail from "../pages/Detail";
// 상세페이지 import

import Home from "../pages/Home";
//메인페이지 import

const Router = () => {
    return (
        <BrowserRouter>
         {/* // BrowserRouter : HTML5 를 지원하는 브라우저의 주소를 감지 */}
            <Routes> 
                {/* // 여러 Route를 감싸서 그중 규칙이 일치하는 라우트 하나만 렌더링 시켜주는 역할 */}
                <Route path = "/" element = {<Home />} />
                {/* // path 속성에 경로  element 속성에 컴포넌트를 넣어줌
                // 여러라우팅을 매칭하고 싶은 경우 URL 뒤에 * 사용 */}
                <Route path = "/:id" element = {<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
// Router 컴포넌트 export 