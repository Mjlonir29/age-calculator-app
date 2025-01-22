let userInput = document.getElementById("inputd");
let result = document.getElementById("result");

function calculateDateDifference() {
    let input = userInput.value.trim();

    if (!input) {
        result.innerHTML = "Please select or enter a valid date.";
        return;
    }

    let selectedDate = new Date(input);
    if (isNaN(selectedDate)) {
        result.innerHTML = "Invalid date. Please check your input.";
        return;
    }

    let today = new Date();
    let d1 = selectedDate.getDate();
    let m1 = selectedDate.getMonth() + 1;
    let y1 = selectedDate.getFullYear();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    if (selectedDate <= today) {
        y3 = y2 - y1;

        if (m2 >= m1) {
            m3 = m2 - m1;
        } else {
            y3--;
            m3 = 12 + m2 - m1;
        }

        if (d2 >= d1) {
            d3 = d2 - d1;
        } else {
            m3--;
            d3 = getDaysInMonth(y1, m1) + d2 - d1;
        }

        if (m3 < 0) {
            m3 = 11;
            y3--;
        }

        result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old.`;
    } else {
        y3 = y1 - y2;

        if (m1 >= m2) {
            m3 = m1 - m2;
        } else {
            y3--;
            m3 = 12 + m1 - m2;
        }

        if (d1 >= d2) {
            d3 = d1 - d2;
        } else {
            m3--;
            d3 = getDaysInMonth(y2, m2) + d1 - d2;
        }

        if (m3 < 0) {
            m3 = 11;
            y3--;
        }

        result.innerHTML = `There are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days left until the selected date.`;
    }
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}
