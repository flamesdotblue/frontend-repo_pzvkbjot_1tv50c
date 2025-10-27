import { motion } from "framer-motion";
import { Shield, Lock } from "lucide-react";

export default function Security() {
  const badges = ["APPs", "TEQSA", "ISO/IEC 27001"];
  return (
    <section className="relative bg-white py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm text-orange-700">
              <Shield size={16} />
              University-ready security
            </div>
            <h3 className="mt-4 text-3xl font-semibold text-gray-900">Safe, Secure, and University-Ready.</h3>
            <p className="mt-3 text-gray-600">AITA follows strict data-protection standards to keep your information private.</p>
            <ul className="mt-6 flex flex-wrap items-center gap-3">
              {badges.map((b) => (
                <li key={b} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-500">All data is stored and processed securely within Australia.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-orange-50 to-white p-6">
              <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,159,64,0.15),transparent_40%)]" />
              <div className="relative mx-auto flex h-full max-w-md flex-col items-center justify-center text-orange-700">
                <div className="rounded-full bg-white p-5 shadow-lg ring-1 ring-orange-200">
                  <Lock className="h-10 w-10" />
                </div>
                <p className="mt-4 text-center text-sm text-orange-700">Secure by design • Privacy-first</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
