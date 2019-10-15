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
  
  try {
    var spanFrom = element.all(by.xpath("//label/span[@class='airport-select__label']")).get(0);
    expect(spanFrom.getText()).toBe("Fly from");
    element(by.id('airport-select-origin')).click();
    element(by.id('airport-select-origin')).clear();
    element(by.id('airport-select-origin')).sendKeys(from);
    element.all(by.xpath('//button[@type="button"]/span[contains(text(), "' + from + '")]')).click();
  }
  catch (err)
  {
    console.log("Error in 'from form field' setting...");
  }
  
  
    try {
        var span = element.all(by.xpath("//label/span[@class='airport-select__label']")).get(1);
        expect(span.getText()).toBe("Fly to");
        element(by.id('airport-select-destination')).click();
        element(by.id('airport-select-destination')).clear();
        element(by.id('airport-select-destination')).sendKeys(to);
        element.all(by.xpath('//button[@type="button"]/span[contains(text(), "' + to + '")]')).click();
        click('searchButton');
    } catch (e) {
        console.log("Error in 'to form field' setting...");
    }
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
  var elem = element(by.id(elm));
  expect(elem.isDisplayed()).toBe(false);
}

function click(elm) {
  var elem = element(by.id(elm));
  browser.executeScript("arguments[0].scrollIntoView();", elem.getWebElement());
  elem.click();
}