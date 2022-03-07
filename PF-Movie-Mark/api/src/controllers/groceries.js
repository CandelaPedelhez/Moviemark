// let groceries = [
//     {
//         id: 1,
//         name: 'popcorn',
//         price: 5.2,
//         stock: 10,
//         img: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
//     },
//     {
//         id: 2,
//         name: 'soda',
//         price: 6.2,
//         stock: 20,
//         img: "https://media.istockphoto.com/photos/cola-splash-on-red-background-picture-id177009876?b=1&k=20&m=177009876&s=170667a&w=0&h=RxQPLwqd9DzLVPvCRL2pnlFeDhjfurYYpSc47TQ6KyQ="
//     },
//     {
//         id: 3,
//         name: 'chocolate',
//         price: 2.2,
//         stock: 30,
//         img: "https://images.unsplash.com/photo-1579440676594-3fef6d6ef538?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvY29sYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//     },
//     {
//         id: 4,
//         name: 'candies',
//         price: 1,
//         stock: 50,
//         img: "https://images.unsplash.com/photo-1601493701002-3223e7e1ebaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FuZGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
//     },
// ]

// module.exports = {
//     groceries
// };

let groceries = [
    {
        id:   1,
        name: "Hot-dog Combo",
        img: "https://static.freddysusa.com/wp-content/uploads/2016/03/FRE0582-Combo-Lockup_2_V2.png",
        price: 450,
        description: "1 Hot-dog + 1 large soda",
        type: "combo"
    },
    {
        id: 2,
        name: "Nachos Combo",
        img: "https://static.freddysusa.com/wp-content/uploads/2016/03/FRE0582-Combo-Lockup_2_V2.png",
        price: 590,
        description: "Nachos with cheese + 1 large soda",
        type: "combo"
    },
    {
        id: 3,
        name: "Mega Combo - for 2",
        img: "https://images-na.ssl-images-amazon.com/images/I/519sHWblkqL._SX300_SY300_QL70_FMwebp_.jpg",
        price: 1100,
        description: "1 popcorn bucket + 2 large sodas + 1 candy",
        type: "combo"
    },
    {
        id: 4,
        name: "Mega Combo - for 1",
        img: "https://fox5theatre.com/wp-content/uploads/2020/03/PopcornCombo.jpg",
        price: 760,
        description: "1 popcorn bucket + 1 large soda",
        type: "combo"
    },
    {
        id: 5,
        name: "Family Combo",
        img: "https://pbs.twimg.com/media/Dq8yMgrXgAAdALk?format=jpg&name=medium",
        price: 1450,
        description: "3 popcorn medium bags + 4 sodas + 2 candies",
        type: "combo"
    },
    {
        id: 6,
        name: "Premium Combo",
        img: "https://pbs.twimg.com/media/DeC0ZYwU8AABc7a?format=jpg&name=large",
        price: 2200,
        description: "1 limited edition popcorn bucket + 1 large soda",
        type: "combo"
    },
    {
        id: 7,
        name: "Medium bag",
        img: "https://images-na.ssl-images-amazon.com/images/I/91HX9klF2zL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        price: 350,
        description: "Medium bag full of popcorn",
        type: "popcorn"
    },
    {
        id: 8,
        name: "Bucket",
        img: "https://st4.depositphotos.com/1006753/22078/i/1600/depositphotos_220783540-stock-photo-full-popcorn-bucket.jpg",
        price: 500,
        description: "Large bucket full of popcorn",
        type: "popcorn"
    },
    {
        id: 9,
        name: "Large soda",
        img: "https://www.abajournal.com/images/main_images/soda_cola_straw600px.png",
        price: 400,
        description: "Large soda of your choice",
        type: "drinks"
    },
    {
        id: 10,
        name: "Flavored water",
        img: "https://craftwater.co/wp-content/uploads/2020/03/waterfix-flavored-water.jpg",
        price: 260,
        description: "Flavored water of your choice",
        type: "drinks"
    },
    {
        id: 11,
        name: "Water",
        img: "https://www.nestlepurezavital.com.ar/sites/g/files/xknfdk566/files/product-16-9-oz.png",
        price: 230,
        description: "Bottle of water",
        type: "drinks"
    },
    {
        id: 12,
        name: "Nachos with cheese",
        img: "https://www.mashed.com/img/gallery/mistakes-everyone-makes-when-making-nacho-cheese/intro-1544049574.jpg",
        price: 460,
        description: "Nachos with hot cheddar",
        type: "snacks"
    },
    {
        id: 13,
        name: "Hot-dog",
        img: "https://www.wikihow.com/images/thumb/0/09/Boil-a-Hot-Dog-Step-13-Version-3.jpg/v4-728px-Boil-a-Hot-Dog-Step-13-Version-3.jpg.webp",
        price: 300,
        description: "1 Hot-dog with 2 toppings of your choice",
        type: "snacks"
    },
    {
        id: 14,
        name: "Large coffe + cookie",
        img: "https://scontent.frcu3-1.fna.fbcdn.net/v/t1.6435-9/60746467_2461096390568713_3225676342313877504_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=98vyoqDuGcsAX8JpFrg&_nc_ht=scontent.frcu3-1.fna&oh=00_AT__wxevpcy2Cmj9TdPgeIqbkD9no_6YqtBE8-Zd8UZ4gqw&oe=6245D039",
        price: 620,
        description: " 1 large coffe and 1 cookie of your choice",
        type: "coffeshop"
    },
    {
        id: 15,
        name: "Large coffe",
        img: "https://media.tegna-media.com/assets/WPMT/images/b23fd704-2a88-453c-b7fd-082c33c901cc/b23fd704-2a88-453c-b7fd-082c33c901cc_1140x641.jpeg",
        price: 450,
        description: "1 large coffe",
        type: "coffeshop"
    },
    {
        id: 16,
        name: "Medium coffe + cookie",
        img: "https://thumbs.dreamstime.com/z/chocolate-chip-cookies-homemade-baking-round-shape-medium-size-white-wooden-background-copy-space-180708831.jpg",
        price: 450,
        description: " 1 medium coffe and 1 cookie of your choice",
        type: "coffeshop"
    },
    {
        id: 17,
        name: "Medium coffe",
        img: "https://s3.envato.com/files/191431313/04_Paper-Coffee-Cup-Medium-Mock-Up.jpg",
        price: 280,
        description: " 1 medium coffe",
        type: "coffeshop"
    },
    {
        id: 18,
        name: "Large Rocklets",
        img: "https://7483c243aa9da28f329c-903e05bc00667eb97d832a11f670edad.ssl.cf1.rackcdn.com/20253852_1-qDmHWtQT-large.jpg",
        price: 640,
        description: " 1 Rocklets",
        type: "sweets"
    },
    {
        id: 19,
        name: "Small chocolate",
        img: "https://sweetalk.co.za/wp-content/uploads/2020/04/thanks-for-your-supportl_small-chocolate-bar_sweetalk.jpg",
        price: 330,
        description: "1 small chocolate of your choice",
        type: "sweets"
    },
    {
        id: 20,
        name: "Gummies",
        img: "https://images-na.ssl-images-amazon.com/images/I/51YW0tX7xBL._SX300_SY300_QL70_FMwebp_.jpg",
        price: 350,
        description: " 1 gab of gummies",
        type: "sweets"
    },
    {
        id: 21,
        name: "Sugus",
        img: "https://www.camoga.ar/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/5/0/50010004_caramelos_masticables_sugus_x700_grs_1.jpg",
        price: 190,
        description: " 1 box of candied sugus",
        type: "sweets"
    },
    {
        id: 22,
        name: "Chewing Gum",
        img: "https://target.scene7.com/is/image/Target/GUEST_d54a04a3-7c5d-4ac5-bae0-8f2d42a70e82?wid=800&hei=800&qlt=80&fmt=pjpeg",
        price: 80,
        description: " 1 gum of your choice",
        type: "sweets"
    }
]

module.exports = {groceries};