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
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop',
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
    name: 'Collar Perlas Clásicas',
    price: 1800,
    material: 'Acero Quirúrgico',
    category: 'Collares',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4e8b?w=400&h=400&fit=crop',
    isNew: false,
    isFeatured: true
  },
  {
    id: 5,
    name: 'Collar Corazón Dorado',
    price: 1450,
    material: 'Acero Dorado',
    category: 'Collares',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83f833e?w=400&h=400&fit=crop',
    isNew: true,
    isFeatured: false
  },

  // ========= PULSERAS =========
  {
    id: 6,
    name: 'Pulsera Oro Rosa',
    price: 950,
    material: 'Acero Dorado',
    category: 'Pulseras',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop',
    isNew: true,
    isFeatured: true
  },
  {
    id: 7,
    name: 'Pulsera Tennis Elegante',
    price: 2100,
    material: 'Acero Blanco',
    category: 'Pulseras',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop',
    isNew: false,
    isFeatured: false
  },

  // ========= ARETES =========
  {
    id: 8,
    name: 'Aretes Zafiro Real',
    price: 1200,
    material: 'Acero Blanco',
    category: 'Aretes',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop',
    isNew: false,
    isFeatured: true
  },
  {
    id: 9,
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
