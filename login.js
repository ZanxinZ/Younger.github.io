
function login(uname="15382350839",password="Forever1%2B1") {
    let request = new XMLHttpRequest();

    let url="https://passport2-api.chaoxing.com/v11/loginregister?code="+password+"&cx_xxt_passport=json&uname="+uname+"&loginType=1&roleSelect=true";
    //url="https://www.baidu.com";


    request.open("GET",url,true);
    request.setRequestHeader("Access-Control-Allow-Origin","*")
    request.setRequestHeader("Access-Control-Allow-Credentials","true")
    request.setRequestHeader("Access-Control-Allow-Methods","GET, POST, OPTIONS")
    request.setRequestHeader("Access-Control-Allow-Headers","DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type")
    request.setRequestHeader("Content-Type","text/html;charset=utf-8")


    // request.setRequestHeader("Accept","*/*")
    // request.setRequestHeader("Accept-Language","zh-Hans-CN;q=1, en-CN;q=0.9, fr-CN;q=0.8, el-CN;q=0.7, ar-CN;q=0.6, tr-CN;q=0.5")
    // request.setRequestHeader("Accept-Encoding","gzip, deflate, br")
    // request.setRequestHeader("Connection","keep-alive")


    //request.setRequestHeader("Host", "passport2-api.chaoxing.com");
    request.send();

    request.onreadystatechange=function()
    {
        console.log("haa")
        console.log(request.responseText);
        if (request.readyState===4 && request.status===200)
        {
            document.getElementById("res").innerHTML=request.responseText;
        }
    }

}

function preConnect(){
    let request=new XMLHttpRequest();
    request.open("CONNECT","passport2-api.chaoxing.com:443")
    request.setRequestHeader("Host+","passport2-api.chaoxing.com")
    request.setRequestHeader("User-Agent+","ChaoXingStudy/202009231900 CFNetwork/1197 Darwin/20.0.0")
}


login()
