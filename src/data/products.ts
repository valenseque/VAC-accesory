https://i.postimg.cc/wj09Q1xx/IMG-20260903-WA9354.jpg
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
    price: 1800,
    material: 'Acero Quirúrgico',
    category: 'Collares',
    image: 'https://i.postimg.cc/TYzs8CK6/IMG-20260826-WA1956.jpg',
    isNew: false,
    isFeatured: true
  },
{
    id: 32,
    name: 'Collar Con bolitas',
    price: 1450,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/8cqZSzPF/IMG-20260826-WA3714.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 33,
    name: 'Collar estilo van cleef',
    price: 1450,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/QtzbQd7w/IMG-20260826-WA5781.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 34,
    name: 'Collar puntillismo',
    price: 1450,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/gj9M9001/IMG-20260826-WA5732.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 35,
    name: 'Collar corazon brillante',
    price: 1450,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/Ssc6MfyD/IMG-20260826-WA6095.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 36,
    name: 'Collar corazon grande',
    price: 1450,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/wjPL4GMG/IMG-20260826-WA6791.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 37,
    name: 'Collar cero blanco',
    price: 1450,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/FK3dWF2X/IMG-20260826-WA7983.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 38,
    name: 'Collar trenzado',
    price: 1450,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/L65qd3rg/IMG-20260826-WA8005.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 39,
    name: 'Collar corazon arcoiris',
    price: 1450,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/FK3dWF2X/IMG-20260826-WA7983.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 40,
    name: 'Collar estrella lunar',
    price: 1450,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/W4wpqdB0/IMG-20260826-WA8927.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 41,
    name: 'Collar san benito',
    price: 1450,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/5tbbJxXy/IMG-20260826-WA9070.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 42,
    name: 'combo estrellado',
    price: 1450,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/QCWR5PBr/IMG-20260826-WA9266.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 43,
    name: 'combo doble vinculo',
    price: 1450,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/x1sDQHBw/IMG-20260826-WA9823.jpg',
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
    name: 'multiples pulseras gruesas',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/pV5SS326/IMG-20260826-WA2487.jpg',
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
    name: 'pulsera triple y arcoiris',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/zvwFrCtM/IMG-20260826-WA3427.jpg',
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
    image: 'https://i.postimg.cc/pr1Xy76k/IMG-20260826-WA5393.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 55,
    name: 'pulseras eclipse',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/T3nfXpfn/IMG-20260826-WA6251.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 56,
    name: 'pulseras triple y trenzada fina',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/jd7rzLwn/IMG-20260826-WA6788.jpg',
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
    name: 'pulseras nocturnas',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/7ZNP2fdL/IMG-20260826-WA9375.jpg',
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
    name: 'pulseras susurro',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/x1sDQHBw/IMG-20260826-WA9823.jpg',
    isNew: false,
    isFeatured: false
  },

  // ========= ARETES =========
  {
    id: 61,
    name: 'Aretes Zafiro Real',
    price: 1200,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop',
    isNew: false,
    isFeatured: true
  },
{
    id: 62,
    name: 'Aretes Gota de Luna',
    price: 890,
    material: 'Acero Quirúrgico',
    category: 'Aretes',
    image: 'https://images.unsplash.com/photo-1630019852942-f8920296fa05?w=400&h=400&fit=crop',
    isNew: true,
    isFeatured: false
  }
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
