$(document).ready(function() {

    var client_ip = -1; 
    getIP();

    function redirectPage() {                    
        if (confirm("Você quer ir para o site da Gama?") == true) {
            window.location.href = "http://gama.academy/"
        }
    }

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
                alert("Obrigado por se cadastrar!");
            },
            error: function (data) {
                alert('Algo deu errado!');            
            }  
        });	            
     return false;
    });

     $('#curriculoForm').submit(function () {
        var formData = $("#curriculoForm").serializeArray();        
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
                $(".mfp-close").trigger( "click" );			
                downloadPage('curriculo');                
            },
            error: function (data) {
                $(".mfp-close").trigger( "click" );
                alert('Algo deu errado!');            
            }  
        });	                 
    });

  $('#ebookForm').submit(function () {
        var formData = $("#ebookForm").serializeArray();     
        console.log(formData);   
        var json = parseJsonArray(formData); 
        json.ip = client_ip;
        json.data = new Date();
        console.log(JSON.stringify(json));        
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
                $(".mfp-close").trigger( "click" ); 			
               downloadPage('ebook');                              
            },
            error: function (data) {
                 $(".mfp-close").trigger( "click" );
                alert('Algo deu errado!');            
            }  
        });	            
    });

    $('#entrevistaForm').submit(function () {
        var formData = $("#entrevistaForm").serializeArray();     
        console.log(formData);   
        var json = parseJsonArray(formData); 
        json.ip = client_ip;
        json.data = new Date();
        console.log(JSON.stringify(json));        
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
                $(".mfp-close").trigger( "click" );
                downloadPage('entrevista');                                
            },
            error: function (data) {
                $(".mfp-close").trigger( "click" );
                alert('Algo deu errado!');            
            }  
        });	                 
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

     function downloadPage(material){
        switch(material){
            case "curriculo":
                window.location.href = "/download/1"
                break;
            case "ebook":
                window.location.href = "/download/2"
                break;
            case "entrevista":
                window.location.href = "/download/3"
                break;
            default:
                break;
        }
    }

});



