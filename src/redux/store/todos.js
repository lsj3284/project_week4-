// Action value
const ADD_TODO = "ADD_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";

//store 에서 reducer로 보내줄때  보내주려고 하는게 어떤 행위인지 알려주기위해서
//나타내는 action type 

//payload reducer에 전달해줄 내용이 담겨있음. 


export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

// Todo를 지우는 action creator
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

// Todo를 isDone를 변경하는 action creator
export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};

// 상세 페이지에서 특정 Todo만 조회하는 action creator
export const getTodoByID = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  };
};

// initial state
const initialState = {
  todos: [
    {
      id: "1",
      title: "리액트",
      body: "리액트를 배워봅시다",
      isDone: false,
    },
  ],
  todo: {
    id: "0",
    title: "",
    body: "",
    isDone: false,
  },
};

//변수 todos를 선언 , state의 정보를 initialState 초기 값으로 선언하고, action을 받아오기로함
// input으로 받은 입력값이 정보가 state 에 저장됨



const todos = (state = initialState, action) => {
  switch (action.type) {
    // action type이 어떤 종류냐에 따라 아래의 경우를 적용하겠다는 내용
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
      // todos 는 기존 state 정보를 받아와서 새로운 todos의 정보를 넣어주겠다고 하는것
      // ... state = todos: {id: "1", title: "리액트", body: "리액트를 배워봅시다", isDone: false}, {id: "2", title: "제대로 배우기", body:"확실히 알기", isDone:false}
      //  todos: {id: "1", title: "리액트", body: "리액트를 배워봅시다", isDone: false}, {id: "2", title: "제대로 배우기", body:"확실히 알기", isDone:false}

      // ... spread 문법 [] 가 있다면 [] 벗기고 {} 가 있다면 {} 벗김

      // ... spread 문법을 사용하여 {id: "1", title: "리액트", body: "리액트를 배워봅시다", isDone: false} 랑 form.jsx 의 input 태그를통해 받아지는 값이 추가되어서 배열이됨



      
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
      
      // state를 전개한뒤  todos 라는 내용에서 filter 적용
      // 받아오는 payload의 내용은 삭제할 카드의 id 값
      // filter를 이용해서 새로운 배열을 만들어내는것
      // payload를 통해 받아온 id와 일치하지 않는 배열을 만들어내서 해당 카드를 없애는것



    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };

      //완료, 취소 버튼을 눌렀을때의 로직
      // 카드의 todo id 와 일치하면 isDone 값을 바꿔주고(true->false, false-> true) 카드의 위치도 바뀜


    case GET_TODO_BY_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };
    default:
      return state;
  }
};

// ID의 정보를 찾아서 find 함수를 이용하여 상세페이지에 뿌려줌 

export default todos;
