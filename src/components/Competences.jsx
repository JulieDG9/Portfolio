// import htmlLogo from "../assets/images/LogosCompetences/htmlLogo.svg";
// import cssLogo from "../assets/images/LogosCompetences/cssLogo.svg";
// import sassLogo from "../assets/images/LogosCompetences/sassLogo.svg";
// import jsLogo from "../assets/images/LogosCompetences/jsLogo.svg";
// import reactLogo from "../assets/images/LogosCompetences/reactLogo.svg";
import htmlLogo from "/assets/images/LogosCompetences/htmlLogo.svg";
import cssLogo from "/assets/images/LogosCompetences/cssLogo.svg";
import sassLogo from "/assets/images/LogosCompetences/sassLogo.svg";
import jsLogo from "/assets/images/LogosCompetences/jsLogo.svg";
import reactLogo from "/assets/images/LogosCompetences/reactLogo.svg";

export default function Competences() {
  return (
    <div id="competences" className="bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mt-12 text-center text-4xl font-semibold tracking-tight text-gray-900 sm:mt-10 sm:text-7xl">
          Compétences
        </h2>
        <h3 className="mt-4 text-lg text-center text-gray-600">
          Mes principales compétences en developpement Front-End
        </h3>
        <div className="mx-auto mt-10 grid max-w-lg items-end grid-cols-3 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-5 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="text-center">
            <img
              alt="Logo Html"
              src={htmlLogo}
              width={158}
              height={100}
              className="mb-4 max-h-20 w-full object-contain lg:max-h-24"
            />
            <span className="text-lg/6 text-center font-semibold text-gray-900">
              Html
            </span>
          </div>
          <div className="text-center">
            <img
              alt="Logo Css"
              src={cssLogo}
              width={158}
              height={100}
              className="mb-4  max-h-20 w-full object-contain lg:max-h-24"
            />
            <span className="text-lg/6 text-center font-semibold text-gray-900">
              Css
            </span>
          </div>
          <div className="text-center">
            <img
              alt="logo Sass"
              src={sassLogo}
              width={158}
              height={100}
              className="mb-4  max-h-20 w-full object-contain lg:max-h-24"
            />
            <span className="text-lg/6 text-center font-semibold text-gray-900">
              Sass
            </span>
          </div>
          <div className="text-center">
            <img
              alt="Logo Javascript"
              src={jsLogo}
              width={158}
              height={100}
              className="mb-4 max-h-20 w-full object-contain sm:col-start-2 lg:max-h-24"
            />
            <span className="text-lg/6 text-center font-semibold text-gray-900">
              Javascript
            </span>
          </div>
          <div className="text-center">
            <img
              alt="Logo React"
              src={reactLogo}
              width={158}
              height={100}
              className="mb-4 max-h-20 w-full object-contain sm:col-start-auto lg:max-h-24"
            />
            <span className="text-lg/6 text-center font-semibold text-gray-900">
              React
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
