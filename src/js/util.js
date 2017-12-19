var renual = function () {                            //새 노트
  document.getElementById('memo').value = '';
};

var save = function() {                               //노트 저장
  localStorage.text = document.getElementById('memo').value;
};

var download = function () {                          //노트 다운로드
  var blob = new Blob([document.getElementById('memo').value], {type: "text/plain;charset=utf-8"});
  saveAs(blob, "text.txt");
};

about_popup = document.querySelector('.about_popup');

var visi_About = function () {                        //about 띄우기
  about_popup.style.display = "block";
  about_popup.style.border = "3px #002266 double";
};

var unvisi_About = function() {                       //about 없애기
  about_popup.style.display = "none";
  about_popup.style.border = "none";
};

var fullScreen = function() {                         //전체 화면
  if(screenfull.enabled){
    screenfull.request();
  }
};
