
$(document).ready(readyNow);

let salaryArray = [];
let totalCosts = 0;

function readyNow() {
    $('#submitButton').on('click', appendDOM);
}

function appendDOM() {
    let firstName = $('#firstNameInput').val(); // gets value of first name input 
    let lastName = $('#lastNameInput').val(); // gets value of last name input 
    let id = $('#idInput').val(); // gets value of id input 
    let title = $('#titleInput').val(); // gets value of title input 
    let annualSalary = $('#annualSalaryInput').val(); // gets value of annual salary input 
    $('#employeeTableBody').append('<tr><td>' + firstName + '</td>' + '<td>' + lastName + '</td>' + '<td>' + id + '</td>' + '<td>' + title + '</td>' + '<td>' + annualSalary + '</td> <td><button class="btn btn-info" id="delete-button">Delete Entry</button></td></tr>');
    salaryArray.push(annualSalary); // adds annualSalary to an array 
    $('#firstNameInput').val(''); 
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');
    calculateCosts(salaryArray); 
}

function calculateCosts(arrayOfSalaries) {
    for (let i = 0; i < arrayOfSalaries.length; i++) {
        arrayOfSalaries[i]= parseInt(arrayOfSalaries[i]);
        totalCosts = (totalCosts + arrayOfSalaries[i]);
   
    }
    $('#total-container').html('<p> Total Monthly Costs: $ ' + totalCosts + '</p>')
}

