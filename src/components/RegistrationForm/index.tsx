import styled from "styled-components";
import {
    TextInput,
    useAppDispatch,
    useAppSelector,
    PasswordInput,
    changeUserData,
    SubmitButton,
} from '../..';
import {Controller, useForm, Control} from 'react-hook-form';


interface Props{

}


function RegistrationForm(props:Props){
    const dispatch = useAppDispatch();
    interface FormValues {
        email: string | undefined;
        password: string | undefined;
        username: string | undefined;
    }
    const {handleSubmit, getFieldState, getValues, control} = useForm<FormValues>();

    function registrateUser(values:FormValues){
        if(!values.email?.trim() || !values.password?.trim() || !values.username?.trim()){
            return;
        }
        else{
            dispatch(changeUserData({username: values.username, password: values.password, email: values.email}));
            window.location.href = "/app";
        }
    }


    return (
        <Form onSubmit={handleSubmit(registrateUser)}>
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
                name={"username"}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                    <TextInput
                        ref={ref}
                        labelText="Username"
                        type="text"
                        placeholder="username"
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
            <SubmitButton text="Sign up" bgColor="#5736ff" textColor="white"/>
        
        
        </Form>
    )

} 


const Form = styled.form`
    font-family: 'Gilroy';
    padding: 40px 0px;
    display: flex;
    flex-direction: column;
`
export default RegistrationForm;