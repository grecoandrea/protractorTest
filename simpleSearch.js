describe('Text example on angular page', function() {
  it('actions to execute', function() {

    beforeMethod();
    openPage();
    searchTrip("Milan (MXP)", "New York (JFK)");
    element(by.id('FlightSelectInboundStandardLowFarePlus0')).click();
    element.all(by.xpath('//span[@class="upsellselect"]')).click();
  
  });
});

function searchTrip(from, to) {
  element(by.id('airport-select-origin')).click();
  element(by.id('airport-select-origin')).clear();
  element(by.id('airport-select-origin')).sendKeys(from);
  element.all(by.xpath('//button[@type="button"]/span[contains(text(), "Milan")]')).click();
  element(by.id('airport-select-destination')).click();
  element(by.id('airport-select-destination')).clear();
  element(by.id('airport-select-destination')).sendKeys(to);
  element.all(by.xpath('//button[@type="button"]/span[contains(text(), "New York")]')).click();
  element(by.id('searchButton')).click();
}

  function openPage() {
  browser.get('https://www.norwegian.com/en/');
  expect(browser.getTitle()).toEqual('Book cheap flights with Norwegian, a low-cost airline | Norwegian');
}

function beforeMethod() {
  browser.ignoreSynchronization = true;
}
