import { BlogTutorialPage } from './app.po';

describe('blog-tutorial App', function() {
  let page: BlogTutorialPage;

  beforeEach(() => {
    page = new BlogTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
