export const formData = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    placeholder: "e.g San Andreas",
    pc: "email",

    rules: {
      required: "Full name is required",
      minLength: {
        value: 3,
        message: "Full name must be at least 3 characters long",
      },
    },
  },
  {
    label: "Email address",
    name: "email",
    type: "email",
    placeholder: "e.g sanandreas@gmail.com",
    pc: "email",
    rules: {
      required: "Email is required",
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Enter a valid email address",
      },
    },
  },
  {
    label: "Create Password",
    name: "password",
    type: "password",
    placeholder: "Must be at least 8 characters",
    pc: "email",

    rules: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters long",
      },
    },
  },
];
export const loginFormData = [
  {
    label: "Email address",
    name: "email",
    type: "email",
    placeholder: "e.g sanandreas@gmail.com",
    pc: "email",
    rules: {
      required: "Email is required",
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Enter a valid email address",
      },
    },
  },
  {
    label: "Create Password",
    name: "password",
    type: "password",
    placeholder: "Must be at least 8 characters",
    pc: "email",

    rules: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters long",
      },
    },
  },
];

export const forgetForm = [
  {
    label: "Email address",
    name: "email",
    type: "email",
    placeholder: "e.g sanandreas@gmail.com",
    pc: "email",
    rules: {
      required: "Email is required",
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Enter a valid email address",
      },
    },
  },
];
export const resetForm = [
  {
    label: "Create Password",
    name: "password",
    type: "password",
    placeholder: "Must be at least 8 characters",
    pc: "email",

    rules: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters long",
      },
    },
  },
  {
    label: "New password",
    name: "password",
    type: "password",
    placeholder: "Must be at least 8 characters",
    pc: "email",

    rules: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters long",
      },
    },
  },
];
export const headerData = [
  {
    title: "STORE",
    link: "/store",
  },
  {
    title: "TUTORIALS",
    link: "/tutorials",
  },
  {
    title: "FAQS",
    link: "/faqs",
  },
  {
    title: "ABOUT",
    link: "/about",
  },
];
export const menueData = [
  {
    title: "Dashboards",
    icon: "/img/dashboardIcon.png",
  },
  {
    title: "Orders",
    icon: "/img/ordersIcon.png",
  },
  {
    title: "Subscriptions",
    icon: "/img/subscriptionIcon.png",
  },
  {
    title: "Downloads",
    icon: "/img/downloadIcon.png",
  },
  {
    title: "Address",
    icon: "/img/addressIcon.png",
  },
  {
    title: "Payment methods",
    icon: "/img/paymentIcon.png",
  },
];
export const otherData = [
  {
    title: "Account details",
    icon: "/img/account.png",
  },
  {
    title: "VAT Number",
    icon: "/img/vatIcon.png",
  },
  {
    title: "Logout",
    icon: "/img/logoutIcon.png",
  },
];


export const subscriptionPlans = [
  {
    title: "Regular",
    price: "25",
    features: ['5 downloads per day', 'Access to all products', 'Access to new releases', '25% renewal discount']
  },
  {
    title: "Basic",
    price: "120",
    features: ['10 downloads per day', 'Access to all products', 'Access to new releases', '25% renewal discount']
  },
  {
    title: "Pro",
    price: "320",
    features: ['Unlimited downloads per day', 'Access to all products', 'Access to new releases', '25% renewal discount']
  },
]

export const profileData = [
  {
    image: "/img/Ellipse.png",
    name: "Sarah M.",
    title: "Enthusiastic Learner",
    info: `"Sonduck has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."`
  },
  {
    image: "/img/Ellipse2.png",
    name: "James L.",
    title: "Lifelong Learner",
    info: `"I've tried several online learning platforms, and Sonduck stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."`
  },
  {
    image: "/img/Ellipse3.png",
    name: "Alex B.",
    title: "Inspired Creator",
    info: `"As a creator, Sonduck has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."`
  },
]

export const footerLists = [
  {
    title: "Products",
    list: [
      {title: "After Effect", path: "#"},
      {title: "Premier Pro", path: "#"},
    ]
  },
  {
    title: "Links",
    list: [
      {title: "Store", path: "#"},
      {title: "Tutorials", path: "#"},
      {title: "FAQs", path: "#"},
      {title: "Affiliate", path: "#"},
      {title: "Returns & Refunds", path: "#"},
      {title: "Licences", path: "#"},
    ]
  },
]

export const socialMediaLinks = [
  {
    img:"/img/facebook1.png",
    path: "#"
  },
  {
    img:"/img/linkedin.png",
    path: "#"
  },
  {
    img:"/img/twitter.png",
    path: "#"
  },
  {
    img:"/img/youtube.png",
    path: "#"
  },
  {
    img:"/img/instagram.png",
    path: "#"
  },
]

export const featurePack = [
  {
    image:"/img/card1.png",
    actualPrice: "48",
    discountedPrice: "60",
    title:"1500+ Transitions Premiere Pro"
  },
  {
    image:"/img/card2.png",
    actualPrice: "43",
    discountedPrice: "46",
    title:"1500+ Transitions Premiere Pro"
  },
]

export const singlePack = [
  {
    image:"/img/card1.png",
    actualPrice: "48",
    discountedPrice: "60",
    title:"1500+ Transitions Premiere Pro"
  },
  {
    image:"/img/card2.png",
    actualPrice: "43",
    discountedPrice: "46",
    title:"1500+ Transitions Premiere Pro"
  },
  {
    image:"/img/card3.png",
    actualPrice: "48",
    discountedPrice: "60",
    title:"1500+ Transitions Premiere Pro"
  },
  {
    image:"/img/card4.png",
    actualPrice: "43",
    discountedPrice: "46",
    title:"1500+ Transitions Premiere Pro"
  },
  {
    image:"/img/card5.png",
    actualPrice: "48",
    discountedPrice: "60",
    title:"1500+ Transitions Premiere Pro"
  },
  {
    image:"/img/card2.png",
    actualPrice: "43",
    discountedPrice: "46",
    title:"1500+ Transitions Premiere Pro"
  },

]


export const bundleData = [
  {
    image1: "/img/card2.png",
    actualPrice: "654",
    discountedPrice: "2132",
    title:"1500+ Transitions Premiere Pro",
    image2: "/img/items.png",
    saveInfo: "Save $1470 and get all 40 Packs!",
    template: "25,000+ Templates",
  },
  {
    image1: "/img/card2.png",
    actualPrice: "",
    discountedPrice: "",
    title:"1500+ Transitions Premiere Pro",
    image2: "/img/items.png",
    saveInfo: "Save $1470 and get all 40 Packs!",
    template: "25,000+ Templates",
  },
  {
    image1: "/img/card2.png",
    actualPrice: "",
    discountedPrice: "",
    title:"1500+ Transitions Premiere Pro",
    image2: "/img/items.png",
    saveInfo: "Save $1470 and get all 40 Packs!",
    template: "25,000+ Templates",
  },
]