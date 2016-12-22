describe('Foo', () => {

  beforeEach(async () => {
    return await browser.get('/foo');
  });

  it('should have correct h1 text', () => {
    expect(element(by.css('h1')).getText()).toEqual('Foo');
  });

});
