'use client';

export default function TestimonialVideoSection() {
  return (
    <section className="py-16 sm:py-20 bg-primary-bg dark:bg-blue-ink">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
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

        {/* Contenu vidéo témoignage */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="bg-white/90 dark:bg-gray-anthracite/40 rounded-3xl p-6 sm:p-8 shadow-xl">
            {/* En-tête */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-mint-green/20 rounded-full flex items-center justify-center">
                <span className="text-2xl sm:text-3xl">🗣️</span>
              </div>
              <div className="text-center">
                <h3 className="font-title font-bold text-blue-ink dark:text-primary-bg text-xl sm:text-2xl">
                  Témoignage Client
                </h3>
                <p className="font-body text-sm sm:text-base text-gray-anthracite dark:text-primary-bg/80">
                  Retour d&apos;expérience authentique
                </p>
              </div>
            </div>
            
            {/* Vidéo YouTube intégrée */}
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/9GZmRFs3uMo"
                title="Témoignage client - Laurent Serre Développement"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Citation ou call-to-action */}
            <div className="text-center mt-6 p-4 bg-mint-green/5 rounded-xl">
              <p className="font-italic text-gray-anthracite dark:text-primary-bg/90 leading-relaxed">
                &quot;Une transformation concrète qui a révolutionné notre approche commerciale&quot;
              </p>
            </div>
          </div>
        </div>

        {/* CTA optionnel */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="font-body text-gray-anthracite dark:text-primary-bg/70 mb-4">
            Vous aussi, transformez vos résultats commerciaux
          </p>
          <button 
            onClick={() => window.open('https://meetings.hubspot.com/laurent34/rdv-laurent-45-mn-clone', '_blank')}
            className="bg-mint-green/10 hover:bg-mint-green/20 border-2 border-mint-green text-mint-green font-title font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 group"
          >
            <span className="flex items-center gap-2">
              <span className="group-hover:animate-bounce-in">📞</span>
              Échanger avec Laurent
            </span>
          </button>
        </div>
      </div>
    </section>
  );
} 