import styled from "styled-components";
import {Route, Routes, Navigate} from 'react-router-dom';
import {
    AppPage,
    useAppSelector,
    selectUserData,
    UserInterface,
    RegistrationPage,
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
         <Route
          path="/"
          element={userData.authFlag === true ? <Navigate to={'/app'} /> : <Navigate to={'/registration'} replace />}
         />
         <Route
          path="/registration"
          element={userData.authFlag === true ? <Navigate to={"/app"} /> : <RegistrationPage/>}
         />
        


       </Routes>
    </>
  )
            
}

 



export default App;

