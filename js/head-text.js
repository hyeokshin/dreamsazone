var msgIndex = 0;
function msg_time() {
    var msgArray = new Array();
    msgArray[0] = "취약계층에게<br>다양한";
    msgArray[1] = "문화·복지서비스를<br>제공하여";
    msgArray[2] = "시민의<br>삶의 질";
    msgArray[3] = "향상에<br>이바지한다.";
    msgArray[4] = "시민참여에<br>기반을 둔<br>문화·복지 분야";
    msgArray[5] = "봉사활동을<br>전개하여";
    msgArray[6] = "지역사회<br>발전을 도모한다.";
    msgArray[7] = "새로운<br>문화·복지 콘텐츠를";
    msgArray[8] = "창출하여<br>활성화를 추구한다.";
    document.all.HeaderTextTimer.innerHTML = msgArray[msgIndex];
    msgIndex++;
    if(msgIndex==9){
        msgIndex = 0;
    }
}
window.onload = function TimerStart() {
    tid = setInterval('msg_time()', 1500)
};