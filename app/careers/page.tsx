import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";

export default function CareersPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="pt-40 pb-20">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="font-space text-5xl font-bold md:text-7xl">
            Build the <span className="gradient-text">future</span> with us.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/60">
            We're a small, focused team building real-world AI solutions,
            intelligent automation systems, and next-generation technology
            products.
          </p>

          {/* No Openings Section */}
          <div className="mt-16 glass rounded-3xl p-10 text-center">
            <h2 className="font-space text-3xl font-bold">
              No Open Positions Currently
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              We are not actively hiring at the moment. However, we are always
              interested in connecting with talented individuals who are
              passionate about AI, software engineering, automation, and
              emerging technologies.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-white/50">
              If you believe your skills and experience align with our vision,
              we encourage you to share your resume with us. Every application
              is carefully reviewed, and if a suitable opportunity becomes
              available in the future, our team will reach out to you.
            </p>

            <div className="mt-8">
              <a
                href="mailto:xynorlabs@gmail.com"
                className="inline-flex items-center rounded-xl border border-white/10 px-6 py-3 transition-all hover:border-white/20"
              >
                Send Your Resume →
              </a>
            </div>

            <p className="mt-6 text-sm text-white/40">
              xynorlabs@gmail.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}