import styled from "styled-components";
import {
    RegistrationForm,
    CommonModalWindow,
} from '../../';


interface Props{

}


function RegistrationPage(props:Props){
    return(
        <ExternalForm>
            <RegistrationForm/>
        </ExternalForm>
    )
}


const ExternalForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`


export default RegistrationPage;