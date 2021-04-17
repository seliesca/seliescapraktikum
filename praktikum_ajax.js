/**
 * AJAX
 * AJAX = Asynchronous JavaScript and XML
 * AJAX Asynchronous JavaScript and XML adalah teknik
 * yang digunakan untuk membuat website yang dinamis.
 * artinya website mampu mengupdate dan menampilkan 
 * data baru dari server tanpa peru melakukan reload.
 * 
 * pada praktikum ini, kita akan melakukan ajax Jquery
 */

//fungsi ajax jquery untuk meload isi file
$(function () {
    $("#nama").load("test.txt");
});

/**
 * berikut merupakan fungsi untuk fetch data dari internet menggunakan ajax jquery
 * kita menggunakan https://jsonplaceholder.typicode.com/photos sebagai urlnya
 * silahkan dibuka dulu agar paham 
 */
$(function (){
    let url = "https://jsonplaceholder.typicode.com/photos";
    $("#getPost").on("click", function (){
        $.ajax({
            url: url,
            type: 'GET',
            success: function (data){
                let data_html = '';
                $.each(data, function (i, item) {
                    data_html +=
                    '<p>'+ item.title+'</p>'
                        //'<br>' +
                        //'<img src="' + item.thumbnailUrl + '" alt="">' +
                        //'<br>' +
                        //'<h1>'+item.id + '. '+ item.title + '<h1>'
                    
                      
                
               
                });  
                $("#data_hasil_dari_internet").html(data_html);
            },
            error: function (error) {
                console.log(error);
            }
        })
    });    
});