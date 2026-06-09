// =====================================
// HORIZON BANK MAIN JS
// =====================================

// Current Year

document.addEventListener("DOMContentLoaded", () => {

    const year = document.getElementById("currentYear");

    if(year){
        year.textContent = new Date().getFullYear();
    }

});

// =====================================
// SIDEBAR TOGGLE
// =====================================

const sidebarToggle =
document.querySelector(".sidebar-toggle");

const sidebar =
document.querySelector(".sidebar");

if(sidebarToggle){

    sidebarToggle.addEventListener("click",()=>{

        sidebar.classList.toggle("active");

    });

}

// =====================================
// TRANSFER FORM
// =====================================

const transferForm =
document.querySelector("#transferForm");

if(transferForm){

    transferForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert(
            "Transfer request submitted successfully."
        );

    });

}

// =====================================
// LOGIN FORM
// =====================================

const loginForm =
document.querySelector("#loginForm");

if(loginForm){

    loginForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert("Login Successful");

        window.location.href =
        "pages/dashboard.html";

    });

}

// =====================================
// REGISTER FORM
// =====================================

const registerForm =
document.querySelector("#registerForm");

if(registerForm){

    registerForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert(
            "Account Registration Submitted"
        );

        window.location.href =
        "login.html";

    });

}

// =====================================
// CARD FREEZE SWITCH
// =====================================

const freezeCard =
document.querySelector("#freezeCard");

if(freezeCard){

    freezeCard.addEventListener("change",()=>{

        if(freezeCard.checked){

            alert("Card Frozen");

        }else{

            alert("Card Unfrozen");

        }

    });

}

// =====================================
// LIMIT SAVE
// =====================================

const saveLimit =
document.querySelector(".save-limit-btn");

if(saveLimit){

    saveLimit.addEventListener("click",()=>{

        alert(
            "Spending Limits Updated"
        );

    });

}

// =====================================
// LOAN CALCULATOR
// =====================================

const calculateBtn =
document.querySelector("#calculateLoan");

if(calculateBtn){

    calculateBtn.addEventListener("click",()=>{

        const amount =
        Number(
        document.getElementById("loanAmount").value
        );

        const rate =
        Number(
        document.getElementById("loanRate").value
        );

        const years =
        Number(
        document.getElementById("loanYears").value
        );

        const monthlyRate =
        rate / 100 / 12;

        const months =
        years * 12;

        const emi =
        amount *
        (
        monthlyRate *
        Math.pow(1 + monthlyRate, months)
        ) /
        (
        Math.pow(1 + monthlyRate, months) - 1
        );

        document.getElementById(
        "loanResult"
        ).innerHTML =
        "Monthly Payment: £" +
        emi.toFixed(2);

    });

}

// =====================================
// DARK MODE
// =====================================

const themeSelect =
document.querySelector("#themeSelect");

if(themeSelect){

    themeSelect.addEventListener("change",()=>{

        if(themeSelect.value === "Dark"){

            document.body.classList.add(
                "dark-mode"
            );

        }else{

            document.body.classList.remove(
                "dark-mode"
            );

        }

    });

}