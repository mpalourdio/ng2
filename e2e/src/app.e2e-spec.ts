import { Ng2Page } from './app.po';

describe('ng2 App', () => {
  let page: Ng2Page;

  beforeEach(() => {
    page = new Ng2Page();
  });

  it('should display message saying hello world', async () => {
    await page.navigateTo();
    expect(await page.getParagraphText()).toEqual('Hello World!');
  });
});
