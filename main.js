
var List = document.querySelector("#watch");  
function Watch(){
    let date = new Date().toLocaleString("tr-TR");
    List.innerHTML = date;
}
 setInterval(Watch, 1000);

 var names = document.querySelector("#name");
 var paramet = prompt("Adınızı ve Soyadınızı Giriniz","");
 names.innerHTML = 'Merhabalar ' +paramet + ' Bulunduğunuz Konuma Göre Saat Ve Tarih'; 