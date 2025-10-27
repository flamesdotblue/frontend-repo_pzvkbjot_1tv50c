import { motion } from "framer-motion";
import { Star, Users } from "lucide-react";

export default function SocialProof() {
  const testimonials = [
    "I didn’t realize how much I forgot until I tested myself.",
    "One quick quiz showed me what my students actually struggled with.",
    "I revised on the train — and it finally stuck.",
  ];
  const faqs = [
    { q: "Is my data safe?", a: "Yes. AITA stores and processes data securely within Australia and follows recognized standards." },
    { q: "Can AITA be used by both teachers and students?", a: "Absolutely. Teachers create assessments and students generate self-quizzes from their notes and PDFs." },
    { q: "Does it work with university systems?", a: "Yes. AITA is designed to be compliant and compatible with higher education environments." },
    { q: "Is it free to try?", a: "Yes. You can try AITA free with no credit card required." },
    { q: "Does AITA share my data?", a: "No. Your content is private and never sold or shared." },
  ];
  return (
    <section className="relative bg-white py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-semibold text-gray-900"
            >
              What people say
            </motion.h3>
            <div className="mt-6 grid gap-4">
              {testimonials.map((t, i) => (
                <motion.blockquote
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-2 flex items-center gap-1 text-orange-500">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <p className="text-gray-800">{t}</p>
                </motion.blockquote>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-10 rounded-2xl border border-gray-200 bg-gradient-to-br from-orange-50 to-white p-8"
            >
              <div className="flex items-center gap-2 text-gray-800">
                <Users className="h-5 w-5 text-orange-600" />
                <h4 className="text-xl font-semibold">Join the Quiz Community.</h4>
              </div>
              <p className="mt-2 text-gray-600">Vote and share your favorite quizzes that help students succeed.</p>
              <a
                href="#community"
                className="mt-4 inline-flex items-center rounded-xl bg-orange-600 px-5 py-2.5 font-medium text-white shadow-md shadow-orange-600/20 transition hover:bg-orange-700"
              >
                Join the Community
              </a>
            </motion.div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-semibold text-gray-900"
            >
              Frequently asked questions
            </motion.h3>
            <div className="mt-6 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
              {faqs.map((item, idx) => (
                <motion.details
                  key={item.q}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group p-5 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between text-left text-gray-800">
                    <span className="font-medium">{item.q}</span>
                    <span className="ml-4 text-sm text-gray-500 group-open:hidden">+</span>
                    <span className="ml-4 hidden text-sm text-gray-500 group-open:block">−</span>
                  </summary>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{item.a}</p>
                </motion.details>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 text-center"
            >
              <h4 className="text-2xl font-semibold text-gray-900">Make Learning Effortless.</h4>
              <p className="mt-2 text-gray-600">Create or take quizzes in seconds — no credit card required.</p>
              <a
                href="#try"
                className="mt-5 inline-flex items-center rounded-xl bg-orange-600 px-6 py-3 font-medium text-white shadow-md shadow-orange-600/20 transition hover:bg-orange-700"
              >
                Try AITA Free Today
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
