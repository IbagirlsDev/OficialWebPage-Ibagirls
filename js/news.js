var btn_men = document.getElementById("news")
var mentor = document.getElementById("mentores")
var twitter_tweet = document.getElementById("twitter_tweet")
var empre = document.getElementById("empresas")

btn_men.addEventListener("click", (e) => {
    e.preventDefault()
    twitter_tweet.style.display="none"
})

$(document).ready(function() {
  // Datos de ejemplo para la tarjeta
  var novedadesData = [
    {
      title: "Titulo 1",
      author: "Autor 1",
      date: "Fecha 1",
      content: "Resumen resumen resumen.",
      likes: 10,
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/95e1/38d7/0f90daa932450afcb956b3f71d2ee7cd?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ax-QhNw9Ibgwh-fcaTltr7n9x~Cz0ORH82Zw7hvpH3OljgwriMWGDlnlqQ-1Kwr7-YxnYUUHy6EA2AFbliqrf~f4WHqughFd7ErBQIP5vtrSYxoRCDrmCwoSPk4UUUDgp6QikPXoGwKAYYJ3IBbfdVDUpnkOqI7k~RjKC6vSGV3ea1iT4A4DZ~dqufbbDcfXWX3m5phH8oo54LD9W6ThLrUiuoKKv3J2kQawEhWRjxD3snCYYc-i9lr~rnoTPIm4cd5gFjJ-k-bc1WDntPtMPecuH8zrFLUYf4ZnCakRybPgqnFo2PRN6~VmtSKEa6HxKOLPs33ApgktPzeWPcsGKA__",
      more: "Leer más",
    },
    {
      title: "Titulo 2",
      author: "Autor 2",
      date: "Fecha 2",
      content: "Descripción de la novedad 2.",
      likes: 10,
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/95e1/38d7/0f90daa932450afcb956b3f71d2ee7cd?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ax-QhNw9Ibgwh-fcaTltr7n9x~Cz0ORH82Zw7hvpH3OljgwriMWGDlnlqQ-1Kwr7-YxnYUUHy6EA2AFbliqrf~f4WHqughFd7ErBQIP5vtrSYxoRCDrmCwoSPk4UUUDgp6QikPXoGwKAYYJ3IBbfdVDUpnkOqI7k~RjKC6vSGV3ea1iT4A4DZ~dqufbbDcfXWX3m5phH8oo54LD9W6ThLrUiuoKKv3J2kQawEhWRjxD3snCYYc-i9lr~rnoTPIm4cd5gFjJ-k-bc1WDntPtMPecuH8zrFLUYf4ZnCakRybPgqnFo2PRN6~VmtSKEa6HxKOLPs33ApgktPzeWPcsGKA__",
      more: "Leer más",
    },
    {
      title: "Titulo 3",
      author: "Autor 3",
      date: "Fecha 3",
      content: "Descripción de la novedad 3.",
      likes: 10,
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/95e1/38d7/0f90daa932450afcb956b3f71d2ee7cd?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ax-QhNw9Ibgwh-fcaTltr7n9x~Cz0ORH82Zw7hvpH3OljgwriMWGDlnlqQ-1Kwr7-YxnYUUHy6EA2AFbliqrf~f4WHqughFd7ErBQIP5vtrSYxoRCDrmCwoSPk4UUUDgp6QikPXoGwKAYYJ3IBbfdVDUpnkOqI7k~RjKC6vSGV3ea1iT4A4DZ~dqufbbDcfXWX3m5phH8oo54LD9W6ThLrUiuoKKv3J2kQawEhWRjxD3snCYYc-i9lr~rnoTPIm4cd5gFjJ-k-bc1WDntPtMPecuH8zrFLUYf4ZnCakRybPgqnFo2PRN6~VmtSKEa6HxKOLPs33ApgktPzeWPcsGKA__",
      more: "Leer más",
    },
      
    // Puedes agregar más objetos de datos según sea necesario
  ];

  function createCard(cardData) {
    var cardElement = $("<div>").addClass("card");
    $("<img>").attr("src", cardData.imageUrl).appendTo(cardElement);
    //quiero poner una imagen user.svg
    var authorSection = $("<div>").addClass("author-section");
    var authorInfo = $("<div>").addClass("author-info");

    $("<img>").attr("src", "../images/user.svg").appendTo(authorSection);
    $("<span>").addClass("author-name").text(cardData.author).appendTo(authorSection);
    authorInfo.appendTo(authorSection);
    $("<span>").addClass("date").text(cardData.date).appendTo(authorSection);
    authorSection.appendTo(cardElement);
    $("<h2>").text(cardData.title).appendTo(cardElement);
    $("<p>").text(cardData.content).appendTo(cardElement);
    $("<button>").text(cardData.more).appendTo(cardElement);

    return cardElement;
  }
  // Itera sobre los datos y crea tarjetas dinámicamente
  novedadesData.forEach(function (cardData) {
    var cardElement = createCard(cardData);
    $("#novedadesContainer").append(cardElement);
  });
});