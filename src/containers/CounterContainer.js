import { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import counter, { decrease, increase } from '../module/counter';

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

// useSelector 사용
const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  // useDispatch 사용
  const dispatch = useDispatch();
  // useDispatch 사용할 때는 useCallback 함께 쓰기
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;

// // map어쩌구 함수들이 반환하는 값은 props 로 전달됨
// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });
// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// // react-redux 와 연결하기위해 connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// 간단하게 작성
// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   // 1번
//   // dispatch => ({
//   //   increase: () => dispatch(increase()),
//   //   decrease: () => dispatch(decrease())
//   // })
//   // 2번 bindActionCreators
//   // (dispatch) =>
//   //   bindActionCreators(
//   //     {
//   //       increase,
//   //       decrease,
//   //     },
//   //     dispatch,
//   //   ),
//   // 3번 객체로 넣기
//   { increase, decrease },
// )(CounterContainer);
