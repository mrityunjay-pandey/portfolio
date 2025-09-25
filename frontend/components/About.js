import Image from 'next/image';

export default function About() {
  return (
    <section id="about" aria-label="About" className="bg-white">
      <div className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <div className="w-full aspect-square rounded-lg overflow-hidden bg-gray-100">
            <Image
              src="/images/profile1.jpg"
              alt="Profile photo of Mrityunjay Pandey"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-8">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-3 text-gray-700">
            Aspiring Software Engineer with strong fundamentals in Data Structures, Algorithms, and OOP. Passionate about building impactful software and excited to contribute to challenging projects at Google as a Summer 2026 SWE Intern.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
            <div>
              <div className="font-medium">Location</div>
              <div>NIET Hostel, Greater Noida</div>
            </div>
            <div>
              <div className="font-medium">Phone</div>
              <div><a className="hover:underline" href="tel:+919140149699">+91-9140149699</a></div>
            </div>
            <div>
              <div className="font-medium">Email</div>
              <div><a className="hover:underline" href="mailto:mrityunjayp1409@gmail.com">mrityunjayp1409@gmail.com</a></div>
            </div>
            <div>
              <div className="font-medium">Links</div>
              <div className="flex gap-3">
                <a className="text-googleBlue hover:underline" href="https://github.com/mrityunjay-pandey" target="_blank" rel="noreferrer">GitHub</a>
                <a className="text-googleBlue hover:underline" href="https://www.linkedin.com/in/mrityunjay-pandey-59783a255/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/resume.pdf" className="px-4 py-2 rounded bg-googleBlue text-white hover:opacity-90">Download Resume</a>
            <a href="#skills" className="px-4 py-2 rounded border border-gray-200 hover:border-gray-300">View Skills</a>
          </div>
          <div className="mt-8">
            <h3 className="font-semibold">Education</h3>
            <p className="text-gray-700 mt-1">B.Tech in Computer Science Engineering, NIET Greater Noida (Expected 2027), CGPA: 8.8</p>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold">Achievements</h3>
            <ul className="list-disc list-inside text-gray-700 mt-1 space-y-1">
              <li>Awarded Fee Waiver (FW) seat for academic excellence</li>
              <li>Solved 200+ DSA problems on LeetCode</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
