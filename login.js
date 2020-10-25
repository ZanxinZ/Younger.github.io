
function login(uname="15382350839",password="Forever1%2B1") {
    let request = new XMLHttpRequest();

    let url="https://passport2-api.chaoxing.com/v11/loginregister?code="+password+"&cx_xxt_passport=json&uname="+uname+"&loginType=1&roleSelect=true";
    //url="https://www.baidu.com/index.php?tn=98012088_17_dg&ch=1";

    request.onreadystatechange=function()
    {
        console.log(request.responseText);
        if (request.readyState===4 && request.status===200)
        {
            document.getElementById("res").innerHTML=request.responseText;
        }
    }
    request.open("GET",url,true);
    request.setRequestHeader("Access-Control-Allow-Origin","true")
    request.setRequestHeader("Access-Control-Allow-Credentials","true")
    request.setRequestHeader("Access-Control-Allow-Headers","x-requested-with,content-type")

    //request.setRequestHeader("Host", "passport2-api.chaoxing.com");
    request.send();
}

login()
