import React, {useEffect} from "react"; //3
// useEffect 사용
//컴포넌트가 렌더링 될때 특정 작업을 실행 할 수있도록 하는 Hook
// 리액트의 useEffect 훅을 사용하면 함수 컴포넌트에서도 side effect를 사용

import styled from "styled-components";
//Javascript 파일 내에서 CSS를 사용할 수 있게 해주는 대표적인 CSS-in-JS 라이브러리로 
//React 프레임워크를 주요 대상으로 한 라이브러리이다.

import { useDispatch, useSelector} from "react-redux";
// useSelector : state를 조회하기위함
// useDispatch : action을 발생시키기 위함

import { useNavigate, useParams } from "react-router-dom";
//  useParams : 동적 라우팅값 읽어옴
// useNavigate : 양식이 제출되거나 특정 event가 발생할 때,  URI를 조작할수있는 interface


import { getTodoByID} from "../redux/store/todos.js";
// todos.js 에서 getTodoById 변수 부분을 import 해옴



const Detail = () => {  //Detil 변수 선언  및  콜백 함수 생성
 const dispatch = useDispatch();
 //useDispatch hook을 선언한뒤 dispatch 변수에 저장
 const todo = useSelector((state) => state.todos.todo);
  //todos 의 todo 리덕스 스토어 조회 한 값을 todo 변수에 저장
 // useSelector를 사용해서 리덕스 스토어의 상태를 조회할땐
 //만약 상태가 바뀌지 않았으면 리렌더링 하지 않음


 const { id } = useParams();
 console.log(todo)
//  console.log(id); 결과 나중에 확인
 
 const navigate = useNavigate();
 // navigate hook 사용


 useEffect(()=>{
    dispatch(getTodoByID(id));
 },[dispatch, id]);

 return (
    <StContainer>
        <StDialog>
            <div>
                <StDialogHeader>
                    <div>ID : {todo.id}</div>
                    <StButton
                    borderColor="#ddd"
                    onClick={()=>{navigate("/");}}>
                        이전으로
                    </StButton>
                </StDialogHeader>
                <StTitle>{todo.title}</StTitle>
                <StBody>{todo.body}</StBody>
            </div>
        </StDialog>
    </StContainer>

 );

};

export default Detail;

const StContainer = styled.div`
    border: 2px solid #eee;
    width : 100%;
    height: 100vh;
    display: flex;
    align-items: center;
`;

const StDialog = styled.div `
    width: 600px;
    height: 400px;
    border : 1px solid #eee;
    display : flex;
    flex-direction : column;
    justify-content: space-between;
    `;

const StDialogHeader = styled.div`
    display : flex;
    height: 80px;
    justify-content: space-between;
    padding: 0 24px;
    align-items: center;
    `;
const StTitle = styled.h1 `
 padding: 0 24px;
 `;

 const StBody = styled.main`
 padding : 0 24px;
 `;
 
 const StButton = styled.button`
  border : 1px solid ${({borderColor })=> borderColor};
  height : 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor:pointer;
`;


