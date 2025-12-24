export const menuSections = {
  left: [
    {
      title: "Mëngjesi / Breakfast / Kahvaltı",
      items: [
        { nameSq: "Paçe", nameEn: "Traditional Head Stew", nameTr: "Paça Çorbası", searchTags: "paçe head stew paça", price: 250 },
        { nameSq: "Tasqebap", nameEn: "Veal Stew", nameTr: "Tas Kebabı", searchTags: "tasqebap veal stew tas kebabı", price: 350 },
        { nameSq: "Pilaf", nameEn: "Rice Pilaf", nameTr: "Pilav", searchTags: "pilaf rice pilav", price: 120 },
        { nameSq: "Kos", nameEn: "Yogurt", nameTr: "Yoğurt", searchTags: "kos yogurt yoğurt", price: 70 },
        { nameSq: "Dy veze sy (me garniturë)", nameEn: "Two Fried Eggs (with garnish)", nameTr: "Sahanda Yumurta (garnitürlü)", searchTags: "dy veze sy fried eggs yumurta", price: 200 },
        { nameSq: "Omletë e thjeshtë", nameEn: "Simple Omelette", nameTr: "Sade Omlet", searchTags: "omlete omelette omlet", price: 250 },
      ]
    },
    {
      title: "Makaronat / Pasta / Makarna",
      items: [
        { nameSq: "Makarona me gjalp", nameEn: "Pasta with Butter", nameTr: "Tereyağlı Makarna", searchTags: "makarona butter tereyağlı", price: 200 },
        { nameSq: "Makarona me salce", nameEn: "Pasta with Tomato Sauce", nameTr: "Domates Soslu Makarna", searchTags: "makarona salce tomato soslu", price: 250 },
        { nameSq: "Makarona Aglio e Olio", nameEn: "Pasta with Garlic & Oil", nameTr: "Sarımsaklı ve Zeytinyağlı Makarna", searchTags: "aglio olio garlic sarimsak", price: 250 },
        { nameSq: "Makarona Arabiata", nameEn: "Spicy Tomato Pasta", nameTr: "Acılı Domatesli Makarna", searchTags: "arabiata spicy acili", price: 300 },
        { nameSq: "Makarona panna proshute", nameEn: "Pasta with Cream & Ham", nameTr: "Kremalı ve Jambonlu Makarna", searchTags: "panna proshute ham jambon", price: 350 },
        { nameSq: "Makarona panna kerpudhe", nameEn: "Pasta with Cream & Mushrooms", nameTr: "Kremalı ve Mantarlı Makarna", searchTags: "panna kerpudhe mushrooms mantar", price: 350 },
        { nameSq: "Makarona me kima", nameEn: "Pasta Bolognese", nameTr: "Kıymalı Makarna (Bolonez)", searchTags: "kima bolognese kiymali", price: 350 },
        { nameSq: "Makarona me perime", nameEn: "Vegetable Pasta", nameTr: "Sebzeli Makarna", searchTags: "perime vegetable sebzeli", price: 350 },
        { nameSq: "Makarona me spinaq dhe panna", nameEn: "Pasta with Spinach & Cream", nameTr: "Ispanaklı ve Kremalı Makarna", searchTags: "spinaq spinach ispanak", price: 350 },
        { nameSq: "Makarona me brokoli dhe panna", nameEn: "Pasta with Broccoli & Cream", nameTr: "Brokoli ve Kremalı Makarna", searchTags: "brokoli broccoli", price: 350 },
        { nameSq: "Makarona me fileto pule spec i kuq", nameEn: "Pasta Chicken & Red Pepper", nameTr: "Tavuklu ve Kırmızı Biberli Makarna", searchTags: "fileto pule spec chicken tavuk", price: 400 },
        { nameSq: "Makarona kater djatherat", nameEn: "Four Cheese Pasta", nameTr: "Dört Peynirli Makarna", searchTags: "kater 4 djatherat cheese peynir", price: 400 },
        { nameSq: "Makarona me karkalec e spinaq", nameEn: "Pasta Shrimp & Spinach", nameTr: "Karidesli ve Ispanaklı Makarna", searchTags: "karkalec shrimp karides", price: 400 },
      ]
    },
    {
      title: "Supat / Soups / Çorbalar",
      items: [
        { nameSq: "Supe perime", nameEn: "Vegetable Soup", nameTr: "Sebze Çorbası", searchTags: "supe perime vegetable sebze", price: 200 },
        { nameSq: "Supe pule", nameEn: "Chicken Soup", nameTr: "Tavuk Çorbası", searchTags: "supe pule chicken tavuk", price: 200 },
        { nameSq: "Supe krem domate", nameEn: "Cream of Tomato Soup", nameTr: "Domates Çorbası", searchTags: "supe krem domate tomato domates", price: 250 },
      ]
    },
    {
      title: "Mezera / Appetizers / Mezeler",
      items: [
        {
          nameSq: "Djath i bardhe (Lope / Dele)",
          nameEn: "White Cheese (Cow / Sheep)",
          nameTr: "Beyaz Peynir (İnek / Koyun)",
          searchTags: "djath cheese peynir",
          variants: [
            { label: "Cow/İnek", price: 200, variantSq: "Lope", variantEn: "Cow", variantTr: "İnek" },
            { label: "Sheep/Koyun", price: 250, variantSq: "Dele", variantEn: "Sheep", variantTr: "Koyun" }
          ]
        },
        { nameSq: "Djath kackavall dele (zgare)", nameEn: "Grilled Sheep Kashkaval", nameTr: "Izgara Koyun Kaşarı", searchTags: "kackavall grilled izgara", price: 250 },
        { nameSq: "Salce kosi", nameEn: "Yogurt Dip", nameTr: "Süzme Yoğurt", searchTags: "salce kosi yogurt dip süzme", price: 50 },
        { nameSq: "Patate te skuqura", nameEn: "French Fries", nameTr: "Patates Kızartması", searchTags: "patate fries kizartmasi", price: 50 },
        { nameSq: "Patate furre", nameEn: "Oven Potatoes", nameTr: "Fırın Patates", searchTags: "patate furre oven firin", price: 150 },
        { nameSq: "Tave dheu mish vici", nameEn: "Tave Dheu (Veal & Cheese)", nameTr: "Güveçte Dana Eti (Tave Dheu)", searchTags: "tave dheu veal güveç", price: 500 },
      ]
    }
  ],
  right: [
    {
      title: "Mishrat / Meat / Et Yemekleri",
      items: [
        {
          nameSq: "Qofte shtepie (6 cope)",
          nameEn: "Homemade Meatballs (6 pcs)",
          nameTr: "Ev Köftesi (6 adet)",
          searchTags: "qofte meatballs kofte",
          variants: [
            { label: "Small", price: 400, variantSq: "Small", variantEn: "Small", variantTr: "Küçük" },
            { label: "Reg", price: 600, variantSq: "Reg", variantEn: "Reg", variantTr: "Normal" }
          ]
        },
        { nameSq: "Fileto pule", nameEn: "Chicken Fillet", nameTr: "Tavuk Fileto", searchTags: "fileto pule chicken tavuk", price: 700 },
        { nameSq: "Paidhaqe vici", nameEn: "Veal Ribs", nameTr: "Dana Kaburga", searchTags: "paidhaqe ribs kaburga", price: 1000 },
        { nameSq: "Berxolle vici", nameEn: "Veal Steak", nameTr: "Dana Pirzola", searchTags: "berxolle steak pirzola", price: 1100 },
        { nameSq: "Biftek vici", nameEn: "Veal Beefsteak", nameTr: "Dana Biftek", searchTags: "biftek beefsteak biftek", price: 1000 },
        { nameSq: "Mix te brendshme vici", nameEn: "Mixed Veal Innards", nameTr: "Karışık Dana Sakatat", searchTags: "mix innards sakatat", price: 1000 },
        { nameSq: "Berxolle gici", nameEn: "Pork Chop", nameTr: "Domuz Pirzola", searchTags: "berxolle gici pork domuz", price: 800 },
        { nameSq: "Gici i furres", nameEn: "Oven Roasted Pork", nameTr: "Fırın Domuz Eti", searchTags: "gici roasted firin", price: 800 },
      ]
    },
    {
      title: "Sallatat / Salads / Salatalar",
      items: [
        {
          nameSq: "Sallate Greke",
          nameEn: "Greek Salad",
          nameTr: "Yunan Salatası",
          searchTags: "sallate greke greek yunan",
          variants: [
            { label: "1p", price: 200, variantSq: "1p", variantEn: "1p", variantTr: "1p" },
            { label: "2p", price: 300, variantSq: "2p", variantEn: "2p", variantTr: "2p" }
          ]
        },
        {
          nameSq: "Sallate Turshi",
          nameEn: "Pickled Salad",
          nameTr: "Turşu Tabağı",
          searchTags: "turshi pickled tursu",
          variants: [
            { label: "1p", price: 150, variantSq: "1p", variantEn: "1p", variantTr: "1p" },
            { label: "2p", price: 250, variantSq: "2p", variantEn: "2p", variantTr: "2p" }
          ]
        },
        {
          nameSq: "Sallate me fileto pule",
          nameEn: "Chicken Fillet Salad",
          nameTr: "Tavuklu Salata",
          searchTags: "sallate pule chicken tavuk",
          variants: [
            { label: "1p", price: 350, variantSq: "1p", variantEn: "1p", variantTr: "1p" },
            { label: "2p", price: 450, variantSq: "2p", variantEn: "2p", variantTr: "2p" }
          ]
        },
        {
          nameSq: "Rukola Parmixhan",
          nameEn: "Arugula & Parmesan",
          nameTr: "Roka ve Parmesan Salatası",
          searchTags: "rukola arugula roka",
          variants: [
            { label: "1p", price: 250, variantSq: "1p", variantEn: "1p", variantTr: "1p" },
            { label: "2p", price: 350, variantSq: "2p", variantEn: "2p", variantTr: "2p" }
          ]
        },
        {
          nameSq: "Mocarella me domate",
          nameEn: "Caprese (Mozzarella & Tomato)",
          nameTr: "Domatesli Mozzarella",
          searchTags: "mocarella mozzarella caprese",
          variants: [
            { label: "1p", price: 250, variantSq: "1p", variantEn: "1p", variantTr: "1p" },
            { label: "2p", price: 350, variantSq: "2p", variantEn: "2p", variantTr: "2p" }
          ]
        },
        {
          nameSq: "Sallate me perime",
          nameEn: "Vegetable Salad",
          nameTr: "Sebze Salatası",
          searchTags: "perime vegetable sebze",
          variants: [
            { label: "1p", price: 250, variantSq: "1p", variantEn: "1p", variantTr: "1p" },
            { label: "2p", price: 400, variantSq: "2p", variantEn: "2p", variantTr: "2p" }
          ]
        },
      ]
    },
    {
      title: "Pijet / Drinks / İçecekler",
      items: [
        {
          nameSq: "Uje / Dhalle",
          nameEn: "Water / Buttermilk",
          nameTr: "Su / Ayran",
          searchTags: "uje dhalle water buttermilk su ayran",
          variants: [
            { label: "Water/Su", price: 80, variantSq: "Uje", variantEn: "Water", variantTr: "Su" },
            { label: "Ayran", price: 100, variantSq: "Dhalle", variantEn: "Buttermilk", variantTr: "Ayran" }
          ]
        },
        { nameSq: "Pije freskuese", nameEn: "Soft Drinks", nameTr: "Meşrubatlar", searchTags: "pije soft drinks mesrubat", price: 150 },
        {
          nameSq: "Birra Korca (0.33 / 0.5)",
          nameEn: "Korca Beer",
          nameTr: "Korça Birası",
          searchTags: "birra beer bira korca",
          variants: [
            { label: "0.33", price: 200, variantSq: "0.33", variantEn: "0.33", variantTr: "0.33" },
            { label: "0.5", price: 250, variantSq: "0.5", variantEn: "0.5", variantTr: "0.5" }
          ]
        },
      ]
    }
  ]
};

export const dailyMenuItems = {
  left: [
    { nameSq: "2 Qofte me salce & patate furre", nameEn: "2 Meatballs w/ Sauce & Potatoes", nameTr: "Soslu Köfte (2 adet) ve Fırın Patates", searchTags: "qofte meatballs kofte", price: 300 },
    { nameSq: "Thjereza", nameEn: "Lentil Stew", nameTr: "Mercimek Yemeği", searchTags: "thjereza lentil mercimek", price: 200 },
    { nameSq: "Pastico", nameEn: "Pastitsio", nameTr: "Fırın Makarna (Beşamel Soslu)", searchTags: "pastico pastitsio firin makarna", price: 200 },
    { nameSq: "Speca te mbushur", nameEn: "Stuffed Peppers", nameTr: "Biber Dolması", searchTags: "speca peppers dolma", price: 400 },
    { nameSq: "Tave kosi mish vici", nameEn: "Yogurt Casserole w/ Veal", nameTr: "Dana Etli Yoğurtlu Güveç", searchTags: "tave kosi yogurt veal dana", price: 400 },
    { nameSq: "Tave spinaqi", nameEn: "Spinach Casserole", nameTr: "Ispanak Güveci", searchTags: "tave spinaqi spinach casserole ispanak", price: 350 },
    { nameSq: "Tave me fileto pule", nameEn: "Chicken Fillet Casserole", nameTr: "Tavuk Fileto Güveci", searchTags: "tave pule chicken casserole tavuk", price: 350 },
    { nameSq: "Tarator", nameEn: "Cold Yogurt Soup", nameTr: "Soğuk Yoğurt Çorbası", searchTags: "tarator yogurt soup cacik", price: 100 },
    { nameSq: "Sallate laker", nameEn: "Cabbage Salad", nameTr: "Lahana Salatası", searchTags: "sallate laker cabbage lahana", price: 150 },
    { nameSq: "Sallate turshi", nameEn: "Pickled Vegetable Salad", nameTr: "Turşu Salatası", searchTags: "sallate turshi pickled tursu", price: 150 },
    { nameSq: "Sallate panxhari", nameEn: "Beetroot Salad", nameTr: "Pancar Salatası", searchTags: "sallate panxhari beetroot pancar", price: 150 },
    { nameSq: "Mozzarela me domate", nameEn: "Mozzarella w/ Tomato", nameTr: "Domatesli Mozzarella", searchTags: "mozzarela mozzarella domate tomato", price: 350 },
    { nameSq: "Rukola parmixhan", nameEn: "Arugula Parmesan Salad", nameTr: "Roka Parmesan Salatası", searchTags: "rukola arugula roka parmesan", price: 350 },
    {
      nameSq: "Mish Jani (Pa mish / Me mish)",
      nameEn: "Jahni Stew (Veg / Meat)",
      nameTr: "Yahni (Etsiz / Etli)",
      searchTags: "mish jani stew yahni",
      variants: [
        { label: "Veg/Etsiz", price: 150, variantSq: "Pa mish", variantEn: "Veg", variantTr: "Etsiz" },
        { label: "Meat/Etli", price: 300, variantSq: "Me mish", variantEn: "Meat", variantTr: "Etli" }
      ]
    },
    {
      nameSq: "Gjelle me patate (Pa / Me mish)",
      nameEn: "Potato Stew (Veg / Meat)",
      nameTr: "Patates Yemeği (Etsiz / Etli)",
      searchTags: "gjelle patate potato patates",
      variants: [
        { label: "Veg/Etsiz", price: 200, variantSq: "Pa mish", variantEn: "Veg", variantTr: "Etsiz" },
        { label: "Meat/Etli", price: 350, variantSq: "Me mish", variantEn: "Meat", variantTr: "Etli" }
      ]
    },
  ],
  right: [
    {
      nameSq: "Fasule (Pa mish / Me mish)",
      nameEn: "Beans (Veg / Meat)",
      nameTr: "Kuru Fasulye (Etsiz / Etli)",
      searchTags: "fasule beans kuru fasulye",
      variants: [
        { label: "Veg/Etsiz", price: 150, variantSq: "Pa mish", variantEn: "Veg", variantTr: "Etsiz" },
        { label: "Meat/Etli", price: 300, variantSq: "Me mish", variantEn: "Meat", variantTr: "Etli" }
      ]
    },
    {
      nameSq: "Bizele (Pa mish / Me mish)",
      nameEn: "Peas (Veg / Meat)",
      nameTr: "Bezelye (Etsiz / Etli)",
      searchTags: "bizele peas bezelye",
      variants: [
        { label: "Veg/Etsiz", price: 200, variantSq: "Pa mish", variantEn: "Veg", variantTr: "Etsiz" },
        { label: "Meat/Etli", price: 350, variantSq: "Me mish", variantEn: "Meat", variantTr: "Etli" }
      ]
    },
    {
      nameSq: "Mashurka (Pa mish / Me mish)",
      nameEn: "Green Beans (Veg / Meat)",
      nameTr: "Taze Fasulye (Etsiz / Etli)",
      searchTags: "mashurka green beans taze fasulye",
      variants: [
        { label: "Veg/Etsiz", price: 200, variantSq: "Pa mish", variantEn: "Veg", variantTr: "Etsiz" },
        { label: "Meat/Etli", price: 350, variantSq: "Me mish", variantEn: "Meat", variantTr: "Etli" }
      ]
    },
    { nameSq: "Penne 4 djatherat", nameEn: "Penne 4 Cheeses", nameTr: "Penne 4 Peynirli", searchTags: "penne 4 cheese peynir", price: 350 },
    { nameSq: "Penne fileto pule spec i kuq", nameEn: "Penne Chicken Red Pepper", nameTr: "Penne Tavuk Kırmızı Biber", searchTags: "penne pule chicken tavuk", price: 400 },
    { nameSq: "Linguine me karkalec e spinaq", nameEn: "Linguine Shrimp Spinach", nameTr: "Linguine Karides Ispanak", searchTags: "linguine shrimp karides", price: 400 },
    { nameSq: "Spageti leng mishi", nameEn: "Spaghetti Meat Sauce", nameTr: "Et Soslu Spagetti", searchTags: "spageti spaghetti", price: 200 },
    { nameSq: "Berxolle vici me patate furre", nameEn: "Veal Chop w/ Oven Potatoes", nameTr: "Fırın Patatesli Dana Pirzola", searchTags: "berxolle vici veal pirzola", price: 700 },
    { nameSq: "Berxolle gici me patate furre", nameEn: "Pork Chop w/ Oven Potatoes", nameTr: "Fırın Patatesli Domuz Pirzola", searchTags: "berxolle gici pork pirzola", price: 550 },
    { nameSq: "Biftek vici me pure", nameEn: "Veal Steak w/ Puree", nameTr: "Püreli Dana Biftek", searchTags: "biftek steak biftek", price: 650 },
    { nameSq: "Mix te brendshme me pilaf", nameEn: "Mixed Innards w/ Pilaf", nameTr: "Pilavlı Karışık Sakatat", searchTags: "mix innards sakatat", price: 650 },
    { nameSq: "Fileto pule me pilaf", nameEn: "Chicken Fillet w/ Pilaf", nameTr: "Pilavlı Tavuk Fileto", searchTags: "fileto pule chicken tavuk", price: 550 },
    { nameSq: "Paidhage vici me pilaf", nameEn: "Veal Ribs w/ Pilaf", nameTr: "Pilavlı Dana Kaburga", searchTags: "paidhage ribs kaburga", price: 650 },
    { nameSq: "Fileto gici me pilaf", nameEn: "Pork Fillet w/ Pilaf", nameTr: "Pilavlı Domuz Fileto", searchTags: "fileto gici pork domuz", price: 550 },
    { nameSq: "Gic furre me pure", nameEn: "Oven Pork w/ Puree", nameTr: "Püreli Fırın Domuz", searchTags: "gic furre pork domuz", price: 550 },
    { nameSq: "Mëlçi me patate", nameEn: "Liver w/ Potatoes", nameTr: "Ciğer ve Patates", searchTags: "melci ciger liver patate potatoes patates", price: 650 },
  ]
};
