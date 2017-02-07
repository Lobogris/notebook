import { BlogPersonalPage } from './app.po';

describe('blog-personal App', function() {
  let page: BlogPersonalPage;

  beforeEach(() => {
    page = new BlogPersonalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
