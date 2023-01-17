// Lay listCart tu localStorage
let listCart = JSON.parse(localStorage.getItem('listCart'));
if (listCart != null) {
    let carts = document.getElementById("carts");
    carts.innerHTML = "";
    listCart.forEach(cart => {
        carts.innerHTML += `
            <tr>
                <td>${cart.product.name}</td>
                <td>${cart.product.price}</td>
                <td>${cart.quantity}</td>
                <td>${cart.quantity * cart.product.price}</td>
                <td>
                    <button>Update</button>
                    <button>Delete</button>
                </td>
            </tr>
        `
    });
    let totalAmount = localStorage.getItem('totalAmount');
    console.log(totalAmount);
    carts.innerHTML += `
            <tr>
                <td colspan="3">Tổng tiền</td>
                <td colspan="2">${totalAmount}</td>
            </tr>
    `
}