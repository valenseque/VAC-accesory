import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      // Crear el enlace mailto con toda la información
      const subject = encodeURIComponent(`Consulta desde VAC Accessory - ${formData.name}`)
      const body = encodeURIComponent(
        `Nombre: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Teléfono: ${formData.phone}\n\n` +
        `Mensaje:\n${formData.message}`
      )
      
      // Abrir el cliente de correo
      window.location.href = `mailto:sequeiravalen87@gmail.com?subject=${subject}&body=${body}`
      
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch {
      setError('Hubo un error. Por favor intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    { icon: MapPin, title: 'Dirección', content: 'Jose Maria Paz 634' },
    { icon: Phone, title: 'Teléfono', content: '2395 424940' },
    { icon: Mail, title: 'Email', content: 'sequeiravalen87@gmail.com' }
  ]

  return (
    <div className="min-h-screen bg-joyeria-crema">
      {/* Header */}
      <section className="py-12 md:py-16 bg-joyeria-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-joyeria-oscuro mb-4">
            Contáctanos
          </h1>
          <p className="text-joyeria-textoClaro max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Escríbenos y te responderemos a la brevedad.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-serif font-bold text-joyeria-oscuro mb-6">
                Envíanos un Mensaje
              </h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-green-600">
                    Se abrirá tu cliente de correo para enviar el mensaje. ¡Gracias por contactarnos!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-joyeria-oscuro mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-joyeria-borde rounded-md focus:outline-none focus:border-joyeria-dorado bg-white"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-joyeria-oscuro mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-joyeria-borde rounded-md focus:outline-none focus:border-joyeria-dorado bg-white"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-joyeria-oscuro mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-joyeria-borde rounded-md focus:outline-none focus:border-joyeria-dorado bg-white"
                        placeholder="2395 424940"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-joyeria-oscuro mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-joyeria-borde rounded-md focus:outline-none focus:border-joyeria-dorado bg-white resize-none"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-3 bg-joyeria-oscuro text-white font-medium rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-serif font-bold text-joyeria-oscuro mb-6">
                Información de Contacto
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-joyeria-dorado/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-joyeria-oscuro" />
                    </div>
                    <div>
                      <h3 className="font-medium text-joyeria-oscuro">{info.title}</h3>
                      <p className="text-joyeria-textoClaro">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Instagram CTA */}
              <div className="mt-8 p-6 bg-joyeria-beige rounded-lg">
                <h3 className="text-lg font-serif font-semibold text-joyeria-oscuro mb-3">
                  Síguenos en Instagram
                </h3>
                <p className="text-joyeria-textoClaro text-sm mb-4">
                  Mira nuestras últimas creaciones y novedades en nuestro perfil.
                </p>
                <a
                  href="https://www.instagram.com/vac.accessory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-medium rounded-md hover:opacity-90 transition-opacity"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @vac.accessory
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
