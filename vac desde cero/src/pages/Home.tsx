import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Award, Heart, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { products, getFeaturedProducts, categories } from '../data/products'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const Home = () => {
  const featuredProducts = getFeaturedProducts()

  const categoryImages: Record<string, string> = {
    'Anillos': 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=300&h=400&fit=crop',
    'Collares': 'https://images.unsplash.com/photo-1599643477877-530eb83f833e?w=300&h=400&fit=crop',
    'Pulseras': 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=300&h=400&fit=crop',
    'Aretes': 'https://images.unsplash.com/photo-1630019852942-f8920296fa05?w=300&h=400&fit=crop'
  }

  const categoryCounts = categories.slice(1).map(cat => ({
    name: cat,
    count: products.filter(p => p.category === cat).length,
    image: categoryImages[cat] || ''
  }))

  const features = [
    { icon: Sparkles, title: 'Diseño Exclusivo', description: 'Cada pieza es única y diseñada artesanalmente' },
    { icon: Award, title: 'Calidad Premium', description: 'Materiales de la más alta calidad garantizados' },
    { icon: Heart, title: 'Hecho con Amor', description: 'Elaborado por artesanos expertos' }
  ]

  const handleConsult = (productName: string) => {
    window.open(`https://www.instagram.com/vac.accessory/`, '_blank')
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-joyeria-crema via-joyeria-beige to-joyeria-arena">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 bg-joyeria-dorado/20 text-joyeria-oscuro text-sm font-medium rounded-full mb-6">
                Nueva Colección 2025
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-joyeria-oscuro leading-tight mb-6">
                Elegancia que
                <span className="block text-joyeria-dorado">Trasciende el Tiempo</span>
              </h1>
              <p className="text-lg text-joyeria-textoClaro mb-8 max-w-lg">
                Descubre nuestra exclusiva colección de joyería artesanal, donde cada pieza cuenta una historia de amor y dedicación.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/productos"
                  className="inline-flex items-center justify-center px-8 py-3 bg-joyeria-oscuro text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
                >
                  Ver Colección
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-joyeria-oscuro text-joyeria-oscuro font-medium rounded-md hover:bg-joyeria-oscuro hover:text-white transition-colors"
                >
                  Contáctanos
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=700&fit=crop"
                  alt="Joyería elegante"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-joyeria-dorado/30 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-joyeria-rosa/40 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-joyeria-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-joyeria-oscuro mb-4">
              Nuestras Categorías
            </h2>
            <p className="text-joyeria-textoClaro max-w-2xl mx-auto">
              Explora nuestra amplia selección de joyas diseñadas para cada ocasión especial.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categoryCounts.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to="/productos"
                  className="group relative block overflow-hidden rounded-lg aspect-[3/4]"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-serif text-lg md:text-xl font-semibold">{category.name}</h3>
                    <p className="text-gray-300 text-sm">{category.count} productos</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-joyeria-crema">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-joyeria-oscuro mb-4">
              Productos Destacados
            </h2>
            <p className="text-joyeria-textoClaro max-w-2xl mx-auto">
              Las piezas más elegidas por nuestros clientes, diseñadas para brillar en cada momento.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-joyeria-dorado font-medium uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="text-base font-serif font-semibold text-joyeria-oscuro mt-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-joyeria-textoClaro mt-1">
                      {product.material}
                    </p>
                    <p className="text-lg font-semibold text-joyeria-oscuro mt-2">
                      ${product.price.toLocaleString()}
                    </p>
                    <button
                      onClick={() => handleConsult(product.name)}
                      className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-medium rounded-md hover:opacity-90 transition-opacity"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Consultá
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/productos"
              className="inline-flex items-center px-8 py-3 bg-joyeria-oscuro text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
            >
              Ver Toda la Colección
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - Centrado con 3 elementos */}
      <section className="py-16 md:py-24 bg-joyeria-arena">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-joyeria-dorado/20 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-joyeria-oscuro" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-joyeria-oscuro mb-2">
                  {feature.title}
                </h3>
                <p className="text-joyeria-textoClaro text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-joyeria-oscuro text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              ¿Lista para encontrar tu pieza perfecta?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Visita nuestra tienda o agenda una cita personalizada con nuestros expertos.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center px-8 py-3 bg-joyeria-dorado text-joyeria-oscuro font-medium rounded-md hover:bg-joyeria-arena transition-colors"
            >
              Contáctanos
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
