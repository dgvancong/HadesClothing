var list = JSON.parse(localStorage.getItem('cart'))

    function LoadData() {
        var str = "";
        var t = 0;
        for (var x of list) {
            t += x.price * x.quantity;
            str += `
                    <tr>
                        <td class="img-product"><img src="` + x.image + `"></td>
                        <td class="name-product">
                        <p>` + x.name + `</p>
                        <p><span class="event"> 4UK / Xanh Trắng </span></p>
                        </td>
                        <td class="end-pay"> ` + (x.price * x.quantity) + `₫</td>
                    </tr>
    `
        }
        document.getElementById('listCart').innerHTML = str
        var total = document.getElementsByClassName('spTong')
        for (i = 0; i < total.length; i++) {
            total[i].innerHTML = t +  '₫';
        }
    }
    localStorage.removeItem('cart');
LoadData();