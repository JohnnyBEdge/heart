const topic = document.getElementsByClassName("topic");


for (let i = 0; i < topic.length; i++) {
    topic[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        const subTopics = this.nextElementSibling;

        if (subTopics.style.display === "block") {
            subTopics.style.display = "none";
        } else {
            subTopics.style.display = "block";
        }
    });
} 
