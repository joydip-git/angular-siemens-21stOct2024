import { Injectable } from "@angular/core"

@Injectable()
export class TokenService {
    constructor() { }
    saveToken(token: string): void {
        sessionStorage.setItem('token', token)
    }
    fetchToken(): string | null {
        return sessionStorage.getItem('token')
    }
    removeToken(): void {
        sessionStorage.removeItem('token')
    }
    isLoggedIn(): boolean {
        return sessionStorage.getItem('token') ? true : false
    }
}