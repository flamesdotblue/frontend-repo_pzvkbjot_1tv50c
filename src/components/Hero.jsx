import { motion } from "framer-motion";
import { Upload, Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm text-orange-700">
            <Sparkles size={16} />
            AI-powered quizzes for education
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Turn Any Lecture Into a Quiz in Seconds.
          </h1>
          <p className="mt-5 text-lg leading-7 text-gray-600">
            Upload your lecture, PDF, or notes — AITA instantly builds ready-to-use quizzes for teachers and students.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#try"
              className="group inline-flex items-center justify-center rounded-xl bg-orange-600 px-6 py-3 font-medium text-white shadow-md shadow-orange-600/20 transition hover:bg-orange-700"
            >
              Try AITA Free
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 font-medium text-gray-900 hover:border-gray-300"
            >
              See How It Works
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mt-14 max-w-5xl"
        >
          <div className="relative rounded-2xl border border-gray-200 bg-white/70 p-4 shadow-sm backdrop-blur">
            <div className="absolute -top-6 left-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm text-orange-700">
              <Upload size={16} />
              upload → quiz generated
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="rounded-xl border border-gray-200 bg-white p-5"
              >
                <div className="text-sm font-medium text-gray-700">Upload</div>
                <div className="mt-3 h-36 rounded-lg border border-dashed border-gray-300 bg-gray-50/60 p-4 text-gray-500">
                  Drag & drop lecture.pdf
                </div>
                <div className="mt-3 text-xs text-gray-500">PDF, DOCX, TXT, audio transcripts</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="rounded-xl border border-gray-200 bg-white p-5"
              >
                <div className="text-sm font-medium text-gray-700">Quiz Preview</div>
                <div className="mt-3 space-y-3">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="rounded-lg border border-gray-200 bg-white p-4"
                    >
                      <p className="text-sm font-medium text-gray-800">Question {i}</p>
                      <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <div className="rounded-md border border-gray-200 px-3 py-2">Option A</div>
                        <div className="rounded-md border border-gray-200 px-3 py-2">Option B</div>
                        <div className="rounded-md border border-gray-200 px-3 py-2">Option C</div>
                        <div className="rounded-md border border-gray-200 px-3 py-2">Option D</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-orange-500/5 via-transparent to-orange-400/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
