import {Page, Locator, expect} from '@playwright/test'
import { URLS } from '../data/constants'


export class MainPage{
    readonly page: Page
    readonly inventoryContainer: Locator

    constructor(page: Page){
        this.page = page
        this.inventoryContainer = page.locator('[data-test="inventory-container"]')
    }

}