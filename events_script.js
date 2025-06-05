document.addEventListener("DOMContentLoaded", function() {

  var incidentSelect = document.getElementById("IncidentOption");

  incidentSelect.addEventListener("change", function() {

    if (incidentSelect.value === "others") {
      document.getElementById("Description").style.display = "block";
      document.getElementById("CharacterCount").style.display = "block";
    } else {
      document.getElementById("Description").style.display = "none";
      document.getElementById("CharacterCount").style.display = "none";
    }

  });

});


document.addEventListener("DOMContentLoaded", function() {
  
var DescriptionBox = document.getElementById("Description");
var CharCount = document.getElementById("CharacterCount");


     DescriptionBox.addEventListener("input", function() {

      CharCount.textContent = `${DescriptionBox.value.length}/200`;

  });
});

