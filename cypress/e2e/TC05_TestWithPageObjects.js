import { onDatePickerPage } from "../support/page_objects/datepickerPage"
import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage"
import { navigateTo, onNavigationPage } from "../support/page_objects/navigationPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"

describe('Test with Page Objects', () => {
    beforeEach('Open the application', () => {
        cy.openHomePage()
    })

    it('Verify navigations accross the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.smartTablePage()
        navigateTo.toasterPage()
        navigateTo.tooltipPage()
    })

    it.only('Should submit Inline and Basic form and select tomorrow date in the calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Mamta', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithNameAndEmail('test@test.com', 'password')
        navigateTo.datepickerPage()
        onDatePickerPage.selectCommonDatepickerDateFromToday(14)
        onDatePickerPage.selectDatepickerwithRangeFromToday(15, 22)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Mamta', 'Rani')
        onSmartTablePage.updateAgeByFirstName('Mamta', '35')
        onSmartTablePage.deleteRowByIndex(1)
    })
})