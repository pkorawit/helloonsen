myApp.controllers = {

    home: function(page) {
        document.querySelector("#alert1").onclick = function(){
            ons.notification.alert(page.id);
        }
    },
  
    setting: function(page) {
        document.querySelector("#alert2").onclick = function(){
            ons.notification.alert(page.id);
        }
    },
  
    
  };