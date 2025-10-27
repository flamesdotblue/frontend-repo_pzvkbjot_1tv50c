import Hero from "./components/Hero";
import TeachersStudents from "./components/TeachersStudents";
import Security from "./components/Security";
import SocialProof from "./components/SocialProof";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-inter antialiased">
      <Hero />
      <TeachersStudents />
      <Security />
      <SocialProof />
      <footer className="border-t border-gray-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} AITA • AI-powered education</p>
          <nav className="flex items-center gap-5 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
