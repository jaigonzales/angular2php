import { Angular2phpPage } from './app.po';

describe('angular2php App', function() {
  let page: Angular2phpPage;

  beforeEach(() => {
    page = new Angular2phpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
