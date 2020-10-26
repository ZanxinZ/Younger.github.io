

function login(uname="13757116490",password="5881563esjkb") {
    let request = new XMLHttpRequest();


    let url="https://passport2-api.chaoxing.com/v11/loginregister?code="+password+"&cx_xxt_passport=json&uname="+uname+"&loginType=1&roleSelect=true";
    url="https://www.formular.xyz";
    //url="ajax_info.txt";


    if(request.method=="OPTIONS")console.log("臭小子")
    else{
        console.log("没"+request.method)
    }


    request.open("GET",url,true);
    request.setRequestHeader("Access-Control-Allow-Origin","*" )

    request.setRequestHeader("Access-Control-Allow-Credentials","true")
    request.setRequestHeader("Access-Control-Allow-Methods","GET, POST, OPTIONS")
    request.setRequestHeader("Access-Control-Allow-Headers","Accept,Authorization,Cache-Control,Content-Type,DNT,If-Modified-Since,Keep-Alive,Origin,User-Agent,X-Requested-With,Token,x-access-token")

    request.setRequestHeader("Access-Control-Expose-Headers","name")
    request.setRequestHeader("Access-Control-Max-Age", "5")
    request.setRequestHeader("Content-Type","application/x-www-form-urlencoded")


    // request.setRequestHeader("User-Agent","User-Agent: Mozilla/5.0 (Linux; Android 9; MI 8 Build/PKQ1.180729.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36 com.chaoxing.mobile/ChaoXingStudy_3_4.7.1_android_phone_590_52 (@Kalimdor)_d69cbb741e6a47ddb19ea60e0658ad03")
    //
    request.send();
    // if (request.method=== "OPTIONS") {
    //     console.log("傻了")
    //     request.status=200;
    // }
    // else{
    //     console.log("没啥")
    // }


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

// function preConnect(){
//     let request=new XMLHttpRequest();
//     request.open("CONNECT","passport2-api.chaoxing.com:443")
//     request.setRequestHeader("Host+","passport2-api.chaoxing.com")
//     request.setRequestHeader("User-Agent+","ChaoXingStudy/202009231900 CFNetwork/1197 Darwin/20.0.0")
// }


login()
