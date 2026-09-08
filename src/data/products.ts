// 📦 ARCHIVO DE CONFIGURACIÓN DE PRODUCTOS
// ============================================
// 
// ¡Hola! Este es el archivo donde puedes cambiar TODOS los productos de tu tienda.
// Es muy sencillo, solo sigue el formato de abajo.
//
// 📝 CÓMO EDITAR UN PRODUCTO:
// 1. Cambia el "name" por el nombre de tu producto
// 2. Cambia el "price" por el precio (solo números, sin símbolos)
// 3. Cambia el "material" por el material real
// 4. Cambia la "image" por la URL de tu imagen
//
// 🖼️ CÓMO AGREGAR IMÁGENES:
// - Opción 1: Sube tus imágenes a un servicio como Imgur, Dropbox o Google Drive
//   y copia el enlace directo a la imagen
// - Opción 2: Usa imágenes de Unsplash (https://unsplash.com) - son gratuitas
//
// ➕ CÓMO AGREGAR UN NUEVO PRODUCTO:
// Copia un bloque completo como este y pégalo al final de la lista:
// {
//   id: 9, // Usa un número único
//   name: 'Nombre del Producto',
//   price: 1500,
//   material: 'Acero Quirúrgico',
//   category: 'Collares',
//   image: 'https://url-de-tu-imagen.jpg',
//   isNew: false,
//   isFeatured: true // true para que aparezca en la página de inicio
// },
//
// 🗑️ CÓMO ELIMINAR UN PRODUCTO:
// Simplemente borra todo el bloque del producto (desde { hasta },)
//
// ============================================

export interface Product {
  id: number
  name: string
  price: number
  material: string
  category: string
  image: string
  isNew: boolean
  isFeatured: boolean
}

export const products: Product[] = [
  // ========= ANILLOS =========
  {
    id: 1,
    name: 'Anillo áureo',
    price: 6000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/TYVh820y/IMG-20260826-174817083-HDR-AE.jpg',
    isNew: true,
    isFeatured: true
  },
{
    id: 2,
    name: 'Anillo sombrio',
    price: 6000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/7ZL4BqQ1/IMG-20260826-WA0226.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 3,
    name: 'Anillo moño',
    price: 6000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/jdxY5sKr/IMG-20260826-WA0257.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 4,
    name: 'Anillo perla',
    price: 3000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/cHyVNWXL/IMG-20260826-WA1004.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 5,
    name: 'Anillos alianza',
    price: 4000,
    material: 'Acero Quirúrgico',
    category: 'Anillos',
    image: 'https://i.postimg.cc/YSgsRVkf/IMG-20260826-WA1630.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 6,
    name: 'Anillo bruma',
    price: 3000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/yNFLcZy8/IMG-20260826-WA2070.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 7,
    name: 'Anillo camino de estrellas',
    price: 2500,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/25fwk5Rc/IMG-20260826-WA3128.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 8,
    name: 'Anillo margarita',
    price: 6000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/CxbGQVBm/IMG-20260826-WA3621.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 9,
    name: 'Anillo flor',
    price: 6000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/mk09mdTp/IMG-20260826-WA4350.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 10,
    name: 'Anillo abierto corazón',
    price: 5000,
    material: 'Acero Quirúrgico',
    category: 'Anillos',
    image: 'https://i.postimg.cc/T3jbcqFV/IMG-20260826-WA4550.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 11,
    name: 'Anillo tres puntos',
    price: 2500,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/wjFXpQ2s/IMG-20260826-WA4886.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 12,
    name: 'Anillo bolitas',
    price: 2500,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/MHyBr7Hr/IMG-20260826-WA4901.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 13,
    name: 'Anillo ébano',
    price: 2500,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/ZYcKjs58/IMG-20260826-WA5924.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 15,
    name: 'Anillo perlas',
    price: 3000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/yN4H70NC/IMG-20260826-WA6065.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 16,
    name: 'Anillo misterio',
    price: 4000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/9M15PSYQ/IMG-20260826-WA6459.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 17,
    name: 'Anillo diamante',
    price: 2500,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/CL9y4bkR/IMG-20260826-WA8351.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 18,
    name: 'Anillo ónix',
    price: 2500,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/pLKSY4PB/IMG-20260826-WA6824.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 19,
    name: 'Anillo vigilia',
    price: 6000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/NGVPhBM1/IMG-20260826-WA8378.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 20,
    name: 'Anillo sello',
    price: 10000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/VsrP07bf/IMG-20260826-WA8900.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 21,
    name: 'Anillo ramas',
    price: 1300,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/pT37BH5s/IMG-20260826-WA9571.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 22,
    name: 'Anillo tiara',
    price: 2500,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/RV78w2S2/IMG-20260826-WA9689.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 23,
    name: 'Anillos tres aguas',
    price: 24000,
    material: 'plata de ley',
    category: 'Anillos',
    image: 'https://i.postimg.cc/hPBZ4MLX/IMG-20260902-WA1738.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 24,
    name: 'Anillos corazones',
    price: 24000,
    material: 'Plata de Ley',
    category: 'Anillos',
    image: 'https://i.postimg.cc/SNJYwb5K/IMG-20260902-WA3901.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 25,
    name: 'Anillos arcoiris',
    price: 6000,
    material: 'Acero Dorado',
    category: 'Anillos',
    image: 'https://i.postimg.cc/wByQQs5x/IMG-20260902-WA4910.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 26,
    name: 'Anillos reina',
    price: 6000,
    material: 'Acero Dorado',
    category: 'Anillos',
    image: 'https://i.postimg.cc/Dwmr7bM4/IMG-20260902-WA5776.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 27,
    name: 'Anillos redondos',
    price: 24000,
    material: 'Plata de Ley',
    category: 'Anillos',
    image: 'https://i.postimg.cc/L5CJWxRy/IMG-20260902-WA9966.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 28,
    name: 'Anillos de piedra',
    price: 6000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/rFDsmCqx/IMG-20260903-WA2354.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 29,
    name: 'Anillos corona de invierno',
    price: 6000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/Y0G7pRQh/IMG-20260903-WA7994.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 30,
    name: 'Anillos triple',
    price: 9000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/wj09Q1xx/IMG-20260903-WA9354.jpg',
    isNew: false,
    isFeatured: false
  },

  // ========= COLLARES =========
  {
    id: 31,
    name: 'Collar simple',
    price: 4000,
    material: 'Acero Quirúrgico',
    category: 'Collares',
    image: 'https://i.postimg.cc/TYzs8CK6/IMG-20260826-WA1956.jpg',
    isNew: false,
    isFeatured: true
  },
{
    id: 32,
    name: 'Collar Con bolitas',
    price: 8000,
    material: 'Acero Blanco',
    category: 'Collares',
    image: 'https://i.postimg.cc/8cqZSzPF/IMG-20260826-WA3714.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 33,
    name: 'Collar estilo van cleef',
    price: 14000,
    material: 'Acero Blanco',
    category: 'Collares',
    image: 'https://i.postimg.cc/QtzbQd7w/IMG-20260826-WA5781.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 34,
    name: 'Collar puntillismo',
    price: 4000,
    material: 'Acero Blanco',
    category: 'Collares',
    image: 'https://i.postimg.cc/gj9M9001/IMG-20260826-WA5732.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 35,
    name: 'Collar corazon brillante',
    price: 9000,
    material: 'Acero Blanco',
    category: 'Collares',
    image: 'https://i.postimg.cc/Ssc6MfyD/IMG-20260826-WA6095.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 37,
    name: 'Collar cero blanco',
    price: 12000,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/FK3dWF2X/IMG-20260826-WA7983.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 38,
    name: 'Collar trenzado',
    price: 4000,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/L65qd3rg/IMG-20260826-WA8005.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 39,
    name: 'Collar corazon arcoiris',
    price: 12000,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/HnhkWFfK/IMG-20260826-WA8066.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 40,
    name: 'Collar estrella lunar',
    price: 6000,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/W4wpqdB0/IMG-20260826-WA8927.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 41,
    name: 'Collar san benito',
    price: 10000,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/5tbbJxXy/IMG-20260826-WA9070.jpg',
    isNew: true,
    isFeatured: false
  },

  // ========= PULSERAS =========
  {
    id: 44,
    name: 'pulsera corazon azul',
    price: 8000,
    material: 'Acero blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/d1qRwkCX/file-000000007b98820eb355040a22ee38fe.png',
    isNew: true,
    isFeatured: true
  },
{
    id: 45,
    name: 'pulsera geometrica',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/SKV2LZ2n/file-000000008210820eaa6545596734ccc0.png',
    isNew: false,
    isFeatured: false
  },
{
    id: 46,
    name: 'pulsera estilo van cleef plateada',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/c6qr12j7/file-00000000b8b0820eb496cccf023de5a3.png',
    isNew: false,
    isFeatured: false
  },
{
    id: 47,
    name: 'pulsera rio de estrellas',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/6QHV66hd/IMG-20260826-WA1509.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 48,
    name: 'pulsera eterna',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/vmDgzrWt/IMG-20260826-WA2105.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 49,
    name: 'pulsera triple gruesa',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/SKyx0jfV/IMG-20260908-WA3677.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 50,
    name: 'pulsera corazon gruesa',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/QxrfytYd/IMG-20260826-WA3235.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 51,
    name: 'pulsera pretzel',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/2jqv9X6m/IMG-20260908-WA5161.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 52,
    name: 'pulsera lunar gruesa',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/W116BJGs/IMG-20260826-WA5004.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 53,
    name: 'pulsera cuarzo',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/gJLJsQKQ/IMG-20260908-WA7707.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 55,
    name: 'pulsera corazon negro',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/zv1JjBv8/IMG-20260908-WA4114.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 56,
    name: 'pulseras triple con bolitas',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/pdhRM8n9/IMG-20260908-WA3047.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 57,
    name: 'pulseras genesis',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/Th8FkJLh/IMG-20260826-WA8991.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 58,
    name: 'pulseras negra',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/L8hMjfvM/IMG-20260908-WA1442.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 59,
    name: 'pulsera corazon de hielo',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/fTfQH1K1/IMG-20260826-WA9671.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 60,
    name: 'pulseras negra doble',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/1XykXN4B/IMG-20260908-WA0667.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 61,
    name: 'pulseras trenza gruesa',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/0QjmsV0D/IMG-20260908-WA2196.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 62,
    name: 'pulseras bolas gruesas',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/VvbCS5Tq/IMG-20260908-WA5869.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 63,
    name: 'pulseras lineas gruesas',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/Cx0cgVBm/IMG-20260908-WA8049.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 64,
    name: 'pulseras bolitas simples',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/hvgXGMLS/IMG-20260908-WA8753.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 65,
    name: 'pulseras bolas cuarzo',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/kXJV31MX/IMG-20260908-WA8815.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 66,
    name: 'pulseras negra ojo',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/jS9CfRHz/IMG-20260908-WA9561.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 67,
    name: 'pulsera dorada simple',
    price: 8100,
    material: 'Acero Dorado',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/QN4BDgFP/IMG-20260908-WA0145.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 68,
    name: 'pulsera doble corazones dorada',
    price: 8100,
    material: 'Acero Dorado',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/HnVknKrK/IMG-20260908-WA0351.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 69,
    name: 'pulsera mariposa dorada',
    price: 8100,
    material: 'Acero Dorado',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/Z5k5Yw4d/IMG-20260908-WA2164.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 70,
    name: 'pulsera flor dorada',
    price: 8100,
    material: 'Acero Dorado',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/HxLpvK9d/IMG-20260908-WA4509.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 71,
    name: 'pulsera trenzada dorada',
    price: 8100,
    material: 'Acero Dorado',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/6q2BtvS6/IMG-20260908-WA6027.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 72,
    name: 'pulsera margarita plateada',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/9MvQ4by3/IMG-20260908-WA6850.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 73,
    name: 'pulsera enganche corazon',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/Vv12Hb8W/IMG-20260908-WA1215.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 74,
    name: 'pulsera estrella lunar',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/xTfWvHgf/IMG-20260908-WA3623.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 75,
    name: 'pulsera trebol plateada',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/T3hFS6zv/IMG-20260908-WA7468.jpg',
    isNew: false,
    isFeatured: false
  },

  // ========= ARETES =========
  {
    id: 76,
    name: 'Aros mariposa',
    price: 1200,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/BbFFVXJN/IMG-20260826-180240657-HDR-AE.jpg',
    isNew: false,
    isFeatured: true
  },
{
    id: 77,
    name: 'Aros ice',
    price: 890,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/d1kZhLZt/IMG-20260826-180407552-HDR-AE.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 78,
    name: 'Aros abiertos',
    price: 890,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/y8pN07zb/IMG-20260826-WA0004.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 79,
    name: 'Aros corazon de piedra',
    price: 890,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/3RTQvqd7/IMG-20260826-WA0369.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 80,
    name: 'Aros de corazon',
    price: 890,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/Z5pfd53v/IMG-20260826-WA3941.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 81,
    name: 'Aros pizza',
    price: 890,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/0Q2ZFG4r/IMG-20260826-WA5014.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 82,
    name: 'Aros argolla',
    price: 890,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/q7pG6Xpk/IMG-20260826-WA5190.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 83,
    name: 'Aros mariquita',
    price: 890,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/8PW3h4g8/IMG-20260826-WA5465.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 84,
    name: 'Aros corazon piedra aircoiris',
    price: 890,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/FHkcJXVQ/IMG-20260902-WA0832.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 85,
    name: 'Aros mini mariposa',
    price: 890,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/BQGNGGRn/IMG-20260826-WA9575.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 86,
    name: 'Aros cero arcoiris',
    price: 890,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/Bbf5sxYT/IMG-20260902-WA1078.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 87,
    name: 'Aros estrella de mar',
    price: 890,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/8cbvSxrv/IMG-20260902-WA2155.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 88,
    name: 'Aros estrellado dorado',
    price: 890,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/HL77xr73/IMG-20260902-WA4021.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 89,
    name: 'Aros gotas dorado',
    price: 890,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/4xYYLYwy/IMG-20260902-WA4414.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 90,
    name: 'Aros gotas de color',
    price: 890,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/MpfG0hKH/IMG-20260902-WA7039.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 91,
    name: 'Aros argollas gruesas',
    price: 890,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/fybzVPrz/IMG-20260903-WA3871.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 92,
    name: 'Aros corazon arcoiris',
    price: 890,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/wMp1vHKY/IMG-20260902-WA1426.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 93,
    name: 'Aros piedras rojas',
    price: 890,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/SNQKtgkd/IMG-20260903-WA0081.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 94,
    name: 'Aros moño brilalnte',
    price: 890,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/J0pRLWRw/IMG-20260903-WA1449.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 95,
    name: 'Aros de colores mini',
    price: 890,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/Sx2kw55r/IMG-20260903-WA2753.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 96,
    name: 'Aros vuelo de colibri',
    price: 890,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/4dZGH3dG/IMG-20260903-WA4061.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 97,
    name: 'Aros serpiente verde',
    price: 890,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/sxNbmf3b/IMG-20260903-WA6611.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 98,
    name: 'Aros argolla dorada',
    price: 890,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/7Lnccnxd/IMG-20260903-WA8513.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 99,
    name: 'Aros reliquia',
    price: 890,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/LsDCv4Tk/IMG-20260903-WA8559(1).jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 100,
    name: 'Aros argolla con rombos',
    price: 890,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/T3RHbWjh/IMG-20260908-WA0449.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 101,
    name: 'Aros mosaico',
    price: 890,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/VvqDrYdD/IMG-20260908-WA2811.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 102,
    name: 'Aros gancho dorados',
    price: 890,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/52NnyW1v/IMG-20260908-WA3208.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 103,
    name: 'Aros forja',
    price: 890,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/WpGn711r/IMG-20260908-WA3806.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 104,
    name: 'Aros U dorados',
    price: 890,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/cHQQTF08/IMG-20260908-WA4993.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 105,
    name: 'Aros perla violeta',
    price: 890,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/TYknkLM5/IMG-20260908-WA7144.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 106,
    name: 'Aros atardecer',
    price: 890,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/FRQSf0c6/IMG-20260908-WA9065.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 107,
    name: 'Aros estrella fugaz dorada',
    price: 890,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/pLh5qsBH/IMG-20260908-WA9466.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 108,
    name: 'Aros alegria de cristal',
    price: 890,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/x8pqPmJQ/IMG-20260908-WA9876.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 109,
    name: 'Aros argollas doradas',
    price: 890,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/4NrxNspB/IMG-20260908-WA9939.jpg',
    isNew: true,
    isFeatured: false
  },
]

// Categorías disponibles
export const categories = ['Todos', 'Anillos', 'Collares', 'Pulseras', 'Aretes']

// Materiales disponibles (para referencia)
export const materials = [
  'Plata de Ley',
  'Acero Quirúrgico',
  'Acero Blanco',
  'Acero Dorado'
]

// Función helper para obtener productos destacados
export const getFeaturedProducts = () => products.filter(p => p.isFeatured)

// Función helper para obtener productos por categoría
export const getProductsByCategory = (category: string) => 
  category === 'Todos' ? products : products.filter(p => p.category === category)
