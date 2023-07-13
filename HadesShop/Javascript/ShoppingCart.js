var listItem = JSON.parse(localStorage.getItem('cart'));

function LoadData() {
    var str = "";
    var t = 0;
    for (var x of listItem) {
        t += x.price * x.quantity;
        str += `
        <tr>
            <td class="img">
                <div class="product-img">
                <img src="${x.image}" alt="" style="width:130px">
                </div>
            </td>
            <td class="item">
                <h3> <a href="/Html/Product interface.html">${x.name}</a></h3>
                <p><span class="pri"> ${x.price} </span></p>
                <p><span class="event"> ${x.size} </span></p>
                <div class="ds-click">
                    <button class=" min ds-btn" onclick="Giam(` + Number(x.id) + `)">-</button>
                    <input id = "q_` + Number(x.id) + `" type="text"  onchange="updateQuantity(` + x.id + `)" value="` + x.quantity + `" class="ds-input">
                    <button class=" plus ds-btn" onclick="Tang(` + Number(x.id) + `)">+</button>
                </div>
                <p class="end-pay">` + (x.price * x.quantity) + `₫</p>
            </td>
            <td class="remove"><a class="cart" onclick="Xoa(` + Number(x.id) + `)">
            <img src="Album/Slide/baseline_clear_black_24dp.png"></a>
            </td>
        </tr>
        `
    }
    document.getElementById('listCart').innerHTML = str
    var total = document.getElementsByClassName('spTong')
        for (i = 0; i < total.length; i++) {
            total[i].innerHTML = t +  '₫';
        }
}

function xoaCart() {
    if (confirm("Bạn muốn xóa tất cả sản phẩm khỏi giỏ hàng!")) {
        localStorage.removeItem('cart')
        location.reload();
    }
}

function Xoa(id) {
    if (confirm("Bạn muốn xóa sản phẩm này khỏi giỏ hàng!")) {
        var index = listItem.findIndex(x => x.id == id);
        if (index >= 0) {
            listItem.splice(index, 1);
        }
        LoadData();
    }
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(listItem));
    alert("Đã cập nhật thông tin giỏ hàng thành công!");
}

function Tang(id) {
    var index = listItem.findIndex(x => x.id == id);
    if (index >= 0) {
        listItem[index].quantity += 1;
    }
    LoadData();
}

function Giam(id) {
    var index = listItem.findIndex(x => x.id == id);
    if (index >= 0 && listItem[index].quantity >= 1) {
        listItem[index].quantity -= 1;
    }
    LoadData();
}

function updateQuantity(id) {
    var quantity = Number($('#q_' + id).val());
    var index = listItem.findIndex(x => x.id == id);
    if (index >= 0 && listItem[index].quantity >= 1) {
        listItem[index].quantity = quantity;
    }
    LoadData();
}

LoadData();