const filterButtons = document.querySelectorAll(".filter-buttons .btn");
    const projectCards = document.querySelectorAll(".project-grid .project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // 1. Active class එක මාරු කිරීම
            document.querySelector(".filter-buttons .active").classList.remove("active");
            button.classList.add("active");

            // 2. Filter කිරීම
            const filterValue = button.getAttribute("data-filter");

            projectCards.forEach(card => {
                if (filterValue === "all" || card.classList.contains(filterValue)) {
                    card.classList.remove("hide");
                    card.classList.add("show");
                } else {
                    card.classList.add("hide");
                    card.classList.remove("show");
                }
            });
        });
    });

    
function sendToWhatsapp() {
    let name = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    let myNumber = "94701186161"; 

    // මෙහි Emoji වෙනුවට ඒවායේ සංකේත (Encoded) භාවිතා කර ඇත
    let messageBody = "*New Inquiry from Portfolio*" + "\n"
        + "--------------------------------------------" + "\n"
        + "*Name:* " + name + "\n" 
        + "*Email:* " + email + "\n" 
        + "*Phone:* " + phone + "\n" 
        + "*Subject:* " + subject + "\n" 
        + "--------------------------------------------" + "\n"
        + "*Message:* " + "\n" + message + "\n"
        + "--------------------------------------------" + "\n"
        + "*Sent via Portfolio Website*";

    // encodeURIComponent භාවිතා කිරීමෙන් Emoji සහ හිස්තැන් නිවැරදිව WhatsApp වෙත යයි
    let url = "https://wa.me/" + myNumber + "?text=" + encodeURIComponent(messageBody);

    if (name !== "" && message !== "") {
        window.open(url, '_blank').focus();
    } else {
        alert("Please fill Name and Message fields!");
    }
}