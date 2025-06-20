import Image from 'next/image';
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AboutSection() {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-anthracite/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Titre */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-title font-bold text-blue-ink dark:text-primary-bg leading-tight">
            Laurent Serre –
            <span className="block text-orange-soft">20 ans dans les bottes du commercial</span>
          </h2>
        </div>

        {/* Contenu principal */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Portrait */}
          <AnimatedSection animation="slide-left" delay={200}>
            <div className="order-1 lg:order-1">
              <div className="relative">
                {/* Photo de Laurent */}
                <div className="w-full max-w-sm sm:max-w-md mx-auto aspect-square rounded-3xl overflow-hidden border-4 border-mint-green/30 shadow-2xl">
                  <Image
                    src="/laurentserre2.png" 
                    alt="Laurent Serre - Consultant en développement commercial"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Éléments décoratifs */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-soft rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-mint-green rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </AnimatedSection>

          {/* Texte de présentation */}
          <AnimatedSection animation="slide-right" delay={400}>
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-2">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-lg sm:text-xl md:text-2xl font-body text-gray-anthracite dark:text-primary-bg leading-relaxed">
                  Je forme, structure et accompagne les équipes de vente dans les PME depuis plus de{" "}
                  <span className="font-bold text-mint-green">20 ans</span>.
                </p>
                
                <p className="text-lg sm:text-xl md:text-2xl font-body text-gray-anthracite dark:text-primary-bg leading-relaxed">
                  Mon approche est{" "}
                  <span className="font-bold text-blue-ink dark:text-mint-green">directe</span>,{" "}
                  <span className="font-bold text-blue-ink dark:text-mint-green">sans jargon</span>, et résolument tournée vers{" "}
                  <span className="font-bold text-orange-soft">l&apos;action</span>.
                </p>
                
                <p className="text-lg sm:text-xl md:text-2xl font-body text-gray-anthracite dark:text-primary-bg leading-relaxed">
                  Je combine les méthodes classiques les plus efficaces avec les outils modernes{" "}
                  <span className="font-italic text-mint-green">(automatisation, IA, analyse)</span>.
                </p>
              </div>

              {/* Points clés de l'expertise */}
              <AnimatedSection animation="fade-in" delay={600}>
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-mint-green/20 rounded-full flex items-center justify-center">
                      <span className="text-mint-green text-sm">✓</span>
                    </div>
                    <span className="font-body text-gray-anthracite dark:text-primary-bg">Formation terrain</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-mint-green/20 rounded-full flex items-center justify-center">
                      <span className="text-mint-green text-sm">✓</span>
                    </div>
                    <span className="font-body text-gray-anthracite dark:text-primary-bg">Accompagnement</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-mint-green/20 rounded-full flex items-center justify-center">
                      <span className="text-mint-green text-sm">✓</span>
                    </div>
                    <span className="font-body text-gray-anthracite dark:text-primary-bg">Outils modernes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-mint-green/20 rounded-full flex items-center justify-center">
                      <span className="text-mint-green text-sm">✓</span>
                    </div>
                    <span className="font-body text-gray-anthracite dark:text-primary-bg">Résultats concrets</span>
                  </div>
                </div>
              </AnimatedSection>
              {/* Social links */}
              <AnimatedSection animation="fade-in" delay={800}>
                <div className="pt-6 sm:pt-8">
                  <h4 className="font-title font-semibold text-gray-anthracite dark:text-primary-bg text-center mb-4">
                    Retrouvez-moi sur :
                  </h4>
                  <div className="flex justify-center items-center gap-6">
                    <a href="https://www.linkedin.com/in/laurentserre34/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
                      <Image
                        src="/linkedin-logo.png"
                        alt="LinkedIn Laurent Serre"
                        width={140}
                        height={40}
                        className="object-contain"
                      />
                    </a>
                    <a href="https://www.youtube.com/channel/UCeYXC96USUJDsZrBPoHCN1A/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
                      <Image
                        src="/youtube-logo.png"
                        alt="YouTube Laurent Serre"
                        width={140}
                        height={40}
                        className="object-contain"
                      />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
} 