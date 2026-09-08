// ============================================
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
    name: 'Anillo perla roja',
    price: 2500,
    material: 'acero quirurjico',
    category: 'Anillos',
    image: 'https://drive.google.com/file/d/1D3bUk9zcqfXbK29SDNVDO1bXIcc4_Ue3/view?usp=drive_link',
    isNew: true,
    isFeatured: true
  },
  {
    id: 2,
    name: 'Anillo Solitario Brillante',
    price: 3200,
    material: 'Plata de Ley',
    category: 'Anillos',
    image: 'https://drive.google.com/file/d/1z3aiT9xXnqb_MKV1DFXdQz_6ZEr0JIqk/view',
    isNew: false,
    isFeatured: false
  },
  {
    id: 3,
    name: 'Anillo Solitario Brillante',
    price: 3200,
    material: 'Plata de Ley',
    category: 'Anillos',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop',
    isNew: false,
    isFeatured: false
  },

  // ========= COLLARES =========
  {
    id: 4,
    name: 'Collar simple',
    price: 1800,
    material: 'Acero Quirúrgico',
    category: 'Collares',
    image: 'https://i.postimg.cc/TYzs8CK6/IMG-20260826-WA1956.jpg',
    isNew: false,
    isFeatured: true
  },
  {
    id: 5,
    name: 'Collar Con bolitas',
    price: 1450,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/8cqZSzPF/IMG-20260826-WA3714.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 6,
    name: 'Collar estilo van cleef',
    price: 1450,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/QtzbQd7w/IMG-20260826-WA5781.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 7,
    name: 'Collar puntillismo',
    price: 1450,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/gj9M9001/IMG-20260826-WA5732.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 8,
    name: 'Collar corazon brillante',
    price: 1450,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/Ssc6MfyD/IMG-20260826-WA6095.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 9,
    name: 'Collar corazon grande',
    price: 1450,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/wjPL4GMG/IMG-20260826-WA6791.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 10,
    name: 'Collar cero blanco',
    price: 1450,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/FK3dWF2X/IMG-20260826-WA7983.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 11,
    name: 'Collar trenzado',
    price: 1450,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/L65qd3rg/IMG-20260826-WA8005.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 12,
    name: 'Collar corazon arcoiris',
    price: 1450,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/FK3dWF2X/IMG-20260826-WA7983.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 13,
    name: 'Collar estrella lunar',
    price: 1450,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/W4wpqdB0/IMG-20260826-WA8927.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 14,
    name: 'Collar san benito',
    price: 1450,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/5tbbJxXy/IMG-20260826-WA9070.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 15,
    name: 'combo estrellado',
    price: 1450,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://i.postimg.cc/QCWR5PBr/IMG-20260826-WA9266.jpg',
    isNew: true,
    isFeatured: false
  },
{
    id: 16,
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
    id: 17,
    name: 'pulsera corazon azul',
    price: 8000,
    material: 'Acero blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/d1qRwkCX/file-000000007b98820eb355040a22ee38fe.png',
    isNew: true,
    isFeatured: true
  },
  {
    id: 18,
    name: 'pulsera geometrica',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/SKV2LZ2n/file-000000008210820eaa6545596734ccc0.png',
    isNew: false,
    isFeatured: false
  },
{
    id: 19,
    name: 'pulsera estilo van cleef plateada',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/c6qr12j7/file-00000000b8b0820eb496cccf023de5a3.png',
    isNew: false,
    isFeatured: false
  },
{
    id: 20,
    name: 'pulsera rio de estrellas',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/6QHV66hd/IMG-20260826-WA1509.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 21,
    name: 'pulsera eterna',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/vmDgzrWt/IMG-20260826-WA2105.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 22,
    name: 'multiples pulseras gruesas',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/pV5SS326/IMG-20260826-WA2487.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 23,
    name: 'pulsera corazon gruesa',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/QxrfytYd/IMG-20260826-WA3235.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 24,
    name: 'pulsera triple y arcoiris',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/zvwFrCtM/IMG-20260826-WA3427.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 25,
    name: 'pulsera lunar gruesa',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/W116BJGs/IMG-20260826-WA5004.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 26,
    name: 'pulsera cuarzo',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/pr1Xy76k/IMG-20260826-WA5393.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 27,
    name: 'pulseras eclipse',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/T3nfXpfn/IMG-20260826-WA6251.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 28,
    name: 'pulseras eclipse',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/T3nfXpfn/IMG-20260826-WA6251.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 29,
    name: 'pulseras triple y trenzada fina',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/jd7rzLwn/IMG-20260826-WA6788.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 30,
    name: 'pulseras genesis',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/Th8FkJLh/IMG-20260826-WA8991.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 31,
    name: 'pulseras nocturnas',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/7ZNP2fdL/IMG-20260826-WA9375.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 32,
    name: 'pulsera corazon de hielo',
    price: 8100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://i.postimg.cc/fTfQH1K1/IMG-20260826-WA9671.jpg',
    isNew: false,
    isFeatured: false
  },
{
    id: 33,
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
    id: 34,
    name: 'Aretes Zafiro Real',
    price: 1200,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop',
    isNew: false,
    isFeatured: true
  },
  {
    id: 35,
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
