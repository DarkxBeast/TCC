import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | The Career Company",
  description: "Privacy Policy for The Career Company services",
};

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pb-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Privacy Policy</h1>
        
        <hr className="border-gray-300 w-full mb-10" />
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">
            This Privacy Policy describes how The Career Company (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and shares information about you when you visit our website (thecareercompany.in) and use our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">1.1. Information You Provide</h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Contact Information:</strong> When you contact us through our website, we may collect your name, email address, phone number, and any other information you provide in your message.</li>
            <li><strong>Resume and Profile Information:</strong> If you choose to apply for a job or engage in our career services, we may collect information from your resume or profile, such as your education, work experience, skills, and certifications.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">1.2. Information We Collect Automatically</h3>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Usage Data:</strong> We collect information about your interaction with our website, such as the pages you visit, the links you click, and the duration of your visit.</li>
            <li><strong>Device Information:</strong> We may collect information about your device, including your IP address, browser type, operating system, and referring website.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We may use the information we collect for the following purposes:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>To provide and personalize our services, including job matching and career counseling.</li>
            <li>To communicate with you, respond to your inquiries, and provide you with important updates.</li>
            <li>To improve our website and services, including analyzing user behavior and preferences.</li>
            <li>To process your job applications and fulfill your requests for career-related services.</li>
            <li>To comply with legal obligations and enforce our policies.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Share Your Information</h2>
          <p>We may share your information in the following circumstances:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>With service providers who assist us in operating our website and providing our services.</li>
            <li>With your consent or at your direction, such as when you choose to share your resume with a potential employer.</li>
            <li>In response to legal requests or to protect our rights and interests.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Retention</h2>
          <p>We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Choices</h2>
          <p>You may access, update, or delete your personal information by contacting us through the contact information provided on our website. You may also unsubscribe from our marketing communications at any time by following the instructions in the emails we send you.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Security</h2>
          <p>We implement reasonable security measures to protect your information from unauthorized access, disclosure, alteration, or destruction.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. International Data Transfers</h2>
          <p>Your information may be transferred to and processed in countries other than your own, where our servers or service providers are located. By using our website, you consent to such transfers.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Children&apos;s Privacy</h2>
          <p>Our website is not directed to children under the age of 13, and we do not knowingly collect personal information from children. If you believe that we have inadvertently collected information from a child, please contact us immediately.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us at ceo@thecareercompany.in</p>

          <p className="mt-12 text-sm text-gray-600">Last updated: June 2023</p>
        </div>
      </div>
    </main>
  );
} 