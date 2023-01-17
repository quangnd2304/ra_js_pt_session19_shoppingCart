// let listProduct = [{ id: "P001", name: "Nho mỹ", price: 10 },
// { id: "P002", name: "Táo tàu", price: 5 },
// { id: "P003", name: "cheri", price: 20 }
// ];
// localStorage.setItem('listProduct', JSON.stringify(listProduct));
// Get listProduct từ localStorage hiển thị ra index.html
let listProduct = JSON.parse(localStorage.getItem('listProduct'));
let divListProduct = document.getElementById('listProduct');
divListProduct.innerHTML = '';
listProduct.forEach(product => {
    divListProduct.innerHTML += `
        <div>
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button onclick="addCart('${product.id}')">Add</button>
        </div>
    `
});
function addCart(id) {
    //get localStorage
    let listProduct = JSON.parse(localStorage.getItem('listProduct'));
    //get listCart tu localStorage
    let listCart = JSON.parse(localStorage.getItem('listCart'));
    if (listCart == null) {
        //Khach hang chua mua hang
        listCart = [];
        //add Cart khach hang muon mua vao listCart
        listProduct.forEach(product => {
            if (product.id == id) {
                let cart = { product: product, quantity: 1 };
                listCart.push(cart);
            }
        });
    } else {
        //Khach hang da mua hang
        let exist = false;
        for (let i = 0; i < listCart.length; i++) {
            if (listCart[i].product.id == id) {
                //Da ton tai trong gio hang
                exist = true;
                //--> + quantity --> 1
                listCart[i].quantity += 1;
            }
        }
        if (!exist) {
            //San pham chua ton tai trong gio hang
            listProduct.forEach(product => {
                if (product.id == id) {
                    let cart = { product: product, quantity: 1 };
                    listCart.push(cart);
                }
            });
        }

    }
    //add listCart vao localStorage
    localStorage.setItem("listCart", JSON.stringify(listCart));
    //tinh tong tien gio hang
    localStorage.setItem("totalAmount", calTotalAmount(listCart));
    //Chuyen sang trang ShoppingCart
    window.location.assign("shoppingCart.html")

}

function calTotalAmount(listCart) {
    let totalAmount = 0;
    listCart.forEach(cart => {
        totalAmount += cart.product.price * cart.quantity;
    });
    return totalAmount;
}
