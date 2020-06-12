import LoginScreen from "../../PageObjects/LoginScreen";
import TabBar from "../../PageObjects/TabBar";
import SwipeScreen from "../../PageObjects/SwipeScreen";
import allureReporter from '@wdio/allure-reporter';
import WebDriverHelper from '../../helper/webdriverHelper'


describe('WDIO APP Login Validations', () => {

    // to log steps in HTML Reporter
    // function logger(message) {
    //     allureReporter.addDescription(message)
    //     process.emit('test:log', message)
    // }


    it('Performing Login operation Validations', () => {
        //logger("Testing logs")
        WebDriverHelper.log("Performing mobile user actions on login page")
        WebDriverHelper.log("App is launched sucessfully.")
        TabBar.openLogin();
        LoginScreen.loginTab();
        WebDriverHelper.log("Login Page is opened.")
        LoginScreen.setEmailAddress('');
        LoginScreen.setPassword('');
        LoginScreen.clickLoginButton();

        WebDriverHelper.log("Validating Login Page.")
        const emailError = LoginScreen.getEmailErrorLabel();
        const passError = LoginScreen.getPasswordErrorLabel();
        emailError.should.equal("Please enter a valid email address")
        passError.should.equal('Please enter at least 8 character')
        WebDriverHelper.log("Validations for Login Page is done.")
    })


    it('Perform Login operation', () => {
        WebDriverHelper.log("Performing Login Operation.")
        TabBar.openLogin();
        LoginScreen.loginTab();
        WebDriverHelper.log("Login Page is opened and details are entered.")
        LoginScreen.setEmailAddress('test@gmail.com');
        LoginScreen.setPassword('testuser');
        LoginScreen.clickLoginButton();
        WebDriverHelper.log("Checking if login was suceesfull: " + LoginScreen.loginAlertSuccess());
        WebDriverHelper.log("Login sucessful Page.")

    })


    it("Swipe Screen Validations", () => {
        WebDriverHelper.log("Perfroming swipe operations...")
        TabBar.openSwipe();
        WebDriverHelper.log("Swipe Page is opened.")

        //Swipe actions for pages pennding screenshots
        for(var i=1;i<7;i++){
            SwipeScreen.SwipeActionLeftToRight();
        }

        //Dot selection based on Page Name
        var pageName = "JS.FOUNDATION"
        WebDriverHelper.log("Selection of Page randomly using page name: "+pageName)
        SwipeScreen.SelectionofDots(pageName);
        browser.pause('3000')
        WebDriverHelper.log("Swipe Operations performed successfully.")
    })


   
    it("Accessing elements from App to Web", () => {
        WebDriverHelper.log("Perfroming swipe operations and also interacting with chrome browser...")
        TabBar.openSwipe();
        WebDriverHelper.log("Performing action on swipe window.")
        // Swiping screen to enable carousal dots selection
        SwipeScreen.SwipeActionLeftToRight();
        // Selecting JS.Foundation link from dots courosal
        var pageName = "EXTENDABLE"
        WebDriverHelper.log("Selection of Page randomly using page name: "+pageName)
        SwipeScreen.SelectionofDots(pageName);

        browser.pause('3000')
        // Clicking on the Link to open chrome browser
        WebDriverHelper.log("Validating link on page: "+pageName)
        SwipeScreen.accessLinkOnCard(pageName)
       
        console.log("::::::::::::::::::::::::::::::::::::::: "+driver.getContexts())
        // Performing actions on browser
        WebDriverHelper.log("Interacting with browser elements.")
        browser.pause('3000')
        driver.switchContext('WEBVIEW_chrome')
        $('#navToggler').waitForDisplayed({ms:3000})

        //WebDriverHelper.scrollToBottom();
        $('h2=Sauce Service Options').scrollIntoView()
        browser.pause('3000')
        browser.closeWindow();

        WebDriverHelper.log("Performed operations on browsers successfully.")
       
    })

   

})