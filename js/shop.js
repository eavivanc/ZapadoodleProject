$(document).ready(function(){
let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartNumber();

    /* cart sidebar */
    $(".iconbutton").on("click", function(){
        $("#cart-sidebar").addClass("open");
    })
    $(".x-icon").on("click", function(){
        $("#cart-sidebar").removeClass("open");
    })

    /* add to cart */
    $(".add-to-cart-button").on("click", function(){
        /* create item */
        const itemType = $(".marker-type").val();
        console.log("Selected type:", itemType);   
        const item = {
            "name": $(this).data("name"),
            "price": $(this).data("price"),
            "img": $(this).data("img"),
            "type": itemType,
            "qty": 1
        }
        /* add item to array */
        let itemExists = false;
        for (let i = 0; i < cart.length; i++ ){
            if (cart[i].name == item.name && cart[i].type == item.type){
                cart[i].qty += item.qty;
                itemExists = true;
                break;
            }
        }
        if(!itemExists) {
            cart.push(item);
        }
        /* convert back to string */
        localStorage.setItem('cart', JSON.stringify(cart));
        /* display new item */
        updateCartDisplay();
        updateCartNumber();
    });

    /* load cart */
    function updateCartDisplay(){
        /* empty cart */
        $(".cart-items").empty();
        /* if cart empty */
        if (cart.length === 0) {
            $(".cart-items").html("<p>Your cart is empty.</p>");
            $(".total").html("$0.00");
            return;
        }
        /* display items */
        for (let i = 0; i < cart.length; i++ ){
            let item = cart[i];
            let cartItem = `
                <div class="cart-item">
                    <img src="${item.img}" alt="Product Image" class="cart-item-image">
                    <div class="cart-item-desc">
                        <div>
                        <p class="cart-item-name">${item.name}</p>
                        <p class="cart-item-type">${item.type}</p>
                        </div>
                        <p class="remove-btn">Remove</p>
                    </div>
                    <div class="cart-item-attr">
                        <p class="cart-item-price">$${item.price}</p>
                        <div class="cart-qty-select">
                            <p class="minus-btn button" data-index="${i}">−</a>
                            <p class="cart-qty" data-index="${i}">${item.qty}</p>
                            <p class="plus-btn button" data-index="${i}">+</a>
                        </div>
                    </div>
                </div>
            `;
        $(".cart-items").append(cartItem);
        }
        /* display price */
        let total = 0
        for (let i = 0; i < cart.length; i++) {
            let itemTotal = cart[i].price * cart[i].qty;
            total += itemTotal;
        }
        total = "$"+total;
        $(".total").html(total);

        /* bind cart functionalities */
        $(".minus-btn").on("click", function(){
            let index = $(this).data("index");
            decrease(index);
        })
        $(".plus-btn").on("click", function(){
            let index = $(this).data("index");
            increase(index);
        })
        $(".remove-btn").on("click", function(){
            let index = $(this).data("index");
            remove(index);
        })
    }

    /* cart functionalities */
    const decrease = function (index){
        if (cart[index].qty > 1) {
            cart[index].qty--;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
            updateCartNumber();
        }
    }
    const increase = function(index){
        cart[index].qty++;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
        updateCartNumber();
    }
    const remove = function(index){
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
        updateCartNumber();
    }

    /* update cart number */
    function updateCartNumber(){
        let cartQty = 0;
        for (let i = 0; i < cart.length; i++ ){
            cartQty += cart[i].qty;
        }
        $(".cart-number").html(cartQty);
    };

    updateCartDisplay();

});

    /* clear cart after purchase */
    $('#checkout-btn').on('click', function () {
        localStorage.removeItem('cart');
    });