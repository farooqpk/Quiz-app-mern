import {useLocation} from 'react-router-dom'

export const QuizResult=()=>{

    const {state} = useLocation()
  // state.resultArr.map((item)=>{
  //   console.log(item);
  // })
  console.log(state);
    return(<>
    
    <h1>hello word</h1>
    </>)
}