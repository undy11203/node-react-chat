import $api from '../http'

export default class AuthService{
    static async registration(email, username, password){
        return $api.post('/registration', {email, username, password})
    }
    static async login(email, username, password){
        return $api.post('/login', {email, username, password})
    }
    static async logout(){
        return $api.post('/logout')
    }
}