import { Browser } from "puppeteer";
import launchPuppeteer from "../src/utils/launchPuppeteer";
import { describe, expect, it,beforeAll,afterAll } from "@jest/globals";
import LoginPage from "../src/pages/LoginPage";
import ErpPage from "../src/pages/ErpPage";
import EmpReferralPage from "../src/pages/EmpReferralPage";
import userRegistrationType from "../src/types/userRegitrationType";
import userRegistration from "../src/types/userRegitrationType";
jest.setTimeout(3000000);
export let browser: Browser;
describe("Login Tests",()=>{
    
    // Test Constant
    const userEmail:string = "kalyani.pagare@afourtech.com";
    const password : string = "afour@28";
    
    const actualTitleAfterLogin :string = "Dashboard";
    
    let browser: Browser;
    let page:any;
    let url: string ='https://stagingerp.afourtech.com/';
    let loginPage: LoginPage;
    let erpPage: ErpPage;
    let empPage: EmpReferralPage;


    
    beforeAll(async()=>{
        browser=await launchPuppeteer();
        page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 1024 });
        await page.goto(url);
    });
    
    afterAll(async () => {
        await browser.close();
    });

    it("should be able to login",async ()=>{
        loginPage =new LoginPage(page,browser);
        
        await loginPage.login(userEmail,password);
        const title= await loginPage.getTitle();
        console.log(title)
        expect(title).toMatch(actualTitleAfterLogin);
        
    })
    it("should be able to select IMS option",async ()=>{
        
        erpPage =new ErpPage(page,browser);
        await erpPage.selectImsOption();
        empPage = new EmpReferralPage(page,browser);
        await empPage.clickEmpReferral();
        
        
    });
});
  


