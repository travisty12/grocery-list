var i = 0;
var listLength = [];
$(document).ready(function() {
  $("#add-form").submit(function(event) {
    event.preventDefault();
    $("#blank-form").show();
    $("#list-out").hide();
    listLength.push(i);
    $("#list-out").append("<li id='add-item-"+i+"''></li>")
    $("#blank-form").append("<label for='new-item-"+i+"'>Add new item:</label>");
    $("#blank-form").append("<input type='text' id='new-item-"+i+"' class='form-control'>");
    i +=1;
  });
  $("#list-form").submit(function(event) {
    event.preventDefault();
    var list = listLength.map(function(item) {
      if ($("#new-item-"+item).val() == "") {
        return "error";
      } else{
        return $("#new-item-"+item).val().toUpperCase();
      }
    });

    list.sort();
    var list2 = listLength.map(function(item2) {
      if (list[item2] == "error") {
        $("#add-item-"+item2).remove();
        return;
      } else{
        $("#add-item-"+item2).text(list[item2]);
        console.log(list);
        return;
      }
    });

    $("#blank-form").hide();
    $("#list-out").show();

  });
})
