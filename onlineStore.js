let productRow = document.getElementById("productRow");

//generate each card in this format
let generateProductCard = (name, desc, price, imgUrl) => {
    return `
    <div class="col-md-4 d-flex align-items-stretch">
        <div class="card shadow bg-dark text-light mb-3">
            <img src="${imgUrl}" class="card-img-top" alt="product1"/>
            <div class="card-body">
            <h5 class="card-title">${name}</h5>
                <p class="card-text">${desc}</p>
                <p class="text-info">RM ${price}</p>
                <div id="buyNow">
                    <a class="btn btn-lg btn-outline-info d-inline-block mx-auto mt-1" href="#purchaseForm" role="button">Buy Now!</a>
                </div>
            </div>
        </div>
    </div>
    `
}


$.ajax({
    url: "https://api.airtable.com/v0/appfSaqPhUvSsHb83/Products",
    headers: {
        Authorization: "Bearer keyWUfCbFImv8Bmmu"
    },
    method: "GET",
    success: function(res){
        console.log(res.records);
        let content = "";
        for(let i = 0; i < res.records.length; i++){
            let newCard = generateProductCard(res.records[i].fields.Product, res.records[i].fields.Description, res.records[i].fields.Price, res.records[i].fields.Picture[0].url);
            content += newCard;
        }
        productRow.innerHTML = content;
    }
})





