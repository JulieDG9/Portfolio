import { useState } from "react";
import projets from "../data/projets.json";

const tagClasses = {
  Html: "fill-orange-400",
  Css: "fill-blue-400",
  JavaScript: "fill-yellow-400",
  React: "fill-sky-400",
  Sass: "fill-pink-400",
};

export default function Réalisations() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (projet) => {
    setCurrentProject(projet);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setCurrentProject(null);
  };

  return (
    <div id="realisations" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Réalisations
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Découvrez ici, quelques-une de mes réalisations...
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projets.map((projet) => (
            <article key={projet.id} className="flex flex-col items-start ">
              <div className="relative w-full">
                <a href={projet.href}>
                  <img
                    alt={projet.title}
                    src={projet.imageUrl}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                </a>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 pointer-events-none" />
              </div>
              <div className="max-w-xl">
                <div className="group relative">
                  <h3 className="mt-6 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={projet.href}>
                      <span className="absolute inset-0" />
                      {projet.title}
                    </a>
                  </h3>
                  <p className="mt-5 mb-5 line-clamp-3 text-sm/6 text-gray-600">
                    {projet.description}
                  </p>
                </div>
                <div>
                  <button
                    className="py-2 px-4 bg-black rounded-md text-white text-sm font-medium border hover:bg-gray-800"
                    onClick={() => openModal(projet)}
                  >
                    Détails
                  </button>
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    {projet.categories.map((category, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-sm font-normal text-gray-700 ring-1 ring-inset ring-gray-200"
                      >
                        <svg
                          viewBox="0 0 6 6"
                          aria-hidden="true"
                          className={`h-2 w-2 ${tagClasses[category.title]}`}
                        >
                          <circle r={3} cx={3} cy={3} />
                        </svg>
                        {category.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {modalOpen && currentProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="bg-white rounded-lg p-8 max-w-lg">
            <h2 className="text-2xl font-bold mb-4">{currentProject.title}</h2>

            <div className="mb-4">
              <h3 className="text-lg font-semibold">Tâches</h3>
              <ul className="text-sm list-disc list-inside">
                {currentProject.taches.map((tache, index) => (
                  <li key={index}>{tache}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Outils</h3>
              <ul className="text-sm list-disc list-inside">
                {currentProject.outils.map((outil, index) => (
                  <li key={index}>{outil}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Compétences travaillées</h3>
              <ul className="text-sm list-disc list-inside">
                {currentProject.objectifs.map((objectif, index) => (
                  <li key={index}>{objectif}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={closeModal}
              className="py-2 px-4 bg-black rounded-md text-white text-sm font-medium"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
