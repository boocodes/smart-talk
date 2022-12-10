import styled from "styled-components";



interface Props{

}

function AppPage(props:Props){
    return(
        <>
            <ExternalWrapper>
                <WorkspacesWrapper>
                    Workspaces
                </WorkspacesWrapper>
                <WorkspaceInfoWrapper>
                    Workspace info
                </WorkspaceInfoWrapper>
                <MessagesWrapper>
                    messages
                </MessagesWrapper>
            </ExternalWrapper>
        
        </>
    )
}

const ExternalWrapper = styled.div` 
    font-family: 'Gilroy';
    display: flex;
`
const WorkspaceInfoWrapper = styled.div`
    width: 20%;
    position: relative;
    background-color: blue;
`
const WorkspacesWrapper = styled.div`
    width: 10%;
    background-color: red;
    position: relative;
`
const MessagesWrapper = styled.div`
    position: relative;
    width: 70%;
    background-color: green;
`


export default AppPage;