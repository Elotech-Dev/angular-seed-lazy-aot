import { DummyPage } from './dummy.po';

describe('dummy', function() {
  let page: DummyPage;

  beforeEach(() => {
    page = new DummyPage();
  });

  it('should display dummy title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('I\'m dummy!');
  });
});
