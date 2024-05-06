import {test as base} from '@playwright/test'
import { LoginPage } from '../page-object/login'
import { MainPage } from '../page-object/main-page'

type Myfixtures = {
    loginPage: LoginPage
    mainPage: MainPage
}

export const test = base.extend<Myfixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    mainPage: async ({ page}, use) => {
        await use(new MainPage(page))
    }
})

export {expect} from '@playwright/test'