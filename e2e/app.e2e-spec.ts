import { CarSearchDemoPage } from './app.po';

describe('car-search-demo App', function() {
  let page: CarSearchDemoPage;

  beforeEach(() => {
    page = new CarSearchDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
