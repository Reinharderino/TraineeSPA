import { TraineeSPAPage } from './app.po';

describe('trainee-spa App', () => {
  let page: TraineeSPAPage;

  beforeEach(() => {
    page = new TraineeSPAPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
