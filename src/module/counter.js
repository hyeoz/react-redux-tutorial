import { createAction } from 'redux-actions';
import handleActions from 'redux-actions/lib/handleActions';

// 액션 타입
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수
// export는 여러개 내보내기 가능
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
// redux-actions 라이브러리 사용
// createAction 로 매번 객체 만들어줄 필요 없음
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기값, 리듀서 함수
const initialState = {
  number: 0,
};

// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }
// redux-actions 라이브러리 사용
// handleActions(각 액션에 대한 업데이트 함수, 초기 상태)
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

export default counter;
