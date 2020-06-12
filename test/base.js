
describe("Mobile App test",function(){

  it("Perform Addition",function(){
    const num1 = 'new UiSelector().text("7").className("android.widget.Button")'
    const num2 = 'new UiSelector().text("8").className("android.widget.Button")'
    const add = 'new UiSelector().text("+").className("android.widget.Button")'
    const perform = 'new UiSelector().text("=").className("android.widget.Button")'

    $(`android=${num1}`).click();
    
    $(`android=${add}`).click();

    $(`android=${num2}`).click();
    
    $(`android=${perform}`).click();
    
  })

  it("Launch Browser",function(){

    browser.url('http://www.webdriveruniversity.com/Contact-Us/contactus.html')

    $('[name = "first_name"]').setValue('Checkmaster')
    $('[name = "last_name"]').setValue('Bane')
    $('[name = "email"]').setValue('master23@gmail.com')
    $('[name = "message"]').setValue('Im the best but still need your help')
    const value = $('.contact_button').getCSSProperty('font-family')
    console.log(value)

    browser.$('[type="submit"]').click()

    browser.pause('3000')
    
  })

  it.only("Open WDIO APP",function(){
    
    const num1 = 'new UiSelector().index(2).className("android.view.ViewGroup")';
    $(`android=${num1}`).click();
    browser.pause('10000')
    //const num1 = 'new UiSelector().text("7").className("android.widget.Button")'
    
    
  })

})

