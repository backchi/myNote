console.log('my-note app.js');

window.onload = function (ev) { // 저장된 노트 불러오기
  text = document.getElementById('memo').value = localStorage.getItem('text');
};

btnRenual = document.querySelector('.btnRenual');
btnSave = document.querySelector('.btnSave');
btnDown = document.querySelector('.btnDown');
btnAbout = document.querySelector('.btnAbout');
btnClose = document.getElementById('about_close');
btnFull = document.querySelector('.btnFull');

btnRenual.addEventListener('click', renual);
btnSave.addEventListener('click', save);
btnDown.addEventListener('click', download);
btnAbout.addEventListener('click', visi_About);
btnClose.addEventListener('click', unvisi_About);
btnFull.addEventListener('click', fullScreen);
