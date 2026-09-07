import { useState } from 'react'
import { Search, SlidersHorizontal, Heart, ShoppingBag, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { products, categories, getProductsByCategory } from '../data/products'

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = getProductsByCategory(selectedCategory)
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      return 0
    })

  const handleConsult = (productName: string) => {
    window.open(`https://www.instagram.com/vac.accessory/`, '_blank')
  }

  return (
    <div className="min-h-screen bg-joyeria-crema">
      {/* Header */}
      <div className="bg-joyeria-beige py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-joyeria-oscuro mb-4">
            Nuestra Colección
          </h1>
          <p className="text-joyeria-textoClaro max-w-2xl mx-auto">
            Descubre piezas únicas diseñadas para brillar en cada momento especial de tu vida.
          </p>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="sticky top-16 md:top-20 z-40 bg-white border-b border-joyeria-borde shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-joyeria-textoClaro" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-joyeria-borde rounded-md focus:outline-none focus:border-joyeria-dorado bg-joyeria-crema"
              />
            </div>

            {/* Desktop Filters */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      selectedCategory === category
                        ? 'bg-joyeria-oscuro text-white'
                        : 'bg-joyeria-crema text-joyeria-texto hover:bg-joyeria-arena'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-joyeria-borde rounded-md bg-joyeria-crema text-sm focus:outline-none focus:border-joyeria-dorado"
              >
                <option value="featured">Destacados</option>
                <option value="price-low">Precio: Menor a Mayor</option>
                <option value="price-high">Precio: Mayor a Menor</option>
              </select>
            </div>

            {/* Mobile Filter Button */}
            <button
              className="md:hidden flex items-center gap-2 px-4 py-2 bg-joyeria-crema border border-joyeria-borde rounded-md"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filtros
            </button>
          </div>

          {/* Mobile Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pt-4 border-t border-joyeria-borde"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        selectedCategory === category
                          ? 'bg-joyeria-oscuro text-white'
                          : 'bg-joyeria-crema text-joyeria-texto hover:bg-joyeria-arena'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 border border-joyeria-borde rounded-md bg-joyeria-crema text-sm focus:outline-none focus:border-joyeria-dorado"
                >
                  <option value="featured">Destacados</option>
                  <option value="price-low">Precio: Menor a Mayor</option>
                  <option value="price-high">Precio: Mayor a Menor</option>
                </select>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <p className="text-joyeria-textoClaro mb-6">
          Mostrando {filteredProducts.length} productos
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.isNew && (
                    <span className="absolute top-3 left-3 px-3 py-1 bg-joyeria-oscuro text-white text-xs font-medium rounded-full">
                      Nuevo
                    </span>
                  )}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-joyeria-crema transition-colors">
                      <Heart className="w-4 h-4 text-joyeria-oscuro" />
                    </button>
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-joyeria-crema transition-colors">
                      <ShoppingBag className="w-4 h-4 text-joyeria-oscuro" />
                    </button>
                  </div>
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

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-joyeria-textoClaro">No se encontraron productos.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products
