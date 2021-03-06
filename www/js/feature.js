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
                <p>Average Rating: <span>${parseFloat((Number(data[i].res_food) + Number(data[i].res_clean) + Number(data[i].res_service))/3).toFixed(1)}</p>
                <button id="delete" feedbackId = "${data[i].id}" class="btn btn-danger">Delete</button>
                <button id="detail" class="btn btn-primary" feedbackId = "${data[i].id}" type="button" data-toggle="modal" data-target="#detail1" >See Details</button>
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
    $(document).on('click', '#delete', function() {
        const feedbackId = $(this).attr('feedbackId')
        const result = deleteFeedback(feedbackId)

        result.onsuccess = function() {
            alert("Delete Feedback successfully")
            $('#list_data').empty()
            loadAllData()
        }
        result.onerror = function() {
            alert("Delete Feedback failed")
        }
    })
    $(document).on('click', '#detail', function() {
        const feedbackId = $(this).attr('feedbackId')
        const result = getDetail(feedbackId)
        result.onsuccess = function(event) {
            const feedback = event.target.result
            const html = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">${feedback.res_name}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <h5>AVG Price: ${feedback.res_averageprice}</h5>
                        <h5>Type: ${feedback.res_type}</h5>                 
                        <h5>Date & Time of Visit: ${feedback.res_datetime}</h5>
                        <p>Service: ${feedback.res_service}</p>
                        <p>Clean: ${feedback.res_clean}</p>
                        <p>Food: ${feedback.res_food}</p>
                        <p>Average Rating: <span>${parseFloat((Number(feedback.res_food) + Number(feedback.res_clean) + Number(feedback.res_service))/3).toFixed(1)}</p>
                        <p>Date & Time or Review: ${feedback.res_datetime}
                        <p>Notes: ${feedback.res_notes}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
            `
            $('#detail1').empty().append(html)
        }
        result.onerror = function() {
            alert("Can't get detail")
        }
    })
})