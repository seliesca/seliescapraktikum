/**
 * kode vanila javascript(Javascript murni) untuk meambahkan value
 * pada elemen html
 */
 document.getElementById('nama').innerHTML = 'Seliesca';

 /**
  * kode Jquery untuk menambahkan value
  * pada halaman html
  */
 $('#nim').html('20190140128');
 
 /**
  * jquery menggunkaan selector sama seperti css
  * .untuk class
  * # untuk id
  * kita dapat menuliskan ttg hltm bila memilih berdasarkan tag
  * misal: <button></button maka tinggal tulis button
  * dalam bentuk kode berikut, kita akan menampilkan console.log saat document ready 
  */
 $(function() {
     console.log("Hello");
 });
 
 //kode jquery untuk menyembunyikan elemen
 $("#hide").on("click", function(){
     $("#nama").hide();
 });
 
 //kode jquery untuk menampilkan kembali elemen
 $("#show").on("click", function(){
     $("#nama").show();
 });
 
 //coba ini
 $("#toggle").on("click",function(){
     $("#nama").toggle();
 });
 
 //kode jquery untuk fade in element html
 $("#fadeIn").on("click", function(){
     $("tanggal").fadeIn();
 });
 
 //kode jquery untuk fade in element html
 $("#fadeOut").on("click", function(){
     $("#tanggal").fadeOut();
 });
 
 //coba ini
 $("#fadeToggle").on("click", function(){
     $("#tanggal").fadeToggle();
 });
 
 //kode jquery untuk slide up elemen html
 $("#slideUp").on("click", function(){
     $("#img").slideUp();
 });
 
 //kode jquery untuk slide up element html
 $("#slideDown").on("click", function(){
     $("#img").slideDown();
 });
 
 //coba ini
 $("#slideToggle").on("click",function(){
     $("#img").slideToggle();
 });