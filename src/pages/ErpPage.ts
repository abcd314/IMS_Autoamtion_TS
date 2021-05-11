import { Browser } from "puppeteer";

export default class ErpPage{

    public static readonly menuIcon:string = '#app > div > div:nth-child(1) > div > header > div > button';
    public static readonly imsBtn:string = 'body > div.MuiDrawer-root.MuiDrawer-modal.sidebar > div.MuiPaper-root.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.MuiPaper-elevation16 > div > div.w-350 > ul:nth-child(2) > a:nth-child(10) > div';
    public static readonly reqTable:string = '#root > div > div > div > div.col-lg-3.col-md-3 > div > div > div > div > nav > ul > li:nth-child(2) > a';

    page: any;
    browser: Browser;
    page2:any;
    constructor(page: any,browser: Browser) {
        this.page = page;
        this.browser = browser;
        this.page2 = null;
    }

    public async getTitle() {
        return this.page.title();
    }
    public async selectImsOption(){
        await this.page.waitFor(ErpPage.menuIcon);
        await this.page.click(ErpPage.menuIcon);
          
        await this.page.waitFor(ErpPage.imsBtn);
        // const imsTabPromise:Promise<any>=new Promise(x2 => this.browser.once('targetcreated', target => x2(target.page())));
        //click on ims btn
        await this.page.click(ErpPage.imsBtn);
        
        // this.page2 = await imsTabPromise;
        await this.page.waitFor(5000);
        // await this.page2.waitFor(ErpPage.reqTable);
        // await this.page2.click(ErpPage.reqTable);
    }

}