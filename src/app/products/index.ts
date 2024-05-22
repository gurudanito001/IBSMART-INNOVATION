import { UUID } from "crypto"

export type Product = {
  id?: UUID,
  name: string,
  price: string,
  images: string[],
  description: string,
  colors: string[],
  categories: string[],
  available: boolean,
  discount: string,
  additionalInformation: string
}
export const heroProducts = [
  {
    name: "iPhone 15 Pro Max",
    price: "2000000",
    images: ["iphone_15_pro_max_1.png", "iphone_15_pro_max_2.png", "iphone_15_pro_max_3.png", "iphone_15_pro_max_4.png", "iphone_15_pro_max.jpeg" ],
    description: "The iPhone 15 Pro Max has a 6.7-inch Super Retina XDR OLED display with a resolution of 2796 x 1290 pixels at 460 ppi. It has rounded corners, an always-on display, and ProMotion technology with adaptive refresh rates up to 120 Hz. The phone also has a textured matte-glass back, a contoured-edge titanium band around the frame, and a Ceramic Shield front. The iPhone 15 Pro Max is 70.6 mm wide, 146.6 mm high, and 8.25 mm deep",
    colors: ["#878684", "#A3A29C", "#BAB9B3", "#999999"],
    categories: ["brand new", "phone", "iphone"],
    available: true,
    discount: "",
    additionalInformation: ""
  }
]

export const products = [
  {
    name: "iPhone 15 Pro Max",
    price: "2000000",
    images: ["iphone_15_pro_max_1.png", "iphone_15_pro_max_2.png", "iphone_15_pro_max_3.png", "iphone_15_pro_max_4.png" ],
    description: "The iPhone 15 Pro Max has a 6.7-inch Super Retina XDR OLED display with a resolution of 2796 x 1290 pixels at 460 ppi. It has rounded corners, an always-on display, and ProMotion technology with adaptive refresh rates up to 120 Hz. The phone also has a textured matte-glass back, a contoured-edge titanium band around the frame, and a Ceramic Shield front. The iPhone 15 Pro Max is 70.6 mm wide, 146.6 mm high, and 8.25 mm deep",
    colors: ["#878684", "#A3A29C", "#BAB9B3", "#999999"],
    categories: ["brand new", "phone", "iphone"],
    available: true,
    discount: "",
    additionalInformation: ""
  },
  {
    name: "Apple Series 5",
    price: "260000",
    images: ["apple_series_5.jpeg"],
    description: "Apple series 5 44MM LTE",
    colors: ["#000000"],
    categories: ["used", "accessories", "apple watch"],
    available: true,
    discount: "",
    additionalInformation: ""
  },
  {
    name: "Apple Series SE 2",
    price: "275000",
    images: ["apple_series_se_2.jpeg"],
    description: "Apple Series SE 2 44MM",
    colors: ["#000000"],
    categories: ["used", "accessories", "apple watch"],
    available: true,
    discount: "",
    additionalInformation: ""
  },
  {
    name: "Microsoft Surface Laptop 3",
    price: "650000",
    images: ["microsoft_surface_laptop_3.jpeg", "microsoft_surface_laptop_3_2.jpeg"],
    description: "Microsoft surface laptop 3 256GB SSD 16GB RAM COREi7 10th Gen 4GB NVIDIA GTX 1650 Touchscreen",
    colors: ["#C0C0C0"],
    categories: ["used", "laptop", "surface laptop"],
    available: true,
    discount: "",
    additionalInformation: ""
  },
  {
    name: "Samsung Galaxy Fold 5",
    price: "1500000",
    images: ["samsung_galaxy_fold_5.jpeg", "samsung_galaxy_fold_5_2.jpeg"],
    description: "Samsung Galaxy Fold 5 512GB",
    colors: ["#000000", "#ffffff"],
    categories: ["used", "phone", "samsung fold"],
    available: true,
    discount: "",
    additionalInformation: ""
  },
  {
    name: "Apple Macbook Air M2",
    price: "1100000",
    images: ["apple_macbook_air_m2.jpeg", "apple_macbook_air_m2_2.jpeg"],
    description: "Uk used Apple MacBook Air M2 256GB SSD 8GB RAM CC 3",
    colors: ["#C0C0C0"],
    categories: ["used", "laptop", "macbook air"],
    available: true,
    discount: "",
    additionalInformation: ""
  },
  {
    name: "iPhone 14 Pro",
    price: "1050000",
    images: ["iphone_14_pro.jpeg", "iphone_14_pro_2.jpeg"],
    description: "iPhone 14 Pro 128GB PHYSICAL SIM",
    colors: ["#C0C0C0"],
    categories: ["used", "phone", "iphone"],
    available: true,
    discount: "",
    additionalInformation: ""
  },
  {
    name: "Apple Macbook Pro M2 2022",
    price: "1300000",
    images: ["apple_macBook _pro_m2_2022.jpeg", "apple_macBook _pro_m2_2022_2.jpeg"],
    description: "Open Box Apple MacBook Pro M2 2022 256GB SSD 8GB RAM",
    colors: ["#C0C0C0"],
    categories: ["used", "laptop", "macbook pro"],
    available: true,
    discount: "",
    additionalInformation: ""
  },
  {
    name: "Samsung Galaxy S22 ultra",
    price: "800000",
    images: ["samsung_galaxy_s22_ultra.jpeg",],
    description: "Samsung Galaxy S22 ultra 512gb open box",
    colors: ["#000000"],
    categories: ["used", "phone", "samsung galaxy"],
    available: true,
    discount: "",
    additionalInformation: ""
  },
  {
    name: "Samsung Galaxy S24 ultra",
    price: "1550000",
    images: ["samsung_galaxy_s24_ultra.jpeg",],
    description: "Open Box S24 Ultra 1TB Storage",
    colors: ["#000000"],
    categories: ["used", "phone", "samsung galaxy"],
    available: true,
    discount: "",
    additionalInformation: ""
  },
  {
    name: "Dell Latitude Model 3350",
    price: "120000",
    images: ["dell_latitude_model_3350.jpeg", "dell_latitude_model_3350.jpeg_2", "dell_latitude_model_3350_3.jpeg"],
    description: "Dell Latitude Model 3350 128GB SSD 8GB RAM CORE i3",
    colors: ["#000000"],
    categories: ["used", "laptop", "dell lattitude"],
    available: true,
    discount: "",
    additionalInformation: ""
  },
  {
    name: "iPad Pro 12.9 4th Gen",
    price: "850000",
    images: ["ipad_pro_12.9_4th_gen.jpeg", "ipad_pro_12.9_4th_gen_2.jpeg"],
    description: "Uk used ipad Pro 12.9 4th Gen 256GB WIFI ONLY",
    colors: ["#000000"],
    categories: ["used", "phone", "ipad pro"],
    available: true,
    discount: "",
    additionalInformation: ""
  },
  {
    name: "Samsung Galaxy S22",
    price: "550000",
    images: ["samsung_s22.jpeg"],
    description: "Samsung S22 256GB UNLOCKED",
    colors: ["#000000"],
    categories: ["used", "phone", "samsung galaxy"],
    available: true,
    discount: "",
    additionalInformation: ""
  },
  {
    name: "Dell Latitude 7420",
    price: "450000",
    images: ["dell_latitude_7420.jpeg"],
    description: "Dell Latitude 7420 Core i5 11th Gen 256GB SSD 16GB RAM 14 Display Fingerprint Sensor Keyboard Light.",
    colors: ["#000000"],
    categories: ["used", "laptop", "dell lattitude"],
    available: true,
    discount: "",
    additionalInformation: ""
  },
  {
    name: "RTX Legion 5",
    price: "2400000",
    images: ["rtx_legion5_amd.jpeg"],
    description: "RTX Legion5 AMD 512gb ssd 32gb ram 8gb dedicated Laptop. ",
    colors: ["#000000"],
    categories: ["used", "laptop", "rtx legion"],
    available: true,
    discount: "",
    additionalInformation: ""
  }
]


