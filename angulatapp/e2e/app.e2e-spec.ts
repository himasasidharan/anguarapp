import { AngulatappPage } from './app.po';

describe('angulatapp App', function() {
  let page: AngulatappPage;

  beforeEach(() => {
    page = new AngulatappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
