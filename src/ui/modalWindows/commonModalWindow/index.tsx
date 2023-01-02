import styled from "styled-components";



interface Props{
    modalText: string;
}


function CommonModalWindow(props: Props){
    return(
       <>
            <ExternalWrapper>
                <MainText>
                    {props.modalText}
                </MainText>
            </ExternalWrapper>
            <BlackOverlay/>
       </>
    )
}

const ExternalWrapper = styled.div`
    font-family: 'Gilroy';
    background-color: white;
    border-radius: 10px;
    position: fixed;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    width: 200px;
    height: 200px; 
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
`
const MainText = styled.p`
    color: black;
    font-size: 19px;
`

const BlackOverlay = styled.div`
    background-color: black;
    opacity: 0.4;
    z-index: 9;
    position: absolute;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    height: 100vh;
`


export default CommonModalWindow;