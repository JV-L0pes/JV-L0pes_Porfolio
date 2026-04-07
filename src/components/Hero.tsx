import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Hero(){
  const { t } = useTranslation()
  const words = t('hero.typing', { returnObjects: true }) as string[]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter effect funcional
  useEffect(() => {
    const currentWord = words[currentWordIndex]
    let timeoutId: number

    if (!isDeleting) {
      // Digitando
      if (displayText.length < currentWord.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
        }, 100)
      } else {
        // Pausa antes de deletar
        timeoutId = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
      }
    } else {
      // Deletando
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
      } else {
        // Próxima palavra
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      }
    }

    return () => clearTimeout(timeoutId)
  }, [currentWordIndex, displayText, isDeleting, words])

  // Parallax sutil
  const [y, setY] = useState(0)
  useEffect(()=>{
    const onScroll = () => setY(window.scrollY)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  },[])

  const contentY = useMemo(()=> y*0.25, [y])
  const imageY = useMemo(()=> y*-0.15, [y])

  return (
    <section id="home" className="section min-h-screen flex items-center">
      <div className="container-max grid lg:grid-cols-2 items-center gap-16">
        <motion.div 
          style={{ transform: `translateY(${contentY}px)` }} 
          initial={{ opacity:0, x:-50 }} 
          animate={{ opacity:1, x:0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              {t('hero.hello')} 
              <br />
              <span className="gradient-text">João Victor</span>
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold text-primary/90">
              {t('hero.role')}
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
              <div className="text-xl text-white font-medium min-h-[2.5rem] flex items-center">
                <span className="text-white font-semibold relative">
                  {displayText}
                  <motion.span
                    className="inline-block w-0.5 h-6 bg-primary ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  />
                </span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a className="btn btn-primary text-lg px-8 py-4" href="#projects">
                {t('hero.ctaProjects')}
              </a>
              <a className="btn btn-outline text-lg px-8 py-4" href="#contact">
                {t('hero.ctaContact')}
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center lg:justify-end" 
          style={{ transform: `translateY(${imageY}px)` }} 
          initial={{ opacity:0, scale:0.8 }} 
          animate={{ opacity:1, scale:1 }} 
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-20 scale-110"></div>
            <img 
              src="/pfp.jpg" 
              alt="João Victor Lopes" 
              className="relative w-[350px] h-[350px] rounded-full object-cover avatar-ring shadow-2xl" 
              onError={(e)=>{(e.target as HTMLImageElement).src='https://via.placeholder.com/350x350?text=JV+Lopes'}} 
            />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-30"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
