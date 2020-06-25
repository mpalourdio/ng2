import { browser, by, element } from 'protractor';

export class Ng2Page {
    public navigateTo(): Promise<unknown> {
        return browser.get(browser.baseUrl) as Promise<unknown>;
    }

    public getParagraphText(): Promise<string> {
        return element(by.css('#title')).getText() as Promise<string>;
    }
}
