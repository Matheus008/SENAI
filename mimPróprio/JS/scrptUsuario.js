(function () {
    $.ajax({

        beforeSend: function (request) {
            request.setRequestHeader("X-Api-Key", "YfvpAXxLhWscxu367ym/hA==mlqG3GcviYSSPjRO");
        },
        type: "GET",
        dataType: "json",
        url: "https://api.api-ninjas.com/v1/historicalfigures?name=newton",
        success: function (dataNinja) {

            $("#myTable").dataTable({
                data: dataNinja,
                columns: [
                    { 'data': 'name' },
                    { 'data': 'title' },
                ]
            });
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }

    });
})();