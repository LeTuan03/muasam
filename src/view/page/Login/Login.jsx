import React, { createContext, useContext, useState } from 'react'
import { Box, Button, Grid, Typography } from '@material-ui/core'
import { TextValidator, ValidatorComponent, ValidatorForm } from 'react-material-ui-form-validator';
import { useNavigate } from 'react-router-dom';
import { login } from './LoginServices';

function Login() {
    const navigate = useNavigate();

    const [dataState, setDataState] = useState({});

    const handleChange = (e) => {
        let { name, value } = e.target;
        setDataState((pre) => ({ ...pre, [name]: value }));
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            let formData = new FormData();
            formData.append("username", dataState?.username);
            formData.append("password", dataState?.password);
            const data = await login(formData);
            localStorage.setItem("currentuser", JSON.stringify(data?.data?.profile));
            localStorage.setItem("accessToken", data?.data?.accessToken);
            if (data?.data?.role === "ADMIN") {
                navigate("/admin");
            } else {
                navigate("/");
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex justify-center h-screen items-center bg-[#111827]'>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Đăng nhập</h5>
                    <div>
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên đăng nhập</label>
                        <input value={dataState?.username} onChange={handleChange} name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu</label>
                        <input value={dataState?.password} onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                            </div>
                            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nhớ mật khẩu</label>
                        </div>
                        <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Bạn quên mật khẩu?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Đăng nhập vào tài khoản của bạn</button>
                </form>
            </div>
        </div>
    )
}

export default Login
