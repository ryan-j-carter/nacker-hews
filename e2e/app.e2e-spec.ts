import { NackerHewsPage } from './app.po';

describe('nacker-hews App', function() {
  let page: NackerHewsPage;

  beforeEach(() => {
    page = new NackerHewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
