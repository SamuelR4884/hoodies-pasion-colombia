import { BASE_PRODUCT } from "./BASE";

export default {
  ...BASE_PRODUCT,
  id: "jake",   // ← ID igual al nombre de la carpeta
  title: "Hoodie de Jake el Perro",
  price: 80000,
  images: [
    "/images/jake/buso-jake.jpg"
  ],
  description: "Hoodie cómodo con diseño de Jake el perro."
};
