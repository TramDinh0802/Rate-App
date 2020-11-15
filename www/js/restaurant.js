const listRes = [{
        res_name: 'Restaurant demo',
        res_type: 'Demo',
        res_datetime: 'abc',
        res_averageprice: '300000',
        res_rating: 'good',
        res_clean: 'good',
        res_food: 'good',
        res_notes: ''
    },
    {
        res_name: 'Restaurant demo',
        res_type: 'Demo',
        res_datetime: 'abc',
        res_averageprice: '300000',
        res_rating: 'good',
        res_clean: 'good',
        res_food: 'good',
        res_notes: ''
    },
    {
        res_name: 'Restaurant demo',
        res_type: 'Demo',
        res_datetime: 'abc',
        res_averageprice: '300000',
        res_rating: 'good',
        res_clean: 'good',
        res_food: 'good',
        res_notes: ''
    },
    {
        res_name: 'Restaurant demo',
        res_type: 'Demo',
        res_datetime: 'abc',
        res_averageprice: '300000',
        res_rating: 'good',
        res_clean: 'good',
        res_food: 'good',
        res_notes: ''
    },
    {
        res_name: 'Restaurant demo',
        res_type: 'Demo',
        res_datetime: 'abc',
        res_averageprice: '300000',
        res_rating: 'good',
        res_clean: 'good',
        res_food: 'good',
        res_notes: ''
    },
    {
        res_name: 'Restaurant demo',
        res_type: 'Demo',
        res_datetime: 'abc',
        res_averageprice: '300000',
        res_rating: 'good',
        res_clean: 'good',
        res_food: 'good',
        res_notes: ''
    },
    {
        res_name: 'Restaurant demo',
        res_type: 'Demo',
        res_datetime: 'abc',
        res_averageprice: '300000',
        res_rating: 'good',
        res_clean: 'good',
        res_food: 'good',
        res_notes: ''
    },
    {
        res_name: 'Restaurant demo',
        res_type: 'Demo',
        res_datetime: 'abc',
        res_averageprice: '300000',
        res_rating: 'good',
        res_clean: 'good',
        res_food: 'good',
        res_notes: ''
    }
]

var db;
var request = window.indexedDB.open("Restaurant-Database", 2);
request.onupgradeneeded = function(event) {
    var db = event.target.result;
    var objectStore = db.createObjectStore("RestaurantDatabase", { keyPath: "id", autoIncrement: true });
    for (var i in listRes) {
        objectStore.add(listRes[i])
    }
}

request.onsuccess = function(event) {
    db = request.result;
    console.log("Success: " + db);
}

function getAllData(collectionName) {
    const transaction = db.transaction([collectionName], "readonly");
    const objectStore = transaction.objectStore(collectionName);
    request = objectStore.getAll();
    return request;
}