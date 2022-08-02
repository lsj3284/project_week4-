import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
//useDispatch 는 reducer로 데이터를 전달해주기 위한 모듈 
import nextId from "react-id-generator";
// id 생성기 패키지
import { addTodo } from "../../../redux/store/todos.js";

//redux store todos.js 에서 addTodo 함수를 가져옴 

const Form = () => {
 
  const id = nextId();
  // 리액트 id 제너레이터를 통해 랜덤아이디 생성

  const dispatch = useDispatch();
  //reducer로 데이터를 전달해주기위한 함수를 dispatch 변수에 저장

  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });
 
// 입력받는 초기값을  todo 함수에 저장

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    //event.target.name과 event.target.value 의 정보를 받아옴
    setTodo({ ...todo, [name]: value });     
  }; // input태그를 통해서 입력받아지는 key : value값을 기존todo 함수에 덮어씌움

  const onSubmitHandler = (event) => {
    event.preventDefault();
    //새로고침을 막아주는 함수

    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    // trim() 양끝 공백을 제거하는 메소드
    // 공백을 제거해서 나온 내용이 빈값인지, 입력한 값이 없는지를 확인
    // return 동작되지 않도록 함수를 끝내버림
    dispatch(addTodo({ ...todo, id }));
    //  dispatch 를 통해 창구 안의 내용들 ( todo(입력된값)과 id값을 todos.js에 addTodo 에 내용 전달)
    setTodo({
      id: 0,
      title: "",
      body: "",
      isDone: false,
    });
  };  // 입력이 끝나면 input안의 내용 제거 해줌

  return (
    <StAddForm onSubmit={onSubmitHandler}>
      <StInputGroup>
        <StFormLabel>제목</StFormLabel>
        <StAddInput
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <StFormLabel>내용</StFormLabel>
        <StAddInput
          type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}
        />
      </StInputGroup>
      <StAddButton>추가하기</StAddButton>
    </StAddForm>
  );
};

export default Form;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;
