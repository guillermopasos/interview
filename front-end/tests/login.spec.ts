import {test, expect} from '../data/base'
import { URLS, loginData } from '../data/constants';

test('Successful Login', async ({ loginPage }) => {
    await loginPage.submitLogin(loginData.sauceUser as string, loginData.saucePass as string)
    
})