import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../../../redux/store/todos.js";
import { Link } from "react-router-dom";

//useDispatch = 은행과 비유하자면 은행 창구
// useSelector = state의 값을 받아오거나 보내주기 위해 사용 통장조회
// deleteTodo 는 todos.js에서 카드삭하는 로직 import 해옴
// toggleStatusTodo 는 완료 취소버튼의 로직을 import 해옴
// Link 는 react-router-dom  인데 html의 a 태그 와 같음





const List = () => {
  const dispatch = useDispatch();
// useDispatch() 함수를 변수 dispatch에 저장
const todos = useSelector((state) => state.todos.todos);
// useSelector를통해 state 값을 가져옴 id, title, body,isDone 을 관리하던 배열 가져옴
// 가져온값을 todos에 저장


  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  // onDeleteTodo 는 dispatch를 통해 deleteTodo 라는 행동을 창구에서 진행
  // payload로 id를 todos.js 에 전달 .


  const onToggleStatusTodo = (id) => {
    dispatch(toggleStatusTodo(id));
  };
 // onToggleStatusTodo도 dispatch를 통해 onToggleStatusTodo라는 행동을 창구에서 진행
  // payload로서 id를 todos.js에 전달.
  



  return (
    <StListContainer>
      <h2>Working.. 🔥</h2>
      <StListWrapper>
        {todos.map((todo) => {
          // todos, 배열을 map을 활용하여 카드 생성 여기서의 todo, 인자는 배열의 각 요소
          if (!todo.isDone) {
            //배열속 todo,  객체의 isDone 값이 !isDone 이면 false
            return (
              <StTodoContainer key={todo.id}>
                <StLink to={`/${todo.id}`} key={todo.id}>
                  {/* key 값을 설정한뒤 todo.id 를 통해서 각페이지의 연결주소를 설정
                  todo.id를 키값 부여 */}
                  <div>상세보기</div>
                </StLink>
                <div>
                  <h2 className="todo-title">{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <StDialogFooter>
                  <StButton
                    borderColor="red"
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    삭제하기
                  </StButton>
                  <StButton
                    borderColor="green"
                    onClick={() => onToggleStatusTodo(todo.id)}
                    // todos.js 에서 import 해서 받아온  함수를 todo.id 파라미터를 통해  제어합니다
                  >  
                    {todo.isDone ? "취소!" : "완료!"}
                    {/* todo.isDone?은  삼항 조건 연산자이며, 조건 ? 참 : 거짓 을 나타냄 */}
                  </StButton>
                </StDialogFooter>
              </StTodoContainer>
            );
          } else {
            return null;
          }
            //조건에 해당되는 카드만 (isDone=false)  working에 들어감
      
        })}
      </StListWrapper>
      <h2 className="list-title">Done..! 🎉</h2>
      <StListWrapper>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <StTodoContainer key={todo.id}>
                <StLink to={`/${todo.id}`} key={todo.id}>
                  <div>상세보기</div>
                </StLink>
                <div>
                  <h2 className="todo-title">{todo.title}</h2>
                  <div>{todo.body}</div>
                </div>
                <StDialogFooter>
                  <StButton
                    borderColor="red"
                    onClick={() => onDeleteTodo(todo.id)}
                  >
                    삭제하기
                  </StButton>
                  <StButton
                    borderColor="green"
                    onClick={() => onToggleStatusTodo(todo.id)}
                  >
                    {todo.isDone ? "취소!" : "완료!"}
                  </StButton>
                </StDialogFooter>
              </StTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StListWrapper>
    </StListContainer>
  );
};

export default List;

const StListContainer = styled.div`
  padding: 0 24px;
`;

const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const StTodoContainer = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;

const StLink = styled(Link)`
  text-decoration: none;
`;

const StDialogFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
