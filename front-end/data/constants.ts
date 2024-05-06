import dotenv from 'dotenv'

dotenv.config()

export const URLS = {
    baseUrl: process.env.BASE_URL,

}

export const loginData = {
    sauceUser: process.env.SAUCE_USER,
    saucePass: process.env.SAUCE_PASS
}