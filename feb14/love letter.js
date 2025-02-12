$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate({ top: "-90px" }, "slow");
    })
    .mouseleave(function () {
      $(".card").stop().animate({ top: "10px" }, "slow");
    });

  $(".card").click(function () {
    $(".envelope, .front, .hearts").fadeOut(800);

    $(this)
      .css({
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      })
      .animate(
        {
          width: "100vw",
          height: "100vh",
        },
        1000
      );

    $(".text")
      .css({
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        width: "100%",
      })
      .animate(
        {
          fontSize: "5em",
        },
        1000,
        function () {
          window.location.href = "message.html";
        }
      );
  });
});
