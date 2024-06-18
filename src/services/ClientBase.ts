import axios from "axios";

const ClientBase = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const GET = async (url: string, headers?: any) => {
    return await ClientBase.get(url, headers)
};

export const POST = async (url: string, data: any, headers?: any) => {
    return await ClientBase.post(url, data, headers);
};

export const PUT = async (url: string, data: any, headers?: any) => {
    return await ClientBase.put(url, data, headers);
};

export const DELETE = async (url: string, headers?: any) => {
    return await ClientBase.delete(url, headers);
};
