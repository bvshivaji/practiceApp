import { ChildRoutingPage } from './app.po';

describe('child-routing App', () => {
  let page: ChildRoutingPage;

  beforeEach(() => {
    page = new ChildRoutingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
