{
  /**중앙 state 관리소인 Store를 만드는 설정코드 */
}

import { createStore } from "redux";
import { combineReducers } from "redux";
import counterModule from "../modules/counterModule";
const rootReducer = combineReducers({
  counter: counterModule,
  //counter 컴포넌트에서 사용할 모듈을
  //store에서 호출하여 스토어와 연결지었다.
  //store에서 모듈은 뒤에 module이라고 붙이자
});
const store = createStore(rootReducer);

export default store;
/*
1. createStore()
리덕스의 가장 핵심이 되는 스토어를 만드는 메소드(함수) 입니다. 
리덕스는 단일 스토어로 모든 상태 트리를 관리한다고 설명해 드렸죠? 
리덕스를 사용할 시 creatorStore를 호출할 일은 한 번밖에 없을 거예요.

store 설정을 위해 만드는 함수
*/

/*
2. combineReducers()
리덕스는 action —> dispatch —> reducer 순으로 동작한다고 말씀드렸죠? 
이때 애플리케이션이 복잡해지게 되면 reducer 부분을 여러 개로 나눠야 하는 경우가 발생합니다. 
combineReducers은 여러 개의 독립적인 reducer의 반환 값을 하나의 상태 객체로 만들어줍니다.

이디액타페서스
[세팅을 위한 단계]
1. 설치(Redux Toolkit 패키지 설치하기) : yarn add react-redux @reduxjs/toolkit
2. 스토어(Redux store 생성하기) : configureStore() 사용
3. 슬라이스(Slice 생성하기) : createSlice() 사용하여 reducer와 actions 정의
4. 프로바이더(Redux Provider로 앱 감싸기) : <Provider store={store}> 사용

[사용을 위한 단계]
1. 이 : 이벤트 발생
2. 디 : 디스패치 호출
3. 액 : 디스패치는 인자로 액션 객체를 받음
4. 타 : 액션의 타입을 정의함
5. 페 : 액션의 페이로드를 정의함
6. 써 : 리듀서는 액션의 타입과 페이로드를 받아 상태를 업데이트함
7. 스 : 스토어는 리듀서를 통해 상태를 업데이트함(스테이트가 변경되어 컴포넌트가 리렌더링됨)
*/
