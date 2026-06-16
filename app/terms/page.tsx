export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32 text-white/70">
      <h1 className="font-space text-4xl font-bold text-white mb-2">Terms of Service</h1>
      <p className="text-sm text-white/40 mb-12">Last updated: June 2026</p>

      <section className="space-y-10">
        <div>
          <h2 className="font-space text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
          <p>By accessing or using the Xynor Labs website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
        </div>

        <div>
          <h2 className="font-space text-xl font-semibold text-white mb-3">2. Use of Services</h2>
          <p>You agree to use our services only for lawful purposes and in a manner that does not infringe the rights of others. You may not use our services to transmit harmful, offensive, or unauthorized content.</p>
        </div>

        <div>
          <h2 className="font-space text-xl font-semibold text-white mb-3">3. Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, and code, is the property of Xynor Labs and is protected by applicable intellectual property laws. You may not reproduce or distribute any content without our written permission.</p>
        </div>

        <div>
          <h2 className="font-space text-xl font-semibold text-white mb-3">4. Disclaimer of Warranties</h2>
          <p>Our services are provided on an "as is" basis without warranties of any kind. We do not guarantee that our website will be error-free, uninterrupted, or free of viruses or other harmful components.</p>
        </div>

        <div>
          <h2 className="font-space text-xl font-semibold text-white mb-3">5. Limitation of Liability</h2>
          <p>Xynor Labs shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services, even if we have been advised of the possibility of such damages.</p>
        </div>

        <div>
          <h2 className="font-space text-xl font-semibold text-white mb-3">6. Changes to Terms</h2>
          <p>We reserve the right to update these Terms of Service at any time. Continued use of our services after changes are posted constitutes your acceptance of the revised terms.</p>
        </div>

        <div>
          <h2 className="font-space text-xl font-semibold text-white mb-3">7. Contact</h2>
          <p>For questions about these terms, contact us at <a href="mailto:legal@xynor.ai" className="text-cyan-400 hover:underline">legal@xynor.ai</a>.</p>
        </div>
      </section>
    </main>
  );
}