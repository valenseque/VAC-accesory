import { motion } from 'framer-motion'
import { Award, Heart, Users, Gem } from 'lucide-react'

const About = () => {
  const stats = [
    { number: '15+', label: 'Años de Experiencia' },
    { number: '10K+', label: 'Clientes Felices' },
    { number: '500+', label: 'Diseños Únicos' },
    { number: '100%', label: 'Artesanal' }
  ]

  const values = [
    {
      icon: Gem,
      title: 'Calidad Premium',
      description: 'Utilizamos solo los materiales más finos y piedras preciosas certificadas en cada pieza.'
    },
    {
      icon: Heart,
      title: 'Pasión Artesanal',
      description: 'Cada joya es creada con dedicación y amor por nuestros maestros artesanos.'
    },
    {
      icon: Users,
      title: 'Atención Personal',
      description: 'Brindamos una experiencia única y personalizada a cada cliente.'
    },
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Comprometidos con los más altos estándares de calidad y servicio.'
    }
  ]

  return (
    <div className="min-h-screen bg-joyeria-crema">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-joyeria-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-joyeria-oscuro mb-6">
                Nuestra Historia
              </h1>
              <p className="text-joyeria-textoClaro mb-6 leading-relaxed">
                Desde 2010, en VAC Accessory hemos dedicado nuestra pasión a crear joyas que cuentan historias. 
                Cada pieza es el resultado de años de experiencia, tradición artesanal y un compromiso 
                inquebrantable con la excelencia.
              </p>
              <p className="text-joyeria-textoClaro leading-relaxed">
                Nuestro taller combina técnicas tradicionales de joyería con diseños contemporáneos, 
                creando piezas únicas que trascienden generaciones. Creemos que cada joya debe ser 
                tan especial como la persona que la lleva.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=500&fit=crop"
                alt="Artesano trabajando"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-joyeria-dorado/30 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-joyeria-oscuro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-joyeria-oscuro mb-4">
              Nuestros Valores
            </h2>
            <p className="text-joyeria-textoClaro max-w-2xl mx-auto">
              Los principios que guían cada pieza que creamos.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-joyeria-dorado/20 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-joyeria-oscuro" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-joyeria-oscuro mb-2">
                  {value.title}
                </h3>
                <p className="text-joyeria-textoClaro text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-joyeria-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-joyeria-oscuro mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-joyeria-textoClaro max-w-2xl mx-auto">
              Maestros artesanos dedicados a crear obras de arte que perduran.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'María García', role: 'Directora Creativa', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop' },
              { name: 'Carlos López', role: 'Maestro Joyero', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop' },
              { name: 'Ana Martínez', role: 'Diseñadora Principal', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-serif font-semibold text-joyeria-oscuro">
                    {member.name}
                  </h3>
                  <p className="text-joyeria-dorado text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
