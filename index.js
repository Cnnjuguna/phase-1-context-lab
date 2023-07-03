// Employee record constructor function
function createEmployeeRecord(recordArray) {
    return {
      firstName: recordArray[0],
      familyName: recordArray[1],
      title: recordArray[2],
      payPerHour: recordArray[3],
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  // Function to create multiple employee records
  function createEmployeeRecords(recordsArray) {
    return recordsArray.map(createEmployeeRecord);
  }
  
  // Function to add a timeIn event to an employee's record
  function createTimeInEvent(dateString) {
    const [date, hour] = dateString.split(" ");
    this.timeInEvents.push({ type: "TimeIn", date: date, hour: parseInt(hour) });
    return this;
  }
  
  // Function to add a timeOut event to an employee's record
  function createTimeOutEvent(dateString) {
    const [date, hour] = dateString.split(" ");
    this.timeOutEvents.push({ type: "TimeOut", date: date, hour: parseInt(hour) });
    return this;
  }
  
  // Function to calculate the hours worked on a specific date for an employee
  function hoursWorkedOnDate(dateString) {
    const timeInEvent = this.timeInEvents.find(event => event.date === dateString);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === dateString);
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
    return hoursWorked;
  }
  
  // Function to calculate the wages earned on a specific date for an employee
  function wagesEarnedOnDate(dateString) {
    const hoursWorked = hoursWorkedOnDate.call(this, dateString);
    const wagesEarned = hoursWorked * this.payPerHour;
    return wagesEarned;
  }
  
  // Function to calculate the total wages earned by an employee for all dates
  function allWagesFor() {
    const allDates = this.timeInEvents.map(event => event.date);
    const totalWages = allDates.reduce((total, date) => total + wagesEarnedOnDate.call(this, date), 0);
    return totalWages;
  }
  
  // Function to find an employee by first name in a collection of employee records
  function findEmployeeByFirstName(collection, firstNameString) {
    return collection.find(employee => employee.firstName === firstNameString);
  }
  
  // Function to calculate the total payroll for an array of employee records
  function calculatePayroll(employeeRecords) {
    const totalPayroll = employeeRecords.reduce((total, employee) => total + allWagesFor.call(employee), 0);
    return totalPayroll;
  }
  