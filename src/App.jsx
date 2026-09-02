import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';

// Composant d'animation au scroll
const FadeInSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  // État pour le mini-jeu "boisson idéale"
  const [quizAnswer, setQuizAnswer] = useState(null);

  return (
    <div className="bg-cream text-dark-brown font-nunito">

      {/* ========== HERO ========== */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1600&q=80"
            alt="Salon de thé Fratello"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-playfair text-5xl md:text-7xl font-bold italic mb-3"
          >
            Salon de thé Fratello
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl font-light tracking-wide mb-2"
          >
            L'authentique salon de thé de Mornag
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-6"
          >
            <a
              href="#contact"
              className="bg-cafe-clair text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-80 transition-all duration-300 shadow-lg"
            >
              Nous trouver
            </a>
            <a
              href="#menu"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300"
            >
              Voir la carte
            </a>
          </motion.div>
        </div>

        {/* Flèche vers le bas */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ========== À PROPOS / AMBIANCE ========== */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl mb-6">Un lieu de vie</h2>
              <p className="text-lg leading-relaxed mb-4">
                Bienvenue au <span className="font-bold text-cafe-clair">Salon de thé Fratello</span>, votre havre de paix à Mornag.
                Ouvert <span className="font-semibold">tous les jours de 7h à minuit</span>, c'est l'endroit idéal pour
                commencer la journée par un petit-déjeuner gourmand, profiter d'une pause café l'après-midi,
                ou terminer la soirée en douceur.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Ambiance <span className="font-semibold">conviviale et chaleureuse</span>, cadre joliment aménagé,
                service souriant : venez comme vous êtes, restez aussi longtemps que vous le souhaitez.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="bg-warm-beige px-4 py-2 rounded-full text-sm font-semibold">☕ Cafés de spécialité</span>
                <span className="bg-warm-beige px-4 py-2 rounded-full text-sm font-semibold">🍰 Pâtisseries maison</span>
                <span className="bg-warm-beige px-4 py-2 rounded-full text-sm font-semibold">🥐 Petit-déjeuner</span>
                <span className="bg-warm-beige px-4 py-2 rounded-full text-sm font-semibold">🌙 Ambiance nocturne</span>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80"
                alt="Intérieur cosy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ========== NOS SPÉCIALITÉS (MENU) ========== */}
      <section id="menu" className="py-20 px-4 bg-warm-beige/40">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="font-playfair text-4xl md:text-5xl text-center mb-4">Nos Spécialités</h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Des boissons chaudes aux douceurs sucrées, en passant par des en-cas salés, il y en a pour tous les goûts.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '☕',
                title: 'Cafés & Expressos',
                items: ['Espresso', 'Cappuccino', 'Latte Macchiato', 'Café Turc'],
                color: 'border-cafe-clair',
              },
              {
                icon: '🍵',
                title: 'Thés & Infusions',
                items: ['Thé à la menthe', 'Thé noir', 'Tisanes', 'Thé glacé'],
                color: 'border-sage',
              },
              {
                icon: '🍰',
                title: 'Pâtisseries & Snacks',
                items: ['Croissants', 'Gâteaux maison', 'Sandwichs', 'Briouats'],
                color: 'border-cafe',
              },
            ].map((category, i) => (
              <FadeInSection key={i} delay={i * 0.15}>
                <div className={`bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 ${category.color}`}>
                  <div className="text-5xl mb-3">{category.icon}</div>
                  <h3 className="font-playfair text-2xl mb-3">{category.title}</h3>
                  <ul className="space-y-1 text-gray-700">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-cafe-clair">✦</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GALERIE ========== */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <FadeInSection>
          <h2 className="font-playfair text-4xl md:text-5xl text-center mb-12">Galerie</h2>
        </FadeInSection>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80',
            'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=80',
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
            'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&q=80',
            'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&q=80',
            'https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?w=400&q=80',
          ].map((url, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-xl shadow-md aspect-square"
            >
              <img src={url} alt={`Galerie ${i+1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== AVIS & TÉMOIGNAGES ========== */}
      <section className="py-20 px-4 bg-warm-beige/30">
        <div className="max-w-5xl mx-auto text-center">
          <FadeInSection>
            <div className="flex justify-center items-center gap-4 mb-4">
              <span className="text-5xl">⭐</span>
              <span className="text-4xl font-bold text-cafe-clair">4,3 / 5</span>
              <span className="text-lg text-gray-600">(30 avis)</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl mb-12">Ce qu'ils disent de nous</h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Leila', text: 'Un endroit vraiment agréable, calme, joli cadre. Le café est excellent !', note: 5 },
              { name: 'Karim', text: 'Service impeccable, pâtisseries fraîches. Je recommande vivement.', note: 4 },
              { name: 'Sami', text: 'Ambiance super cool, on s\'y sent bien. Idéal pour travailler ou discuter.', note: 5 },
            ].map((avis, i) => (
              <FadeInSection key={i} delay={i * 0.15}>
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-cafe-clair text-xl mb-2">
                    {'★'.repeat(avis.note)}{'☆'.repeat(5 - avis.note)}
                  </div>
                  <p className="italic text-gray-700">"{avis.text}"</p>
                  <p className="mt-3 font-semibold">— {avis.name}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== MINI-JEU (option fun) ========== */}
      <section className="py-20 px-4 max-w-2xl mx-auto">
        <FadeInSection>
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-6">Quelle est votre boisson idéale ?</h2>
          <p className="text-center text-gray-600 mb-8">Répondez en un clic, on vous dira ce qui vous correspond !</p>
        </FadeInSection>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['☀️ Matin', '🌙 Soirée', '📖 Calme', '🎉 Entre amis'].map((mood) => (
            <button
              key={mood}
              onClick={() => setQuizAnswer(mood)}
              className="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 font-semibold text-cafe-clair border border-cafe-clair/20"
            >
              {mood}
            </button>
          ))}
        </div>

        {quizAnswer && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-white p-6 rounded-2xl shadow-lg"
          >
            <p className="text-2xl mb-2">☕</p>
            <p className="text-lg font-semibold">
              {quizAnswer === '☀️ Matin' && "Un Cappuccino bien mousseux pour bien démarrer !"}
              {quizAnswer === '🌙 Soirée' && "Un thé à la menthe bien chaud, apaisant et parfumé."}
              {quizAnswer === '📖 Calme' && "Une tisane douce, parfaite pour se poser et lire."}
              {quizAnswer === '🎉 Entre amis' && "Un café turc à partager, ou une limonade fraîche !"}
            </p>
          </motion.div>
        )}
      </section>

      {/* ========== CONTACT & HORAIRES ========== */}
      <section id="contact" className="py-20 px-4 bg-warm-beige/40">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <h2 className="font-playfair text-4xl md:text-5xl text-center mb-12">Nous trouver</h2>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Infos pratiques */}
            <FadeInSection>
              <div className="bg-white p-8 rounded-2xl shadow-md h-full">
                <h3 className="font-playfair text-2xl mb-6">Infos pratiques</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <span className="font-semibold">Adresse</span><br />
                      Péage de Mornag, A1, Mornag, Tunisie
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <span className="font-semibold">Téléphone</span><br />
                      <a href="tel:+21658280841" className="text-cafe-clair hover:underline">+216 58 280 841</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🕒</span>
                    <div>
                      <span className="font-semibold">Horaires</span><br />
                      Tous les jours : <span className="font-bold">7h – 00h</span>
                    </div>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="https://www.google.com/maps/place/Salon+de+the+Fratello/@36.6780462,10.2463927,14z"
                    target="_blank"
                    className="inline-block bg-cafe-clair text-white px-6 py-2 rounded-full hover:bg-opacity-80 transition shadow-md"
                  >
                    Voir sur Google Maps
                  </a>
                </div>
              </div>
            </FadeInSection>

            {/* Petit formulaire de contact */}
            <FadeInSection delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="font-playfair text-2xl mb-6">Envie de nous parler ?</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cafe-clair focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cafe-clair focus:outline-none"
                  />
                  <textarea
                    rows="3"
                    placeholder="Votre message (réservation, question, ...)"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cafe-clair focus:outline-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-cafe-clair text-white font-semibold px-6 py-2 rounded-full hover:bg-opacity-80 transition shadow-md"
                  >
                    Envoyer
                  </button>
                </form>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-dark-brown text-white/80 py-6 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-playfair text-xl text-cream">Salon de thé Fratello</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cafe-clair transition">Instagram</a>
            <a href="#" className="hover:text-cafe-clair transition">Facebook</a>
          </div>
          <p className="text-sm">© 2026 - Tous droits réservés</p>
        </div>
      </footer>

    </div>
  );
}

export default App;