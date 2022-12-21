/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function createEmployeeRecord(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
function createEmployeeRecords(array){
    return array.map(element => createEmployeeRecord(element))
}
function createTimeInEvent(date){
    let [d, h] = date.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(h, 10),
        date: d
    })
    return this
}
function createTimeOutEvent(date){
    let [d, h] = date.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(h, 10),
        date: d
    })
    return this
}
function hoursWorkedOnDate(date){
    let timeIn = this.timeInEvents.find(element => element.date === date)
    let timeOut = this.timeOutEvents.find(element => element.date === date)
    return (timeOut.hour - timeIn.hour)/100
}
function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}
function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(element => element.firstName === firstName)
}
function calculatePayroll(array){
    return array.reduce((total, element) => total + allWagesFor.call(element), 0)
}