const listRes = [{
        res_name: 'Sugar daddy 1',
        res_type: 'Demo',
        res_datetime: 'abc',
        res_averageprice: '300000',
        res_service: '5',
        res_clean: '5',
        res_food: '5',
        res_notes: ''
    },
    {
        res_name: 'Sugar daddy 2',
        res_type: 'Demo',
        res_datetime: 'abc',
        res_averageprice: '300000',
        res_service: '5',
        res_clean: '5',
        res_food: '5',
        res_notes: ''
    },
    {
        res_name: 'Sugar daddy 3',
        res_type: 'Demo',
        res_datetime: 'abc',
        res_averageprice: '300000',
        res_service: '5',
        res_clean: '5',
        res_food: '5',
        res_notes: ''
    },
    {
        res_name: 'Sugar daddy 4',
        res_type: 'Demo',
        res_datetime: 'abc',
        res_averageprice: '300000',
        res_service: '5',
        res_clean: '5',
        res_food: '5',
        res_notes: ''
    },
    {
        res_name: 'Sugar daddy 5',
        res_type: 'Demo',
        res_datetime: 'abc',
        res_averageprice: '300000',
        res_service: '5',
        res_clean: '5',
        res_food: '5',
        res_notes: ''
    },
    {
        res_name: 'Sugar daddy 6',
        res_type: 'Demo',
        res_datetime: 'abc',
        res_averageprice: '300000',
        res_service: '5',
        res_clean: '5',
        res_food: '5',
        res_notes: ''
    },
    {
        res_name: 'Sugar daddy 7',
        res_type: 'Demo',
        res_datetime: 'abc',
        res_averageprice: '300000',
        res_service: '5',
        res_clean: '5',
        res_food: '5',
        res_notes: ''
    },
    {
        res_name: 'Sugar daddy 8',
        res_type: 'Demo',
        res_datetime: 'abc',
        res_averageprice: '300000',
        res_service: '5',
        res_clean: '5',
        res_food: '5',
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

function createFeedback(feedback) {
    const request = db.transaction(["RestaurantDatabase"], "readwrite").objectStore("RestaurantDatabase").add(feedback)
    request.onsuccess = function(event) {
        loadAllData
        alert("Create feedback successfully")
    }
    request.onerror = function(event) {
        alert("create feedback fail")
    }
}