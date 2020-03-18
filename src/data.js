 const cars = {
  car1: {
    title: "2019 Chevrolet Malibu Hybrid - Ottawa",
    price: "$33,738",
    bigPic: "https://tdrvehicles2.azureedge.net/photos/chrome/Expanded/White/2019CHC230016/2019CHC23001601.jpg",
    pic1: "https://tdrpmimages.azureedge.net/photos/import/201908/1412/1212/06ae592a-501c-48a8-94cc-7c9c616f7bb1.jpg",
    pic2: "https://tdrpmimages.azureedge.net/photos/import/201908/1412/1212/c51394d3-529d-4412-b2fa-198ea1ce6263.jpg",
    pic3: "https://tdrpmimages.azureedge.net/photos/import/201908/1412/1212/2e0f7742-6efa-4282-b006-79d65792e61c.jpg",
    pic4: "https://tdrpmimages.azureedge.net/photos/import/201906/2018/0526/9dfd6eb5-516d-4499-98bf-c7edc77a8857.jpg"
  },
  car2: {
    title: "2020 Toyota Prius Prime - - Kingston",
    price: "$27,34",
    bigPic: "https://tdrvehicles2.azureedge.net/photos/chrome/Expanded/White/2020TOC320001/2020TOC32000101.jpg",
    pic1: "https://tdrpmimages.azureedge.net/photos/import/201912/1214/1135/16532e6e-fd07-46db-82a3-d12f32f0ec90.jpg",
    pic2: "https://tdrpmimages.azureedge.net/photos/import/201912/1214/1135/9f158350-83e5-45fa-b089-4f3efde9076e.jpg",
    pic3: "https://tdrpmimages.azureedge.net/photos/import/201912/1214/1135/1e748afc-a83f-48dd-a9a0-885128ef38c3.jpg",
    pic4: "https://tdrpmimages.azureedge.net/photos/import/201912/1214/1135/b7c88180-4bd1-42f0-8544-060077b86534.jpg"
  },
  car3: {
    title: "2019 Toyota RAV4",
    price: "$27,969",
    bigPic: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/mosaic_default_v2/public/media/image/2018/12/prueba-toyota-rav4-2019_10.jpg",
    pic1: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/855/public/media/image/2018/03/toyota-rav4-2019_8.jpg",
    pic2: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/855/public/media/image/2018/03/toyota-rav4-2019_5.jpg",
    pic3: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/855/public/media/image/2018/03/toyota-rav4-2019_7.jpg",
    pic4: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/855/public/media/image/2018/03/toyota-rav4-2019_6.jpg"
  },
  car4: {
    title: "2019 Ford Fusion Hybrid",
    price: "$30,145",
    bigPic: "https://tdrvehicles2.azureedge.net/photos/chrome/Expanded/White/2019FOC270001/2019FOC27000101.jpg",
    pic1: "https://tdrpmimages.azureedge.net/photos/import/201912/1913/2822/3172f688-8a09-4ab9-a8e8-f3a7a65e763c.jpg",
    pic2: "https://tdrpmimages.azureedge.net/photos/import/201912/1913/2822/730a03a2-39db-4706-859e-44dafe4e6f27.jpg",
    pic3: "https://tdrpmimages.azureedge.net/photos/import/201912/1913/2822/89b11d8d-fa58-4e38-96f6-7b5e7fa5f6a0.jpg",
    pic4: "https://tdrpmimages.azureedge.net/photos/import/201912/1913/2822/6a21729c-2ebf-4060-86c9-8e88cab7ea25.jpg"
  },
  car5: {
    title: "2019 Kia Soul EV",
    price: "$35,895",
    bigPic: "https://tdrvehicles2.azureedge.net/photos/chrome/Expanded/White/2019KIC170001/2019KIC17000101.jpg",
    pic1: "https://tdrpmimages.azureedge.net/photos/import/201912/1213/5827/726e0d6e-2ced-48dc-bd6d-b22cefb14c5e.jpg",
    pic2: "https://tdrpmimages.azureedge.net/photos/import/201912/1213/5827/3fedaa08-bacf-4b79-b696-86bc1b4a0b01.jpg",
    pic3: "https://tdrpmimages.azureedge.net/photos/import/201912/1213/5827/edce3254-78c7-4dfc-8418-a8e41a84777d.jpg",
    pic4: "https://tdrpmimages.azureedge.net/photos/import/201912/1213/5827/7984121b-e162-4dcb-b100-d2732a41ef1f.jpg"
  },
  car6: {
    title: "2020 Toyota RAV4",
    price: "$29,935",
    bigPic: "https://tdrvehicles2.azureedge.net/photos/chrome/Expanded/White/2020TOS200001/2020TOS20000101.jpg",
    pic1: "https://tdrpmimages.azureedge.net/photos/import/201912/0408/0305/e218f781-84dc-4c0f-abc4-d82d0aaf7bb9.jpg",
    pic2: "https://tdrpmimages.azureedge.net/photos/import/202001/1115/5655/66ecefcf-41a1-460f-9635-969feaef1461.jpg",
    pic3: "https://tdrpmimages.azureedge.net/photos/import/202001/1115/5655/1306d860-3b3c-4b6c-90bd-a432ca8ec5fa.jpg",
    pic4: "https://tdrpmimages.azureedge.net/photos/import/202001/1115/5655/71fefacc-48a5-4539-b233-a4442328999e.jpg"
  }
};

const specs = {
  car1: {
    col1: ["4-Cylinder engine", "Dual-zone climate ctrl", "Hybrid", "Power seats"],
    col2: ["Backup camera", "FWD", "Parking sensors"],
    col3: ["Climate contro", "Heated front seats","Power doors"]
  },
  car2: {
    col1: ["4-Cylinder engine", "FWD", "Hybrid", "Power doors"],
    col2: ["Backup camera", "Heated front seats"],
    col3: ["Climate control", "Hybrid"]
  },
  car3: {
    col1: ["4-Cylinder engine", "Climate control", "Heated rear seats", "Power doors", "Premium audio"],
    col2: ["AWD", "Dual-zone climate ctrl", "Hybrid", "Power liftgate", "Sunroof"],
    col3: ["Backup camera", "Heated front seats", "Parking sensors", "Power seats<"]
  },
  car4: {
    col1: ["4-Cylinder engine", "Dual-zone climate ctrl", "Hybrid", "Power seats"],
    col2: ["Backup camera", "FWD", "Parking sensors"],
    col3: ["Climate control", "Heated front seats", "Power doors"]
  },
  car5: {
    col1: ["Backup camera", "Power doors", "Sunroof", "Heated front seats"],
    col2: ["Climate control", "Heated rear seats", "Power seats"],
    col3: ["FWD", "Leather", "Premium audio"]
  },
  car6: {
    col1: ["4-Cylinder engine", "Climate control", "Hybrid", "Power seats"],
    col2: ["AWD", "Dual-zone climate ctrl", "Power doors", "Sunroof"],
    col3: ["Backup camera", "Heated front seats", "Power liftgate"]
  }
}

export { cars, specs };
