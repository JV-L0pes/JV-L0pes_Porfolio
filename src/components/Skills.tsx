import SectionHeader from './SectionHeader'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const groups = [
  { 
    key: 'frontend', 
    items: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' }
    ] 
  },
  { 
    key: 'backend', 
    items: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
    ] 
  },
  { 
    key: 'ai_automation', 
    items: [
      { name: 'n8n', icon: 'https://n8n.io/favicon.ico' },
      { name: 'OpenAI', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
      { name: 'Machine Learning', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'Computer Vision', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
      { name: 'YOLOv5 / YOLOv8', icon: 'https://ultralytics.com/favicon.ico' },
      { name: 'LLMs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' }
    ] 
  },
  { 
    key: 'tools', 
    items: [
      { name: 'Git/GitHub', icon: 'https://img.icons8.com/color/48/000000/github.png' },
      { name: 'Jira', icon: 'https://img.icons8.com/color/48/000000/jira.png' },
      { name: 'Docker', icon: 'https://img.icons8.com/color/48/000000/docker.png' },
      { name: 'CI/CD', icon: 'https://img.icons8.com/color/48/000000/github.png' },
      { name: 'Linux', icon: 'https://img.icons8.com/color/48/000000/linux.png' }
    ] 
  },
]

export default function Skills(){
  const { t } = useTranslation()
  return (
    <section id="skills" className="section">
      <div className="container-max">
        <SectionHeader title={t('skills.title')} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {groups.map((g, groupIndex) => (
            <motion.div 
              key={g.key} 
              className="card card-hover p-8 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <h3 className="text-xl font-bold gradient-text">{t(`skills.${g.key}`)}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {g.items.map((item, itemIndex) => (
                    <motion.div 
                      key={item.name} 
                      className="flex items-center gap-3 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300 group"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: (groupIndex * 0.1) + (itemIndex * 0.05) }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <img 
                        src={item.icon} 
                        alt={item.name}
                        className="w-6 h-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      <span className="text-muted font-medium text-sm">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="card card-hover p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center gap-3">
              <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              <h3 className="text-3xl font-bold gradient-text">{t('skills.soft')}</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {(t('skills.softItems', { returnObjects: true }) as string[]).map((s, index) => (
                <motion.div 
                  key={s} 
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20 text-center group-hover:border-primary/40 transition-all duration-300">
                    <span className="text-white font-medium">{s}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
