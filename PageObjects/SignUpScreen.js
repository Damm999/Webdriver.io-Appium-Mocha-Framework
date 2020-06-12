export default class SignUpScreen {

    static setEmailAddress(data) {
        $('~input-email').setValue(data);
    }

    static setPassword(data) {
        $('~input-password').setValue(data)
    }

    static setConformPassword(data) {
        $('~input-repeat-password').setValue(data)
    }

    static clickSignUpButton() {
        const signUpButton = 'new UiSelector().text("SIGN UP")'
        return $(`android=${signUpButton}`).click();
    }

    static signUpAlertSuccess(){
        browser.pause(3000);
        const errorLabel = 'new UiSelector().text("You successfully signed up!")'
        const text = $(`android=${errorLabel}`).getText();
        
        const signUpButton = 'new UiSelector().text("OK")'
        $(`android=${signUpButton}`).click();

        return text.should.equal("You successfully signed up!")
    }

    static clickTryAgainButton() {
        const signUpButton = 'new UiSelector().text("TRY AGAIN")'
        return $(`android=${signUpButton}`).click();
    }

    static getEmailErrorLabel() {
        const errorLabel = 'new UiSelector().text("Please enter a valid email address")'
        return $(`android=${errorLabel}`).getText();
    }

    static getPasswordErrorLabel() {
        const errorLabel = 'new UiSelector().text("Please enter at least 8 characters")'
        return $(`android=${errorLabel}`).getText();
    }

    static geConformPasswordErrorLabel() {
        const errorLabel = 'new UiSelector().text("Please enter the same password")'
        return $(`android=${errorLabel}`).getText();
    }
} 