export default class FormsScreen {

    static setInputField(data) {
        $('~text-input').setValue(data);
    }

    static inputTextResult() {
        return $('~input-text-result').getText();
    }

    static selectSwitch() {
        $('~switch').click();
    }

    static clickDropDown() {
        $('~select-Dropdown').click();
    }

    static selectTextFromDropDown(dropdownvalue) {
        $("//android.widget.ListView/*[@text= " + "'" + dropdownvalue + "'" + "]").click();
    }

    static selectedValueFromDropDown(valuetopick) {
        valuetopick = '"' + valuetopick + '"';
        const label = 'new UiSelector().text(' + valuetopick + ')'
        return $(`android=${label}`).getText();
    }

    static clickActivateButton() {
        
        const button = 'new UiScrollable(new UiSelector().scrollable(true).instance(0)).getChildByText(new UiSelector().className("android.widget.TextView"), "Active")'
        $(`android=${button}`)

        $('~button-Active').click();
    }

    get switch() {
        SWITCH = '~switch';
        return $(SWITCH);
    }
    static clickButton(btntext) {
        btntext = '"' + btntext + '"';
        const label = 'new UiSelector().text(' + btntext + ')'
        $(`android=${label}`).click();
    }

    static getalertText() {
        const label = 'new UiSelector().text("This button is")';
        const label1 = 'new UiSelector().text("This button is active")'
        var value1 = $(`android=${label}`).getText();
        var value2 = $(`android=${label1}`).getText();
        return value1 + " " + value2;
    }
} 