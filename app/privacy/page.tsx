export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32 text-white/70">
      <h1 className="font-space text-4xl font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-sm text-white/40 mb-12">Last updated: June 2026</p>

      <section className="space-y-10">
        <div>
          <h2 className="font-space text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as your name, email address, and any messages you send through our contact forms or newsletter signup. We may also collect usage data such as pages visited, time spent on the site, and browser type to improve our services.</p>
        </div>

        <div>
          <h2 className="font-space text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
          <p>We use the information we collect to respond to your inquiries, send newsletters you have subscribed to, improve our website and services, and analyze usage patterns. We do not sell your personal data to third parties.</p>
        </div>

        <div>
          <h2 className="font-space text-xl font-semibold text-white mb-3">3. Cookies</h2>
          <p>Our website uses cookies to enhance your browsing experience. You can disable cookies in your browser settings, though some features of the site may not function properly as a result.</p>
        </div>

        <div>
          <h2 className="font-space text-xl font-semibold text-white mb-3">4. Data Retention</h2>
          <p>We retain your personal information only for as long as necessary to fulfill the purposes described in this policy, or as required by law. You may request deletion of your data at any time by contacting us.</p>
        </div>

        <div>
          <h2 className="font-space text-xl font-semibold text-white mb-3">5. Third-Party Services</h2>
          <p>We may use third-party services such as analytics providers and email platforms. These services have their own privacy policies and we encourage you to review them. We ensure any third party we work with meets appropriate data protection standards.</p>
        </div>

        <div>
          <h2 className="font-space text-xl font-semibold text-white mb-3">6. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time by clicking the unsubscribe link in any email we send.</p>
        </div>

        <div>
          <h2 className="font-space text-xl font-semibold text-white mb-3">7. Contact</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@xynor.ai" className="text-cyan-400 hover:underline">privacy@xynor.ai</a>.</p>
        </div>
      </section>
    </main>
  );
}