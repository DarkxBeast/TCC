import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | The Career Company",
  description: "Terms and Conditions for The Career Company services",
};

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pb-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Terms and Conditions</h1>
        
        <hr className="border-gray-300 w-full mb-10" />
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">
            Welcome to The Career Company. By accessing or using our services, you agree to be bound by these Terms and Conditions.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using The Career Company's services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Services</h2>
          <p>The Career Company provides career mentoring, guidance, and connection services between mentors and mentees. Our platform facilitates these connections but does not guarantee specific outcomes or results from mentorship relationships.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Accounts</h2>
          <p>To access certain features of our service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
          <p>You agree to provide accurate and complete information when creating your account and to update your information to keep it accurate and current.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Conduct</h2>
          <p>When using our services, you agree not to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon the rights of others</li>
            <li>Submit false or misleading information</li>
            <li>Engage in any activity that interferes with or disrupts the services</li>
            <li>Attempt to gain unauthorized access to any part of the services</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
          <p>All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are owned by The Career Company and are protected by copyright, trademark, and other intellectual property laws.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
          <p>The Career Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, our services.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Modifications to Terms</h2>
          <p>The Career Company reserves the right to modify these Terms and Conditions at any time. We will provide notice of significant changes by posting the new Terms and Conditions on our website. Your continued use of our services after such modifications constitutes your acceptance of the revised Terms.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Governing Law</h2>
          <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Information</h2>
          <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
          <p className="mt-2">
            The Career Company<br />
            InFED, Indian Institute of Management Nagpur<br />
            Mihan (Non-Sez), Nagpur, Maharashtra, India - 441108<br />
            Email: <a href="mailto:support@thecareercompany.in" className="text-blue-600 hover:underline">support@thecareercompany.in</a>
          </p>

          <p className="mt-12 text-sm text-gray-600">Last updated: June 2023</p>
        </div>
      </div>
    </main>
  );
} 