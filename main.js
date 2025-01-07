function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

function getDaysFromDate(date) {
    return date.substring(0, 2);
}

function getMonthsFromDate(date) {
    return date.substring(3, 5);
}

function getYearsFromDate(date) {
    return date.substring(6);
}

function checkDate() {
    let date = document.getElementById("date").value;
    const wrongDateFormat = "Неверный формат даты!";
    const incorrectDateInterval = "Дата не соответствует промежутку времени";
    const correctDate = "Введена корректная дата!";
    if(date.length != 10 || date[2] != "." || date[5] != ".") {
        return wrongDateFormat;
    }
    if(!isNumeric(getDaysFromDate(date)) || !isNumeric(getMonthsFromDate(date)) || !isNumeric(getYearsFromDate(date))) {
        return wrongDateFormat;
    }
    let dateArray = date.split(".");
    let dateObj = new Date(`${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`);
    if (dateObj == "Invalid Date") {
        return wrongDateFormat;
    }
    if(1900 <= dateObj.getFullYear() && dateObj.getFullYear() < 2000) {
        return correctDate;
    }
    return incorrectDateInterval;
}

window.onload = function() {
    document.getElementById("date").addEventListener("keyup", (key) => {
        if (key.code == "Enter") {
            alert(checkDate());
        } 
    })
    document.getElementById("checkDateBtn").addEventListener("click", () => {
        alert(checkDate());
    })
}