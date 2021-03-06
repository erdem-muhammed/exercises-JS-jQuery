
$(function()
{
    $("#send").click(function()
    {
        const city = $("#city").val();
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + [My API KEY],
            dataType: "text", //what we expect from server
            success: function(response)
            {
                const obj = JSON.parse(response);
                let result = "";
                result += "<div>City: " + obj.name + "</div>";
                result += "<div>Temp.: " + obj.main.temp + "</div>";
                result += "<div>Humidity: " + obj.main.humidity + "%</div>"
                $("#result").html(result);
            }
        })
    });
});