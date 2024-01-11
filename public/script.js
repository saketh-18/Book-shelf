document.addEventListener('DOMContentLoaded', function () { 

    // const quote = document.getElementById("quote");
    // const link = document.getElementById("link");

    // link.addEventListener("click", function(event) {
    //     event.preventDefault();

    //     quote.classList.remove("center");
    //     quote.classList.add("hidden")
    // } )

    const remove = document.getElementsByClassName("selectBook")
    const removeBook = document.getElementById("hiddenDelete")
    remove.addEventListener("click" , () => {
        removeBook.classList.remove("hiddenDelete");
    })



});