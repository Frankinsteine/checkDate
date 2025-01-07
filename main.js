function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

function checkDate() {
    let date = document.getElementById("date").value;
    const wrongDateFormat = "Неверный формат даты!";
    const incorrectDateInterval = "Дата не соответствует промежутку времени";
    const correctDate = "Введена корректная дата!";
    if(date.length != 10 || date[2] != "." || date[5] != ".") {
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