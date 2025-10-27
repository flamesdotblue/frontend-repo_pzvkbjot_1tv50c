import { motion } from "framer-motion";
import { CheckCircle, GraduationCap, BookOpenCheck, Laptop, Smartphone } from "lucide-react";

export default function TeachersStudents() {
  const teacherFeatures = [
    "Create instant quizzes",
    "Measure comprehension",
    "Identify knowledge gaps fast",
  ];
  const studentFeatures = [
    "Turn notes into quizzes",
    "Revise efficiently",
    "Track progress",
  ];

  return (
    <section id="how" className="relative bg-white py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-orange-100 p-2 text-orange-700"><GraduationCap /></div>
            <h2 className="text-2xl font-semibold text-gray-900">Turn Your Lessons Into Instant Assessments.</h2>
          </div>
          <p className="mt-3 text-gray-600">Generate questions based on what you just taught and check understanding immediately.</p>
          <ul className="mt-6 space-y-3">
            {teacherFeatures.map((f) => (
              <li key={f} className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="mt-0.5 h-5 w-5 text-orange-600" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-6">
            <div className="mb-3 text-sm font-medium text-gray-700">Teacher Dashboard Preview</div>
            <div className="grid gap-3 sm:grid-cols-3">
              {["Quiz 1", "Quiz 2", "Quiz 3"].map((q) => (
                <div key={q} className="rounded-lg border border-gray-200 bg-white p-4">
                  <div className="text-sm font-medium text-gray-800">{q}</div>
                  <div className="mt-2 h-2 w-full rounded-full bg-orange-100">
                    <div className="h-2 rounded-full bg-orange-500" style={{ width: `${50 + Math.random() * 40}%` }} />
                  </div>
                  <div className="mt-2 text-xs text-gray-500">Auto-generated • 10 questions</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-orange-100 p-2 text-orange-700"><BookOpenCheck /></div>
            <h2 className="text-2xl font-semibold text-gray-900">Test What You Know — Instantly.</h2>
          </div>
          <p className="mt-3 text-gray-600">Upload your study materials and quiz yourself anytime, anywhere.</p>
          <ul className="mt-6 space-y-3">
            {studentFeatures.map((f) => (
              <li key={f} className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="mt-0.5 h-5 w-5 text-orange-600" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-orange-50 to-white p-6">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700"><Smartphone className="h-4 w-4" /> On your phone</div>
              <div className="mt-3 h-28 rounded-lg border border-dashed border-gray-300 bg-white/70" />
            </div>
            <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-orange-50 to-white p-6">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700"><Laptop className="h-4 w-4" /> On your laptop</div>
              <div className="mt-3 h-28 rounded-lg border border-dashed border-gray-300 bg-white/70" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
