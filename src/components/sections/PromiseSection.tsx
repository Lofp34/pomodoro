'use client';

import { useState } from 'react';

export default function PromiseSection() {
  const [activePopup, setActivePopup] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const promises = [
    {
      icon: "🎯",
      text: "Une stratégie claire, adaptée à votre secteur",
      delay: "0s",
      popup: {
        title: "Sales Playbook complet sur mesure",
        content: "Structuration d'une dynamique de prospection ambitieuse avec définition des 3 canaux de prospection adaptés à votre secteur. Création d'un script d'entretien structuré complet : prise de contact → découverte → argumentation → objections → closing → suivi.",
        highlights: ["3 canaux prospection définis", "Scripts sur mesure", "Codes vente haute valeur", "Méthodologie éprouvée"]
      }
    },
    {
      icon: "👥",
      text: "Une équipe formée, structurée, et engagée",
      delay: "0.2s",
      popup: {
        title: "Formation terrain + coaching individuel",
        content: "Audit individuel (1h/commercial) + formation collective (4h) pour renforcer les compétences sur les entretiens de vente. Développement du mindset commercial avec coaching continu (2 sessions/personne) pour assurer la montée en compétence individuelle.",
        highlights: ["Audit personnalisé", "Formation entretiens vente", "Mindset commercial", "Coaching 1-to-1"]
      }
    },
    {
      icon: "📈",
      text: "Des résultats concrets, visibles dès les premières semaines",
      delay: "0.4s",
      popup: {
        title: "Performance = Activité × Compétence",
        content: "Suivi objectif avec indicateurs précis : nombre de RDV pris, propositions envoyées, taux de validation, panier moyen. Premier programme permettant un suivi objectif des commerciaux avec alignement continu sur la performance.",
        highlights: ["Indicateurs mesurables", "Suivi objectif", "Résultats quantifiés", "Performance optimisée"]
      }
    },
    {
      icon: "🤖",
      text: "L'intégration des outils d'IA… quand cela fait vraiment du sens",
      delay: "0.6s",
      popup: {
        title: "Agent GPT d'autocoaching intégré",
        content: "Outil IA sur mesure incluant : génération de propositions commerciales ultra-affûtées, coaching post-entretien structuré, plans de suivi personnalisés, comptes-rendus CRM enrichis, et ajustements du plan de vente selon le terrain.",
        highlights: ["Propositions IA", "Coaching automatisé", "CRM optimisé", "Booster performance"]
      }
    }
  ];

  const handleCardClick = (index: number) => {
    setActivePopup(activePopup === index ? null : index);
  };

  const handleMouseEnter = (index: number) => {
    if (window.innerWidth >= 768) { // Desktop only
      setActivePopup(index);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) { // Desktop only
      setActivePopup(null);
    }
  };

  return (
    <section className="py-20 bg-primary-bg dark:bg-blue-ink">
      <div className="max-w-6xl mx-auto px-6">
        {/* Titre */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-title font-bold text-blue-ink dark:text-primary-bg leading-tight">
            Ce que nous allons changer,
            <span className="block text-mint-green">ensemble</span>
          </h2>
        </div>

        {/* Liste des promesses */}
        <div className="max-w-4xl mx-auto space-y-8 mb-12">
          {promises.map((promise, index) => (
            <div 
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div 
                className="flex items-start gap-6 p-6 bg-white/80 dark:bg-gray-anthracite/40 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-slide-in-left group cursor-pointer md:cursor-default"
                style={{ animationDelay: promise.delay }}
                onClick={() => handleCardClick(index)}
              >
                {/* Checkmark et icône */}
                <div className="flex-shrink-0 flex items-center gap-4">
                  <div className="w-8 h-8 bg-mint-green rounded-full flex items-center justify-center group-hover:animate-bounce-in">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-3xl" style={{ animationDelay: promise.delay }}>
                    {promise.icon}
                  </span>
                </div>
                
                {/* Texte */}
                <div className="flex-1 flex items-center justify-between">
                  <p className="text-xl md:text-2xl font-body text-blue-ink dark:text-primary-bg leading-relaxed">
                    {promise.text}
                  </p>
                  
                  {/* Indicateur de contenu détaillé - Version desktop */}
                  <div className="hidden md:flex items-center ml-4">
                    <div className={`w-8 h-8 bg-mint-green/10 border-2 border-mint-green rounded-full flex items-center justify-center text-mint-green transition-all duration-300 group-hover:bg-mint-green group-hover:text-white ${index === 0 ? 'animate-pulse' : ''}`}>
                      <span className="text-sm font-bold">ⓘ</span>
                    </div>
                  </div>
                  
                  {/* Indicateur de contenu détaillé - Version mobile */}
                  <div className="md:hidden flex items-center ml-4">
                    <div className={`w-8 h-8 bg-mint-green/10 border-2 border-mint-green rounded-full flex items-center justify-center text-mint-green transition-all duration-300 ${index === 0 ? 'animate-pulse' : ''}`}>
                      <span className="text-lg">
                        {activePopup === index ? '−' : '+'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Popup détaillé */}
              {activePopup === index && (
                <div className="absolute top-full left-0 right-0 mt-4 bg-white dark:bg-gray-anthracite border-2 border-mint-green rounded-2xl p-6 shadow-2xl z-10 animate-fade-in-up">
                  <div className="space-y-4">
                    <h4 className="text-xl font-title font-bold text-blue-ink dark:text-primary-bg">
                      {promise.popup.title}
                    </h4>
                    <p className="font-body text-gray-anthracite dark:text-primary-bg/90 leading-relaxed">
                      {promise.popup.content}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {promise.popup.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-mint-green rounded-full"></div>
                          <span className="font-body text-sm text-blue-ink dark:text-primary-bg/80">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Flèche pointer vers la carte */}
                  <div className="absolute -top-2 left-8 w-4 h-4 bg-white dark:bg-gray-anthracite border-l-2 border-t-2 border-mint-green transform rotate-45"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Micro-CTA subtil */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="inline-block">
            <button 
              onClick={() => scrollToSection('diagnostic')}
              className="bg-mint-green/10 hover:bg-mint-green/20 border-2 border-mint-green text-mint-green font-title font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <span className="group-hover:animate-bounce-in">🔍</span>
                Faire le diagnostic
              </span>
            </button>
          </div>
          <p className="mt-4 font-italic text-gray-anthracite dark:text-primary-bg/70 text-sm">
            Découvrez où vous en êtes vraiment
          </p>
        </div>
      </div>
    </section>
  );
} 