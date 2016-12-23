import { PlayCliPage } from './app.po';

describe('play-cli App', function() {
  let page: PlayCliPage;

  beforeEach(() => {
    page = new PlayCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
