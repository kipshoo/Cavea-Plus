export interface LoginForm {
    email:string;
    password:string;
}
export interface RegisterForm {
    firstName:string;
    lastName:string;
    birthDay:string;
    birthMonth:string;
    birthYear:string;
    gender:string;
    phone:string;
    email:string;
    password:string;
    confirmPassword:string;
    checkbox:string;
}
export interface VerifyForm {
    code:number;
    id:string;
}