import { browser, element, by } from 'protractor';

export class Ng2Page {
  // tslint:disable-next-line:typedef
  public navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('/');
  }

  // tslint:disable-next-line:typedef
  public getParagraphText() {
    return element(by.css('#title')).getText();
  }
}
