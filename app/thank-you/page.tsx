import Link from "next/link";
import { FiCheckCircle, FiChevronRight, FiHome } from "react-icons/fi";
import PageBanner from "@/components/common/PageBanner";

export default function ThankYouPage() {
  return (
    <>
      {/* Banner with farming image */}
      <PageBanner title="Thank You" />

      <section className="flex items-center justify-center bg-gradient-to-br from-cream via-white to-mint/30 py-8 sm:py-12 lg:py-14">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            {/* Animated check icon */}
            <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-br from-leaf to-forest shadow-lg shadow-forest/20">
              <FiCheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>

            {/* Title */}
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[54px] font-extrabold">
              Thank <span className="text-gold">You!</span>
            </h1>

            {/* Gold divider */}
            <span className="mx-auto mt-3 block h-[3px] w-16 rounded-full bg-gold" />

            {/* Message */}
            <p className="mx-auto mt-4 max-w-lg text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
              Your message has been received successfully. Our team will review
              your enquiry and get back to you within <strong className="text-forest">24 hours</strong>.
            </p>

            <p className="mt-2 text-sm sm:text-base text-slate-500">
              We appreciate your interest in Farmora Organics and look forward to
              connecting with you.
            </p>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <Link
                href="/"
                className="group inline-flex items-center gap-6 rounded-full bg-forest py-2 pl-7 pr-2 font-ui text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-forest-deep hover:shadow-lg"
              >
                <span>Back to Home</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-forest transition-all duration-300 group-hover:bg-gold-light group-hover:scale-105">
                  <FiHome className="h-4 w-4" />
                </span>
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-6 rounded-full bg-forest py-2 pl-7 pr-2 font-ui text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-forest-deep hover:shadow-lg"
              >
                <span>Contact Us</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-forest transition-all duration-300 group-hover:bg-gold-light group-hover:scale-105">
                  <FiChevronRight className="h-4 w-4" />
                </span>
              </Link>
            </div>

            {/* Decorative leaf elements */}
            <div className="mt-8 flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400">
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
