const products = [
  {
    id: 1,
    title: "Zapatilla Handball Spezial",
    price: 110,
    classification: "Originals",
    colours: 13,
    img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/82d433384c7c435f9a2fa96d0101d323_9366/Zapatilla_Handball_Spezial_Azul_BD7633_01_standard.jpg",
    toProduct: "https://www.adidas.es/zapatilla-handball-spezial/BD7633.html",
  },
  {
    id: 2,
    title: "Zapatilla Gazelle Indoor",
    price: 120,
    classification: "Originals",
    colours: 15,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/242d09cebfa44d02a829a89fa808b6cb_9366/Zapatilla_Gazelle_Indoor_Verde_JI2062_01_standard.jpg",
    toProduct: "https://www.adidas.es/zapatilla-gazelle-indoor/JI2062.html",
  },
  {
    id: 12,
    title: "Zapatilla Campus 00s",
    price: 120,
    classification: "Originals",
    colours: 15,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b0b6d4a107ad4e84b3baaf8700866f07_9366/Zapatilla_Campus_00s_Verde_H03472_01_standard.jpg",
    toProduct: "https://www.adidas.es/zapatilla-campus-00s/H03472.html",
  },
  {
    id: 3,
    title: "Zapatilla SL 72 RS",
    price: 100,
    classification: "Originals",
    colours: 3,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e7d955c4f1fa4f179a4e8308ea7ca8fc_9366/Zapatilla_SL_72_RS_Azul_IG2132_01_standard.jpg",
    toProduct: "https://www.adidas.es/zapatilla-sl-72-rs/IG2132.html",
  },
  {
    id: 4,
    title: "Zapatilla Adi2000",
    price: 130,
    classification: "Running",
    colours: 5,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c9f5e504459d45dbb6fa5ac3c5ab42f2_9366/Zapatilla_Adi2000_Marron_IF8820_01_standard.jpg",
    toProduct: "https://www.adidas.es/zapatilla-adi2000/IF8820.html",
  },
  {
    id: 5,
    title: "Zapatilla Ultrabounce",
    price: 90,
    classification: "Hombre Running",
    colours: 1,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f338d78c641d424b8aafaf37017909f8_9366/Zapatilla_Ultrabounce_Negro_HP5797_01_standard.jpg",
    toProduct: "https://www.adidas.es/zapatilla-ultrabounce/HP5797.html",
  },
  {
    id: 6,
    title: "Zapatilla Duramo SL 2.0",
    price: 42.25,
    classification: "Hombre Running",
    colours: 2,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/be32435581d84e4f87d1af2500ddaf23_9366/Zapatilla_Duramo_SL_2.0_Azul_HQ4129_01_standard.jpg",
    toProduct: "https://www.adidas.es/zapatilla-duramo-sl-2.0/HQ4129.html",
  },
  {
    id: 7,
    title: "Zapatilla Duramo SL 2.0",
    price: 52,
    classification: "Running",
    colours: 2,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6bf5632bf7b74320b80baf8f015db8e4_9366/Zapatilla_Duramo_SL_2.0_Azul_HP2383_01_standard.jpg",
    toProduct: "https://www.adidas.es/zapatilla-duramo-sl-2.0/HP2383.html",
  },
  {
    id: 8,
    title: "Zapatilla Samba OG",
    price: 120,
    classification: "Originals",
    colours: 15,
    img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c70105150234ac4b948a8bf01187e0c_9366/Zapatilla_Samba_OG_Negro_B75807_01_standard.jpg",
    toProduct: "https://www.adidas.es/zapatilla-samba-og/B75807.html",
  },
  {
    id: 9,
    title: "Zapatilla Handball Spezial",
    price: 110,
    classification: "Originals",
    colours: 3,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/237264d18bb14f108f80e83ba4644ffb_9366/Zapatilla_Handball_Spezial_Gris_IF7086_01_standard.jpg",
    toProduct: "https://www.adidas.es/zapatilla-handball-spezial/IF7086.html",
  },
  {
    id: 10,
    title: "Zapatilla Astir",
    price: 100,
    classification: "Originals",
    colours: 8,
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4fcbc33475064447a4a82cc765172882_9366/Zapatilla_Astir_Blanco_IE9887_01_standard.jpg",
    toProduct: "https://www.adidas.es/zapatilla-astir/IE9887.html",
  },
  {
    id: 11,
    title: "Zapatilla Forum Bold Stripes",
    price: 120,
    classification: "Originals",
    colours: 5,
    img: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c07d7d23c8a44aa8a82af560127c124_9366/Zapatilla_Forum_Bold_Stripes_Blanco_ID6843_01_standard.jpg",
    toProduct: "https://www.adidas.es/zapatilla-forum-bold-stripes/ID6843.html",
  },
];

const filterProducts = () => {
  
}

const renderProducts = (productsArray) => {
  const productList = document.createElement("ul");

  productsArray.map((product) => {
    const listItem = document.createElement("li");
    const anchor = document.createElement("a");
    const img = document.createElement("img");
    const price = document.createElement("h4");
    const titleProduct = document.createElement("p");
    const category = document.createElement("p");
    const colours = document.createElement("p");

    listItem.accessKey = product.id;
    anchor.href = product.toProduct;
    img.src = product.img;
    price.textContent = `€ ${product.price}`;
    titleProduct.textContent = product.title;
    category.textContent = product.classification;
    colours.textContent = `${product.colours} colores`;

    category.className = "text-grease";
    colours.className = "text-grease";

    productList.appendChild(listItem);
    listItem.appendChild(anchor);
    anchor.appendChild(img);
    anchor.appendChild(price);
    anchor.appendChild(titleProduct);
    anchor.appendChild(category);
    anchor.appendChild(colours);
  });

  const productsWrapper = document.querySelector("#products");
  productsWrapper.appendChild(productList);
};

renderProducts(products);
