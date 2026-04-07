import SectionHeader from './SectionHeader'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

type Project = {
  title: string
  desc: string
  demo: string
  technologies: string[]
}

export default function Projects(){
  const { t } = useTranslation()
  const projects = t('projects.items', { returnObjects: true }) as Project[]

  return (
    <section id="projects" className="section">
      <div className="container-max">
        <SectionHeader title={t('projects.title')} />
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((p, index) => (
            <motion.div 
              key={p.title} 
              className="card card-hover p-8 flex flex-col group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 flex-1">
                {/* Header */}
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-2xl font-bold gradient-text">{p.title}</h3>
                </div>
                
                {/* Description */}
                <p className="text-lg text-muted leading-relaxed">{p.desc}</p>
                
                {/* Technologies */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {t('projects.technologiesTitle')}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {p.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-white hover:border-primary/40 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
                  {/* Actions */}
                  <div className="mt-8 flex justify-center">
                    <a
                      className="btn btn-primary text-lg px-10 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      rel="noreferrer"
                      target="_blank"
                      href={p.demo}
                    >
                      {t('projects.cta')}
                    </a>
                  </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
