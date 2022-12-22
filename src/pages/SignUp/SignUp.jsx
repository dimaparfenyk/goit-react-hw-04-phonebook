import { useState } from "react"
import { Box, SignUpInput, SubmitButton, SubmitForm } from "./SignUp.styled";

export const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInput = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                return;
        };
        console.log(value)
    };

    return (
        <main>
            <Box>
                 <SubmitForm>
                <SignUpInput
                type="text" 
                placeholder="Name"
                onChange={handleInput}
                name="name"
                value={name}
            />
            <SignUpInput
                type="text" 
                placeholder="Email"
                onChange={handleInput}      
                name="email"
                value={email}
                />
                <SignUpInput
                type="text" 
                placeholder="Password"
                onChange={handleInput}
                name="password"
                value={password}
                />
                <SubmitButton>Submit</SubmitButton>
            </SubmitForm>
           </Box>

        </main>
    )
}