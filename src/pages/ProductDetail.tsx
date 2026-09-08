import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, MessageCircle, Share2, Heart, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { products } from '../data/products'

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isImageZoomed, setIsImageZoomed] = useState(false)

  const product = products.find(p => p.id === parseInt(id || '0'))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen bg-joyeria-crema flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold text-joyeria-oscuro mb-4">
            Producto no encontrado
          </h2>
          <button
            onClick={() => navigate('/productos')}
            className="px-6 py-3 bg-joyeria-oscuro text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Ver todos los productos
          </button>
        </div>
      </div>
    )
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleConsult = () => {
    const message = encodeURIComponent(`Hola! Me interesa el producto: ${product.name} ($${product.price.toLocaleString()})`)
    window.open(`https://www.instagram.com/vac.accessory/`, '_blank')
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: `Mira esta joya: ${product.name} - $${product.price.toLocaleString()}`,
          url: window.location.href
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('¡Enlace copiado al portapapeles!')
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
  }

  const productImages = [product.image]

  return (
    <div className="min-h-screen bg-joyeria-crema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-joyeria-texto hover:text-joyeria-oscuro transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Volver</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div 
              className={`relative bg-white rounded-lg overflow-hidden shadow-lg cursor-zoom-in ${
                isImageZoomed ? 'fixed inset-4 z-50 cursor-zoom-out' : 'aspect-square'
              }`}
              onClick={() => setIsImageZoomed(!isImageZoomed)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={productImages[currentImageIndex]}
                  alt={product.name}
                  className={`w-full ${isImageZoomed ? 'h-full' : 'h-full'} object-contain`}
                />
              </AnimatePresence>

              {productImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-joyeria-oscuro" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-joyeria-oscuro" />
                  </button>
                </>
              )}

              {isImageZoomed && (
                <div 
                  className="absolute inset-0 bg-black/50"
                  onClick={() => setIsImageZoomed(false)}
                />
              )}
            </div>

            {productImages.length > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${
                      currentImageIndex === index ? 'border-joyeria-oscuro' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            <p className="text-center text-sm text-joyeria-textoClaro mt-3">
              Click en la imagen para ampliar
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="px-3 py-1 bg-joyeria-dorado/20 text-joyeria-oscuro text-sm font-medium rounded-full">
                {product.category}
              </span>
              <div className="flex gap-2">
                <button className="p-2 rounded-full hover:bg-joyeria-beige transition-colors">
                  <Heart className="w-5 h-5 text-joyeria-texto hover:text-red-500 transition-colors" />
                </button>
                <button 
                  onClick={handleShare}
                  className="p-2 rounded-full hover:bg-joyeria-beige transition-colors"
                >
                  <Share2 className="w-5 h-5 text-joyeria-texto" />
                </button>
              </div>
            </div>

            {product.isNew && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-joyeria-oscuro text-white text-xs font-medium rounded-full w-fit mb-4">
                ✨ Nuevo
              </span>
            )}

            <h1 className="text-3xl md:text-4xl font-serif font-bold text-joyeria-oscuro mb-4">
              {product.name}
            </h1>

            <p className="text-3xl font-serif font-bold text-joyeria-dorado mb-6">
              ${product.price.toLocaleString()}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-joyeria-textoClaro font-medium w-24">Material:</span>
                <span className="text-joyeria-oscuro font-medium">{product.material}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-joyeria-textoClaro font-medium w-24">Categoría:</span>
                <span className="text-joyeria-oscuro font-medium">{product.category}</span>
              </div>
            </div>

            <div className="border-t border-joyeria-borde pt-6 mb-8">
              <p className="text-joyeria-textoClaro leading-relaxed">
                Pieza artesanal de alta calidad, diseñada con dedicación y amor. 
                Cada detalle está cuidado para brindarte una joya única que perdurará en el tiempo.
              </p>
            </div>

            <button
              onClick={handleConsult}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Consultá por este producto
            </button>

            <p className="text-center text-sm text-joyeria-textoClaro mt-4">
              Te responderemos por Instagram a la brevedad
            </p>

            <div className="mt-8 p-4 bg-joyeria-beige rounded-lg">
              <h3 className="font-serif font-semibold text-joyeria-oscuro mb-2">
                ¿Por qué elegirnos?
              </h3>
              <ul className="space-y-2 text-sm text-joyeria-textoClaro">
                <li className="flex items-center gap-2">
                  <span className="text-joyeria-dorado">✓</span> Joyería artesanal de calidad
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-joyeria-dorado">✓</span> Materiales premium garantizados
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-joyeria-dorado">✓</span> Atención personalizada
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-serif font-bold text-joyeria-oscuro mb-8">
              Productos Relacionados
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((related) => (
                <button
                  key={related.id}
                  onClick={() => navigate(`/producto/${related.id}`)}
                  className="group text-left"
                >
                  <div className="aspect-square overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                    <img
                      src={related.image}
                      alt={related.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-2 text-sm font-medium text-joyeria-oscuro group-hover:text-joyeria-dorado transition-colors">
                    {related.name}
                  </h3>
                  <p className="text-sm text-joyeria-dorado font-semibold">
                    ${related.price.toLocaleString()}
                  </p>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default ProductDetail
