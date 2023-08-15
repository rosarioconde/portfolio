import {
  FaAngular,
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJs,
  FaJsSquare,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaWordpress,
} from "react-icons/fa";

export default function Timeline() {
  return (
    <div className="shadow-3xl shadow-shadow-500 m-4 mx-auto max-w-2xl bg-white bg-clip-border p-4">
      <ol className="relative border-l border-gray-700 ">
        <li className="mb-10 ml-4">
          <div className="absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-700 "></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400"> 2021 - 2023</time>
          <h3 className="text-lg font-semibold text-gray-900 ">
            Software Engineer | Caramel Point{" "}
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 ">
            Mantenimiento y desarrollo de aplicaciones web usando React | Next | Nest | Node UI
            frameworks / tools: Tailwind CSS | Material UI | Styled-component | Bootstrap.
          </p>

          <span className="mr-2 inline-flex  items-center rounded-full border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs   font-medium  text-blue-800">
            <span className="h-3.5" />
            TypeScript
          </span>
          <span className="mr-2 inline-flex  items-center rounded-full border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs font-medium  text-blue-800">
            <FaReact className="mr-1.5 h-3.5 w-3.5" />
            React
          </span>
          <span className="mr-2 inline-flex items-center rounded-full border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs   font-medium  text-blue-800">
            <FaJs className="mr-1.5 h-3.5 w-3.5" />
            JavaScript
          </span>
          <span className="mr-2 inline-flex  items-center rounded-full border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs   font-medium  text-blue-800">
            <span className="h-3.5  " />
            Styled-components
          </span>
          <span className="mr-2 inline-flex  items-center rounded-full border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs  font-medium  text-blue-800">
            <FaCss3 className="mr-1.5 h-3.5 w-3.5" />
            CSS3
          </span>

          <span className="mr-2 inline-flex  items-center rounded-full border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs   font-medium  text-blue-800">
            <FaHtml5 className="mr-1.5 h-3.5 w-3.5" />
            Html5
          </span>
          <span className="mr-2 inline-flex  items-center rounded-full border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs  font-medium  text-blue-800">
            <FaNodeJs className="mr-1.5 h-3.5 w-3.5" />
            Node.js
          </span>
        </li>

        <li className="mb-10 ml-4">
          <div className="absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-700 "></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 "> 2018 - 2021</time>
          <h3 className="text-lg font-semibold text-gray-900">
            Frontend Web Developer | Ministerio de Desarrollo Productivo
          </h3>
          <p className="mb-2 text-base font-normal text-gray-500">
            Adaptar y reutilizar piezas de código. Corrección y detección de errores. Comprender los
            requerimientos, las especificaciones técnicas y funcionales.
          </p>

          <span className="mr-2 inline-flex items-center rounded-full border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            <FaJs className="mr-1.5 h-3.5 w-3.5" />
            JavaScript
          </span>
          <span className="mr-2 inline-flex items-center rounded-full border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            <FaLaravel className="mr-1.5 h-3.5 w-3.5" />
            Laravel
          </span>
          <span className="mr-2 inline-flex items-center rounded-full border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs font-medium  text-blue-800">
            <FaCss3 className="mr-1.5 h-3.5 w-3.5" />
            CSS3
          </span>

          <span className="mr-2 inline-flex items-center rounded-full border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            <FaHtml5 className="mr-1.5 h-3.5 w-3.5" />
            Html5
          </span>
          <span className="mr-2 inline-flex items-center rounded-full border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            <FaPhp className="mr-1.5 h-3.5 w-3.5" />
            PHP
          </span>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400"> 2020 - 2020</time>
          <h3 className="text-lg font-semibold text-gray-900">Frontend Web Developer | Adtomic </h3>
          <p className="mb-2 text-base font-normal text-gray-500">
            Mantenimiento y desarrollo web en AngularJS Bootstrap.
          </p>
          <span className="mr-2 inline-flex  items-center rounded-full border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            <FaCss3 className="mr-1.5 h-3.5 w-3.5" />
            CSS3
          </span>

          <span className="mr-2 inline-flex  items-center rounded-full border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            <FaHtml5 className="mr-1.5 h-3.5 w-3.5" />
            Html5
          </span>
          <span className="mr-2 inline-flex  items-center rounded-full border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs  font-medium  text-blue-800">
            <FaAngular className="mr-1.5 h-3.5 w-3.5" />
            Angular
          </span>

          <span className="mr-2 inline-flex  items-center rounded-full border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs  font-medium  text-blue-800">
            <FaBootstrap className="mr-1.5 h-3.5 w-3.5" />
            Bootstrap
          </span>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-700  "></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400">2018 - 2018</time>
          <h3 className="text-lg font-semibold text-gray-900">
            Frontend Developer | Renová tu vestidor
          </h3>
          <p className="mb-2 text-base font-normal text-gray-500">
            Identificar, investigar y proponer las mejoras en el diseño de interfaces (UX/UI) -
            técnicas de User Research. Maquetación con Foundation. Desarrollo en Wordpress -
            woocommerce.
          </p>
          <span className="mr-2 inline-flex items-center rounded-full border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            <FaWordpress className="mr-1.5 h-3.5 w-3.5" />
            Wordpress
          </span>
          <span className="mr-2 inline-flex items-center rounded-full border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            <FaJs className="mr-1.5 h-3.5 w-3.5" />
            JavaScript
          </span>
          <span className="mr-2 inline-flex items-center rounded-full border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs  font-medium text-blue-800">
            <span className="h-3.5" />
            Foundation
          </span>
        </li>
        <li className="ml-4">
          <div className="absolute -left-1.5 h-3 w-3 rounded-full border border-white  bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">2015 - 2018</time>
          <h3 className="text-lg font-semibold text-gray-900  ">
            Programadora | Consejo Latinoamericano de Ciencias Sociales
          </h3>
          <p className="mb-2 text-base font-normal   text-gray-500">
            Diseño y desarrollo de Landing Pages. Maquetación de Newsletter. Maquetación responsive.
            Creación de ABM o Administrador Web. Desarrollo sobre PHP y MySql, JavaScript, jQuery.
            Maquetación: Bootstrap, CSS, HTML.
          </p>
          <span className="mr-2 inline-flex  items-center rounded-full border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            <FaBootstrap className="mr-1.5 h-3.5 w-3.5" />
            Bootstrap
          </span>
          <span className="mr-2 inline-flex  items-center rounded-full border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            <FaPhp className="mr-1.5 h-3.5 w-3.5" />
            PHP
          </span>
          <span className="mr-2 inline-flex items-center rounded-full border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs  font-medium text-blue-800">
            <FaJsSquare className="mr-1.5 h-3.5 w-3.5" />
            JavaScript
          </span>
          <span className="mr-2 inline-flex  items-center rounded-full border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs  font-medium  text-blue-800">
            <FaJsSquare className="mr-1.5 h-3.5 w-3.5" />
            jQuery
          </span>
        </li>
      </ol>
    </div>
  );
}
