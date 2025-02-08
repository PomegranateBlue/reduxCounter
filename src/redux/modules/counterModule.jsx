{
  /**개발자가 생성할 State 그룹 집합소
    파일명과 관련된 State를 생성하고 모듈로서 사용

    */
}
/* */

const initialState = {
  number: 0,
};
/*리덕스에서는 initialState에 있는 값을 조작한다. */

const counter = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
//counter는 리듀서이다
export default counter;
