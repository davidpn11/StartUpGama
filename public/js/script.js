$(document).ready(function() {

    var client_ip = -1; 
    getIP();

    $('#dataForm').submit(function () {
        var formData = $("#dataForm").serializeArray();        
        var json = parseJsonArray(formData); 
        json.ip = client_ip;
        json.data = new Date();
       // console.log(JSON.stringify(json));
        
        $.ajax({
            type: "PUT",
            contentType : "application/json",
            datatype : "application/json",
            xhrFields: {
                withCredentials: false
            },  
            headers: {
            },             
            data:JSON.stringify(json),                      
            url: '/subscribe',
            success: function(data) 
            {				
                alert("Cadastro Efetuado");
            },
            error: function (data) {
                alert('Algo deu errado!');            
            }  
        });	            
     return false;
    });

    function getIP(){      
        // $.get("https://freegeoip.net/json/", function(data, status){
        //     client_ip = data.ip;
        // }); 
        $.getJSON('http://www.geoplugin.net/json.gp?jsoncallback=?', function(data) {
            client_ip = data.geoplugin_request;
        }); 
    }

    function parseJsonArray(formArray) {
        var jsonArray = {};
        for (var i = 0; i < formArray.length; i++){
            jsonArray[formArray[i]['name']] = formArray[i]['value'];
        }
        return jsonArray;
    }

});



