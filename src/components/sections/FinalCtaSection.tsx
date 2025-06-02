'use client';

import HubSpotForm from '@/components/HubSpotForm';
import { trackBusinessEvents } from '@/components/GoogleAnalytics';

export default function FinalCtaSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleCtaClick = (ctaName: string, sectionId?: string) => {
    // Tracking Google Analytics
    trackBusinessEvents.ctaClicked(ctaName, 'final_cta_section');
    
    // Navigation
    if (sectionId) {
      scrollToSection(sectionId);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-anthracite/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Titre principal */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-title font-bold text-blue-ink dark:text-primary-bg leading-tight">
            Prêt à remettre votre équipe commerciale
            <span className="block text-mint-green">en mouvement ?</span>
          </h2>
        </div>

        {/* CTA principal */}
        <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-gradient-to-br from-mint-green/5 to-blue-ink/5 rounded-3xl p-8 mb-8 shadow-xl border border-mint-green/20">
            <div className="max-w-2xl mx-auto">
              <div className="text-4xl mb-6">🚀</div>
              <h3 className="text-2xl md:text-3xl font-title font-bold text-blue-ink dark:text-primary-bg mb-4">
                Commençons par échanger 30 minutes
              </h3>
              <p className="text-lg font-body text-gray-anthracite dark:text-primary-bg/80 mb-8 leading-relaxed">
                Un simple appel pour comprendre vos enjeux, identifier les opportunités et voir comment nous pouvons travailler ensemble.
              </p>
              
              {/* Formulaire HubSpot intégré avec tracking */}
              <div className="bg-white/80 dark:bg-gray-anthracite/40 rounded-2xl p-6 mb-6">
                <div 
                  onFocus={() => trackBusinessEvents.ctaClicked('contact_form_focused', 'final_cta_section')}
                >
                  <HubSpotForm />
                </div>
              </div>

              {/* Alternative Calendly */}
              <div className="border-t border-mint-green/20 pt-6">
                <p className="text-sm font-body text-gray-anthracite dark:text-primary-bg/70 mb-4">
                  Ou choisissez directement un créneau dans mon agenda
                </p>
                <button 
                  onClick={() => {
                    handleCtaClick('hubspot_calendar_access');
                    window.open('https://meetings.hubspot.com/laurent34/rdv-laurent-45-mn-clone', '_blank');
                  }}
                  className="border-2 border-mint-green text-mint-green hover:bg-mint-green hover:text-white font-title font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 group"
                >
                  <span className="flex items-center gap-2">
                    <span className="group-hover:animate-bounce-in">📅</span>
                    Prenez rendez-vous directement dans mon agenda
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs secondaires */}
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {/* CTA Cas clients */}
          <div className="bg-orange-soft/5 border border-orange-soft/20 rounded-2xl p-6 text-center hover:bg-orange-soft/10 transition-all duration-300 hover:scale-[1.02] group">
            <div className="text-3xl mb-4 group-hover:animate-bounce-in">📊</div>
            <h3 className="font-title font-bold text-blue-ink dark:text-primary-bg mb-3">
              Voir les cas clients
            </h3>
            <p className="font-body text-gray-anthracite dark:text-primary-bg/80 text-sm mb-4">
              Découvrez comment d&apos;autres dirigeants ont transformé leurs équipes
            </p>
            <button 
              onClick={() => handleCtaClick('voir_cas_clients', 'cas-clients')}
              className="bg-orange-soft hover:bg-orange-soft/90 text-white font-title font-semibold px-6 py-2 rounded-full transition-colors cursor-pointer"
            >
              Explorer les témoignages
            </button>
          </div>

          {/* CTA Diagnostic */}
          <div className="bg-blue-ink/5 border border-blue-ink/20 rounded-2xl p-6 text-center hover:bg-blue-ink/10 transition-all duration-300 hover:scale-[1.02] group">
            <div className="text-3xl mb-4 group-hover:animate-bounce-in">🎯</div>
            <h3 className="font-title font-bold text-blue-ink dark:text-primary-bg mb-3">
              Faire le diagnostic
            </h3>
            <p className="font-body text-gray-anthracite dark:text-primary-bg/80 text-sm mb-4">
              Évaluez votre maturité commerciale en 2 minutes
            </p>
            <button 
              onClick={() => handleCtaClick('lancer_diagnostic', 'diagnostic')}
              className="bg-blue-ink hover:bg-blue-ink/90 text-white font-title font-semibold px-6 py-2 rounded-full transition-colors cursor-pointer"
            >
              Lancer le test gratuit
            </button>
          </div>
        </div>

        {/* Réassurance finale */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl mb-2">⏱️</div>
              <p className="font-body text-sm text-gray-anthracite dark:text-primary-bg/80">
                Premier échange gratuit
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🤝</div>
              <p className="font-body text-sm text-gray-anthracite dark:text-primary-bg/80">
                Aucun engagement
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🎯</div>
              <p className="font-body text-sm text-gray-anthracite dark:text-primary-bg/80">
                Solutions sur mesure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 