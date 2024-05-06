import {Page, Locator, expect} from '@playwright/test'
import { URLS } from '../data/constants'
import { MainPage } from '../page-object/main-page';


export class LoginPage{
    readonly page: Page
    readonly username: Locator
    readonly password: Locator
    readonly loginButton: Locator

    constructor(page: Page){
        this.page = page
        this.username = page.locator("#user-name")
        this.password = page.locator("#password")
        this.loginButton = page.locator("#login-button")
    }

    // Functions
    async submitLogin(user: string, pass: string){
        const mainPage = new MainPage(this.page)
        await this.page.goto(URLS.baseUrl as string)
        await this.username.fill(user)
        await this.password.fill(pass)
        await this.loginButton.click()
        await expect(mainPage.inventoryContainer).toBeVisible()
        await this.page.pause()
    }

}