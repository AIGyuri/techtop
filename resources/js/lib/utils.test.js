import {
    addProductToLocalStorage,
    getCartFromLocalStorage,
    removeProductFromLocalStorage,
} from "./utils";


const cart = {
    id: 29,
    name: "Lenovo IdeaPad 1 15IJL7 laptop",
    description:
        'Intel® Pentium® Silver N6000, 3.3 GHz, 15.6" Full HD, 4GB, 128GB eMMC, Intel® UHD Graphics, Windows® 11 Home in S mode, Nemzetközi angol billentyűzet, Cloud Grey',
    price: 132990,
    image: "img/lenovo2.png",
    stock_quantity: 15,
    brand_id: 3,
    created_at: "2023-08-01 10:00:00",
    brand: {
        id: 3,
        name: "Lenovo",
        description:
            "A Lenovo Group Limited kínai vállalat, a világ vezető személyi számítógép gyártója. Az eladott darabszámokat illetően a 2012-es évben maga mögé utasította a korábbi világelső Hewlett-Packardot.",
    },
};

test("utils function test", () => {
    localStorage.clear(); // Törli az esetleges korábbi értékeket

    addProductToLocalStorage(cart);
    expect(JSON.parse(localStorage.getItem("cart"))).toStrictEqual([
        { ...cart, quantity: 1 },
    ]);

    addProductToLocalStorage(cart);
    expect(JSON.parse(localStorage.getItem("cart"))).toStrictEqual([
        { ...cart, quantity: 2 },
    ]);

    expect(getCartFromLocalStorage()).toStrictEqual([{ ...cart, quantity: 2 }]);

    removeProductFromLocalStorage(cart.id);
    expect(JSON.parse(localStorage.getItem("cart"))).toStrictEqual([]);
});
