import { GitpagesPage } from './app.po';

describe('gitpages App', () => {
  let page: GitpagesPage;

  beforeEach(() => {
    page = new GitpagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
