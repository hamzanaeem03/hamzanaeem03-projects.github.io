import Image from "next/image";

export default function Home() {
  return (
    <div className="text-[#261956]  min-h-screen container p-8 md:container md:mx-auto justify-center">
      {/* Header */}
      <header>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
          {/* Left Content */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-6xl md:text-6xl mb-4">
              Hi, I'm Hamza Naeem
            </h1>
            <p className="mb-8 leading-relaxed text-xl md:text-2xl mt-12 text-[#55577e98]">
              Dynamic Full stack developer eager to contribute to web
              application development with innovative solutions.
            </p>
            {/* <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#18181a] border-0 py-2 px-6 focus:outline-none hover:bg-[#18181a] rounded text-lg">
                Contact Me
              </button>
              <button className="ml-4 inline-flex  bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                <a
                  href="https://hamzanaeem03.github.io/portfolio/"
                  target="_blank"
                >
                  View Portfolio
                </a>
              </button>
            </div> */}
          </div>
          {/* Right Content */}
          <div className="lg:max-w-lg lg:w-full  md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-full"
              alt="profile"
              src="https://avatars.githubusercontent.com/u/126310544?v=4"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-8 space-y-12">
        {/* Education Section */}
        <section className="text-gray-600 body-font border-b">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Education
            </h2>
          </div>
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#18181a] text-white relative z-10 title-font font-medium text-sm">
                1
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 text-[#18181a] rounded-full inline-flex items-center justify-center">
                  <img
                    alt="work"
                    src="https://cdn.moawin.pk/images/branches/2024/07/25/fgcsr_nknLw.png"
                  />
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                    BS Computer Science
                  </h2>
                  <p className="leading-relaxed text-gray-700">
                    Dawood University of Engineering and Technology
                  </p>
                  <p className="leading-relaxed text-gray-500">
                    08/2021 - Present
                  </p>
                </div>
              </div>
            </div>
            {/* Timeline Item 2 */}
            <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#18181a] text-white relative z-10 title-font font-medium text-sm">
                2
              </div>
              <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div className="flex-shrink-0 w-24 h-24 text-[#18181a] rounded-full inline-flex items-center justify-center">
                  <img
                    alt="school"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD2xaYHYzyUfqOMWq3sEEzUyIrR1vKZz9hDw&s"
                  />
                </div>
                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                    Intermediate
                  </h2>
                  <p className="leading-relaxed text-gray-700">
                    Usman Public Schooling System
                  </p>
                  <p className="leading-relaxed text-gray-500">
                    05/2019 - 05/2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="text-gray-600 body-font border-b">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Work Experience
              </h2>
            </div>

            {/* Single Work Experience Entry */}
            <div className="flex items-center lg:w-3/5 mx-auto  pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-[#18181a] flex-shrink-0">
                <img
                  alt="work"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdeyZWDX9yQELdwBtcRoWOdWLQ4cBp2hXdg&s"
                />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                  Web Development Intern
                </h2>
                <p className="leading-relaxed text-base text-gray-700">
                  360XpertSolutions | 06/2024 - 12/2024
                </p>
                <ul className="list-disc mt-2 ml-5 text-gray-700 ">
                  <li className="font-extralight">
                    Translated Figma designs into pixel-perfect code using
                    Next.js and TailwindCSS.
                  </li>
                  <li>
                    Optimized responsiveness of components for various screen
                    sizes.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="text-gray-600 body-font border-b">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Skills
              </h1>
            </div>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 lg:w-1/4 md:w-1/3 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="ReactJS"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png"
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      ReactJS
                    </h2>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/4 md:w-1/3 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="Next.js"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://cdn.creazilla.com/icons/3219990/nextjs-icon-md.png"
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Next.js
                    </h2>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/4 md:w-1/3 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="JavaScript"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://static.vecteezy.com/system/resources/previews/048/332/149/non_2x/js-icon-transparent-background-free-png.png"
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      JavaScript
                    </h2>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/4 md:w-1/3 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="HTML & CSS"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://image.pngaaa.com/335/3920335-middle.png"
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      HTML & CSS
                    </h2>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/4 md:w-1/3 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="TailwindCSS"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDML5CFq70Y9FJ52YnyCjfdyUA3g9B6is_jA&s"
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      TailwindCSS
                    </h2>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/4 md:w-1/3 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="Git & GitHub"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1bctuHVp7CoSYIgexL8-iR5EfQq-E354UnA&s"
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Git & GitHub
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="text-gray-600 body-font border-b">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                My Projects
              </h1>
            </div>
            <div className="flex flex-wrap justify-center">
              {/* Project 1 */}
              <div className="lg:w-1/2 flex md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <img
                  alt="ReactJS"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://360-samurai.vercel.app/assets/logo_black.svg"
                />
                <div>
                  <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                    Samurai Systems
                  </h2>
                  <p className="leading-relaxed text-base mb-4">
                    Developed a responsive web application with engaging UX
                    using NextJS and TailwindCSS.
                  </p>
                  <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    <a
                      href="https://360-samurai.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Preview
                    </a>
                  </button>
                </div>
              </div>

              {/* Project 2 */}
              <div className="lg:w-1/2 md:w-full flex px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <img
                  alt="ReactJS"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://smart-assistant-alpha.vercel.app/_next/image?url=%2Foglogo.png&w=96&q=75"
                />
                <div>
                  <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                    Smart Assistant
                  </h2>
                  <p className="leading-relaxed text-base mb-4">
                    Created frontend for an AI-powered HR tool to shortlist
                    resumes based on job descriptions.
                  </p>
                  <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    <a
                      href="https://smart-assistant-alpha.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Preview
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-gray-600 body-font relative border-b">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Get in Touch
              </h1>
            </div>
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
              {/* Map Section */}
              <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  frameBorder="0"
                  title="map"
                  src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Karachi+(Hamza's%20Location)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                ></iframe>
              </div>

              {/* Feedback Form */}
              <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <p className="leading-relaxed mb-5 text-gray-600">
                  Feel free to reach out for collaborations or inquiries!
                </p>
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-[#18181a] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-[#18181a] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-[#18181a] focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <button className="text-white bg-[#18181a] border-0 py-2 px-6 focus:outline-none hover:bg-[#18181a] rounded text-lg">
                  Send Message
                </button>
                <p className="text-xs text-gray-500 mt-3">
                  I will get back to you within 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          {/* Logo and Brand Name */}
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img
              className="w-10 h-10 rounded-full"
              alt="profile"
              src="https://avatars.githubusercontent.com/u/126310544?v=4"
            />
            <span className="ml-3 text-xl">Hamza Naeem</span>
          </a>

          {/* Rights Reserved */}
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © {new Date().getFullYear()} Hamza Naeem
          </p>

          {/* Social Icons */}
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="mailto:mhamzanaeem03@gmail.com"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>

            <a
              href="https://github.com/hamzanaeem03"
              className="ml-3 text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.63.07-.62.07-.62 1.01.07 1.54 1.03 1.54 1.03.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 7.6c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.69.91.69 1.84 0 1.33-.01 2.41-.01 2.73 0 .26.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/hamzanaeem03"
              className="ml-3 text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
