export default class SwipeScreen {

  static SwipeActionLeftToRight() {
    const carouselRectangles = browser.getWindowRect()
    console.log("Height of Window" + carouselRectangles.height)
    const y = Math.round((carouselRectangles.y + carouselRectangles.height) / 2);
    console.log(y)

    driver.pause(3000);
    driver.touchPerform([{
      action: 'press',
      options: { x: Math.round(carouselRectangles.width - (carouselRectangles.width * 0.20)), y },
    }, {
      action: 'wait',
      options: { ms: 1000 },
    }, {
      action: 'moveTo',
      options: { x: Math.round(carouselRectangles.x + (carouselRectangles.width * 0.20)), y },
    }, {
      action: 'release',
    }]);
    driver.pause(1000);
  }

  static SelectionofDots(PageLinkToSelect) {
    console.log("Page Name:::::::::  " + PageLinkToSelect)
    var index;
    switch (PageLinkToSelect) {
      case "FULLY OPEN SOURCE":
        index = 1;
        break;
      case "CREATE COMMUNITY":
        index = 2;
        break;
      case "JS.FOUNDATION":
        index = 3;
        break;
      case "SUPPORT VIDEOS":
        index = 4;
        break;
      case "EXTENDABLE":
        index = 5;
        break;
      case "COMPATIBLE":
        index = 6;
        break;
    }

    browser.pause(3000);
    //Selection of the Dot
    $('//android.view.ViewGroup[@content-desc="Carousel"]/android.view.ViewGroup[@index="' + index + '"]').click();
    browser.pause(8000);
    console.log("::::::::::::::::BEFORE::::::::::::::::::::::")
    const stringPageLinkToSelect = '"' + PageLinkToSelect + '"';
    const errorLabel = 'new UiSelector().text("'+PageLinkToSelect+'")'
    var pageName = $(`android=${errorLabel}`).getText();
    //$('//android.view.ViewGroup[@content-desc="card"]//android.widget.TextView[@index="1"]'
    expect(pageName).equal(PageLinkToSelect);
    console.log("::::::::::::::::AFTER::::::::::::::::::::::   "+pageName)
  }

  static accessLinkOnCard(linkName) {
    const link = 'new UiSelector().text("' + linkName + '")'
    $(`android=${link}`).click();
  }
} 