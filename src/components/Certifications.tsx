import SectionHeader from './SectionHeader'
import { useTranslation } from 'react-i18next'

type Cert = { title: string, org: string, desc: string, url: string }

export default function Certifications(){
  const { t } = useTranslation()
  const certs = t('certifications.items', { returnObjects: true }) as Cert[]
  return (
    <section id="certifications" className="section">
      <div className="container-max">
        <SectionHeader title={t('certifications.title')} />
        <div className="grid md:grid-cols-3 gap-6">
          {certs.map(c => (
            <a key={c.title} href={c.url} target="_blank" rel="noreferrer" className="card card-hover p-6 flex flex-col">
              <h3 className="text-xl text-primary mb-2">{c.title}</h3>
              <p className="text-muted mb-2">{c.org}</p>
              <p className="flex-1">{c.desc}</p>
              <span className="btn btn-outline mt-4 self-start">{t('certifications.view')}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
