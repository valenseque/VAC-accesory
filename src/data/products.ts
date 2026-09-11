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
    name: 'Anillo sombrio',
    price: 9000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/Cxng7Qt7/IMG-20260910-WA3819.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 2,
    name: 'Anillo perla',
    price: 3000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/cHyVNWXL/IMG-20260826-WA1004.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 3,
    name: 'Anillos alianza',
    price: 4000,
    material: 'Acero Quirúrgico',
    category: 'Anillos',
    image: 'https://i.postimg.cc/YSgsRVkf/IMG-20260826-WA1630.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 4,
    name: 'Anillo bruma',
    price: 3000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/sfnCrzRC/IMG-20260910-WA5580.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 5,
    name: 'Anillo margarita',
    price: 10000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/jSDs95wx/IMG-20260910-WA0000.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 6,
    name: 'Anillo flor',
    price: 10000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/vBsbct0C/IMG-20260910-WA4056.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 7,
    name: 'Anillo abierto corazón',
    price: 5000,
    material: 'Acero Quirúrgico',
    category: 'Anillos',
    image: 'https://i.postimg.cc/bJ98bSMT/IMG-20260910-WA1835.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 8,
    name: 'Anillo misterio',
    price: 4000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/9M15PSYQ/IMG-20260826-WA6459.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 9,
    name: 'Anillo vigilia',
    price: 8000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/NGVPhBM1/IMG-20260826-WA8378.jpg',
    isNew: true,
    isFeatured: true
  },
{
    id: 10,
    name: 'Anillo sello',
    price: 10000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/C17TdTBM/IMG-20260910-WA5490.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 11,
    name: 'Anillo ramas',
    price: 12000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/vZVJf6x1/IMG-20260910-WA9370.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 12,
    name: 'Anillos tres aguas',
    price: 24000,
    material: 'plata de ley',
    category: 'Anillos',
    image: 'https://i.postimg.cc/hPBZ4MLX/IMG-20260902-WA1738.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 13,
    name: 'Anillos corazones',
    price: 24000,
    material: 'Plata de Ley',
    category: 'Anillos',
    image: 'https://i.postimg.cc/SNJYwb5K/IMG-20260902-WA3901.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 14,
    name: 'Anillos arcoiris',
    price: 6000,
    material: 'Acero Dorado',
    category: 'Anillos',
    image: 'https://i.postimg.cc/wByQQs5x/IMG-20260902-WA4910.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 15,
    name: 'Anillos reina',
    price: 6000,
    material: 'Acero Dorado',
    category: 'Anillos',
    image: 'https://i.postimg.cc/Dwmr7bM4/IMG-20260902-WA5776.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 16,
    name: 'Anillos redondos',
    price: 24000,
    material: 'Plata de Ley',
    category: 'Anillos',
    image: 'https://i.postimg.cc/L5CJWxRy/IMG-20260902-WA9966.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 17,
    name: 'Anillos de piedra',
    price: 6000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/rFDsmCqx/IMG-20260903-WA2354.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 18,
    name: 'Anillos corona de invierno',
    price: 6000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/Y0G7pRQh/IMG-20260903-WA7994.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 19,
    name: 'Anillos triple',
    price: 9000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/wj09Q1xx/IMG-20260903-WA9354.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 20,
    name: 'Anillos fino hombre',
    price: 9000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/wvYPC1Nt/IMG-20260909-WA4390.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 21,
    name: 'Anillos cruz hombre',
    price: 9000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/nr0P9TP8/IMG-20260909-WA6757.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 22,
    name: 'Anillos grueso hombre',
    price: 9000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/157d9CF0/IMG-20260909-WA7592.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 23,
    name: 'Anillos circular hombre',
    price: 9000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/tTzr82y8/IMG-20260909-WA3493.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 24,
    name: 'Anillos circular negro hombre',
    price: 9000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/y6vQPQLg/IMG-20260909-WA8869.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 25,
    name: 'Anillos alianza dorada',
    price: 4000,
    material: 'Acero Dorado',
    category: 'Anillos',
    image: 'https://i.postimg.cc/2yW6PSXm/IMG-20260910-WA3865.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 26,
    name: 'Anillos ambar',
    price: 4000,
    material: 'Acero Dorado',
    category: 'Anillos',
    image: 'https://i.postimg.cc/mDvZNGZd/IMG-20260910-WA8594.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 27,
    name: 'Anillos triple dorado',
    price: 9000,
    material: 'Acero Dorado',
    category: 'Anillos',
    image: 'https://i.postimg.cc/XvTXx5Qt/IMG-20260910-WA1092.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 28,
    name: 'Anillo mariposa abierto',
    price: 9000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/Ghq2VVXh/IMG-20260910-WA0849.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 29,
    name: 'Anillo cuadrado',
    price: 9000,
    material: 'Acero Blanco',
    category: 'Anillos',
    image: 'https://i.postimg.cc/PJKXGvz7/IMG-20260910-WA6673.jpg',
    isNew: true,
    isFeatured: false
  },

  // ========= COLLARES =========
  {
    id: 101,
    name: 'Collar simple',
    price: 4000,
    material: 'Acero Quirúrgico',
    category: 'Collares',
    image: 'https://i.postimg.cc/TYzs8CK6/IMG-20260826-WA1956.jpg',
    isNew: false,
    isFeatured: true
  },
{
    id: 102,
    name: 'Collar Con bolitas',
    price: 8000,
    material: 'Acero Blanco',
    category: 'Collares',
    image: 'https://i.postimg.cc/8cqZSzPF/IMG-20260826-WA3714.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 103,
    name: 'Collar estilo van cleef',
    price: 14000,
    material: 'Acero Blanco',
    category: 'Collares',
    image: 'https://i.postimg.cc/QtzbQd7w/IMG-20260826-WA5781.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 104,
    name: 'Collar puntillismo',
    price: 4000,
    material: 'Acero Blanco',
    category: 'Collares',
    image: 'https://i.postimg.cc/gj9M9001/IMG-20260826-WA5732.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 105,
    name: 'Collar corazon brillante',
    price: 9000,
    material: 'Acero Blanco',
    category: 'Collares',
    image: 'https://i.postimg.cc/Ssc6MfyD/IMG-20260826-WA6095.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 106,
    name: 'Collar cero blanco',
    price: 12000,
    material: 'Acero Blanco',
    category: 'Collares',
    image: 'https://i.postimg.cc/G2PPH25G/IMG-20260909-WA0538.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 107,
    name: 'Collar trenzado',
    price: 4000,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/L65qd3rg/IMG-20260826-WA8005.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 108,
    name: 'Collar corazon arcoiris',
    price: 12000,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/HnhkWFfK/IMG-20260826-WA8066.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 109,
    name: 'Collar estrella lunar',
    price: 6000,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/vTqVV6LT/IMG-20260909-WA0810.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 110,
    name: 'Collar san benito',
    price: 10000,
    material: 'Acero Blanco',
    category: 'Collares',
    image: 'https://i.postimg.cc/5tbbJxXy/IMG-20260826-WA9070.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 111,
    name: 'Collar colibri azul dorado',
    price: 10000,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/W3ctFwBS/IMG-20260908-WA1247.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 112,
    name: 'Collar colibri verde plateado',
    price: 12000,
    material: 'Acero Blanco',
    category: 'Collares',
    image: 'https://i.postimg.cc/W3ctFwBS/IMG-20260908-WA1247.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 113,
    name: 'Collar estilo vaan clef dorado',
    price: 8000,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/s2d3wDwn/IMG-20260908-WA3504.jpg',
    isNew: true,
    isFeatured: true
  },
{
    id: 114,
    name: 'Collar mariposa plateada',
    price: 12000,
    material: 'Acero Blanco',
    category: 'Collares',
    image: 'https://i.postimg.cc/kGpm8nV5/IMG-20260908-WA6215.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 115,
    name: 'Collar colibri rosa dorado',
    price: 10000,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/W4YLxNnN/IMG-20260908-WA6864.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 116,
    name: 'Collar tubo silple dorada',
    price: 5000,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/BnNd1SRY/IMG-20260908-WA8158.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 117,
    name: 'Collar estrella y bolitas',
    price: 7000,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/kXq1FrN3/IMG-20260908-WA8415.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 118,
    name: 'Collar mariposa dorada',
    price: 10000,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/fLYCm5Jh/IMG-20260908-WA8586.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 119,
    name: 'Collar arbol de la vida',
    price: 12000,
    material: 'Acero Blanco',
    category: 'Collares',
    image: 'https://i.postimg.cc/qvC3Nqtv/IMG-20260909-WA3290.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 120,
    name: 'collar simple hombre',
    price: 3000,
    material: 'Acero Blanco',
    category: 'Collares',
    image: 'https://i.postimg.cc/mDZkygrW/IMG-20260909-WA3347.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 121,
    name: 'collar circular',
    price: 9000,
    material: 'Acero Blanco',
    category: 'Collares',
    image: 'https://i.postimg.cc/nL3pZYHH/IMG-20260909-WA6993.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 122,
    name: 'collar van cleef brillante',
    price: 10000,
    material: 'Acero Blanco',
    category: 'Collares',
    image: 'https://i.postimg.cc/NjYKjDwH/IMG-20260909-WA8199.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 123,
    name: 'collar fino hombre',
    price: 3000,
    material: 'Acero Blanco',
    category: 'Collares',
    image: 'https://i.postimg.cc/CLCKX8n3/IMG-20260909-WA9179.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 124,
    name: 'collar fino plateado',
    price: 4000,
    material: 'Acero Blanco',
    category: 'Collares',
    image: 'https://i.postimg.cc/nh0hct2M/IMG-20260909-WA9461.jpg',
    isNew: true,
    isFeatured: false
  },

  // ========= PULSERAS =========
{
    id: 200,
    name: 'pulsera geometrica',
    price: 17000,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/SKV2LZ2n/file-000000008210820eaa6545596734ccc0.png',
    isNew: false,
    isFeatured: false
  },
{
    id: 201,
    name: 'pulsera rio de estrellas',
    price: 8000,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/6QHV66hd/IMG-20260826-WA1509.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 202,
    name: 'pulsera eterna',
    price: 17000,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/vmDgzrWt/IMG-20260826-WA2105.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 203,
    name: 'pulsera triple gruesa',
    price: 20000,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/SKyx0jfV/IMG-20260908-WA3677.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 204,
    name: 'pulsera corazon gruesa',
    price: 15000,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/QxrfytYd/IMG-20260826-WA3235.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 205,
    name: 'pulsera pretzel',
    price: 9000,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/2jqv9X6m/IMG-20260908-WA5161.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 206,
    name: 'pulsera lunar gruesa',
    price: 15000,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/W116BJGs/IMG-20260826-WA5004.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 207,
    name: 'pulsera cuarzo',
    price: 15000,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/gJLJsQKQ/IMG-20260908-WA7707.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 208,
    name: 'pulsera corazon negro',
    price: 10000,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/zv1JjBv8/IMG-20260908-WA4114.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 209,
    name: 'pulseras triple con bolitas',
    price: 9000,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/pdhRM8n9/IMG-20260908-WA3047.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 210,
    name: 'pulseras negra doble',
    price: 15000,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/1XykXN4B/IMG-20260908-WA0667.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 211,
    name: 'pulseras trenza gruesa',
    price: 8000,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/0QjmsV0D/IMG-20260908-WA2196.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 212,
    name: 'pulseras bolas gruesas',
    price: 9000,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/VvbCS5Tq/IMG-20260908-WA5869.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 213,
    name: 'pulseras lineas gruesas',
    price: 15000,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/Cx0cgVBm/IMG-20260908-WA8049.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 214,
    name: 'pulseras bolitas simples',
    price: 6000,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/hvgXGMLS/IMG-20260908-WA8753.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 215,
    name: 'pulseras bolas cuarzo',
    price: 12000,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/kXJV31MX/IMG-20260908-WA8815.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 216,
    name: 'pulseras negra ojo',
    price: 10000,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/jS9CfRHz/IMG-20260908-WA9561.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 217,
    name: 'pulsera dorada simple',
    price: 4000,
    material: 'Acero Dorado',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/QN4BDgFP/IMG-20260908-WA0145.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 218,
    name: 'pulsera doble corazones dorada',
    price: 6000,
    material: 'Acero Dorado',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/HnVknKrK/IMG-20260908-WA0351.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 219,
    name: 'pulsera mariposa dorada',
    price: 9000,
    material: 'Acero Dorado',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/Z5k5Yw4d/IMG-20260908-WA2164.jpg',
    isNew: true,
    isFeatured: true
  },
{
    id: 220,
    name: 'pulsera flor dorada',
    price: 6000,
    material: 'Acero Dorado',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/HxLpvK9d/IMG-20260908-WA4509.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 221,
    name: 'pulsera trenzada dorada',
    price: 4000,
    material: 'Acero Dorado',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/6q2BtvS6/IMG-20260908-WA6027.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 222,
    name: 'pulsera margarita plateada',
    price: 9000,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/9MvQ4by3/IMG-20260908-WA6850.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 223,
    name: 'pulsera enganche corazon',
    price: 15000,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/Vv12Hb8W/IMG-20260908-WA1215.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 224,
    name: 'pulsera estrella lunar',
    price: 20000,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/xTfWvHgf/IMG-20260908-WA3623.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 225,
    name: 'pulsera trebol plateada',
    price: 16000,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/T3hFS6zv/IMG-20260908-WA7468.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 226,
    name: 'pulsera gruesa hombre',
    price: 16000,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/wT9ztG7q/IMG-20260909-WA4552.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 227,
    name: 'pulsera fina con bolitas hombre',
    price: 16000,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/2S6fGLdz/IMG-20260909-WA8784.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 228,
    name: 'pulsera cubana hombre',
    price: 16000,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/1zV1hxYv/IMG-20260909-WA9540.jpg',
    isNew: false,
    isFeatured: false
  },

  // ========= ARETES =========
  {
    id: 300,
    name: 'Aros mariposa',
    price: 5000,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/BbFFVXJN/IMG-20260826-180240657-HDR-AE.jpg',
    isNew: false,
    isFeatured: true
  },
{
    id: 301,
    name: 'Aros ice',
    price: 5000,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/d1kZhLZt/IMG-20260826-180407552-HDR-AE.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 302,
    name: 'Aros abiertos',
    price: 2500,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/y8pN07zb/IMG-20260826-WA0004.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 303,
    name: 'Aros corazon de piedra',
    price: 5000,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/3RTQvqd7/IMG-20260826-WA0369.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 304,
    name: 'Aros pizza',
    price: 5000,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/0Q2ZFG4r/IMG-20260826-WA5014.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 305,
    name: 'Aros argolla',
    price: 4000,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/q7pG6Xpk/IMG-20260826-WA5190.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 306,
    name: 'Aros mariquita',
    price: 5000,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/8PW3h4g8/IMG-20260826-WA5465.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 307,
    name: 'Aros corazon piedra aircoiris',
    price: 5000,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/FHkcJXVQ/IMG-20260902-WA0832.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 308,
    name: 'Aros mini mariposa',
    price: 6000,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/BQGNGGRn/IMG-20260826-WA9575.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 309,
    name: 'Aros cero arcoiris',
    price: 6000,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/Bbf5sxYT/IMG-20260902-WA1078.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 310,
    name: 'Aros estrella de mar',
    price: 6000,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/8cbvSxrv/IMG-20260902-WA2155.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 311,
    name: 'Aros estrellado dorado',
    price: 6000,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/HL77xr73/IMG-20260902-WA4021.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 312,
    name: 'Aros gotas dorado',
    price: 5000,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/4xYYLYwy/IMG-20260902-WA4414.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 314,
    name: 'Aros gotas de color',
    price: 6000,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/MpfG0hKH/IMG-20260902-WA7039.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 315,
    name: 'Aros argollas gruesas',
    price: 6000,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/fybzVPrz/IMG-20260903-WA3871.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 316,
    name: 'Aros corazon arcoiris',
    price: 6000,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/wMp1vHKY/IMG-20260902-WA1426.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 317,
    name: 'Aros piedras rojas',
    price: 6000,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/SNQKtgkd/IMG-20260903-WA0081.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 318,
    name: 'Aros moño brilalnte',
    price: 6000,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/J0pRLWRw/IMG-20260903-WA1449.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 319,
    name: 'Aros de colores mini',
    price: 5000,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/Sx2kw55r/IMG-20260903-WA2753.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 320,
    name: 'Aros vuelo de colibri',
    price: 6000,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/4dZGH3dG/IMG-20260903-WA4061.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 321,
    name: 'Aros serpiente verde',
    price: 6000,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/sxNbmf3b/IMG-20260903-WA6611.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 322,
    name: 'Aros argolla dorada',
    price: 6000,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/7Lnccnxd/IMG-20260903-WA8513.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 323,
    name: 'Aros reliquia',
    price: 6000,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/LsDCv4Tk/IMG-20260903-WA8559(1).jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 324,
    name: 'Aros argolla con rombos',
    price: 6000,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/T3RHbWjh/IMG-20260908-WA0449.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 325,
    name: 'Aros mosaico',
    price: 6000,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/VvqDrYdD/IMG-20260908-WA2811.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 326,
    name: 'Aros gancho dorados',
    price: 6000,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/52NnyW1v/IMG-20260908-WA3208.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 327,
    name: 'Aros forja',
    price: 6000,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/WpGn711r/IMG-20260908-WA3806.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 328,
    name: 'Aros U dorados',
    price: 6000,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/cHQQTF08/IMG-20260908-WA4993.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 329,
    name: 'Aros perla violeta',
    price: 6000,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/TYknkLM5/IMG-20260908-WA7144.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 330,
    name: 'Aros atardecer',
    price: 6000,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/FRQSf0c6/IMG-20260908-WA9065.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 331,
    name: 'Aros estrella fugaz dorada',
    price: 6000,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/pLh5qsBH/IMG-20260908-WA9466.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 332,
    name: 'Aros alegria de cristal',
    price: 6000,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://i.postimg.cc/x8pqPmJQ/IMG-20260908-WA9876.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 333,
    name: 'Aros argollas doradas',
    price: 6000,
    material: 'Acero Dorado',
    category: 'Aretes',
    image: 'https://i.postimg.cc/4NrxNspB/IMG-20260908-WA9939.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 334,
    name: 'Aros de plata vinculo',
    price: 24000,
    material: 'Plata de Ley',
    category: 'Aretes',
    image: 'https://i.postimg.cc/x1cGqK7N/IMG-20260910-WA1621.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 335,
    name: 'Aros de plata cristal',
    price: 24000,
    material: 'Plata de Ley',
    category: 'Aretes',
    image: 'https://i.postimg.cc/d090YfB1/IMG-20260910-WA2010.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 336,
    name: 'Aros de plata eterno',
    price: 24000,
    material: 'Plata de Ley',
    category: 'Aretes',
    image: 'https://i.postimg.cc/VLbL6vgm/IMG-20260910-WA4055.jpg',
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
