$("#btnSubmit").click(function () {
    alert("This button has been clicked!")
});

$("#target").submit(function () {
    alert($("#txt").val());

});



$("#txt").keypress(function () {
    $('#btnSubmit2').attr('disabled', false)
})



$("body").append("<div></div>")

// $("div").append("<h2></h2>")

// $("#target").submit(function(event) {
//     $("h2").append($("#txt").val())
//     event.preventDefault();

//   });

$("h2").on("mouseover", function () {

    $("h2").css({
        "background-color": "purple",
        "border-radius": "10rem",
    })
})

$("body").append("<ul></ul>")
$("ul").append("<li></li>")

$("#target").submit(function (event) {
    $("li").append($("#txt").val())
    event.preventDefault();

});

$("li").click(function () {
    $("li").css("color", getRandomColor)
})

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$("li").dblclick(function () {
    $("li").remove()
})

