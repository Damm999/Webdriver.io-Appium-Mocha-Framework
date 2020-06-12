export default class LoginScreen {

    static setEmailAddress(data) {
        $('~input-email').setValue(data);
    }

    static setPassword(data) {
        $('~input-password').setValue(data)
    }

    static signUpTab(){
        const signUpLink = 'new UiSelector().text("Sign up")'
        return $(`android=${signUpLink}`).click();
    }

    static loginTab(){
        const errorLabel = 'new UiSelector().text("Login")'
        $(`android=${errorLabel}`).click();
    }

    static clickLoginButton() {
        $('~button-LOGIN').click();
    }

    static loginAlertSuccess(){
        browser.pause(3000);
        const errorLabel = 'new UiSelector().text("You are logged in!")'
        const text = $(`android=${errorLabel}`).getText();

        const loginOk = 'new UiSelector().text("OK")'
        $(`android=${loginOk}`).click();

        return text.should.equal("You are logged in!")
    }

    static getEmailErrorLabel() {
        const errorLabel = 'new UiSelector().text("Please enter a valid email address")'
        return $(`android=${errorLabel}`).getText();
    }

    static getPasswordErrorLabel() {
        const errorLabel = 'new UiSelector().text("Please enter at least 8 characters")'
        return $(`android=${errorLabel}`).getText();
    }
} 