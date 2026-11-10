/* ============================================================================
   THERMAL GLOW — EDIT YOUR WEBSITE CONTENT HERE
   Update company details, areas, services, FAQ answers and photos in this block.
   Keep image files inside /assets. No build tools or server are needed.
   ============================================================================ */

const COMPANY = {
  tradingName: 'Thermal Glow',
  legalName: 'THERMAL GLOW LIMITED',
  phoneDisplay: '07441 427512',
  phoneInternational: '+447441427512',
  email: 'info@thermalglow.uk',
  domain: 'thermalglow.uk',
  serviceLocation: 'Harrow, HA3 6AY',
  registeredAddress: '149 Charlton Road, Harrow, Greater London, United Kingdom, HA3 9HT',
  companyNumber: '12847821',
  gasSafeRegistration: '937381',
  gasSafeURL: 'https://www.gassaferegister.co.uk/',
  companiesHouseURL: 'https://find-and-update.company-information.service.gov.uk/company/12847821',
  emergencyCallouts: '24/7 emergency callouts',
  areas: [
    'Harrow', 'Wembley', 'Pinner', 'Stanmore', 'Kenton', 'Harrow Weald',
    'Northwood', 'Ruislip', 'South Harrow', 'Greenford', 'Edgware', 'Hatch End'
  ],
  about: 'Thermal Glow Ltd provides boiler, gas and central heating services from Harrow. From annual servicing and landlord gas safety checks to repairs, installations and HIU work, we focus on clear advice, careful workmanship and straightforward communication.'
};

const SERVICES = [
  {
    slug: 'boiler-repairs', number: '01', category: 'BOILERS', title: 'Boiler Repairs',
    short: 'No heating, no hot water or an error code? Get help diagnosing the problem.',
    intro: 'A faulty boiler can disrupt your day in an instant. We investigate boiler breakdowns, explain what is wrong and discuss suitable repair options to get your heating and hot water working again.',
    image: 'boiler-diagnostics.webp',
    imageAlt: 'Open boiler undergoing diagnostics and maintenance',
    imagePosition: 'center 40%',
    issuesHeading: 'Common boiler problems we look at',
    issues: ['No heating or hot water', 'Boiler error codes and lockouts', 'Pressure loss and recurring faults', 'Unusual noises or inconsistent heating'],
    details: ['Boiler fault-finding and diagnostics', 'Repair options explained before work proceeds', 'Checks on heating and hot-water operation', 'Advice if replacement may be more practical'],
    question: 'Can you look at my boiler even if I do not know the fault?',
    answer: 'Yes. Describe the symptoms or send us a photo of any error code, and we can discuss the next step.',
    cta: 'Ask about a boiler repair'
  },
  {
    slug: 'emergency-boiler-breakdowns', number: '02', category: 'EMERGENCY', title: 'Emergency Boiler Breakdowns',
    short: 'Urgent help when your boiler stops and you need heating or hot water restored.',
    intro: 'Lost your heating or hot water? Thermal Glow offers 24/7 emergency callouts for urgent boiler breakdowns in Harrow and surrounding areas. Call to explain the issue and discuss attendance.',
    image: 'engineer-boiler-repair.webp',
    imageAlt: 'Engineer inspecting an opened wall-mounted boiler',
    imagePosition: 'center 43%',
    issuesHeading: 'When to get in touch',
    issues: ['Sudden loss of heating or hot water', 'Boiler repeatedly shutting down', 'Persistent fault or lockout', 'A heating problem that cannot wait'],
    details: ['Urgent breakdown enquiries, day or night', 'Boiler fault assessment', 'Clear explanation of likely next steps', 'Heating and hot water troubleshooting'],
    question: 'Do you take emergency calls overnight?',
    answer: 'Yes. We offer 24/7 emergency callouts. Please call to explain the issue; attendance depends on the situation.',
    cta: 'Call about a breakdown'
  },
  {
    slug: 'boiler-servicing', number: '03', category: 'BOILERS', title: 'Boiler Servicing',
    short: 'Routine servicing to check safety, performance and general boiler condition.',
    intro: 'Regular boiler servicing helps identify issues early, supports safe operation and may be required under your manufacturer’s warranty. We carry out boiler servicing across Harrow and nearby areas.',
    image: 'boiler-servicing.webp',
    imageAlt: 'White Vaillant wall-mounted gas boiler',
    imagePosition: 'center 42%',
    issuesHeading: 'When to book a boiler service',
    issues: ['Your annual service is due', 'You have recently moved into a property', 'You want a routine safety and performance check', 'Your warranty requires regular servicing'],
    details: ['Visual appliance and installation checks', 'Appropriate safety and performance checks', 'Review of any concerns you have noticed', 'Explanation of findings and any next steps'],
    question: 'How often should I book a boiler service?',
    answer: 'An annual service is generally recommended. Always follow your boiler manufacturer’s instructions and any warranty conditions.',
    cta: 'Book boiler servicing'
  },
  {
    slug: 'boiler-installations', number: '04', category: 'BOILERS', title: 'Boiler Installations & Replacements',
    short: 'Advice and installation when you are ready for a replacement boiler.',
    intro: 'If your existing boiler is unreliable, inefficient or beyond economical repair, we can discuss a replacement suited to your property and heating needs.',
    image: 'heating-system.webp',
    imageAlt: 'Installed Vaillant boiler with neat central heating pipework',
    imagePosition: 'center 44%',
    issuesHeading: 'Reasons to consider replacement',
    issues: ['An older boiler has repeated faults', 'Repair costs are becoming difficult to justify', 'Your household heating needs have changed', 'You are planning a property refurbishment'],
    details: ['Discussion of boiler options and suitability', 'Replacement and installation enquiries', 'Consideration of existing heating and hot-water requirements', 'A quotation based on the work involved'],
    question: 'Can you advise on which boiler is suitable?',
    answer: 'Yes. Get in touch with information about your property and current system so we can discuss the available options.',
    cta: 'Request an installation quote'
  },
  {
    slug: 'central-heating-repairs', number: '05', category: 'HEATING', title: 'Central Heating Repairs',
    short: 'Help with cold radiators, uneven heating and troublesome heating systems.',
    intro: 'Radiators not getting warm? Heating running unevenly? We look for the cause of central heating faults and discuss what is needed to restore dependable warmth.',
    image: 'boiler-installation.jpg',
    imageAlt: 'Wall-mounted heating boiler with front controls',
    imagePosition: 'center 36%',
    issuesHeading: 'Problems we can investigate',
    issues: ['Cold radiators or cold spots', 'Heating working in some rooms but not others', 'Unusual system noises', 'Heating controls not responding as expected'],
    details: ['Central heating fault-finding', 'Radiator and circulation issues', 'Heating controls and system checks', 'Practical advice on potential repairs'],
    question: 'Can you help if only some radiators are cold?',
    answer: 'Yes. Uneven heating can have several causes. We can discuss the symptoms and assess the system.',
    cta: 'Get heating help'
  },
  {
    slug: 'landlord-gas-safety-certificates', number: '06', category: 'LANDLORDS', title: 'Landlord Gas Safety Certificates (CP12)',
    short: 'Gas safety inspections and certification for rented properties.',
    intro: 'Landlords need annual gas safety checks where the legal requirements apply. Thermal Glow carries out landlord gas safety inspections and provides the relevant record for your property.',
    image: 'boiler-internals.webp',
    imageAlt: 'Gas boiler interior exposed during inspection and maintenance',
    imagePosition: 'center 42%',
    issuesHeading: 'For landlords and property managers',
    issues: ['Your annual gas safety check is due', 'A new tenancy is being arranged', 'You manage more than one rented property', 'You need to discuss appliance access and appointments'],
    details: ['Landlord gas safety inspections', 'Checks of applicable gas appliances and installations', 'Gas safety record (often called a CP12)', 'Appointment planning for occupied properties'],
    question: 'Do you provide a CP12 record?',
    answer: 'Yes. We provide landlord gas safety checks and the corresponding record following the inspection.',
    cta: 'Book a landlord gas safety check'
  },
  {
    slug: 'power-flushing', number: '07', category: 'HEATING', title: 'Power Flushing',
    short: 'A way to tackle sludge and debris affecting central heating performance.',
    intro: 'Sludge and debris can contribute to poor radiator circulation and uneven heating. Power flushing may help in suitable systems; we can discuss your symptoms and whether it is appropriate.',
    image: 'heating-system.webp',
    imageAlt: 'Central heating system pipework and components',
    imagePosition: 'center 53%',
    issuesHeading: 'Possible signs of circulation problems',
    issues: ['Radiator cold spots', 'Slow or uneven radiator warm-up', 'Discoloured system water', 'Repeated circulation-related issues'],
    details: ['Discussion of your heating symptoms', 'Assessment of whether power flushing is suitable', 'Heating system cleaning enquiries', 'Advice on related issues requiring attention'],
    question: 'Does every heating system need power flushing?',
    answer: 'No. It depends on the system and its condition. We can advise whether it may be appropriate following an assessment.',
    cta: 'Enquire about power flushing'
  },
  {
    slug: 'smart-thermostat-installation', number: '08', category: 'CONTROLS', title: 'Smart Thermostat Installation',
    short: 'Heating controls that make day-to-day temperature management simpler.',
    intro: 'A smart thermostat can make heating schedules easier to manage. We help with the installation and setup of compatible smart heating controls, including well-known systems such as Hive and Nest.',
    image: 'boiler-servicing.webp',
    imageAlt: 'Gas boiler with front digital controls',
    imagePosition: 'center 35%',
    issuesHeading: 'When a control upgrade may help',
    issues: ['You want to adjust heating schedules more easily', 'Your existing thermostat is outdated', 'You would like app-connected controls', 'You want to review control compatibility'],
    details: ['Smart thermostat installation enquiries', 'Compatibility discussion for your existing system', 'Setup and explanation of basic functions', 'Advice on controls such as Hive and Nest'],
    question: 'Will a smart thermostat work with my boiler?',
    answer: 'Compatibility depends on your boiler and heating setup. Contact us with the model details so we can advise.',
    cta: 'Ask about smart heating controls'
  },
  {
    slug: 'hiu-servicing-repairs', number: '09', category: 'HIU SPECIALISTS', title: 'HIU Servicing & Repairs',
    short: 'Heat interface unit maintenance and fault-finding for flats and apartment buildings.',
    intro: 'We provide HIU servicing, repairs and emergency callout enquiries for heat interface units in flats and residential developments. Landlords and building managers can also enquire about multiple-unit work.',
    image: 'hiu-servicing-repair.webp',
    imageAlt: 'Open heat interface unit with copper pipes, plate heat exchangers and controls',
    imagePosition: 'center center',
    issuesHeading: 'HIU issues we can discuss',
    issues: ['Unreliable hot water in a flat', 'Heating problems associated with the HIU', 'HIU servicing requirements', 'Multiple units needing planned attention'],
    details: ['Heat interface unit servicing', 'HIU repairs and fault-finding', 'Emergency HIU callout enquiries', 'Per-unit pricing enquiries for landlords and developments'],
    question: 'Do you provide prices for multiple HIUs?',
    answer: 'Yes. Contact us with the number of units and development details to discuss per-unit pricing.',
    cta: 'Discuss HIU servicing or prices'
  }
];

const FAQS = [
  {
    question: 'Are you Gas Safe Registered?',
    answer: 'Yes. Our Gas Safe registration number is 937381. You can check registration details on the official Gas Safe Register website and ask to see the attending engineer’s Gas Safe ID card.'
  },
  {
    question: 'What services do you offer?',
    answer: 'Boiler servicing, repairs and installations; emergency boiler breakdowns; landlord gas safety certificates (CP12); central heating repairs; power flushing; smart thermostat installation; and HIU servicing and repairs.'
  },
  {
    question: 'Which areas do you cover?',
    answer: 'We cover Harrow, Wembley, Pinner, Stanmore, Kenton, Harrow Weald, Northwood, Ruislip, South Harrow, Greenford, Edgware, Hatch End and surrounding areas. Contact us if your postcode is not listed.'
  },
  {
    question: 'Which boiler brands do you work on?',
    answer: 'We work with major boiler brands, including Vaillant, Worcester Bosch, Ideal, Baxi, Viessmann, Glow-worm, Potterton, ATAG and Alpha. Contact us with your boiler model to confirm the work required.'
  },
  {
    question: 'How often should I service my boiler?',
    answer: 'A yearly boiler service is generally recommended. Follow the appliance manufacturer’s guidance and warranty conditions.'
  },
  {
    question: 'Do you provide landlord gas safety certificates?',
    answer: 'Yes. We carry out landlord gas safety inspections and provide the relevant gas safety record, commonly referred to as a CP12.'
  },
  {
    question: 'How do I book an appointment?',
    answer: 'Call 07441 427512 to discuss your heating or boiler service, or email info@thermalglow.uk. Tell us your area and what you need.'
  }
];

const BOILER_BRANDS = [
  ['Vaillant', 'brand-vaillant.png'],
  ['Worcester Bosch', 'brand-worcester.png'],
  ['Baxi', 'brand-baxi.png'],
  ['Ideal', 'brand-ideal.png'],
  ['Viessmann', 'brand-viessmann.png'],
  ['Glow-worm', 'brand-glow-worm.png'],
  ['Potterton', 'brand-potterton.png'],
  ['ATAG', 'brand-atag.png'],
  ['Alpha', 'brand-alpha.png']
];

/* ============================================================================
   WEBSITE CODE — Normally you only need to edit the content block above.
   ============================================================================ */

const ROOT = document.body.dataset.root || '';
const asset = name => ROOT + 'assets/' + name;
const homeURL = hash => ROOT + 'index.html' + (hash || '');
const serviceURL = slug => ROOT + 'services/' + slug + '.html';
const phoneURL = 'tel:' + COMPANY.phoneInternational;
const emailURL = 'mailto:' + COMPANY.email;
const clean = value => String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
const phoneLink = (label, className = 'btn btn-orange') => `<a class="${className}" href="${phoneURL}">${label}</a>`;
const isHome = document.body.dataset.page !== 'service';

function header() {
  return `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header" id="site-header"><div class="container header-inner">
      <a class="brand" href="${homeURL()}" aria-label="Thermal Glow homepage"><img src="${asset('thermal-glow-logo.png')}" alt="Thermal Glow gas services" width="300" height="124" /></a>
      <nav class="desktop-nav" aria-label="Main navigation">
        <a href="${homeURL('#services')}" ${isHome ? '' : ''}>Services</a>
        <a href="${homeURL('#about')}">About</a>
        <a href="${homeURL('#areas')}">Areas we cover</a>
        <a href="${homeURL('#faqs')}">FAQs</a>
      </nav>
      <div class="header-actions">
        <a class="header-number" href="${phoneURL}"><small>Call now</small><strong>${clean(COMPANY.phoneDisplay)}</strong></a>
        <a class="header-call-text" href="${phoneURL}">Call now</a>
        <button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-controls="mobile-nav" aria-expanded="false" id="menu-toggle"><span class="menu-bars" aria-hidden="true"><i></i><i></i></span></button>
      </div>
    </div>
    <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation" inert>
      <a href="${homeURL('#services')}">Services</a><a href="${homeURL('#about')}">About Thermal Glow</a>
      <a href="${homeURL('#areas')}">Areas we cover</a><a href="${homeURL('#faqs')}">FAQs</a>
      <a href="${homeURL('#contact')}">Contact</a>
      <a class="mobile-nav-phone" href="${phoneURL}">Call ${clean(COMPANY.phoneDisplay)}</a>
    </nav></header>`;
}

function foot() {
  return `
    <footer class="footer"><div class="container footer-main">
      <div class="footer-company">
        <a href="${homeURL()}" class="footer-brand" aria-label="Thermal Glow homepage"><img src="${asset('thermal-glow-logo.png')}" alt="Thermal Glow gas services" width="300" height="124" loading="lazy"></a>
        <p>Local boiler, gas and heating services in Harrow and surrounding areas.</p>
        <p class="footer-gas-reg">Gas Safe Registered · No. ${clean(COMPANY.gasSafeRegistration)}</p>
      </div>
      <div class="footer-col"><h3>Explore</h3><a href="${homeURL('#services')}">Our services</a><a href="${homeURL('#about')}">About us</a><a href="${homeURL('#areas')}">Service areas</a><a href="${homeURL('#faqs')}">FAQs</a></div>
      <div class="footer-col"><h3>Get in touch</h3><a href="${phoneURL}">${clean(COMPANY.phoneDisplay)}</a><a href="${emailURL}">${clean(COMPANY.email)}</a><span>${clean(COMPANY.serviceLocation)}</span></div>
      <div class="footer-col footer-legal"><h3>Company details</h3><p>${clean(COMPANY.legalName)}</p><p>Registered office: ${clean(COMPANY.registeredAddress)}</p><p>Company No. <a href="${clean(COMPANY.companiesHouseURL)}" target="_blank" rel="noopener noreferrer">${clean(COMPANY.companyNumber)}</a></p></div>
    </div><div class="container footer-bottom"><span>© ${new Date().getFullYear()} ${clean(COMPANY.legalName)}. All rights reserved.</span><a href="${clean(COMPANY.gasSafeURL)}" target="_blank" rel="noopener noreferrer">Verify on Gas Safe Register</a><span>Made for Harrow and nearby areas.</span></div></footer>
    <div class="mobile-cta" aria-label="Quick contact"><a href="${phoneURL}">Call now</a></div>
  `;
}

function titleRow(kicker, title, subtitle, link, headingId = '') {
  return `<div class="section-heading reveal"><div><p class="eyebrow">${kicker}</p><h2${headingId ? ` id="${headingId}"` : ''}>${title}</h2>${subtitle ? `<p class="section-intro">${subtitle}</p>` : ''}</div>${link || ''}</div>`;
}

function card(s, index, compact = false) {
  return `<article class="service-card ${compact ? 'service-card--compact' : ''} reveal" style="--stagger:${Math.min(index % 3, 2) * 75}ms">
    <a class="service-card-image" href="${serviceURL(s.slug)}" aria-label="Learn about ${clean(s.title)}"><img src="${asset(s.image)}" alt="${clean(s.imageAlt)}" loading="lazy" width="680" height="560" style="object-position:${clean(s.imagePosition)}"></a>
    <div class="service-card-body"><div class="card-topline"><span>${clean(s.category)}</span><span>${s.number} / 09</span></div>
      <h3><a href="${serviceURL(s.slug)}">${clean(s.title)}</a></h3><p>${clean(s.short)}</p><a class="text-link" href="${serviceURL(s.slug)}">Explore service <span class="text-link-rule" aria-hidden="true"></span></a>
    </div></article>`;
}

function brandSection() {
  return `<section class="brands-section" aria-labelledby="brands-title"><div class="container">
    <div class="brands-heading"><p class="eyebrow">BOILER BRANDS</p><h2 id="brands-title">Working across familiar boiler brands.</h2><p>We work on major brands. Please contact us with your boiler model to discuss your specific needs.</p></div>
    <div class="brand-grid">${BOILER_BRANDS.map(([name,img]) => `<div class="brand-item"><img src="${asset(img)}" alt="${clean(name)} logo" loading="lazy"></div>`).join('')}</div>
    <p class="brand-disclaimer">Manufacturer logos are shown to identify brands, not to indicate endorsement or authorised partnership.</p>
  </div></section>`;
}

function contactSection() {
  return `<section class="contact-section" id="contact" aria-labelledby="contact-title"><div class="container contact-layout">
    <div class="contact-main reveal"><p class="eyebrow eyebrow-light">LET'S GET IT SORTED</p><h2 id="contact-title">Need a hand with your heating?</h2><p>Tell us what is happening, where you are and which boiler or heating system you have. We’ll discuss the next step.</p>
      <div class="contact-buttons">${phoneLink('Call ' + clean(COMPANY.phoneDisplay))}</div>
      <p class="contact-availability">${clean(COMPANY.emergencyCallouts)}</p>
    </div>
    <aside class="contact-panel reveal"><p class="eyebrow">CONTACT DETAILS</p><div class="contact-fact"><span>CALL</span><a href="${phoneURL}">${clean(COMPANY.phoneDisplay)}</a></div><div class="contact-fact"><span>EMAIL</span><a href="${emailURL}">${clean(COMPANY.email)}</a></div><div class="contact-fact"><span>BASED IN</span><strong>${clean(COMPANY.serviceLocation)}</strong></div><div class="contact-fact"><span>GAS SAFE</span><a href="${clean(COMPANY.gasSafeURL)}" target="_blank" rel="noopener noreferrer">Registration ${clean(COMPANY.gasSafeRegistration)}</a></div></aside>
  </div></section>`;
}

function renderHome() {
  const feature = SERVICES.filter(s => ['boiler-repairs','boiler-servicing','hiu-servicing-repairs'].includes(s.slug));
  const areas = COMPANY.areas.map(name => `<span class="area-chip">${clean(name)}</span>`).join('');
  return `
    ${header()}
    <main id="main">
    <section class="hero" aria-labelledby="hero-title"><div class="container hero-grid">
      <div class="hero-copy"><p class="hero-label">LOCAL GAS & HEATING ENGINEERS · HARROW</p>
        <h1 id="hero-title">Good heating.<br><em>Better peace of mind.</em></h1>
        <p class="hero-description">Boiler repairs, servicing, installations and HIU support across Harrow and surrounding areas. Clear advice, professional care and help when you need it.</p>
        <div class="hero-cta">${phoneLink('Call ' + clean(COMPANY.phoneDisplay))}</div>
        <div class="hero-subnote"><span class="small-line" aria-hidden="true"></span>${clean(COMPANY.emergencyCallouts)}</div>
      </div>
      <div class="hero-visual"><div class="hero-image-frame"><img src="${asset('engineer-boiler-repair.webp')}" alt="Thermal Glow engineer inspecting a boiler in a Harrow property" width="1392" height="2048" fetchpriority="high" style="object-position:center 42%"></div>
        <div class="hero-badge"><img src="${asset('gas-safe-registered.webp')}" width="75" height="84" alt="Gas Safe Registered logo" /><div><span>GAS SAFE REGISTERED</span><strong>No. ${clean(COMPANY.gasSafeRegistration)}</strong></div></div>
        <p class="hero-image-caption">REAL WORK. LOCAL SERVICE.</p>
      </div>
    </div><div class="container hero-bottom"><div><b>01</b><span>Boilers & heating</span></div><div><b>02</b><span>Landlord gas safety</span></div><div><b>03</b><span>HIU servicing & repairs</span></div></div></section>

    <section class="services-section section" id="services" aria-labelledby="services-title"><div class="container">
      ${titleRow('01 / WHAT WE DO','Everything your heating needs.','From a boiler that will not fire up to an annual service or HIU repair, find the right support for your property.','', 'services-title')}
      <div class="service-grid">${SERVICES.map((s,i)=>card(s,i)).join('')}</div>
      <div class="services-note reveal"><div><strong>Not sure what the problem is?</strong><span>Describe the symptoms and we’ll help you work out the next step.</span></div>${phoneLink('Speak to us', 'btn btn-dark')}</div>
    </div></section>

    <section class="about-section" id="about" aria-labelledby="about-title"><div class="container about-grid">
      <div class="about-media reveal"><img src="${asset('boiler-diagnostics.webp')}" alt="Boiler open for a careful technical inspection" loading="lazy" width="1536" height="2048" /><div class="about-photo-label">Harrow, Greater London</div></div>
      <div class="about-copy reveal"><p class="eyebrow">02 / ABOUT THERMAL GLOW</p><h2 id="about-title">Local knowledge.<br><span>Careful work.</span></h2><p class="about-lead">Gas and heating help from people who know the job.</p><p>${clean(COMPANY.about)}</p>
        <div class="about-points"><div><span>01</span><div><h3>Straightforward advice</h3><p>Clear conversations about the issue and your options.</p></div></div><div><span>02</span><div><h3>Domestic & landlord work</h3><p>Support for homeowners, landlords and managed properties.</p></div></div><div><span>03</span><div><h3>HIU experience</h3><p>Servicing and repairs for heat interface units in flats.</p></div></div></div>
        <a class="btn btn-dark" href="${homeURL('#contact')}">Get in touch</a>
      </div>
    </div></section>

    <section class="gas-section" aria-labelledby="gas-title"><div class="container gas-layout">
      <img class="gas-logo" src="${asset('gas-safe-registered.webp')}" alt="Gas Safe Registered official logo" loading="lazy" width="368" height="408" />
      <div><p class="eyebrow">GAS SAFETY MATTERS</p><h2 id="gas-title">Gas Safe Registered.<br>Easy to verify.</h2><p>Our Gas Safe registration number is <strong>${clean(COMPANY.gasSafeRegistration)}</strong>. Check registration details on the official register before any gas work.</p><a class="text-link" href="${clean(COMPANY.gasSafeURL)}" target="_blank" rel="noopener noreferrer">Visit Gas Safe Register <span class="text-link-rule" aria-hidden="true"></span></a></div>
      <div class="gas-side-note"><span>REGISTRATION NUMBER</span><strong>${clean(COMPANY.gasSafeRegistration)}</strong><small>Always ask to see the attending engineer’s Gas Safe ID card.</small></div>
    </div></section>

    <section class="areas-section section" id="areas" aria-labelledby="areas-title"><div class="container areas-layout"><div class="areas-intro reveal"><p class="eyebrow">03 / LOCAL COVERAGE</p><h2 id="areas-title">Proud to serve<br>Harrow <em>& beyond.</em></h2><p>Heating, boiler and gas work across North West London, including the neighbourhoods listed here.</p><div class="areas-cta"><strong>Not sure if we cover your postcode?</strong><a href="${phoneURL}">Give us a call</a></div></div><div class="areas-list reveal">${areas}<span class="area-chip area-chip-last">And surrounding areas</span></div></div></section>

    ${brandSection()}

    <section class="faq-section section" id="faqs" aria-labelledby="faqs-title"><div class="container faq-layout"><div class="faq-intro reveal"><p class="eyebrow">04 / GOOD TO KNOW</p><h2 id="faqs-title">Your questions,<br>answered.</h2><p>Just the essentials. Need something more specific? We’re easy to reach.</p><a class="btn btn-dark" href="${homeURL('#contact')}">Ask us a question</a></div><div class="faq-list">${FAQS.map((f,i)=>`<details class="faq-item reveal" ${i===0?'open':''}><summary>${clean(f.question)}<span class="faq-plus" aria-hidden="true"></span></summary><p>${clean(f.answer)}</p></details>`).join('')}</div></div></section>

    ${contactSection()}
    </main>${foot()}`;
}

function renderService(s) {
  const related = SERVICES.filter(item => item.slug !== s.slug).sort((a,b)=>{
    const av = a.category === s.category ? -1 : 0;
    const bv = b.category === s.category ? -1 : 0;
    return av - bv;
  }).slice(0,3);
  return `${header()}<main id="main">
    <section class="detail-hero" aria-labelledby="detail-title"><div class="container detail-hero-grid">
      <div class="detail-hero-copy"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="${homeURL()}">Home</a><span>/</span><a href="${homeURL('#services')}">Services</a><span>/</span><span aria-current="page">${clean(s.title)}</span></nav>
        <p class="eyebrow eyebrow-light">${clean(s.category)} · HARROW & SURROUNDING AREAS</p><h1 id="detail-title">${clean(s.title)}</h1><p class="detail-description">${clean(s.intro)}</p><div class="hero-cta">${phoneLink(clean(s.cta))}</div>
        <div class="detail-availability">${clean(COMPANY.emergencyCallouts)}</div>
      </div><div class="detail-photo"><img src="${asset(s.image)}" alt="${clean(s.imageAlt)}" width="1000" height="800" fetchpriority="high" style="object-position:${clean(s.imagePosition)}"></div>
    </div></section>
    <section class="detail-work section" aria-labelledby="work-title"><div class="container detail-work-grid"><div class="reveal"><p class="eyebrow">WHAT TO LOOK OUT FOR</p><h2 id="work-title">${clean(s.issuesHeading)}.</h2><p>Not sure what is going on? A short description of the problem can be a good place to start.</p><a class="text-link" href="${phoneURL}">Call us about it <span class="text-link-rule" aria-hidden="true"></span></a></div><div class="check-list reveal">${s.issues.map(item=>`<div><span class="check-mark" aria-hidden="true"></span>${clean(item)}</div>`).join('')}</div></div></section>
    <section class="detail-scope" aria-labelledby="scope-title"><div class="container scope-grid"><div class="scope-left reveal"><p class="eyebrow">HOW WE CAN HELP</p><h2 id="scope-title">Practical help.<br>Clear next steps.</h2><p>Every heating system is different. We’ll discuss what you need and the appropriate next step for your property.</p>${phoneLink('Talk to Thermal Glow','btn btn-dark')}</div><div class="scope-cards">${s.details.map((item,i)=>`<div class="scope-card reveal"><span>0${i+1}</span><h3>${clean(item)}</h3></div>`).join('')}</div></div></section>
    <section class="detail-faq section"><div class="container detail-faq-inner"><div><p class="eyebrow">ONE MORE THING</p><h2>Good to know.</h2></div><details class="faq-item" open><summary>${clean(s.question)}<span class="faq-plus" aria-hidden="true"></span></summary><p>${clean(s.answer)}</p></details></div></section>
    <section class="related-section section" aria-labelledby="related-title"><div class="container">${titleRow('OTHER SERVICES','More ways we can help.','Explore related services for your heating and hot-water system.','', 'related-title')}<div class="service-grid service-grid--related">${related.map((item,i)=>card(item,i,true)).join('')}</div><p class="back-link"><a href="${homeURL('#services')}">Browse all services</a></p></div></section>
    ${contactSection()}
    </main>${foot()}`;
}

function initMenu() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('mobile-nav');
  if (!toggle || !nav) return;
  const close = () => {toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label','Open navigation menu'); nav.classList.remove('is-open'); nav.inert = true; document.body.classList.remove('menu-open');};
  toggle.addEventListener('click', () => {
    const opening = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(opening));
    toggle.setAttribute('aria-label', opening ? 'Close navigation menu' : 'Open navigation menu');
    nav.classList.toggle('is-open', opening);
    nav.inert = !opening;
    document.body.classList.toggle('menu-open', opening);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
  document.addEventListener('click', e=>{if(toggle.getAttribute('aria-expanded')==='true' && !nav.contains(e.target) && !toggle.contains(e.target))close();});
  window.addEventListener('resize',()=>{if(window.innerWidth>900)close();});
}

function initReveals() {
  const elements = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(el=>el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});
  },{rootMargin:'0px 0px -25px 0px',threshold:0.08});
  elements.forEach(el=>observer.observe(el));
}

function initScroll() {
  const headerEl = document.getElementById('site-header');
  if (!headerEl) return;
  let previousY = Math.max(0, window.scrollY);
  let pendingFrame = false;
  let travel = 0;
  let previousDirection = 0;

  const updateHeader = () => {
    pendingFrame = false;
    const currentY = Math.max(0, window.scrollY);
    const delta = currentY - previousY;
    previousY = currentY;
    headerEl.classList.toggle('is-scrolled', currentY > 12);

    // Keep the header on-screen at the top, while the menu is open, or when
    // keyboard focus is in the header. Small scroll jitters do not flicker it.
    if (currentY < Math.max(120, headerEl.offsetHeight + 36) ||
        document.body.classList.contains('menu-open')) {
      headerEl.classList.remove('is-hidden');
      travel = 0;
      previousDirection = 0;
      return;
    }
    const direction = Math.sign(delta);
    if (!direction) return;
    if (direction !== previousDirection) travel = 0;
    previousDirection = direction;
    travel += Math.abs(delta);
    if (travel >= 8) {
      headerEl.classList.toggle('is-hidden', direction > 0);
      travel = 0;
    }
  };
  window.addEventListener('scroll', () => {
    if (!pendingFrame) {
      pendingFrame = true;
      requestAnimationFrame(updateHeader);
    }
  }, {passive: true});
  window.addEventListener('focusin', (event) => {
    if (headerEl.contains(event.target)) headerEl.classList.remove('is-hidden');
  });
  updateHeader();

  if (location.hash) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) requestAnimationFrame(()=>requestAnimationFrame(()=>target.scrollIntoView({behavior:'instant',block:'start'})));
  }
}

function init() {
  const app = document.getElementById('app');
  if (!app) return;
  if (isHome) app.innerHTML = renderHome();
  else {
    const service = SERVICES.find(s=>s.slug===document.body.dataset.service);
    if (!service) {app.innerHTML = `${header()}<main id="main" class="not-found container"><h1>Service not found.</h1><p>We couldn't find that service.</p><a class="btn btn-dark" href="${homeURL('#services')}">View our services</a></main>${foot()}`;}
    else app.innerHTML = renderService(service);
  }
  initMenu(); initReveals(); initScroll();
}

init();
