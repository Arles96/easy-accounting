const SELECTORS = {
    USER_ICON : "#header > div.user-info > div.dropdown-wrapper > div > span > span",
    STUDENT_NAME: "",
    STUDENT_ID: ""

}

class DashboardPage {

    get userIcon() {
        return $(SELECTORS.USER_ICON)
    }
    
    loginAssertion()
    {
        browser.pause(1000)
        expect(this.userIcon).toBeDisplayed()
        
    }
}

module.exports = new DashboardPage()