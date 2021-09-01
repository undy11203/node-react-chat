import AuthService from "../service/AuthService"
import { makeAutoObservable } from "mobx";
import axios from "axios";
import { API_URL } from './../http/index';


export default class Store{
    isAuth = false
    isLoading = false


    constructor(){
        makeAutoObservable(this)
    }

    setAuth(bool){
        this.isAuth = bool
    }
    setUser(user){
        this.user = user
    }
    setLoading(bool){
        this.isLoading = bool
    }

    async login(email, username, password){
        try {
            const response = await AuthService.login(email, username, password)
            localStorage.setItem('token', response.data.accessToken)
            localStorage.setItem('username', username)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.messsage)
        }
    }
    async registration(email, username, password){
        try {
            const response = await AuthService.registration(email, username, password)
            localStorage.setItem('username', username)
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            console.log(this.isAuth)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e)
        }
    }
    async logout(){
        try {
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({})
        } catch (e) {
            console.log(e.response?.data?.messsage)
        }
    }
    async checkAuth(){
        this.setLoading(true)
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            localStorage.setItem('username', response.data.user.username)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e)
        }finally{
            this.setLoading(false)
        }
    }
}