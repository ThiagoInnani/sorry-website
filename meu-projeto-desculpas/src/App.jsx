import React, { useState, useEffect } from "react";

// Componente para o ícone de coração (SVG inline)
const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#ef4444" // Cor vermelha do Tailwind (rose-500)
    className="inline-block"
    style={{
      width: "1em",
      height: "1em",
      verticalAlign: "-0.125em",
      marginBottom: "0.1em",
    }}
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

// Componente para cada item da galeria de fotos
const GalleryImage = ({ src, alt, caption, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`bg-white p-4 rounded-lg shadow-lg transition-all duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-64 object-cover rounded-md mb-2"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/300x300/fecaca/991b1b?text=Erro+Imagem";
        }}
      />
      <p className="text-center text-sm text-gray-600">{caption}</p>
    </div>
  );
};

// Componente principal da aplicação
function App() {
  const [nomeNamorada] = useState("Milena"); // Defina o nome aqui

  // Dados das fotos da galeria (substitua com suas fotos e legendas)
  const galleryPhotos = [
    {
      src: "img/IMG_20241206_192942.jpg",
      alt: "[Descrição da foto 1]",
      caption: "Quero passar todos os meus momentos ao seu lado",
    },
    {
      src: "img/IMG_20250413_180549.jpg",
      alt: "[Descrição da foto 2]",
      caption: "Te amarei para sempre",
    },
    {
      src: "img/IMG_20250501_201601.jpg",
      alt: "[Descrição da foto 3]",
      caption: "Me da mais uma chance por favor...",
    },
  ];

  // Estado para controlar a animação de fade-in
  const [fadeInHeader, setFadeInHeader] = useState(false);
  const [fadeInMain, setFadeInMain] = useState(false);
  const [fadeInGallery, setFadeInGallery] = useState(false);
  const [fadeInFooter, setFadeInFooter] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFadeInHeader(true), 100);
    const t2 = setTimeout(() => setFadeInMain(true), 300);
    const t3 = setTimeout(() => setFadeInGallery(true), 500);
    const t4 = setTimeout(() => setFadeInFooter(true), 700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#fef2f2" }}
      className="text-gray-800 min-h-screen"
    >
      {/* Cabeçalho */}
      <header
        className={`bg-rose-500 text-white py-10 md:py-12 shadow-lg transition-all duration-1000 ease-in-out ${
          fadeInHeader
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Para Meu Amor, {nomeNamorada} <HeartIcon />
          </h1>
          <p className="mt-3 sm:mt-4 text-md sm:text-lg md:text-xl">
            Algumas palavras do fundo do meu coração...
          </p>
        </div>
      </header>

      {/* Seção Principal da Mensagem e Foto */}
      <main className="container mx-auto px-4 sm:px-6 py-10 md:py-12">
        <section
          className={`transition-all duration-1000 ease-in-out ${
            fadeInMain ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl md:flex md:items-center md:space-x-8">
            <img
              src="img/IMG-20250302-WA0003.jpg"
              alt="Nós no JOIA"
              className="w-full md:w-1/3 h-64 md:h-auto object-cover rounded-lg shadow-md mb-6 md:mb-0"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/400x400/fecaca/991b1b?text=Erro+Imagem";
              }}
            />
            <div className="md:w-2/3">
              <h2 className="text-2xl sm:text-3xl font-semibold text-rose-600 mb-4">
                Meu amor,
              </h2>
              {/* Substitua pelo seu pedido de desculpas principal */}
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                Eu sei que palavras às vezes não são suficientes para expressar
                tudo o que sinto, ou para consertar as coisas como deveriam. Mas
                quero que você saiba que cada momento ao seu lado é precioso
                para mim. Você ilumina meus dias de uma forma que ninguém mais
                consegue. Recentemente, eu errei e te magoei, e por isso, peço
                meu mais sincero perdão. Não há desculpa para a
                irresponsabilidade e idiotice que fiz, e estou arrependido de
                tudo.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                Você é a mulher mais incrível que existe, te amo mais que tudo e
                espero que um dia você me perdoe por tudo isso. Perder você, ou
                até mesmo a sua alegria, é algo que não suporto. Espero que
                possa ver a sinceridade no meu coração e em cada palavra aqui.
              </p>
            </div>
          </div>
        </section>

        {/* Galeria de Fotos */}
        <section
          className={`mt-12 md:mt-16 transition-all duration-1000 ease-in-out ${
            fadeInGallery
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-rose-600 mb-6 md:mb-8">
            Nossas Lembranças <HeartIcon />
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryPhotos.map((photo, index) => (
              <GalleryImage
                key={index}
                src={photo.src}
                alt={photo.alt}
                caption={photo.caption}
                delay={(index + 1) * 200 + 300}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer
        className={`bg-rose-100 border-t border-rose-200 text-rose-700 py-10 md:py-12 mt-12 md:mt-16 transition-all duration-1000 ease-in-out ${
          fadeInFooter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          {/* Substitua pela sua mensagem final */}
          <p className="text-lg sm:text-xl mb-2">
            Com todo o meu amor e um pedido sincero de desculpas,
          </p>
          <p className="text-2xl sm:text-3xl font-semibold">Thiago</p>
          <p className="mt-4 text-sm">
            Espero que nós possamos se entender, eu te amo... de coração .{" "}
            <HeartIcon />
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
