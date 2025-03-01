import React from 'react';
import Link from 'next/link';

export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          How we handle your data and protect your privacy
        </p>
      </header>

      <div className="max-w-4xl mx-auto card">
        <div className="prose prose-invert max-w-none">
          <h2>Introduction</h2>
          <p>
            DreamBox ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you interact with our service through TikTok or our website.
          </p>
          <p>
            By submitting dreams to DreamBox or engaging with our content, you agree to the terms outlined in this policy.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect the following types of information:</p>
          <ul>
            <li><strong>TikTok Username:</strong> When you comment on our videos</li>
            <li><strong>Dream Descriptions:</strong> The content of dreams you share in comments</li>
            <li><strong>Engagement Metrics:</strong> Views, likes, comments, and other interaction data</li>
            <li><strong>Device Information:</strong> Browser type, IP address, and other technical data when you visit our website</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>To generate visual content from your dream descriptions</li>
            <li>To provide attribution for your contribution</li>
            <li>To improve our AI systems and content quality</li>
            <li>To analyze overall engagement patterns</li>
            <li>To maintain and improve our service</li>
            <li>To communicate with you about your submissions</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>We share information in the following ways:</p>
          <ul>
            <li><strong>Public Sharing:</strong> Selected dreams are shared publicly on TikTok</li>
            <li><strong>Attribution:</strong> Dreams are attributed to your username (unless anonymity is requested)</li>
            <li><strong>Service Providers:</strong> We may share data with trusted service providers who help operate our platform</li>
            <li><strong>Legal Requirements:</strong> We may disclose information if required by law</li>
          </ul>
          <p>We do not sell personal data to third parties.</p>

          <h2>Your Rights</h2>
          <p>You have the following rights regarding your data:</p>
          <ul>
            <li>Request removal of your dream content</li>
            <li>Request anonymization of previously attributed content</li>
            <li>Access what data we have associated with your username</li>
            <li>Opt out of future dream collection</li>
          </ul>
          <p>
            To exercise these rights, please comment "please remove" on the relevant video or contact us directly.
          </p>

          <h2>Data Retention</h2>
          <p>We retain your information as follows:</p>
          <ul>
            <li>Dream descriptions are stored for 12 months</li>
            <li>Generated videos are retained for 24 months</li>
            <li>Anonymous usage metrics are retained indefinitely</li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>
            Our service is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
          </p>

          <h2>Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            <a href="mailto:privacy@dreambox.ai" className="text-indigo-400 hover:text-indigo-300">privacy@dreambox.ai</a>
          </p>

          <p className="text-sm text-gray-400 mt-8">Last Updated: June 15, 2023</p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="btn-secondary">
          Back to Home
        </Link>
      </div>
    </div>
  );
} 