
$(document).ready(readyNow);

const salaryArray = [];

function readyNow() {
    $('#submitButton').on('click', appendEntries);
    $('#submitButton').on('click', calculateCosts); 
}

function appendEntries() {
    let firstName = $('#firstNameInput').val();
    let lastName = $('#lastNameInput').val();
    let id = $('#idInput').val();
    let title = $('#titleInput').val();
    let annualSalary = $('#annualSalaryInput').val();
    $('#employeeTableBody').append('<tr><td>' + firstName + '</td>' + '<td>' + lastName + '</td>' + '<td>' + id + '</td>' + '<td>' + title + '</td>' + '<td>' + annualSalary + '</td> </tr>');
        salaryArray.push(annualSalary); // adds annualSalary to an array 
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');
}

// function calculateCosts(arrayOfSalaries){
//     for (let i=0; i<arrayOfSalaries.length; i++){

//     }
// }