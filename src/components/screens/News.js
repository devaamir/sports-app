import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import {useForm} from 'react-hook-form'
// import axios from 'axios'

export default function News() {

    const [datas,setDatas] = useState([]);
    const {register, handleSubmit, errors } = useForm();

    // useEffect(() => {
    //     axios
    //     .post('https://www.npoint.io/docs/eb65776dde6d5ef8e6d6')
    //     .then(function (response) {
    //         setDatas(response.data.data);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    // },[]);

    const onSubmit = (data) => {
        setDatas([...datas,data]);
        console.log(datas);
    }
    return (
        <div>
            <Main>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <center>
                    <input type="email" placeholder="email" name="email" ref={register}/> <br />
                    <input type="password" placeholder="password" name="password" ref={register({required: "Password is required", minLength: {value: 8, message: "Password must contain at least 8 or more characters!"}})}/><br />
                    <input type="submit" value="Submit" />
                    </center>
                    {errors.password && alert(errors.password.message)}
                </Form>
            </Main>
        </div>
    )
}

const Main = styled.section``;

const Form = styled.form``;
