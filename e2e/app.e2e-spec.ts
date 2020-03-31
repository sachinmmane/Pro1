import { P1Page } from './app.po';

describe('p1 App', () => {
  let page: P1Page;

  beforeEach(() => {
    page = new P1Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
