import React from 'react';
import { ArrowLeft, Shield, FileText, Users, Lock, Mail } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onBack?: () => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-slate-200/30 to-blue-200/30 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-tl from-purple-200/30 to-pink-200/30 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-emerald-200/20 to-blue-200/20 rounded-full blur-xl"></div>

      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack || (() => window.history.back())}
              className="flex items-center text-slate-600 hover:text-slate-800 transition-colors duration-300"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Portfolio
            </button>
            <div className="font-bold text-xl text-slate-800">
              Privacy Policy
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Winkabook Privacy Policy
          </h1>
          <p className="text-lg text-slate-600">
            Last updated: Jul 2nd, 2025
          </p>
        </div>

        {/* Intro */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
          <p className="text-lg text-slate-700 leading-relaxed">
            Winkabook ("we," "our," or "us") is committed to protecting your and your child's privacy. 
            This Privacy Policy describes how our mobile app handles information.
          </p>
        </div>

        {/* Section Divider */}
        <div className="text-center text-slate-400 text-2xl mb-8">⸻</div>

        {/* Section 1 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
          <div className="flex items-start mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl mr-4 flex-shrink-0">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. No Personal Data Collected</h2>
              <p className="text-slate-700 mb-4">Winkabook does not collect, store, or share any personal data, including:</p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                  Names or contact information (from children or parents)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                  Email addresses or phone numbers
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                  Location data
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                  Identifiers like IP addresses or advertising IDs
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="text-center text-slate-400 text-2xl mb-8">⸻</div>

        {/* Section 2 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
          <div className="flex items-start mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl mr-4 flex-shrink-0">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. No Third-Party Ads or Tracking</h2>
              <p className="text-slate-700 mb-4">Winkabook contains:</p>
              <ul className="space-y-2 text-slate-700 mb-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                  No third-party advertising
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                  No behavioral tracking
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                  No data monetization
                </li>
              </ul>
              <p className="text-slate-700">
                Any animations, sounds, or interactive features are self-contained and used purely for 
                educational and entertainment purposes.
              </p>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="text-center text-slate-400 text-2xl mb-8">⸻</div>

        {/* Section 3 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
          <div className="flex items-start mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl mr-4 flex-shrink-0">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Anonymous App Usage (Optional Analytics)</h2>
              <p className="text-slate-700 mb-4">
                To improve app performance and user experience, Winkabook may collect non-identifiable, 
                aggregated usage data, such as:
              </p>
              <ul className="space-y-2 text-slate-700 mb-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                  Pages read or interactions completed
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                  Device type and OS version (e.g., iOS/Android)
                </li>
              </ul>
              <p className="text-slate-700 mb-4">This data is:</p>
              <ul className="space-y-2 text-slate-700 mb-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                  Collected without identifiers
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                  Not linked to a user profile or identity
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                  Used only internally to improve features and fix bugs
                </li>
              </ul>
              <p className="text-slate-700">
                You may disable this collection by adjusting your device's settings (e.g., "Limit Ad Tracking" 
                or app-level permissions).
              </p>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="text-center text-slate-400 text-2xl mb-8">⸻</div>

        {/* Section 4 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
          <div className="flex items-start mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl mr-4 flex-shrink-0">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Children's Privacy</h2>
              <p className="text-slate-700 mb-4">
                Winkabook is designed for children under the age of 13 and complies with:
              </p>
              <ul className="space-y-2 text-slate-700 mb-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                  COPPA (Children's Online Privacy Protection Act)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                  GDPR-K (General Data Protection Regulation – Kids)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></span>
                  Google Play Families Policy and Apple Kids Category Guidelines
                </li>
              </ul>
              <p className="text-slate-700">
                Because we do not collect any personal information, no parental consent is required to use the app.
              </p>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="text-center text-slate-400 text-2xl mb-8">⸻</div>

        {/* Section 5 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
          <div className="flex items-start mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl mr-4 flex-shrink-0">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Data Security</h2>
              <p className="text-slate-700">
                Even though we don't collect personal data, we still apply modern security practices to protect 
                app integrity and prevent unauthorized access to device features.
              </p>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="text-center text-slate-400 text-2xl mb-8">⸻</div>

        {/* Section 6 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 mb-8">
          <div className="flex items-start mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl mr-4 flex-shrink-0">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Changes to This Policy</h2>
              <p className="text-slate-700">
                We may update this policy to reflect changes in technology or legal requirements. Updates will be 
                posted within the app or on our website (if applicable).
              </p>
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="text-center text-slate-400 text-2xl mb-8">⸻</div>

        {/* Section 7 - Contact */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200 mb-12">
          <div className="flex items-start mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mr-4 flex-shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Contact Us</h2>
              <p className="text-slate-700 mb-4">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="font-semibold text-slate-800 mb-2">Winkabook Team</p>
                <a 
                  href="mailto:hello@darundriyo.me"
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-300 font-medium"
                >
                  hello@darundriyo.me
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="text-center">
          <button
            onClick={onBack || (() => window.history.back())}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
