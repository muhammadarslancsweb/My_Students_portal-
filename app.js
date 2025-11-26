// ========== Home page - time ==========
function updateDateTime() {
    const dateTimeElement = document.getElementById("datetime");
    if (dateTimeElement) {
        const now = new Date();
        dateTimeElement.textContent = now.toLocaleString();
    }
}
setInterval(updateDateTime, 1000);
updateDateTime();


// ========== 2️⃣ Registracion page ==========
document.addEventListener("DOMContentLoaded", () => {

    const signupBtn = document.querySelector(".signupbtn");
    if (signupBtn) {
        signupBtn.addEventListener("click", function (e) {
            e.preventDefault();

            // Get all form input values
            const fullName = document.querySelector('input[name="fullName"]')?.value.trim();
            const regNo = document.querySelector('input[name="studentRegNo"]').value.trim();
            const email = document.querySelector('input[name="email"]').value.trim();
            const password = document.querySelector('input[name="password"]').value.trim();
            const re_password = document.querySelector('input[name="re_password"]').value.trim();
            const dob = document.getElementById("dob").value;
            const favColor = document.getElementById("favColor").value;

            // ===== Validation =====
            if (!fullName || !regNo || !email || !password || !re_password || !dob) {
                alert(" Please fill in all required fields!");
                return;
            }

            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.match(emailPattern)) {
                alert(" Invalid email format!");
                return;
            }

            if (password.length < 6) {
                alert(" Password must be at least 6 characters long!");
                return;
            }

            if (password !== re_password) {
                alert(" Passwords do not match!");
                return;
            }

            // ===== If validation passes =====
            alert(" Registration successful!");

            
            const studentInfo = {
                fullName,
                regNo,
                email,
                password,
                dob,
                favColor
            };

            localStorage.setItem("studentData", JSON.stringify(studentInfo));

            // Redirect to profile page
            window.location.href = "profile.html";
        }
    );
    }

    // ========== profile page    saves data ==========
    const studentData = JSON.parse(localStorage.getItem("studentData"));
    if (studentData) {
        const nameField = document.getElementById("displayName");
        const regField = document.getElementById("displayRegNo");
        const programField = document.getElementById("displayProgram");
        const semesterField = document.getElementById("displaySemester");
        const emailField = document.getElementById("displayEmail");
        const dobField = document.getElementById("displayDOB");
        const colorField = document.getElementById("displayColor");

        if (nameField) nameField.textContent = studentData.fullName || "Muhammad ARSLAN";
        if (regField) regField.textContent = studentData.regNo || "-";
        if (programField) programField.textContent = "BS Computer Science";
        if (semesterField) semesterField.textContent = "5th Semester";
        if (emailField) emailField.textContent = studentData.email || "-";
        if (dobField) dobField.textContent = studentData.dob || "-";
        if (colorField) {
            colorField.style.backgroundColor = studentData.favColor || "#ffffff";
            colorField.textContent = studentData.favColor;
        }
    }
}
);
