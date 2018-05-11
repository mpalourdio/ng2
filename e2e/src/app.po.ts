import { browser, element, by } from 'protractor';

export class Ng2Page {
  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('#title')).getText();
  }
}
