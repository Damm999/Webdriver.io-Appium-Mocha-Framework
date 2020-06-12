import LoginScreen from "../../PageObjects/LoginScreen";
import TabBar from "../../PageObjects/TabBar";
import Forms from "../../PageObjects/FormsScreen";
import SignUpScreen from "../../PageObjects/SignUpScreen";
import allureReporter from '@wdio/allure-reporter';
import WebDriverHelper from "../../helper/webdriverHelper";


describe('WDIO APP SignUp Validations', () => {

    // to log steps in HTML Reporter
    // function logger(message) {
    //     process.emit('test:log', message)
    //     allureReporter.addDescription(message)
    // }

    it('Performing SignUp operation Validations', () => {
        WebDriverHelper.log('Validating Signup Page when no data is entered.')
        //allureReporter.addDescription("Validating Signup Page when no data is entered.")

        TabBar.openLogin();
        LoginScreen.signUpTab();
        WebDriverHelper.log("Sign Up Page is opened.")
        SignUpScreen.clickSignUpButton();
        browser.pause('3000')
        SignUpScreen.clickTryAgainButton();
        SignUpScreen.setEmailAddress('');
        SignUpScreen.setPassword('');
        SignUpScreen.setConformPassword("");

        WebDriverHelper.log("Validating SignUp Page.")
        const emailError = SignUpScreen.getEmailErrorLabel();
        const passError = SignUpScreen.getPasswordErrorLabel();
        const conformPassError = SignUpScreen.geConformPasswordErrorLabel();

        emailError.should.equal("Please enter a valid email address")
        passError.should.equal('Please enter at least 8 characters')
        conformPassError.should.equal('Please enter the same password')
        WebDriverHelper.log("All Validations for SignUp Page Passed.")

    })

    it('Enter Details in Forms', () => {
        TabBar.openForms();
        WebDriverHelper.log("Forms Page is opened.")
        Forms.setInputField("Select a Value");
        //validating text entered
        const inputText = Forms.inputTextResult();
        inputText.should.equal("Select a Value")

        //Selecting the Switch
        Forms.selectSwitch();
        //select value from dropdown
        Forms.clickDropDown();
        //select value
        Forms.selectTextFromDropDown("Appium is awesome");
        //Validating DropDown Value Selected
        const valueselected = Forms.selectedValueFromDropDown("Appium is awesome");
        valueselected.should.equal("Appium is awesome")
        

        //Validating Activate Button for Cancel and Ok conditions
        //Ask me Later Validation
        Forms.clickActivateButton();
        expect(Forms.getalertText()).equal('This button is This button is active');
        Forms.clickButton("ASK ME LATER");

        //Cancel Button Validation
        Forms.clickActivateButton();
        Forms.clickButton("CANCEL");

        //Click Ok Button
        Forms.clickActivateButton();
        Forms.clickButton("OK");
        WebDriverHelper.log("Forms Details Entered successfully.")
        browser.pause('3000')
    })

    it('Perform SignUp operation', () => {
        TabBar.openLogin();
        LoginScreen.signUpTab();

        WebDriverHelper.log("Sign Up Page is opened.")
        WebDriverHelper.log("Entering SignUp Page is details.")

        browser.pause('3000')

        SignUpScreen.setEmailAddress('test@gmail.com');
        SignUpScreen.setPassword('testuser');
        SignUpScreen.setConformPassword("testuser");
        SignUpScreen.clickSignUpButton();
        WebDriverHelper.log("Validating SignUp Page.")
        WebDriverHelper.log("Checking if signUp was suceesful: " + SignUpScreen.signUpAlertSuccess());
        WebDriverHelper.log("All Validations for SignUp Page Passed.")

    })

})