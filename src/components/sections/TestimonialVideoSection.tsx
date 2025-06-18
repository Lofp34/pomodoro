'use client';

import Button from "@/components/ui/Button";

const testimonials = [
  {
    icon: '💻',
    title: 'Expertise Commerciale + Accompagnement en Vente',
    result: '+50% Objectifs Atteints & Adhérents Doublés',
    quote: 'Grâce à l\'accompagnement de Laurent sur la performance commerciale, nous avons obtenu une progression de plus de 50 % des objectifs réalisés sur le dernier semestre. Concrètement, nous avons doublé notre nombre d\'adhérents. Je recommande de suivre une formation avec Laurent, car ça vaut vraiment le coup !',
    author: 'Marc Dupont',
    role: 'Directeur Commercial',
    video: 'Témoignage vidéo • 30s',
  },
  {
    icon: '🎯',
    title: 'Dynamique Business Formation Commerciale',
    result: '+40% CA & +90% en 2 mois',
    quote: 'Cette formation m\'a appris à apprécier le commerce. Au niveau des chiffres, c\'est là que ça a bien explosé : j\'ai fait plus 40 % de chiffre d\'affaires ! Et ce n\'est pas tout, sur les deux derniers mois, nous sommes sur une évolution de plus 90 % par rapport à l\'année dernière, ce qui est quand même assez dingue.',
    author: 'Léa Bernard',
    role: 'Fondatrice & CEO',
    video: '',
  },
  {
    icon: '📈',
    title: 'Stratégies Vente Pro Optimisation Commerciale',
    result: '+39% Objectif CA & +50% Chiffre Personnel',
    quote: 'J\'ai suivi le parcours de perfectionnement avec Laurent Serre pour booster mes compétences commerciales. Les résultats sont là : sur la clôture du dernier trimestre fiscal, nous avons réalisé une progression de 39 % des chiffres d\'affaires par rapport à l\'objectif. Ce dernier semestre, j\'ai réussi à augmenter mon chiffre de 50 % grâce à son accompagnement, la structuration du parcours et son aide pour structurer notre plan de vente.',
    author: 'Clémentine Dubois',
    role: 'Responsable Développement Commercial',
    video: '',
  },
];

export default function TestimonialVideoSection() {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Image de fond */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/tableau-de-bord.jpeg)',
        }}
      />
      
      {/* Overlay pour la lisibilité */}
      <div className="absolute inset-0 bg-primary-bg/90 dark:bg-blue-ink/90" />
      
      {/* Contenu par-dessus le fond */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Titre de la section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-title font-bold text-blue-ink dark:text-primary-bg leading-tight mb-4">
            Ils témoignent de la
            <span className="block text-mint-green">transformation</span>
          </h2>
          <p className="text-lg font-body text-gray-anthracite dark:text-primary-bg/80 max-w-2xl mx-auto">
            Découvrez comment nos clients ont révolutionné leurs performances commerciales
          </p>
        </div>

        {/* Témoignages */}
        <div className="space-y-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/95 dark:bg-gray-anthracite/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl animate-fade-in-up" style={{ animationDelay: `${0.2 + i * 0.2}s` }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-mint-green/20 rounded-full flex items-center justify-center text-2xl sm:text-3xl">
                  {t.icon}
                </div>
                <div>
                  <h3 className="font-title font-bold text-blue-ink dark:text-primary-bg text-lg sm:text-xl">{t.title}</h3>
                  <p className="font-body text-mint-green font-semibold text-sm sm:text-base">{t.result}</p>
                </div>
              </div>
              <blockquote className="text-gray-anthracite dark:text-primary-bg/90 font-italic text-lg leading-relaxed mb-4">“{t.quote}”</blockquote>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="font-title font-bold text-blue-ink dark:text-primary-bg text-base">
                  {t.author} <span className="font-normal text-gray-anthracite dark:text-primary-bg/70">{t.role}</span>
                </div>
                {t.video && <span className="text-xs text-mint-green font-body">{t.video}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* CTA optionnel */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="font-body text-gray-anthracite dark:text-primary-bg/70 mb-4">
            Vous aussi, transformez vos résultats commerciaux
          </p>
          <Button 
            variant="secondary"
            icon="📞"
            onClick={() => window.open('https://meetings.hubspot.com/laurent34/rdv-laurent-45-mn-clone', '_blank')}
            className="bg-mint-green/10 hover:bg-mint-green/20 border-2 border-mint-green text-mint-green backdrop-blur-sm"
          >
            Échanger avec Laurent
          </Button>
        </div>
      </div>
    </section>
  );
} 