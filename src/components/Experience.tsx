import SectionHeader from './SectionHeader'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

type Experience = {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
  achievements: string[]
}

export default function Experience() {
  const { t } = useTranslation()
  const experiences = t('experience.items', { returnObjects: true }) as Experience[]
  
  return (
    <section id="experience" className="section">
      <div className="container-max">
        <SectionHeader title={t('experience.title')} />
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="card card-hover p-8 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold gradient-text">{exp.title}</h3>
                    <p className="text-xl font-semibold text-white">{exp.company}</p>
                    <p className="text-primary font-medium">{exp.period}</p>
                  </div>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full lg:self-center"></div>
                </div>
                
                {/* Description */}
                <p className="text-lg text-muted leading-relaxed">{exp.description}</p>
                
                {/* Achievements */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {t('experience.achievementsTitle')}
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    {t('experience.technologiesTitle')}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-white hover:border-primary/40 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
