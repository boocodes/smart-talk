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
          element={userData.authFlag === true ? <AppPage/> : <Navigate to={"/welcome"} replace/>}
         />
        <Route
          path="/login"
          element={userData.authFlag === true ? <AppPage/> : <Navigate to={"/login"} replace/>}
        />
        <Route
          path="/registration"
          element={userData.authFlag === true ? <AppPage/> : <Navigate to={"/registration"} replace/>}
        />
        <Route
          path="/personal"
          element={userData.authFlag === true ? <></> : <Navigate to={"/welcome"}/>}
        />


       </Routes>
    </>
  )
            
}

 



export default App;

