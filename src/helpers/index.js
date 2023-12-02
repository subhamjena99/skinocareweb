import axios from "axios";
import Cookies from "js-cookie";

// FETCHING TOKEN FROM COOKIE
export const token = Cookies.get('skinocare-auth');

export const request = async (props) => {

    const response = await axios?.[props?.method](
        `${process.env.NEXT_PUBLIC_API_BASE_URL}${props.url}`,
        props.cred,
        {
            headers: {
                'Authorization': `${props?.token}`,
            },
            withCredentials: true,
        },
    );
    return response;
};

export const getRequest = async (props) => {

    const response = await axios?.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}${props.url}`,
        {
            headers: {
                'Authorization': `${props?.token}`,
            },
            withCredentials: true,
        },
    );
    return response;
};

export const postRequest = async (props) => {

    const response = await axios?.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}${props.url}`,
        props.cred,
        {
            headers: {
                'Authorization': `${props?.token}`,
            },
            withCredentials: true,
        },
    );
    return response;
};

export const noTokenGetRequest = async (url) => {

    const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`,
        {
            withCredentials: true,
        },
    );
    return response;
};

export const noTokenPostRequest = async (props) => {

    const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}${props.url}`,
        props.cred,
        {
            withCredentials: true,
        },
    );
    return response;
};

export const addToCart = async (props) => {

    const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL + 'api/user/cart'}`,
        props.cred,
        {
            headers: {
                'Authorization': `${token}`,
            },
            withCredentials: true,
        },
    );
    return response;
};