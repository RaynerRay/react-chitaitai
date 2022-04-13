const sliderItems = [
    {
        id: 1,
        img: "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-9/170464170_2219696474829355_1897019901688734630_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=VjICF5i1rLwAX9kALME&_nc_ht=scontent-jnb1-1.xx&oh=00_AT8dh2RsQ1VU7zkN5n8-cvaUl2EpYWpRi4HlF3tsFjzyvw&oe=626E8BD8",
        title: "FLOORCARE",
        desc: "Keep your floors pristine and presentable, with Chitaitai floorcare",
        bg: "f5fafd"
    },
    {
        id: 2,
        img: "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-9/164637472_2207653002700369_3856991804560336308_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ljNF0M2s8CsAX-BDOIB&_nc_ht=scontent-jnb1-1.xx&oh=00_AT9n0fJOJot-eaLSz2ALRUeTt2qF_9rav3WKdBEGklf71Q&oe=62707351",
        title: "SHOECARE",
        desc: "Enjoy the polish like never before with CHITAITAI shoe care. It's time to dress up your shoe",
        bg: "fcf1ed"
    },
    {
        id: 3,
        img: "https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-9/122175352_2067771366688534_9172279349383549441_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=a-hZXNabmiQAX-eqLMI&_nc_ht=scontent-jnb1-1.xx&oh=00_AT8J210pOeQ-4One9IcyQcCCHuaK1j_Uyu5xmtd06Y6NSw&oe=62721065",
        title: "MULTI PURPOSE CLEANER",
        desc: "Give your old bathroom a new exquisite look",
        bg: "f1fdcd"
    }
]

const categories = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        title: "SHIRT STYLE",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        title: "LOUNGE WEAR",
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1507038732509-8b1a9623223a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        title: "JACKETS & JERSEYS",
    },
]
const popularProducts = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: "$50.99",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        price: "$109",
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1507038732509-8b1a9623223a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: "$25.99",
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1507038732509-8b1a9623223a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: "$25.99",
    },
    {
        id: 5,
        img: "https://images.unsplash.com/photo-1507038732509-8b1a9623223a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: "$25.99",
    },
    {
        id: 6,
        img: "https://images.unsplash.com/photo-1507038732509-8b1a9623223a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: "$25.99",
    },
    {
        id: 7,
        img: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        price: "$109",
    },
    {
        id: 8,
        img: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        price: "$109",
    },
]
export { sliderItems, categories, popularProducts}