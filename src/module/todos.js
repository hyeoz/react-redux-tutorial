import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// 액션 생성 함수
// export const changeInput = (input) => ({
//   type: CHANGE_INPUT,
//   input,
// });
// createAction 사용
// 이 때 두번째 파라미터에 payload 를 정의하는 함수를 따로 선언해주어야 함
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3;
// export const insert = (text) => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text,
//     done: false,
//   },
// });

// export const toggle = (id) => ({
//   type: TOGGLE,
//   id,
// });

// export const remove = (id) => ({
//   type: REMOVE,
//   id,
// });

// createAction 사용
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

// 초기상태 및 리듀서 함수
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false,
    },
  ],
};

// function todos(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.input,
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo), // insert는 이미 todos 가지고있어서 concat 해줌
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map((todo) => {
//           // toggle, remove 는 없었기때문에 map, filter 해줌
//           return todo.id === action.id ? { ...todo, done: !todo.done } : todo;
//         }),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => {
//           return todo.id !== action.id;
//         }),
//       };
//     default:
//       return state;
//   }
// }

// handleActions 사용
const todos = handleActions(
  {
    // [CHANGE_INPUT]: (state, action) => ({ ...state, input: action.payload }),
    [CHANGE_INPUT]: (state, { payload: input }) => {
      produce((state, draft) => {
        draft.input = input;
      });
    },
    // [INSERT]: (state, action) => ({
    //   ...state,
    //   todos: state.todos.concat(action.payload),
    // }),
    [INSERT]: (state, { payload: todo }) => {
      produce((state, draft) => {
        draft.todos.push(todo);
      });
    },
    // [TOGGLE]: (state, action) => ({
    //   ...state,
    //   todos: state.todos.map((todo) => {
    //     return todo.id === action.payload
    //       ? { ...todo, done: !todo.done }
    //       : todo;
    //   }),
    // }),
    [TOGGLE]: (state, { payload: id }) => {
      produce((state, draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      });
    },
    // [REMOVE]: (state, action) => ({
    //   ...state,
    //   todos: state.todos.filter((todo) => {
    //     return todo.id !== action.payload;
    //   }),
    // }),
    [REMOVE]: (state, { payload: id }) => {
      produce((state, draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      });
    },
  },
  initialState,
);

export default todos;
