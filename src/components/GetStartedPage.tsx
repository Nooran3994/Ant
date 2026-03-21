import React, { useState } from 'react';
import { Check, Mail, Phone, MapPin, ArrowRight, ChevronDown } from 'lucide-react';
import { Footer } from './Footer';

interface GetStartedPageProps {
  setCurrentPage?: (page: string) => void;
}

const inputClass =
  'w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-[15px] text-[#043236] placeholder:text-gray-300 focus:outline-none focus:border-[#00A651] focus:ring-4 focus:ring-[#00A651]/10 transition-all duration-200';

const labelClass =
  'block text-[13px] font-semibold text-[#043236] uppercase tracking-widest mb-2.5';

export function GetStartedPage({ setCurrentPage }: GetStartedPageProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/mgonbawe', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ fontFamily: "'DM Sans', 'Inter', sans-serif", background: '#FAFAFA' }}
    >

      {/* ── HERO ── */}
      <div
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #021e20 0%, #043236 60%, #054a50 100%)',
          paddingTop: '160px',
          paddingBottom: '80px',
        }}
      >
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,166,81,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '10%', width: '250px', height: '250px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,166,81,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="font-bold text-white mb-6 leading-[1.1]" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', letterSpacing: '-0.02em' }}>
            Let's grow your farm.{' '}
            <span style={{ color: '#00A651' }}>Together.</span>
          </h1>
          <p className="mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(1rem, 2vw, 1.15rem)', maxWidth: '560px' }}>
            Whether you're starting small or scaling up, our team is ready to support
            your journey to profitable, sustainable farming.
          </p>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="flex-1">

        {/* Success state */}
        {status === 'success' ? (
          <div className="max-w-xl mx-auto text-center py-32 px-6">
            <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8" style={{ background: 'linear-gradient(135deg, #00A651, #00d468)' }}>
              <Check className="w-12 h-12 text-white" strokeWidth={3} />
            </div>
            <h2 className="text-3xl font-bold text-[#043236] mb-4" style={{ letterSpacing: '-0.02em' }}>Inquiry Received!</h2>
            <p className="text-[#6F6F6F] mb-12 leading-relaxed text-lg">
              Thank you for reaching out. Our team will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setCurrentPage && setCurrentPage('home')}
              className="inline-flex items-center gap-3 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
              style={{ background: 'linear-gradient(135deg, #00A651, #008c44)' }}
            >
              Back to Home <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">

              {/* ── FORM (7 cols) ── */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-12">
                  <div className="mb-10">
                    <h2 className="font-bold text-[#043236] mb-2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '-0.02em' }}>
                      Send us an Inquiry
                    </h2>
                    <p className="text-[#6F6F6F] text-[15px] leading-relaxed">
                      Fill in your details and we'll get back to you shortly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="space-y-7">

                      <div>
                        <label className={labelClass}>Full Name <span className="text-[#00A651] normal-case tracking-normal font-normal text-base">*</span></label>
                        <input type="text" name="fullName" required placeholder="e.g. John Kamau" className={inputClass} />
                      </div>

                      <div>
                        <label className={labelClass}>Email Address <span className="text-[#00A651] normal-case tracking-normal font-normal text-base">*</span></label>
                        <input type="email" name="email" required placeholder="you@example.com" className={inputClass} />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className={labelClass}>Phone <span className="text-[#00A651] normal-case tracking-normal font-normal text-base">*</span></label>
                          <input type="tel" name="phone" required placeholder="+254 700 000 000" className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>Location</label>
                          <input type="text" name="location" placeholder="e.g. Nakuru, Kenya" className={inputClass} />
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>Farm / Business Name</label>
                        <input type="text" name="farmName" placeholder="e.g. Kamau Poultry Farm" className={inputClass} />
                      </div>

                      <div>
                        <label className={labelClass}>I'm interested in</label>
                        <div className="relative">
                          <select name="interest" className={inputClass + ' appearance-none pr-12 cursor-pointer'}>
                            <option value="">Select an option…</option>
                            <option value="JotoPro Heater">JotoPro Heater</option>
                            <option value="Farm Software">Farm Software</option>
                            <option value="Expert Services">Expert Services</option>
                            <option value="Schedule a Demo">Schedule a Demo</option>
                            <option value="Other">Other</option>
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>
                          Message <span className="normal-case tracking-normal font-normal text-[#6F6F6F] text-[13px]">(optional)</span>
                        </label>
                        <textarea name="message" rows={5} placeholder="Tell us about your farm and goals…" className={inputClass + ' resize-none'} />
                      </div>

                      {/* Error message */}
                      {status === 'error' && (
                        <p className="text-sm text-red-500">
                          Something went wrong. Please try again or email us directly at{' '}
                          <a href="mailto:info@adaptivenestingtech.com" className="underline">info@adaptivenestingtech.com</a>.
                        </p>
                      )}

                      {/* Submit button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={status === 'submitting'}
                          className="inline-flex items-center gap-3 font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                          style={{
                            background: 'linear-gradient(135deg, #00A651 0%, #008c44 100%)',
                            boxShadow: '0 4px 16px rgba(0,166,81,0.30)',
                            borderRadius: '10px',
                            padding: '14px 36px',
                            fontSize: '15px',
                            letterSpacing: '0.01em',
                          }}
                        >
                          {status === 'submitting' ? 'Sending…' : 'Send Inquiry'}
                          {status !== 'submitting' && <ArrowRight className="w-4 h-4" />}
                        </button>
                      </div>

                    </div>
                  </form>
                </div>
              </div>

              {/* ── SIDEBAR (5 cols) ── */}
              <div className="lg:col-span-5 space-y-8">

                <div>
                  <h3 className="font-bold text-[#043236] mb-6" style={{ fontSize: '1.35rem', letterSpacing: '-0.02em' }}>
                    How to reach us
                  </h3>
                  <div className="space-y-4">
                    {[
                      { icon: Mail,   label: 'Email',    value: 'info@adaptivenestingtech.com', sub: null,                          href: 'mailto:info@adaptivenestingtech.com' },
                      { icon: Phone,  label: 'Phone',    value: '+254 795 433 467',             sub: 'Mon – Fri, 8am – 6pm EAT',    href: 'tel:+254795433467' },
                      { icon: MapPin, label: 'Location', value: 'Nairobi, Kenya',               sub: 'Serving farmers across Kenya', href: null },
                    ].map(({ icon: Icon, label, value, sub, href }) => {
                      const Tag = href ? 'a' : 'div';
                      return (
                        <Tag key={label} {...(href ? { href } : {})}
                          className="flex items-center gap-5 p-5 rounded-2xl border border-gray-100 bg-white hover:border-[#00A651]/30 hover:shadow-lg transition-all duration-200"
                        >
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#e8f7f0' }}>
                            <Icon className="w-5 h-5 text-[#00A651]" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#6F6F6F] mb-0.5 leading-none">{label}</p>
                            <p className="text-[#043236] font-semibold text-[15px] leading-snug break-all">{value}</p>
                            {sub && <p className="text-[#6F6F6F] text-[13px] mt-0.5 leading-snug">{sub}</p>}
                          </div>
                        </Tag>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t border-gray-100" />

                <div>
                  <h3 className="font-bold text-[#043236] mb-6" style={{ fontSize: '1.35rem', letterSpacing: '-0.02em' }}>
                    How we can help
                  </h3>
                  <div className="space-y-4">
                    {[
                      'Supply you with our JotoPro smart heating solution',
                      'Connect you to the best chick and feed suppliers in Kenya',
                      'Provide expert brooding and farm management training',
                      'Set you up with farm monitoring and productivity tools',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'linear-gradient(135deg, #00A651, #008c44)' }}>
                          <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                        </div>
                        <p className="text-[#6F6F6F] text-[15px] leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl p-6 border" style={{ background: 'linear-gradient(135deg, #f0fdf6, #e8f7f0)', borderColor: 'rgba(0,166,81,0.2)' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00A651] animate-pulse" />
                    <p className="text-[13px] font-semibold text-[#043236] uppercase tracking-widest">Quick Response</p>
                  </div>
                  <p className="text-[#6F6F6F] text-[14px] leading-relaxed">
                    Our team typically responds within <strong className="text-[#043236]">24 hours</strong>. For urgent matters, call us directly.
                  </p>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
