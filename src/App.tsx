import styled from "styled-components";
import {Route, Routes, Navigate} from 'react-router-dom';
import {
    AppPage,
    useAppSelector,
    selectUserData,
    UserInterface,
} from './';



interface Props{

}

function App(props:Props) {

  const userData:UserInterface = useAppSelector(selectUserData);

  return(
    <>
       <Routes>
         <Route
          path="/app"
          element={userData.authFlag === true ? <AppPage/> : <AppPage/>}
         />
        


       </Routes>
    </>
  )
            
}

 



export default App;

