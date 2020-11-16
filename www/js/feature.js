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
                <button id="delete" feedbackId = "${data[i].id}" class="btn btn-danger">Delete</button>
                <button id="detail" class="btn btn-primary" feedbackId = "${data[i].id}" >See Details</button>
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
    $('#goHome').on('click', function() {
        $('#list_data').empty()
        loadAllData()
    })
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
    $(document).on('click', '#delete', function(){
        const feedbackId = $(this).attr('feedbackId')
        const result = deleteFeedback(feedbackId)

        result.onsuccess = function () {
            alert("Delete Feedback successfully")
            $('#list_data').empty()
            loadAllData()
        }
        result.onerror = function () {
            alert("Delete Feedback failed")
        }
    })
    $(document).on('click', '#detail', function(){
        const feedbackId = $(this).attr('feedbackId')
        const result = getDetail(feedbackId)
        result.onsuccess = function (event){
            const feedback = event.target.result
            console.log(feedback)
        }
        result.onerror = function (){
            alert("Can't get detail")
        }
    })
})