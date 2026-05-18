// ── Form Validation ──────────────────────────────────────────────────────────

function validateForm() {
    let isValid = true;

    // Helper: show or hide error
    function setError(fieldId, errorId, condition) {
        const field = document.getElementById(fieldId);
        const err   = document.getElementById(errorId);
        if (condition) {
            field.classList.add("is-invalid");
            err.classList.add("show");
            isValid = false;
        } else {
            field.classList.remove("is-invalid");
            err.classList.remove("show");
        }
    }

    const fullName    = document.getElementById("fullName").value.trim();
    const email       = document.getElementById("emailAddress").value.trim();
    const contact     = document.getElementById("contactNumber").value.trim();
    const destination = document.getElementById("destination").value;
    const travelDate  = document.getElementById("travelDate").value;
    const numVisitors = parseInt(document.getElementById("numVisitors").value, 10);
    const message     = document.getElementById("message").value.trim();

    // Full name: required
    setError("fullName", "errFullName", fullName === "");

    // Email: required + valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setError("emailAddress", "errEmail", email === "" || !emailRegex.test(email));

    // Contact: numbers only (allows +, spaces, dashes for formatting)
    const contactRegex = /^[\d\s\+\-\(\)]+$/;
    setError("contactNumber", "errContact", contact === "" || !contactRegex.test(contact));

    // Destination: must be selected
    setError("destination", "errDestination", destination === "");

    // Travel date: not empty
    setError("travelDate", "errDate", travelDate === "");

    // Visitors: at least 1
    setError("numVisitors", "errVisitors", isNaN(numVisitors) || numVisitors < 1);

    // Message: required
    setError("message", "errMessage", message === "");

    // If all valid, show success
    if (isValid) {
        document.getElementById("submitBtn").style.display = "none";
        document.getElementById("successMsg").style.display = "block";
        // Reset form fields
        ["fullName", "emailAddress", "contactNumber", "travelDate", "numVisitors", "message"].forEach(id => {
            document.getElementById(id).value = "";
        });
        document.getElementById("destination").value = "";
    }
}

// ── Live Validation: clear errors on input ───────────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
    ["fullName", "emailAddress", "contactNumber", "travelDate", "numVisitors", "message"].forEach(id => {
        document.getElementById(id).addEventListener("input", function () {
            this.classList.remove("is-invalid");
            const errMap = {
                fullName:      "errFullName",
                emailAddress:  "errEmail",
                contactNumber: "errContact",
                travelDate:    "errDate",
                numVisitors:   "errVisitors",
                message:       "errMessage"
            };
            document.getElementById(errMap[id]).classList.remove("show");
        });
    });

    document.getElementById("destination").addEventListener("change", function () {
        this.classList.remove("is-invalid");
        document.getElementById("errDestination").classList.remove("show");
    });

    document.getElementById("submitBtn").addEventListener("click", validateForm);
});
