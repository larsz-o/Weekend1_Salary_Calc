
$(document).ready(readyNow);

let employeeArray = [];

class Employee {
    constructor(firstName, lastName, id, title, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = annualSalary;
    }
}

function readyNow() {
    $('#submitButton').on('click', appendDOM);
    // $('#table-container').on('click', '#delete-button', deleteFromArray);
    $('#table-container').on('click', '#delete-button', deleteEntry);
}

function appendDOM() {
    let firstNameInput = $('#firstNameInput').val(); // gets value of first name input 
    let lastNameInput = $('#lastNameInput').val(); // gets value of last name input 
    let idInput = $('#idInput').val(); // gets value of id input 
    let titleInput = $('#titleInput').val(); // gets value of title input 
    let annualSalaryInput = $('#annualSalaryInput').val(); // gets value of annual salary input
    let inputEmployee = new Employee(firstNameInput, lastNameInput, idInput, titleInput, annualSalaryInput);
    $('#employeeTableBody').append('<tr><td>' + firstNameInput + '</td>' + '<td>' + lastNameInput + '</td>' + '<td>' + idInput + '</td>' + '<td>' + titleInput + '</td>' + '<td id="salary-data"> $ ' + annualSalaryInput + '</td> <td><button class="btn btn-dark" id="delete-button">Delete Entry</button></td></tr>');
    employeeArray.push(inputEmployee); // adds employee to employeeArray
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');
    calculateCosts(employeeArray);
}

function calculateCosts(arrayOfEmployees) {
    let monthlyTotal = 0;
    for (let i = 0; i < arrayOfEmployees.length; i++) {
        let numSalary = parseInt(arrayOfEmployees[i].annualSalary);
        let monthlySalary = numSalary / 12;
        console.log('Currently monthly salary is ', monthlySalary);
        monthlyTotal = monthlyTotal + (numSalary / 12);
        console.log('Monthly total is: ', monthlyTotal);
    }
    $('#total-container').html('<p> Total Monthly Costs: $ ' + monthlyTotal.toFixed(2) + '</p>');
    if (monthlyTotal > 20000) {
        $('#total-container').css('background-color', '#d80614');
        $('#total-container').css('font-size', '1.5em');
        $('#total-container').css('font-weight', 'bold');
    }
}

function deleteEntry() {
    let index = $(this).closest('td').parent()[0].sectionRowIndex; //finds the index of the row that is deleted & assigns that number to "index"
    console.log(index);
    employeeArray.splice(index, 1);
    console.log(employeeArray); 
    $(this).parent().parent().remove();
    // alert('Deleting an entry does not update the monthly total calculation. Sorry. Please reload the page to try again.');
    calculateCosts(employeeArray);

}

