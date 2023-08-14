import React from 'react'
import { FaAngular, FaBootstrap, FaCss3, FaHtml5, FaJs, FaJsSquare, FaLaravel, FaNodeJs, FaPhp, FaReact, FaWordpress } from 'react-icons/fa'

export default function Timeline() {
  return (
   <div className="max-w-2xl mx-auto m-4 p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500">
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      <li className="mb-10 ml-4">
        <div
          className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
        </div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">jun. 2021 - may. 2023</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Software Engineer | Caramel Point </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Mantenimiento y desarrollo de aplicaciones web usando React | Next | Nest | Node
      UI frameworks / tools: Tailwind CSS | Material UI | Styled-component | Bootstrap.</p>
        {/* <a href="#"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn
          more <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg></a> */}

        <span className="bg-blue-100 text-blue-800  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-400 border  border-blue-400">
          <span className="h-3.5" />
            TypeScript
         </span>
        <span className="bg-blue-100 text-blue-800  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-400 border  border-blue-400">
          <FaReact className="w-3.5 h-3.5 mr-1.5" />
          React
         </span>
         <span className="bg-yellow-100 text-yellow-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2  dark:bg-yellow-900 dark:text-yellow-300 border  border-blue-400">
          <FaJs className="w-3.5 h-3.5 mr-1.5" />
          JavaScript
         </span>
         <span className="bg-blue-100 text-blue-800  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-400 border  border-blue-400">
          <span className="h-3.5  " />
          Styled-components
         </span>
         <span className="bg-blue-100 text-blue-800  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-400 border  border-blue-400">
          <FaCss3 className="w-3.5 h-3.5 mr-1.5" />
         CSS3
         </span>

         <span className="bg-blue-100 text-blue-800  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-400 border  border-blue-400">
          <FaHtml5 className="w-3.5 h-3.5 mr-1.5" />
         Html5
         </span>
       <span className="bg-blue-100 text-blue-800  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-400 border  border-blue-400">
          <FaNodeJs className="w-3.5 h-3.5 mr-1.5" />
         Node.js
         </span>

      </li>

      <li className="mb-10 ml-4">
        <div
          className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
        </div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Dic 2018 - Jun 2021</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Frontend Web Developer | Ministerio de Desarrollo Productivo</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-2">Adaptar y reutilizar piezas de código. Corrección y detección de errores. Comprender los requerimientos, las especificaciones técnicas y funcionales.</p>

         <span className="bg-yellow-100 text-yellow-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2  dark:bg-yellow-900 dark:text-yellow-300 border  border-blue-400">
          <FaJs className="w-3.5 h-3.5 mr-1.5" />
          JavaScript
         </span>
         <span className="bg-blue-100 text-blue-800  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-400 border  border-blue-400">
          <FaLaravel className="w-3.5 h-3.5 mr-1.5" />
           Laravel
         </span>
         <span className="bg-blue-100 text-blue-800  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-400 border  border-blue-400">
          <FaCss3 className="w-3.5 h-3.5 mr-1.5" />
         CSS3
         </span>

         <span className="bg-blue-100 text-blue-800  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-400 border  border-blue-400">
          <FaHtml5 className="w-3.5 h-3.5 mr-1.5" />
         Html5
         </span>
       <span className="bg-blue-100 text-blue-800  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-400 border  border-blue-400">
          <FaPhp className="w-3.5 h-3.5 mr-1.5" />
         PHP
         </span>
      </li>
      <li className="ml-4">
        <div
          className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
        </div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Ene 2020 - Mar 2020</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Frontend Web Developer | Adtomic </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-2">Mantenimiento y desarrollo web en AngularJS Bootstrap.</p>
        <span className="bg-blue-100 text-blue-800  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-400 border  border-blue-400">
          <FaCss3 className="w-3.5 h-3.5 mr-1.5" />
         CSS3
         </span>

         <span className="bg-blue-100 text-blue-800  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-400 border  border-blue-400">
          <FaHtml5 className="w-3.5 h-3.5 mr-1.5" />
         Html5
         </span>
         <span className="bg-blue-100 text-blue-800  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-400 border  border-blue-400">
          <FaAngular className="w-3.5 h-3.5 mr-1.5" />
         Angular
         </span>

         <span className="bg-blue-100 text-blue-800  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-400 border  border-blue-400">
          <FaBootstrap className="w-3.5 h-3.5 mr-1.5" />
        Bootstrap
         </span>
      </li>
      <li className="ml-4">
        <div
          className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
        </div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jun 2018 - Dic 2018</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Frontend Developer | Renová tu vestidor</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-2">Identificar, investigar y proponer las mejoras en el diseño de interfaces (UX/UI) - técnicas de User Research. Maquetación con Foundation. Desarrollo en Wordpress - woocommerce.</p>
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2  dark:bg-yellow-900 dark:text-yellow-300 border  ">
          <FaWordpress className="w-3.5 h-3.5 mr-1.5" />
          Wordpress
         </span>
         <span className="bg-yellow-100 text-yellow-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2  dark:bg-yellow-900 dark:text-yellow-300 border  ">
          <FaJs className="w-3.5 h-3.5 mr-1.5" />
          JavaScript
         </span>
         <span className="bg-yellow-100 text-yellow-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2  dark:bg-yellow-900 dark:text-yellow-300 border  ">
          <span className="h-3.5  " />
          Foundation
         </span>
      </li>
      <li className="ml-4">
        <div
          className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
        </div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Mar 2015 - May 2018</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Programadora | Consejo Latinoamericano de Ciencias Sociales</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-2">Diseño y desarrollo de Landing Pages.
        Maquetación de Newsletter. Maquetación responsive. Creación de ABM o Administrador Web. Desarrollo sobre PHP y MySql, JavaScript, jQuery. Maquetación: Bootstrap, CSS, HTML.</p>
        <span className="bg-blue-100 text-blue-800  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-400 border  border-blue-400">
          <FaBootstrap className="w-3.5 h-3.5 mr-1.5" />
        Bootstrap
         </span>
         <span className="bg-blue-100 text-blue-800  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-400 border  border-blue-400">
          <FaPhp className="w-3.5 h-3.5 mr-1.5" />
         PHP
         </span>
         <span className="bg-blue-100 text-blue-800  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-400 border  border-blue-400">
          <FaJsSquare className="w-3.5 h-3.5 mr-1.5" />
              JavaScript
         </span>
         <span className="bg-blue-100 text-blue-800  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full mr-2 dark:bg-gray-700 dark:text-gray-400 border  border-blue-400">
          <FaJsSquare className="w-3.5 h-3.5 mr-1.5" />
          jQuery
         </span>
      </li>
    </ol>
</div>
  )
}

