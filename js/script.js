    const button = document.getElementById('submitBtn');
    button.addEventListener("click", function() {
    document.form1.submit();
    });

    const menuEvent = document.getElementsByClassName('logo');
    menuEvent.addEventListener("click", function() {
    document.body.style.color = pink
    });