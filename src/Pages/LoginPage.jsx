import React from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../services/Redux/Slices/UserSlice';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const dispatch = useDispatch()

    const onSubmit = async () => {
        const data = {
            user,
            password
        }
        try {
            const response = await dispatch(signUp(data))
            if (response.status === 200) {
                useNavigate('/home')

            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>

        </div>
    );
};

export default LoginPage;