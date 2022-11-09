$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    const adicionarTarefa = $("#nomeTarefa").val();
    const novoItem = `<li>${adicionarTarefa}</li>`;
    $().appendTo(novoItem);
    $(novoItem).appendTo("ul");
    $("#nomeTarefa").val("");
  });

  $("#lista").on("click", "li", function () {
    $(this).css({ "text-decoration": "line-through" });
  });
});
