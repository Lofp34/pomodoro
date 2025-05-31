interface CaseStudy {
  id: number;
  companyName: string;
  industry: string;
  result: string;
  resultNumber: string;
  quote: string;
  author: string;
  position: string;
  hasVideo: boolean;
  logo: string; // placeholder emoji for now
  backgroundColor: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    companyName: "TechSolutions Pro",
    industry: "Services IT",
    result: "+250% de CA en 8 mois",
    resultNumber: "250%",
    quote: "Laurent a transformé notre approche commerciale. Nos équipes sont enfin structurées et nos résultats parlent d'eux-mêmes.",
    author: "Marie Dubois",
    position: "Directrice Commerciale",
    hasVideo: true,
    logo: "💻",
    backgroundColor: "mint-green"
  },
  {
    id: 2,
    companyName: "InnovaB2B",
    industry: "Conseil en stratégie",
    result: "Processus de vente divisé par 2",
    resultNumber: "50%",
    quote: "Grâce à la méthode de Laurent, nous avons réduit notre cycle de vente de moitié tout en augmentant notre taux de conversion.",
    author: "Thomas Martin",
    position: "Fondateur & CEO",
    hasVideo: false,
    logo: "🎯",
    backgroundColor: "orange-soft"
  },
  {
    id: 3,
    companyName: "GrowthMakers",
    industry: "Marketing digital",
    result: "15 nouveaux clients/mois",
    resultNumber: "15",
    quote: "L&apos;accompagnement de Laurent nous a permis de structurer notre prospection. Nous générons maintenant 15 nouveaux clients par mois.",
    author: "Sophie Chen",
    position: "Responsable Développement",
    hasVideo: true,
    logo: "📈",
    backgroundColor: "blue-ink"
  }
];

export default function CaseStudiesSection() {
  return (
    <section id="cas-clients" className="py-20 bg-white dark:bg-gray-anthracite/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Titre */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-title font-bold text-blue-ink dark:text-primary-bg leading-tight">
            Ils l&apos;ont fait.
            <span className="block text-mint-green">Et cela a changé la donne.</span>
          </h2>
        </div>

        {/* Grille des cas clients */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div 
              key={study.id}
              className="bg-white dark:bg-gray-anthracite/40 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-slide-in-left group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* En-tête avec logo et entreprise */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 bg-${study.backgroundColor}/10 rounded-2xl flex items-center justify-center group-hover:bg-${study.backgroundColor}/20 transition-colors`}>
                  <span className="text-3xl">{study.logo}</span>
                </div>
                <div>
                  <h3 className="font-title font-bold text-blue-ink dark:text-primary-bg text-lg">
                    {study.companyName}
                  </h3>
                  <p className="font-body text-sm text-gray-anthracite dark:text-primary-bg/70">
                    {study.industry}
                  </p>
                </div>
              </div>

              {/* Résultat chiffré */}
              <div className="mb-6">
                <div className={`inline-block bg-${study.backgroundColor}/10 px-4 py-2 rounded-full mb-3`}>
                  <span className={`font-title font-bold text-${study.backgroundColor} text-lg`}>
                    {study.result}
                  </span>
                </div>
              </div>

              {/* Citation */}
              <blockquote className="mb-6">
                <p className="font-body text-gray-anthracite dark:text-primary-bg leading-relaxed italic mb-4">
                  &quot;{study.quote}&quot;
                </p>
                <footer>
                  <cite className="font-title font-semibold text-blue-ink dark:text-primary-bg not-italic">
                    {study.author}
                  </cite>
                  <p className="font-body text-sm text-gray-anthracite dark:text-primary-bg/70">
                    {study.position}
                  </p>
                </footer>
              </blockquote>

              {/* Vidéo témoignage (si disponible) */}
              {study.hasVideo && (
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-blue-ink/10 to-mint-green/10 rounded-xl flex items-center justify-center border-2 border-dashed border-mint-green/30 hover:border-mint-green/50 transition-colors cursor-pointer group/video">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-mint-green/20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover/video:bg-mint-green/30 transition-colors">
                        <svg className="w-6 h-6 text-mint-green" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="font-italic text-xs text-gray-anthracite dark:text-primary-bg/80">
                        Témoignage vidéo • 30s
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA pour voir plus de témoignages */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <button className="bg-mint-green hover:bg-mint-green/90 text-white font-title font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-mint-green/30 group">
            <span className="flex items-center gap-3">
              <span className="text-xl group-hover:animate-bounce-in">📊</span>
              Voir plus de témoignages
            </span>
          </button>
          <p className="mt-4 font-italic text-gray-anthracite dark:text-primary-bg/70">
            Découvrez comment d&apos;autres entreprises ont transformé leurs résultats
          </p>
        </div>

        {/* Statistiques globales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-mint-green/20">
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="text-3xl md:text-4xl font-title font-bold text-mint-green mb-2">50+</div>
            <p className="font-body text-gray-anthracite dark:text-primary-bg/80">Entreprises accompagnées</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
            <div className="text-3xl md:text-4xl font-title font-bold text-orange-soft mb-2">180%</div>
            <p className="font-body text-gray-anthracite dark:text-primary-bg/80">Croissance moyenne</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <div className="text-3xl md:text-4xl font-title font-bold text-blue-ink dark:text-mint-green mb-2">6 mois</div>
            <p className="font-body text-gray-anthracite dark:text-primary-bg/80">Délai moyen résultats</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '1.3s' }}>
            <div className="text-3xl md:text-4xl font-title font-bold text-mint-green mb-2">95%</div>
            <p className="font-body text-gray-anthracite dark:text-primary-bg/80">Clients satisfaits</p>
          </div>
        </div>
      </div>
    </section>
  );
} 