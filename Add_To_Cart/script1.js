const productInfo = document.querySelector("#productInfo");

productList = JSON.parse(localStorage.getItem('productList'));

productInfo.addEventListener("submit", (e) => {
  e.preventDefault();

  const category = document.querySelector('#category').value;
  const p_name = document.querySelector('#p_name').value;
  const p_price = document.querySelector('#p_price').value;
  const p_url = document.querySelector('#p_url').value;

  console.log(category)
  console.log(p_name)
  console.log(p_price)
  console.log(p_url)

  const arr = productList || [];
  const id = arr.length + 1;

  const newProduct = {
    id,
    category,
    p_name,
    p_price,
    p_url,
  };

  arr.push(newProduct);

  localStorage.setItem("productList", JSON.stringify(arr));
  location.reload();
});

function show() {
  let output = "";

  productList?.forEach((product) => {
    output += `
       <div class = " col-xl-3 col-lg-4 col-md-6 mt-4">
       <div class = "card border-0 shadow">
        <img src =" ${product.p_url}" alt="" height = "200">
       <div class = "card-body">
       <h4> ${product.p_name} </h4>
       <ul>
        <li>category:- ${product.category} </li>
        <li>price :- ${product.p_price} </li>
         </ul>
        <button class="btn btn-success"> Add to Cart </button>
        </div>
        </div>
        </div>
        `;
  });
  document.querySelector("#showProduct").innerHTML = output;
}show();
