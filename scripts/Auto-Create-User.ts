import AuthService from "../services/AuthService";

const authService = new AuthService();

const userName1 = "huehne1@htw-berlin.de";
const userPw1 = "hunter1";
const userName2 = "huehne2@htw-berlin.de";
const userPw2 = "hunter2";

authService
    .create({
        email: userName1,
        password: userPw1,
    });
authService
    .create({
        email: userName2,
        password: userPw2,
    });