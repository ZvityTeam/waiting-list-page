import React, { useState, useRef } from 'react';

import { AnimatedBeamMultipleOutputDemo } from './components/AnimatedBeamMultipleOtput';

import { BorderBeam } from './components/magicui/border-beam';
import { ChevronRight } from 'lucide-react';

interface FormData {
  email: string;
  businessType: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    businessType: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formSectionRef = useRef<HTMLDivElement>(null);

  const submitToGoogleForms = async (e: React.FormEvent) => {
    e.preventDefault();
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScPmqt3EgwDULTcmjAxoO3BwTTh3Qzadw_tfIULwkiq6gyVxQ/formResponse';
    
    // Create URL encoded data
    const formDataEncoded = new URLSearchParams();
    formDataEncoded.append('entry.984614680', formData.email);
    formDataEncoded.append('entry.1608056188', formData.businessType);

    try {
      // Create a hidden form and submit it
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = formUrl;
      form.style.display = 'none';

      // Add form fields
      formDataEncoded.forEach((value, key) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      // Add the form to the document
      document.body.appendChild(form);

      // Create a hidden iframe
      const iframe = document.createElement('iframe');
      iframe.name = 'hidden-iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      // Set form target to the hidden iframe
      form.target = 'hidden-iframe';
      
      // Submit the form
      form.submit();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
        setFormData({ email: '', businessType: '' });
        setIsSubmitted(true);
        setIsSubmitting(false);
      }, 500);

      return true;
    } catch (error) {
      console.error('Error submitting form:', error);
      return false;
    }
  };

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };


  return (
    <div  className="min-h-screen bg-background font-sans antialiased __variable_36bd41">
      <header className="fixed left-0 top-0 z-50 w-full translate-y-[-1rem] animate-fade-in border-b opacity-0 backdrop-blur-[12px] [--animation-delay:600ms]">
        <div className="container flex h-[3.5rem] items-center justify-between">
          <a className="text-md flex items-center text-xl" href="/">TurinIQ</a>
        </div>
      </header>
      <nav className="fixed left-0 top-0 z-50 h-screen w-full overflow-auto bg-background/70 backdrop-blur-[12px] pointer-events-none" style={{ opacity: 0, transform: 'none' }}>
        <div className="container flex h-[3.5rem] items-center justify-between">
          <a className="text-md flex items-center" href="/">Magic UI</a>
          <button className="ml-6 md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-justify">
              <line x1="3" x2="21" y1="6" y2="6"></line>
              <line x1="3" x2="21" y1="12" y2="12"></line>
              <line x1="3" x2="21" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <ul className="flex flex-col md:flex-row md:items-center uppercase md:normal-case ease-in">
          {[
            { href: "/features", text: "Features" },
            { href: "#", text: "Pricing" },
            { href: "#", text: "Careers" },
            { href: "#", text: "Contact Us" }
          ].map((item, index) => (
            <li 
              key={index}
              className="border-grey-dark pl-6 py-0.5 border-b md:border-none" 
              style={{ opacity: 0, transform: 'translateY(-20px) translateZ(0)' }}
            >
              <a 
                className="hover:text-grey flex h-[var(--navigation-height)] w-full items-center text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors"
                href={item.href}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
<main className="mx-auto flex-1 overflow-hidden">
      {/* Hero Section */}
      <section id="hero" className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8">
        <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
          <p style={{ "--shimmer-width": "100px" } as React.CSSProperties} className="mx-auto max-w-md text-neutral-600/50 dark:text-neutral-400/50 animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite] bg-gradient-to-r from-neutral-100 via-black/80 via-50% to-neutral-100 dark:from-neutral-900 dark:via-white/80 dark:to-neutral-900 inline-flex items-center justify-center">
            <span>✨ Powered by Zvity</span>
          </p>
        </div>
        <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          TurinIQ<br className=" md:block" /><span className="text-8xl max-sm:text-4xl leading-normal"> A Business Intelligence Agent</span>

        </h1>
        <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          Guide users, automate workflows, and turn data into action. AI that doesn’t just respond—<br className="hidden md:block" />it thinks, learns, and optimizes for real results.
        </p>
                  
        <button className="absolute left-[45%] inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary shadow hover:bg-primary/90 h-9 px-4 py-2 translate-y-[-1rem] animate-fade-in gap-1 rounded-lg text-white dark:text-black opacity-0 ease-in-out [--animation-delay:600ms] z-[999] top-[50%] max-sm:top-[70%] max-sm:left-[30%]"
  onClick={scrollToForm}>
          <span>Join the waitlist </span>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
            <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
          </svg>
        </button>
        <div className="relative mt-[4rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]">
          <div className="rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:animate-image-glow">
            <BorderBeam duration={14} size={200} />

            <img src="https://startup-template-sage.vercel.app/hero-dark.png" alt="Hero Image" className="hidden relative w-full h-full rounded-[inherit] border object-contain dark:block  blur-sm" />
            <img src="https://startup-template-sage.vercel.app/hero-light.png" alt="Hero Image" className="block relative w-full h-full rounded-[inherit] border object-contain dark:hidden" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <div className="relative pt-15 pb-24 bg-black">
        <div className="md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-16">
          <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-7xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          Why Choose TurinIQ?<br className="hidden md:block" />

        </h1>
        <p className="mb-12 text-lg max-sm:hidden tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Experience the next generation of AI-powered conversations with our cutting-edge features
        </p>
          </div>
          <div className='flex max-sm:flex-col md:flex-row items-center max-sm:gap-10 md:gap-20'>
          <AnimatedBeamMultipleOutputDemo/>
            <div>
          <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance max-sm:text-3xl md:text-7xl lg:text-3xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          Turn Conversations into Conversions
          </h1>
          <p className="mb-12 text-md tracking-tight text-gray-400 md:text-lg text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] max-w-6xl">Our AI chat agent engages visitors in real-time, understands their needs, and provides instant assistance—whether it’s capturing leads, answering queries, schedule appointments, and drive sales effortlessly. With seamless automation and intelligent responses, you can enhance customer experience, boost sales, and grow your business effortlessly.</p>
          </div>
          </div>
        </div>
      </div>

      {/* Join Waitlist Form */}
      <div className="relative py-24 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"  ref={formSectionRef}>
      <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-7xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] text-center">
          Join the Waitlist<br className="hidden md:block" />

        </h1>
          <div className="relative  max-sm:px-4 max-sm:py-8 md:p-12 rounded-3xl border border-gray-800">
            <div className="absolute inset-0 bg-gradient-to-r from-[rgb(255 255 255 / 6%)] to-black-500/10 rounded-3xl"></div>
            <div className="relative">
              <form onSubmit={submitToGoogleForms} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="entry.984614680"
                    name="entry.984614680"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 bg-black/50 rounded-xl border border-gray-800 focus:outline-none focus:border-indigo-500 text-white"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-gray-300 mb-2">Business Type (Optional)</label>
                  <input
                    type="text"
                    id="entry.1608056188"
                    name="entry.1608056188"
                    value={formData.businessType}
                    onChange={(e) => setFormData(prev => ({ ...prev, businessType: e.target.value }))}
                    className="w-full px-4 py-3 bg-black/50 rounded-xl border border-gray-800 focus:outline-none focus:border-indigo-500 text-white"
                    placeholder="What type of business do you run?"
                  />
                </div>
                <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-br dark:from-white from-black from-20% dark:to-white/70 to-black/40 text-black px-8 py-3 rounded-xl text-md hover:opacity-90 transition-all duration-300 flex items-center justify-center disabled:opacity-50"
      >
        {isSubmitted ? (
          <>Yayy!! Added to waitlist!!</>
        ) : isSubmitting ? (
          'Submitting...'
        ) : (
          <>Join Now <ChevronRight className="ml-2" /></>
        )}
      </button>
                <p className="text-center text-gray-400 text-sm">Early adopters get priority access and exclusive perks!</p>
              </form>
            </div>
          </div>
        </div>
      </div>
  </main>
      {/* Footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-gray-400">© 2025 Zvity. All rights reserved.</p>
            <a href="mailto:contact@turiniq.com" className="text-indigo-400 hover:text-indigo-300 mt-2 inline-block">
              contact.zvity@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;