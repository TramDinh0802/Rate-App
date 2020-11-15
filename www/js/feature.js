function loadAllData() {
    let result = getAllData("RestaurantDatabase")
    result.onsuccess = function(event) {
        let data = event.target.result
        console.log(data)
        for (let i in data) {
            let newcontent = `<div class="col-md-4 text-center col-sm-6 col-xs-6">
        <div class="thumbnail product-box">
            <div class="caption">
                <h3><a href="#">${data[i].res_name}</a></h3>
                <p><a href="feedback.html" class="btn btn-success" role="button">Feedback</a> <a href="#" class="btn btn-primary" role="button">See Details</a></p>
            </div>
        </div>
        </div>`

            $('#list_data').append(newcontent)
        }

    }
}
$(window).on('load', function() {
    loadAllData()
})
$(document).ready(function() {
    $(document).on('submit', '#form_rate', function() {
        const rate_data = {
            res_name: $('#restaurant_name').val(),
            res_type: $('#restaurant_type').val(),
            res_datetime: $('#restaurant_date').val(),
            res_averageprice: $('#avarage_price').val(),
            res_service: $('#service_rate').val(),
            res_clean: $('#cleanliness_rate').val(),
            res_food: $('#food_rate').val(),
            res_notes: $('#restaurant_note').val()
        }

        createFeedback(rate_data)
        return false
    })
})