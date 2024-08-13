    function GetData(url){
        fetch(url)
        .then((response) => response.json())
        .then(data => {
            data.forEach(item =>{
                window.productData = data;
                CardCrate(item);
                console.log(item);
            });

        })
        .catch((err) => console.log(err));
    }
document.getElementById('about').style.display='none';

    function CardCrate(data){
        const tempCard =`
        <div class="card">
                <img src="${data.image}">
                <h2>${data.title}</h2>
                <p>${data.price +'$'}</p>
                <button onclick=show_about(${data.id})>Sepete Ekle</button>
        </div>
        `;
        document.getElementById('card-container').innerHTML +=tempCard;
    }
    GetData('https://fakestoreapi.com/products');

    function show_about(id){
        const data = window.productData.find(product => product.id === id);
        if(!data) return;
        document.getElementById('about').innerHTML='';//hakkında sıfırlama
        const detail=`
            <div class='about' id='about'>
            <img src="${data.image}">
                        <div class='detail'>
                            <h2>${data.title}</h2>
                            <div class='description'>
                                ${data.description}
                            </div>
                            <div class='price'>
                            "${data.price+'$'}"
                            </div>
                            <div class='buttons'>
                            <button class='red-product' onclick=clear_about()>Vazgeç</button>
                                <button class='add-product' onclick=add_product()>Sepete Ekle</button>
                            </div>
                        </div>
            </div>
            `;
        
        document.getElementById('card-container').style.opacity=0.7;
        document.getElementById('about').style.display='flex';
        document.getElementById('about').innerHTML=detail;
    }
    function clear_about(){
        document.getElementById('about').innerHTML='';
        document.getElementById('about').style.display='none';
        document.getElementById('card-container').style.opacity=1;
    }
    function add_product(){
        alert('sepetinize eklendi');
        document.getElementById('about').innerHTML='';
        document.getElementById('about').style.display='none';
        document.getElementById('card-container').style.opacity=1;
    }