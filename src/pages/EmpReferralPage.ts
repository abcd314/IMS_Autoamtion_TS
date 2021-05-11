import { Browser } from "puppeteer";

export default class EmpReferralPage{

    private static readonly employeeReferral:string = '#root > div > div > div > div.col-lg-3.col-md-3 > div > div > div > div > nav > ul > li:nth-child(1) > a';

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
    public async clickEmpReferral(){
        const imsTabPromise=new Promise(x1 => this.browser.once('targetcreated', target => x1(target.page())));
        //click on ims btn
     
      this.page2 = await imsTabPromise;
    //    await this.page2.waitFor(5000);
       await this.page2.waitFor(EmpReferralPage.employeeReferral);
       await this.page2.click(EmpReferralPage.employeeReferral);
    }

}