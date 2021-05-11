import { Browser } from "puppeteer";
import userRegistration from "../types/userRegitrationType";
import ErpPage from "./ErpPage";

export default class LoginPage{

    private static readonly signInWithGoogle:string = 'button[class="google-btn"]';
    private static readonly emailTxt:string = 'input[type=email]';
    private static readonly nextBtnEmail:string = '#identifierNext > div > button';
    private static readonly passwordTxt:string = 'input[type="password"]';
    private static readonly nextBtnPW:string = '#passwordNext';
    private static readonly allowBtn:string = '#submit_approve_access';
    // static page2:any;
    page: any;
    browser: Browser;
    page2:any;
    constructor(page: any,browser: Browser) {
        this.page = page;
        this.browser = browser;
        this.page2 = null;
    }

    public async getTitle() {
        const newPagePromise1=new Promise(x => this.browser.once('targetcreated', target => x(target.page())));
        // await this.page.click(LoginPage.signInWithGoogle);
        return this.page.title();
    }
    public async login(userEmail:string,password:string){
        await this.page.waitFor(LoginPage.signInWithGoogle);
        await this.page.waitFor(2000);
        const newPagePromise1:Promise<any> =new Promise(x1 => this.browser.once('targetcreated', target => x1(target.page())));
        await this.page.click(LoginPage.signInWithGoogle);
        this.page2 = await newPagePromise1 ;
        await this.page2.waitFor(LoginPage.emailTxt);
        await this.page2.type(LoginPage.emailTxt,userEmail);
        await this.page2.click(LoginPage.nextBtnEmail);
        await this.page2.waitFor(10000);
        await this.page2.waitFor(LoginPage.passwordTxt);
        await this.page2.type(LoginPage.passwordTxt,password);
        await this.page2.click(LoginPage.nextBtnPW);
        await this.page2.waitFor(5000);
        await this.page2.waitFor(LoginPage.allowBtn);
        await this.page2.click(LoginPage.allowBtn);
        await this.page2.waitFor(5000);
    }

}