let USERS = require('../utils/utils.js')

const SELECTORS = {
    O365:{
        EMAIL_INPUT: "#i0116",
        SUBMIT_BUTTON: "#idSIButton9",
        PASSWORD_INPUT: "#i0118",
        SIGNIN_BUTTON:"#idSIButton9"

    },
    LOGIN:{
        USERNAME:"#username",
        PASSWORD:'#password',
        LOGIN_BUTTON:"#fm1 > div:nth-child(3) > input.btn-submit"
    }

}

class LoginPage {

    get submitButton() {
        return $(SELECTORS.O365.SUBMIT_BUTTON)
    }
    get loginButton() {
        return $(SELECTORS.O365.SIGNIN_BUTTON)
    }
    get emailInput() {
        return $(SELECTORS.O365.EMAIL_INPUT)
    }
    get passwordInput() {
        return $(SELECTORS.O365.PASSWORD_INPUT)
    }

    loginUser() {
        this.submitButton.waitForDisplayed({miliseconds: 1000})
        this.setEmail()
        this.submitButton.click()
        browser.pause(1000)
        this.setPassword()
        this.submitButton.click()
    }
    setEmail() {
        this.emailInput.setValue(USERS.EMAIL)
    }
    setPassword() {
        this.passwordInput.setValue(USERS.PASSWORD)
    }
}

module.exports = new LoginPage()