export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-b from-gray-900 to-black">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Thomas Godiya</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6">Engineer | IT Supervisor | PHP Programmer</p>
        <p className="max-w-3xl text-gray-400 leading-relaxed">
          To strive for excellence and precision at all time, in all positions and circumstances,
          attaining professional distinction, productivity and proficiency that will add value to
          institutional corporate goals, contribute to growth, development, and long-term survival
          in my career.
        </p>

        <div className="flex gap-4 mt-8 flex-wrap justify-center">
          <a
            href="mailto:amekuspaul@gmail.com"
            className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
          >
            Contact Me
          </a>

          <a
            href="#"
            className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* About */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl">
            <p className="text-gray-300 leading-8 text-lg">
              I am a dedicated IT professional and engineer based in Suleja, Abuja with strong
              experience in IT management, systems administration, network infrastructure,
              cybersecurity, and technical support. I possess hands-on expertise in HTML/CSS,
              JavaScript, PHP programming, cinematography, video editing, visual assistance, and
              data analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 md:px-20 py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Skills & Professions</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
            {[
              {
                title: 'Web Development',
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
              },
              {
                title: 'IT Infrastructure',
                image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
              },
              {
                title: 'Video Editing & Cinematography',
                image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop',
              },
              {
                title: 'Data Analysis',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'HTML/CSS',
              'JavaScript',
              'IT Expert',
              'Video Editing',
              'Cinematography',
              'PHP Programming',
              'Visual Assistance',
              'Data Analysis',
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-900 rounded-2xl p-6 text-center hover:scale-105 transition shadow-lg"
              >
                <p className="font-semibold text-lg">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Work Experience</h2>

          <div className="space-y-12">
            <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                alt="IT Manager"
                className="w-full h-72 object-cover"
              />
              <div className="p-8">
              <h3 className="text-2xl font-bold">IKON NIGERIA LIMITED</h3>
              <p className="text-gray-400 mb-4">IT Manager | 2019 - Till Date</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Managed and maintained computer systems, networks, and infrastructure.</li>
                <li>Installed, configured, and troubleshot hardware and software systems.</li>
                <li>Ensured network security and implemented cyber threat prevention measures.</li>
                <li>Provided technical support and employee training.</li>
                <li>Conducted regular system backups and data recovery operations.</li>
              </ul>
              </div>
            </div>
            </div>

            <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
                alt="IT Officer"
                className="w-full h-72 object-cover"
              />
              <div className="p-8">
              <h3 className="text-2xl font-bold">Iambest Networks</h3>
              <p className="text-gray-400 mb-4">IT Officer | 2021 - 2023</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Managed IT infrastructure and maintained system performance.</li>
                <li>Implemented new technologies and system upgrades.</li>
                <li>Collaborated with vendors and external partners on IT projects.</li>
                <li>Supervised junior IT staff and managed IT resources.</li>
                <li>Ensured compliance with industry regulations and standards.</li>
              </ul>
              </div>
            </div>

            <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="IT Supervisor"
                className="w-full h-72 object-cover"
              />
              <div className="p-8">
              <h3 className="text-2xl font-bold">Juneberries Schoola</h3>
              <p className="text-gray-400 mb-4">IT Supervisor | 2023 - Till Date</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Maintained computer systems and software infrastructure.</li>
                <li>Provided technical support and troubleshooting services.</li>
                <li>Ensured system security and backup processes.</li>
                <li>Developed and implemented IT operational procedures.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-6 md:px-20 py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Education</h2>

          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold">NTA Television College, Jos Plateau State</h3>
              <p className="text-gray-400">National Diploma in Telecom Engineering (ND) | 2018</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold">Government Day Secondary School, Madalla Niger State</h3>
              <p className="text-gray-400">Senior Secondary School Certificate (WAEC) | 2015</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold">Our Lady of Fatima Primary School, Nassarawa State</h3>
              <p className="text-gray-400">Primary School Leaving Certificate (FSLC) | 2008</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 md:px-20 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contact</h2>

          <div className="bg-gray-900 rounded-3xl p-10 shadow-2xl space-y-4">
            <p className="text-lg text-gray-300">📍 Suleja, Abuja</p>
            <p className="text-lg text-gray-300">📞 08162168555 | 08079617854</p>
            <p className="text-lg text-gray-300">✉️ amekuspaul@gmail.com</p>

            <div className="flex justify-center gap-6 pt-6 flex-wrap">
              <a
                href="https://www.linkedin.com/in/g-dia-tech-940951241"
                target="_blank"
                className="hover:text-blue-400 transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/settings/profile"
                target="_blank"
                className="hover:text-blue-400 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100091271246866"
                target="_blank"
                className="hover:text-blue-400 transition"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 Thomas Godiya. All rights reserved.
      </footer>
    </div>
  )
}
