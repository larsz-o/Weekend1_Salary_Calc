
$(document).ready(readyNow);

let salaryArray = [];
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
    salaryArray.push(annualSalaryInput); // adds annualSalary to an array 
    employeeArray.push(inputEmployee); // adds employee to employeeArray
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');
    calculateCosts(salaryArray);
}

function calculateCosts(arrayOfSalaries) {
    let monthlyTotal = 0;
    for (let i = 0; i < arrayOfSalaries.length; i++) {
        let numSalary = parseInt(arrayOfSalaries[i]);
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
        alert('Monthly salary expenses have gone over the limit of $20,000!')
    }
}

function deleteEntry() {
    // let salaries = $(this).parent().parent().find('#salary-data);
    // console.log(salaries);
    // for (let i = 0; i < employeeArray.length; i++) {
    //     console.log('in find salary data');
    //     if (employeeArray[i] == salaries) {
    //         employeeArray.splice[i, 1];
    //         console.log(employeeArray);
    //     }
    // }
    $(this).parent().parent().remove();
    alert('Deleting an entry does not update the monthly total calculation. Sorry. Please reload the page to try again.');
  
}

