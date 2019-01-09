$("#submit").on("click", function() {
    $.ajax({
      type: "POST",
      url: "/submit",
      dataType: "json",
      data: {
        Name: $("#Name").val(),
        Organization: $("#Organization").val(),
        Email: $("#Email").val(),
        Message: $("#Message").val(),
      }
    })
      .then(function(data) {
        console.log(data);
        $("#Name").val("");
        $("#Organization").val("");
        $("#Email").val("");
        $("#Message").val("");
        alert("thank you I will be in contact as soon as possible.")
      }
      );
    return false;
  });