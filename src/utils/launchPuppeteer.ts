import puppeteer from 'puppeteer'

const defaultOptions = {
    headless: false,
};

export default async (options = undefined) => {
    const puppeteerOptions = (options === undefined) ? defaultOptions : options;
    return await puppeteer.launch(puppeteerOptions);
};
