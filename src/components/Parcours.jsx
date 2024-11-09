/* eslint-disable react/no-unescaped-entities */
export default function Parcours() {
  return (
    <div id="parcours" className="relative bg-gray-100">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-48 lg:pt-40 xl:col-span-6">
          <div className="mx-auto max-w-lg lg:mx-0">
            <h2 className="mt-20 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:mt-10 sm:text-7xl text-center">
              Parcours
            </h2>
            <p className="mt-8 mb-8 text-pretty text-lg font-medium text-gray-700 sm:text-xl/8 text-center">
              Mon parcours combine plusieurs années d'expérience en graphisme,
              acquises aux côtés d’un graphiste professionnel. <br />
              En 2024, j'ai intégré la formation Intégrateur Web
              d'OpenClassRooms. <br />
              Je maîtrise ainsi les outils de design (la suite d'Adobe, les
              logiciels d'Affinity) et les langages du web (HTML, CSS,
              JavaScript), ce qui me permet de concevoir et d’intégrer des
              interfaces web esthétiques et performantes, offrant une expérience
              utilisateur de qualité.
            </p>

            <div className="mt-10 flex items-center justify-center text-center gap-x-6">
              <a
                href="#realisations"
                className="text-sm/6 font-semibold text-gray-900 "
              >
                Voir mes réalisations <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1542546068979-b6affb46ea8f?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="aspect-[3/2] w-full bg-gray-50 object-cover object-[center_70%] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
          />
        </div>
      </div>
    </div>
  );
}
