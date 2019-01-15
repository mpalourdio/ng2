import { browser, element, by } from 'protractor';

export class Ng2Page {
  public navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('/');
  }

  public getParagraphText() {
    return element(by.css('#title')).getText();
  }
}
