import AllureReporter from "@wdio/allure-reporter";

export default class WebDriverHelper {

    static scrollToBottom() {
        const scrollDown ='new UiScrollable(new UiSelector().scrollable(true).instance(0)).flingToEnd(1)';
        $(`android=${scrollDown}`)
    }

    static log(message){
        AllureReporter.addStep(message);
        process.emit('test:log', message)        
    }


} 