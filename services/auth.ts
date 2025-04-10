import { api } from "./api";

interface RegisterData {
    username: string;
    email: string;
    password: string;
}

interface LoginData {
    email: string;
    password: string;
}

export const registerUser = async (data: RegisterData) => {
    return api.post("/users/register", data);
};

export const loginUser = async (data: LoginData) => {
    return api.post("/users/login", data);
};
