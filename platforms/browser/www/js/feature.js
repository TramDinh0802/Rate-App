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