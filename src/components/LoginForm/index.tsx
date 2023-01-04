import styled from "styled-components";
import {
    TextInput,
    useAppDispatch,
    useAppSelector,
    PasswordInput,
    changeUserData,
    authUser,
    SubmitButton,
    CommonModalWindow,
} from '../..';
import axios from "axios";
import {Controller, useForm, Control} from 'react-hook-form';


interface Props{

}


function LoginForm(props:Props){
    const dispatch = useAppDispatch();
    interface FormValues {
        email: string | undefined;
        password: string | undefined;
    }
    const {handleSubmit, getFieldState, getValues, control} = useForm<FormValues>();

    function loginUser(values:FormValues){
        if(!values.email?.trim() || !values.password?.trim()){
            return;
        }
        else{
            const userBodyData = {
                "email" : values.email,
                "password" : values.password,
            }
            
            
        }
    }


    return (
       <>   
            <Form onSubmit={handleSubmit(loginUser)}>
            <Controller
                control={control}
                name={"email"}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                    <TextInput
                        ref={ref}
                        labelText="Email Adress"
                        type="email"
                        placeholder="example@mail.ru"
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)}
                        value={value || ""}
                    />
                  )}
            />
            <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                        <PasswordInput
                            ref={ref}
                            labelText="Password"
                            placeholder="password"
                            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)}
                            value={value || ""}
                        />
                      )}
                />
            <SubmitButton text="Sign in" bgColor="#5736ff" textColor="white"/>
        
        
        </Form>
       </>
    )

} 


const Form = styled.form`
    font-family: 'Gilroy';
    padding: 40px 0px;
    display: flex;
    flex-direction: column;
`
export default LoginForm;