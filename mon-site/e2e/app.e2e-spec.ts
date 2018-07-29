import { MonSitePage } from './app.po';

describe('mon-site App', function() {
  let page: MonSitePage;

  beforeEach(() => {
    page = new MonSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
