import { Globe, Mail, Phone } from 'lucide-react'
import LogoMark from '../components/LogoMark'

function FooterSection({ branding }) {
  return (
    <footer className="section-pad pb-10 pt-6">
      <div className="container-wide">
        <div className="glass rounded-3xl p-6">
          <div className="grid gap-6 text-left md:grid-cols-4">
            <div>
              <LogoMark logoSrc={branding.logoSrc} companyName={branding.companyName} className="h-14 w-14" showText />
              <p className="mt-3 text-sm text-[color:var(--text-soft)]">Cloud engineering, application modernization, DevOps automation, and FinOps optimization.</p>
            </div>

            <div>
              <p className="section-title mb-2 text-sm font-semibold uppercase tracking-[0.14em]">Quick Links</p>
              <ul className="space-y-2 text-sm text-[color:var(--text-soft)]">
                <li><a href="#services">Services</a></li>
                <li><a href="#technology">Technology</a></li>
                <li><a href="#case-studies">Case Studies</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div>
              <p className="section-title mb-2 text-sm font-semibold uppercase tracking-[0.14em]">Core Services</p>
              <ul className="space-y-2 text-sm text-[color:var(--text-soft)]">
                <li>Azure Cloud Services</li>
                <li>Kubernetes & AKS</li>
                <li>Platform Engineering</li>
                <li>FinOps Optimization</li>
              </ul>
            </div>

            <div>
              <p className="section-title mb-2 text-sm font-semibold uppercase tracking-[0.14em]">Connect</p>
              <ul className="space-y-2 text-sm text-[color:var(--text-soft)]">
                <li>contact@slcsgtech.com</li>
                <li>+91 98765 43210</li>
                <li>Bangalore, India</li>
              </ul>
              <div className="mt-4 flex gap-2">
                <a href="#" aria-label="Website" className="glass rounded-full p-2"><Globe size={16} /></a>
                <a href="mailto:contact@slcsgtech.com" aria-label="Email" className="glass rounded-full p-2"><Mail size={16} /></a>
                <a href="tel:+919876543210" aria-label="Phone" className="glass rounded-full p-2"><Phone size={16} /></a>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-sky-300/20 pt-4 text-center text-xs text-[color:var(--text-soft)]">
            Copyright {new Date().getFullYear()} {branding.companyName}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
