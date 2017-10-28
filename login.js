var http = new XMLHttpRequest();
var url = "accounts/login/ajax/";
var params = "password=asd123456&username=9__u";
http.open("POST", url, true);

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/json");
http.setRequestHeader("x-instagram-ajax", "1");
http.setRequestHeader("x-requested-with", "XMLHttpRequest");
http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send(params);