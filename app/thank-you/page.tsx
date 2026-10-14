import Link from "next/link";
import { FiCheckCircle, FiArrowRight, FiHome } from "react-icons/fi";
import PageBanner from "@/components/common/PageBanner";

export default function ThankYouPage() {
  return (
    <>
      {/* Banner with farming image */}
      <PageBanner title="Thank You" />

      <section className="flex min-h-[60vh] items-center justify-center bg-gradient-to-br from-cream via-white to-mint/30 py-16 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            {/* Animated check icon */}
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-leaf to-forest shadow-xl shadow-forest/20">
              <FiCheckCircle className="h-14 w-14 text-white" />
            </div>

            {/* Title */}
            <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl">
              Thank <span className="text-gold">You!</span>
            </h1>

            {/* Gold divider */}
            <span className="mx-auto mt-6 block h-[3px] w-20 bg-gold" />

            {/* Message */}
            <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Your message has been received successfully. Our team will review
              your enquiry and get back to you within <strong className="text-forest">24 hours</strong>.
            </p>

            <p className="mt-4 text-base text-slate-500">
              We appreciate your interest in Farmora Organics and look forward to
              connecting with you.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center gap-3 rounded-full bg-forest px-8 py-4 font-ui text-lg font-medium text-white shadow-lg transition hover:bg-forest-deep hover:shadow-xl"
              >
                <FiHome className="h-5 w-5" /> Back to Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full border-2 border-gold bg-transparent px-8 py-4 font-ui text-lg font-medium text-forest transition hover:bg-gold hover:text-white"
              >
                Contact Us <FiArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Decorative leaf elements */}
            <div className="mt-12 flex items-center justify-center gap-2 text-sm text-slate-400">
              <span className="h-px w-8 bg-gold/40" />
              🌿 Growing a Healthier Future Together 🌿
              <span className="h-px w-8 bg-gold/40" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
