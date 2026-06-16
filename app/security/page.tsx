export default function SecurityPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32 text-white/70">
      <h1 className="font-space text-4xl font-bold text-white mb-2">Security</h1>
      <p className="text-sm text-white/40 mb-12">Last updated: June 2026</p>

      <section className="space-y-10">
        <div>
          <h2 className="font-space text-xl font-semibold text-white mb-3">Our Commitment</h2>
          <p>At Xynor Labs, security is a core part of everything we build. We follow industry best practices to protect your data and ensure the integrity of our systems.</p>
        </div>

        <div>
          <h2 className="font-space text-xl font-semibold text-white mb-3">Data Encryption</h2>
          <p>All data transmitted between your browser and our servers is encrypted using TLS (Transport Layer Security). Sensitive data at rest is encrypted using AES-256 encryption standards.</p>
        </div>

        <div>
          <h2 className="font-space text-xl font-semibold text-white mb-3">Access Control</h2>
          <p>We enforce strict access controls across our infrastructure. Access to production systems is limited to authorized personnel only, and all access is logged and audited regularly.</p>
        </div>

        <div>
          <h2 className="font-space text-xl font-semibold text-white mb-3">Infrastructure</h2>
          <p>Our infrastructure is hosted on trusted cloud providers with SOC 2 compliance. We use firewalls, intrusion detection, and regular vulnerability scanning to maintain a secure environment.</p>
        </div>

        <div>
          <h2 className="font-space text-xl font-semibold text-white mb-3">Responsible Disclosure</h2>
          <p>If you discover a security vulnerability in our systems, we encourage responsible disclosure. Please report it to us at <a href="mailto:security.xynorlabs@gmail.com" className="text-cyan-400 hover:underline">security@xynor.ai</a> and we will respond within 48 hours.</p>
        </div>

        <div>
          <h2 className="font-space text-xl font-semibold text-white mb-3">Updates</h2>
          <p>We continuously monitor and improve our security practices. This page will be updated to reflect any significant changes to our security posture.</p>
        </div>
      </section>
    </main>
  );
}