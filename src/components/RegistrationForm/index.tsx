import styled from "styled-components";
import {
    TextInput,
    useAppDispatch,
    useAppSelector,
    PasswordInput,
    changeUserData,
    SubmitButton,
    CommonModalWindow,
} from '../..';
import axios from "axios";
import {Controller, useForm, Control} from 'react-hook-form';


interface Props{

}


function RegistrationForm(props:Props){
    const dispatch = useAppDispatch();
    interface FormValues {
        email: string | undefined;
        password: string | undefined;
        name: string | undefined;
        lastname: string | undefined;
    }
    const {handleSubmit, getFieldState, getValues, control} = useForm<FormValues>();

    function registrateUser(values:FormValues){
        if(!values.email?.trim() || !values.password?.trim() || !values.name?.trim() || !values.lastname?.trim()){
            return;
        }
        else{
            const userBodyData = {
                "firstname" : values.name,
                "lastname" : values.lastname,
                "email" : values.email,
                "password" : values.password,
            }
            
            // dispatch(changeUserData({username: values.username, password: values.password, email: values.email}));
            // window.location.href = "/app";
            axios.post('http://localhost/api/create_user.php', {
                data: JSON.stringify(userBodyData),
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                mode: 'cors',
                
            })
                .then((response)=>{
                    console.log(response);
                })
        }
    }


    return (
       <>   
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
                name={"name"}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                    <TextInput
                        ref={ref}
                        labelText="First name"
                        type="text"
                        placeholder="First name"
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onChange(e)}
                        value={value || ""}
                    />
                  )}
            />
            <Controller
                control={control}
                name={"lastname"}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                    <TextInput
                        ref={ref}
                        labelText="Last name"
                        type="text"
                        placeholder="Last name"
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
       </>
    )

} 


const Form = styled.form`
    font-family: 'Gilroy';
    padding: 40px 0px;
    display: flex;
    flex-direction: column;
`
export default RegistrationForm;