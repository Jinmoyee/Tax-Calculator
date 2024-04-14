Project name: Tax Calculator

The assignment has to be done in HTML, CSS, Javascript, and Bootstrap.

The designs of inputs tags are being taken from Bootstrap where the error highlight has been pre builded.
The wesite is responsive and hosted on "https://jinmoyee.github.io/Tax-Calculator/"

In JavaScrpit part I have created calculateTax() function for calculating the total income, where I have taken gross Income, extra Income ,deductions and age values from the HTML input fields.

Then I have created the errors for handeling the error messages.

After that I have used the following formula for calculating the tax amount.

    Taxable Income = gross income + extra income - deductions

    1) tax amount = 0.3 * (taxable income - 8000000) , for age less than 40.
    2) tax amount = 0.4 * (taxable income - 8000000) , for age between 40 and 60.
    3) tax amount = 0.1 * (taxable income - 8000000) , for age above than 40.

After that the output has been shown in the span tag  id="no" 

For navigation I have taken the help of "visibility in CSS" and I have added them when clicked on the button.

At last the calulateTax() function has been called in the main form.
