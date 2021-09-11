function semuaMenu(){
    $.getJSON("data/pizza.json", function(data){
        let menu = data.menu;

        // $.each(object, function(index, element){}
        $.each(menu, function(i, element){
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mx-auto my-1" style="width: 18rem"><img src="img/pizza/'+ element.gambar +'" class="card-img-top" /><div class="card-body"><h5 class="card-title">'+ element.nama +'</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content</p><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
        });
    });
}

semuaMenu();

$('.nav-link').on('click',function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h1').html(kategori);

    if(kategori == 'All Menu'){
        $('#daftar-menu').html('');
        semuaMenu();
        return;
    }

    $.getJSON("data/pizza.json", function(data){
        let menu = data.menu;
        let content = '';

        $.each(menu, function(i, element){
            if(element.kategori == kategori.toLowerCase()){
                content += '<div class="col-md-4"><div class="card mx-auto my-1" style="width: 18rem"><img src="img/pizza/'+ element.gambar +'" class="card-img-top" /><div class="card-body"><h5 class="card-title">'+ element.nama +'</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content</p><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
            }
        });
        $('#daftar-menu').html(content);
    });

});

