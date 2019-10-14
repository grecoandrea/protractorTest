describe('Text example 1 on angular page', function() {
  it('actions to execute', function() {
    beforeMethod();
    openPage('https://www.norwegian.com/en/');
    checkTitle('Book cheap flights with Norwegian, a low-cost airline | Norwegian');
    searchTrip("Milan (MXP)", "New York-JFK");
    checkPresence("_hjRemoteVarsFrame");
    afterMethod();
  });
});

describe('Text example 2 on angular page', function() {
  it('actions to execute', function() {
    beforeMethod();
    openPage('https://www.norwegian.com/en/');
    checkTitle('Book cheap flights with Norwegian, a low-cost airline | Norwegian');
    searchTrip("New York-JFK", "London-Gatwick" );
    checkPresence("_hjRemoteVarsFrame");
    afterMethod();
  });
});

async function searchTrip(from, to) {
  element(by.id('airport-select-origin')).click();
  element(by.id('airport-select-origin')).clear();
  element(by.id('airport-select-origin')).sendKeys(from);
  element.all(by.xpath('//button[@type="button"]/span[contains(text(), "'+from+'")]')).click();
  element(by.id('airport-select-destination')).click();
  element(by.id('airport-select-destination')).clear();
  element(by.id('airport-select-destination')).sendKeys(to);
  element.all(by.xpath('//button[@type="button"]/span[contains(text(), "'+to+'")]')).click();
  //browser.sleep(3000);
  click('searchButton');
}

function openPage(page) {
  browser.get(page);
}

function checkTitle(title){
  expect(browser.getTitle()).toEqual(title);
}

function beforeMethod() {
  browser.ignoreSynchronization = true;
}

function afterMethod(){
  //nothing to add
}

async function checkPresence(elm){
  //browser.sleep(5000);
  var elem = element(by.id(elm));
  expect(elem.isDisplayed()).toBe(false);
}

function click(elm) {
  var elem = element(by.id(elm));
  browser.executeScript("arguments[0].scrollIntoView();", elem.getWebElement());
  elem.click();
}