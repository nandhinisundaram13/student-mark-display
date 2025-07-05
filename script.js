// Sample student data
const students = {
    "S101": { name: "Nandhini", subject: "Math", marks: 88 },
    "S102": { name: "Jayashree", subject: "Math", marks: 76 },
    "S103": { name: "Priya", subject: "Math", marks: 92 }
};

function getMarks() {
    const regno = document.getElementById('regno').value.trim().toUpperCase();
    const resultDiv = document.getElementById('result');

    if (regno === "") {
        resultDiv.innerHTML = "Please enter a Registration Number.";
        return;
    }

    if (students[regno]) {
        const student = students[regno];
        resultDiv.innerHTML = `
            <strong>Mark Details:</strong><br>
            Name: ${student.name} <br>
            Registration Number: ${regno} <br>
            Subject: ${student.subject} <br>
            Marks: ${student.marks}
        `;
    } else {
        resultDiv.innerHTML = "No student found with Registration Number: " + regno;
    }
}
