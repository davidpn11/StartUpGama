    function sendData({
      $("#formId").submit(function(e){
          e.preventDefault();

          //var data = {}
          var json = convert("#dataForm");
          var Form = this;
          alert(JSON.stringify(json));
          alert(JSON.stringify($(Form).serialize()));
          alert(JSON.stringify($(Form).serializeArray()));
          alert(json );


          //Save Form Data........
          $.ajax({
              cache: false,
              url : '',
              type: "POST",
              dataType : "json",
              data : json,
              context : Form,
              success : function(callback){
                  //Where $(this) => context == FORM
                  console.log(JSON.parse(callback));
                  $(this).html("Successo");
              },
              error : function(){
                  $(this).html("Erro");
              }
          });
      });
  });


  function convertForm(form){
  
      var array = jQuery(form).serializeArray();
      var json = {};

      jQuery.each(array, function() {
          json[this.name] = this.value || '';
      });

      console.log('JSON: '+json);
      return json;
  }