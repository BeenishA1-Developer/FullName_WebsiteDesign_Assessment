import { useState, useEffect, useRef } from 'react'
import heroImg from './assets/images/hero.jpg';
import logo from './assets/logo.png';
import heroBbqImg from './assets/images/hero-bbq.jpg';
import heroInteriorImg from './assets/images/hero-interior.jpg';
import heroKarahiTableImg from './assets/images/hero-karahi-table.png';
import heroKarahiInteriorImg from './assets/images/hero-karahi-interior.png';
import karahiImg from './assets/images/karahi.jpg';
import bbqImg from './assets/images/bbq.jpg';
import handiImg from './assets/images/handi.jpg';
import skewersImg from './assets/images/skewers.jpg';
import spicesImg from './assets/images/spices.jpg';
import tableImg from './assets/images/table.jpg';
import gallery1Img from './assets/images/gallery-1.jpg';
import gallery2Img from './assets/images/gallery-2.jpg';
import gallery3Img from './assets/images/gallery-3.jpg';
import gallery4Img from './assets/images/gallery-4.jpg';
import galleryFamilyImg from './assets/images/gallery-family-table.png';
import galleryFoodStoryImg from './assets/images/gallery-food-story.png';

const IMAGES = {
  hero: heroImg,
  heroBbq: heroBbqImg,
  heroBiryani: gallery2Img,
  heroInterior: heroInteriorImg,
  heroKarahiTable: heroKarahiTableImg,
  heroKarahiInterior: heroKarahiInteriorImg,
  interior: heroInteriorImg,
  karahi: karahiImg,
  bbq: bbqImg,
  handi: handiImg,
  biryani: gallery2Img,
  skewers: skewersImg,
  spices: spicesImg,
  table: tableImg,
  gallery1: gallery1Img,
  gallery2: gallery2Img,
  gallery3: gallery3Img,
  gallery4: gallery4Img,
  galleryFamily: galleryFamilyImg,
  galleryFoodStory: galleryFoodStoryImg,
};


const menuCategories = [
  {
    id: 'karahi',
    label: 'Karahi & Handi',
    items: [
      { name: 'Chicken Karahi', desc: 'Tender chicken slow-cooked in a wok with tomatoes, green chillies & aromatic spices', price: 'Rs. 1,200' },
      { name: 'Mutton Handi', desc: 'Slow-braised mutton in a clay pot with yogurt, whole spices & fresh cream', price: 'Rs. 1,800' },
      { name: 'Peshwari Karahi', desc: 'Bone-in karahi with a rich, dry masala and charcoal-smoked finish', price: 'Rs. 1,400' },
    ],
  },
  {
    id: 'bbq',
    label: 'BBQ & Tikka',
    items: [
      { name: 'Seekh Kabab', desc: 'Minced beef skewers seasoned with ginger, garlic and fresh herbs, grilled over open flame', price: 'Rs. 900' },
      { name: 'Chicken Tikka', desc: 'Bone-in chicken marinated overnight in yogurt and spices, cooked in a clay tandoor', price: 'Rs. 1,100' },
      { name: 'BBQ Platter', desc: 'Mixed platter of seekh kabab, boti, tikka and malai boti — served with raita and naan', price: 'Rs. 2,200' },
    ],
  },
  {
    id: 'biryani',
    label: 'Biryani & Rice',
    items: [
      { name: 'Mutton Biryani', desc: 'Fragrant basmati rice layered with slow-cooked mutton, saffron and fried onions', price: 'Rs. 1,600' },
      { name: 'Chicken Pulao', desc: 'Light, aromatic pulao with tender chicken pieces, whole spices and caramelised onions', price: 'Rs. 900' },
      { name: 'Special Yakhni Pulao', desc: "Mehran's signature — rice slow-cooked in rich bone broth with whole garam masala", price: 'Rs. 1,200' },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    items: [
      { name: 'Mint Lemonade', desc: 'Fresh mint, lemon, and a bright splash of chilled soda', price: 'Rs. 350' },
      { name: 'Doodh Patti Chai', desc: 'Strong tea simmered with milk, cardamom, and a little sweetness', price: 'Rs. 220' },
      { name: 'Mango Lassi', desc: 'Thick yogurt blended with ripe mango and a touch of saffron', price: 'Rs. 450' },
    ],
  },
]

const reviews = [
  {
    name: 'Shahid Raza',
    location: 'Attock',
    text: "The Mutton Handi here is unlike anything I've had in years. Reminds me of my mother's cooking — slow, patient, and full of love. We drove 40 minutes and it was absolutely worth every kilometre.",
    stars: 5,
  },
  {
    name: 'Amna Tariq',
    location: 'Rawalpindi',
    text: 'Came for the karahi, stayed for the whole experience. The space feels warm and real — not over-decorated. Their BBQ platter is something you share with the whole table and still want more.',
    stars: 5,
  },
  {
    name: 'Faisal Mahmood',
    location: 'Fateh Jang',
    text: "Our family has been coming here since they opened. The biryani on weekends is outstanding. It's the kind of place where you actually linger over tea instead of rushing out.",
    stars: 5,
  },
]

const marqueeItems = [
  'Chicken Karahi', '✦', 'Mutton Handi', '✦', 'Seekh Kabab', '✦',
  'Biryani', '✦', 'Chicken Tikka', '✦', 'BBQ Platter', '✦',
  'Yakhni Pulao', '✦', 'Malai Boti', '✦', 'Peshwari Naan', '✦',
]

const signatureDishes = [
  { img: IMAGES.karahi, name: 'Chicken Karahi', desc: 'Our most-ordered dish. Bone-in chicken in a rich, smoky tomato masala — cooked wok-style with green chillies and julienned ginger.', price: 'Rs. 1,200', tag: 'Most Popular' },
  { img: IMAGES.bbq, name: 'BBQ Platter', desc: 'A generous mixed platter of seekh kabab, boti, chicken tikka and malai boti. Best shared — comes with fresh naan and house raita.', price: 'Rs. 2,200', tag: 'Best for Groups' },
  { img: IMAGES.handi, name: 'Mutton Handi', desc: 'Slow-braised mutton in a sealed clay handi with yogurt, whole spices and a finishing knob of desi ghee. Deep, layered flavour.', price: 'Rs. 1,800', tag: "Chef's Choice" },
]

const menuItemImages = {
  karahi: [IMAGES.karahi, IMAGES.handi, IMAGES.karahi],
  bbq: [IMAGES.bbq, IMAGES.skewers, IMAGES.bbq],
  biryani: [IMAGES.biryani, IMAGES.biryani, IMAGES.table],
  drinks: [IMAGES.table, IMAGES.gallery2, IMAGES.spices],
}

const mehranWay = [
  { number: '01', title: 'Select', text: 'Fresh ingredients and carefully chosen spices.' },
  { number: '02', title: 'Prepare', text: 'Traditional cooking techniques and house recipes.' },
  { number: '03', title: 'Serve', text: 'Generous portions prepared for the table.' },
  { number: '04', title: 'Share', text: 'A meal becomes a memory.' },
]

const circleBenefits = [
  { title: 'Seasonal Specials', text: "Discover what's cooking." },
  { title: 'Family Offers', text: 'Special offers for gatherings.' },
  { title: 'Special Occasions', text: 'Ramadan, Eid, and seasonal menus.' },
]

const restaurantNavItems = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#our-story' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

const heroImages = [
  { src: IMAGES.heroKarahiTable, alt: 'Traditional karahi served in a warm restaurant setting' },
  { src: IMAGES.heroKarahiInterior, alt: 'Traditional karahi dining interior with lanterns and fresh naan' },
]

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(mediaQuery.matches)
    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)
    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  return reducedMotion
}

function Reveal({
  children,
  variant = 'rise',
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  variant?: 'rise' | 'scale' | 'left' | 'right'
  delay?: number
  className?: string
}) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${inView ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  )
}

function WhyIcon({ type }: { type: 'dish' | 'fresh' | 'family' | 'welcome' }) {
  const paths = {
    dish: <><path d="M4 11h16" /><path d="M6 11a6 6 0 0 0 12 0" /><path d="M8 7c1-2 3-3 4-3s3 1 4 3" /><path d="M9 15h6" /></>,
    fresh: <><path d="M12 20V8" /><path d="M12 13c-4 0-6-2-6-5 4 0 6 2 6 5Z" /><path d="M12 10c0-4 2-6 6-6 0 4-2 6-6 6Z" /><path d="M12 17c3 0 5-1 6-4-3 0-5 1-6 4Z" /></>,
    family: <><circle cx="8" cy="8" r="2.5" /><circle cx="16" cy="8" r="2.5" /><path d="M3.5 19c.5-3 2.1-5 4.5-5s4 2 4.5 5" /><path d="M11.5 19c.5-3 2.1-5 4.5-5s4 2 4.5 5" /><path d="M5 12h14" /></>,
    welcome: <><path d="M4 12h9" /><path d="m10 8 4 4-4 4" /><path d="M14 5h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4" /><path d="M4 5v3" /><path d="M4 16v3" /></>,
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
      {paths[type]}
    </svg>
  )
}

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView()
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(to / 40)
    const timer = setInterval(() => {
      start += step
      if (start >= to) { setCount(to); clearInterval(timer) }
      else setCount(start)
    }, 30)
    return () => clearInterval(timer)
  }, [inView, to])
  return <span ref={ref}>{count}{suffix}</span>
}

export default function App() {
  const [welcomeOpen, setWelcomeOpen] = useState(() => sessionStorage.getItem('mehran-welcome-seen') !== 'true')
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('karahi')
  const [docsOpen, setDocsOpen] = useState(false)
  const [activeDoc, setActiveDoc] = useState('feedback')
  const [selectedDish, setSelectedDish] = useState<typeof signatureDishes[number] | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [cartCount, setCartCount] = useState(0)
  const [cartMessage, setCartMessage] = useState('')
  const [orderOpen, setOrderOpen] = useState(false)
  const [orderItems, setOrderItems] = useState<Array<{ name: string; price: string; quantity: number }>>([])
  const [marketingConsent, setMarketingConsent] = useState(false)
  const [reservationSent, setReservationSent] = useState(false)
  const [activeHero, setActiveHero] = useState(0)
  const [activeReview, setActiveReview] = useState(0)
  const reducedMotion = usePrefersReducedMotion()
  const { ref: processStripRef, inView: processStripInView } = useInView(0.2)
  const { ref: storyGridRef, inView: storyGridInView } = useInView()
  const reviewsTrackRef = useRef<HTMLDivElement>(null)

  const closeWelcome = () => {
    sessionStorage.setItem('mehran-welcome-seen', 'true')
    setWelcomeOpen(false)
  }

  useEffect(() => {
    if (!welcomeOpen || reducedMotion) return
    const timer = window.setTimeout(closeWelcome, 9000)
    return () => window.clearTimeout(timer)
  }, [welcomeOpen, reducedMotion])

  useEffect(() => {
    if (reducedMotion) {
      setActiveHero(0)
      return
    }
    const timer = window.setInterval(() => {
      setActiveHero(current => (current + 1) % heroImages.length)
    }, 3000)
    return () => window.clearInterval(timer)
  }, [reducedMotion])

  useEffect(() => {
    if (reducedMotion) return
    const timer = window.setInterval(() => setActiveReview(current => (current + 1) % reviews.length), 5200)
    return () => window.clearInterval(timer)
  }, [reducedMotion])

  const activeMenu = menuCategories.find(c => c.id === activeCategory)!

  const openDishDetails = (dish: typeof signatureDishes[number]) => {
    setSelectedDish(dish)
    setQuantity(1)
    setCartMessage('')
  }

  const addDishToCart = () => {
    if (!selectedDish) return
    setCartCount(current => current + quantity)
    setCartMessage(`${quantity} ${selectedDish.name} added to your order.`)
  }

  const addToOrder = (item: { name: string; price: string }) => {
    setOrderItems(current => {
      const existing = current.find(orderItem => orderItem.name === item.name)
      if (existing) return current.map(orderItem => orderItem.name === item.name ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
      return [...current, { ...item, quantity: 1 }]
    })
    setOrderOpen(true)
  }

  const orderTotal = orderItems.reduce((total, item) => total + Number(item.price.replace(/[^0-9]/g, '')) * item.quantity, 0)
  const shiftReview = (direction: number) => {
    setActiveReview(current => (current + direction + reviews.length) % reviews.length)
  }
  const visibleReviews = reviews.map((_, offset) => reviews[(activeReview + offset) % reviews.length])

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: 'var(--ivory)', color: 'var(--text)', fontFamily: "'Manrope', sans-serif" }}>

      {welcomeOpen && (
        <div className="welcome-overlay" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
          <div className="welcome-card">
            <button type="button" className="welcome-skip" onClick={closeWelcome}>Skip <span aria-hidden="true">→</span></button>
            <div className="welcome-card-image"><img src={IMAGES.heroKarahiTable} alt="Steaming traditional karahi at Mehran Desi Kitchen" /></div>
            <div className="welcome-card-content">
              <span className="welcome-eyebrow">Mehran Desi Kitchen</span>
              <span className="welcome-location">Fateh Jang · Punjab</span>
              <h2 id="welcome-title" className="font-display">A Dastarkhwan Worth Gathering Around.</h2>
              <p>Traditional flavours, generous portions and the warmth of a Pakistani family table.</p>
              <div className="welcome-special"><span>Today's Special</span><strong>Mutton Karahi</strong><small>Slow-cooked with tomatoes, green chilies and house spices. <b>PKR 1,850</b></small></div>
              <div className="welcome-actions"><button type="button" onClick={() => { closeWelcome(); document.getElementById('menu')?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' }) }}>Explore Today's Menu →</button><button type="button" className="welcome-secondary" onClick={closeWelcome}>Enter Restaurant</button></div>
            </div>
          </div>
        </div>
      )}

      {/* ── Top Info Bar ── */}
      <div style={{ backgroundColor: 'var(--charcoal)', color: 'var(--ivory)' }} className="py-2 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs tracking-widest uppercase">
          <div className="flex items-center gap-6">
            <span>📍 Fateh Jang, Punjab</span>
            <span className="hidden sm:inline" style={{ color: 'var(--brass)' }}>·</span>
            <span className="hidden sm:inline">Family Dining</span>
            <span className="hidden md:inline" style={{ color: 'var(--brass)' }}>·</span>
            <span className="hidden md:inline">Noon – 11 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span>Open Today</span>
          </div>
        </div>
      </div>

      {/* ── Navigation ── */}
      <nav style={{ backgroundColor: 'var(--ivory)', borderBottom: '1px solid var(--border)' }} className="sticky top-0 z-50 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex flex-col leading-none">
            <span className="site-logo-frame" aria-label="Mehran Desi Kitchen">
              <img src={logo} alt="Mehran Desi Kitchen" className="site-logo" />
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {restaurantNavItems.map(item => (
              <a key={item.label} href={item.href}
                className="text-sm font-medium transition-colors"
                style={{ color: 'var(--warm-gray)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--terracotta)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--warm-gray)')}
              >{item.label}</a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#menu"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold transition-all"
              style={{ backgroundColor: 'var(--terracotta)', color: 'var(--ivory)', borderRadius: 'var(--radius)' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#7a2620')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--terracotta)')}
            >Order Online →</a>

            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2" aria-label="Toggle menu">
              <div className="w-5 flex flex-col gap-1">
                <span className={`block h-0.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} style={{ backgroundColor: 'var(--charcoal)' }}></span>
                <span className={`block h-0.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: 'var(--charcoal)' }}></span>
                <span className={`block h-0.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} style={{ backgroundColor: 'var(--charcoal)' }}></span>
              </div>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden mt-4 pb-4 flex flex-col gap-4 border-t pt-4" style={{ borderColor: 'var(--border)' }}>
            {restaurantNavItems.map(item => (
              <a key={item.label} onClick={() => setMenuOpen(false)} href={item.href}
                className="text-sm font-medium py-1" style={{ color: 'var(--charcoal)' }}
              >{item.label}</a>
            ))}
            <a href="#menu" onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold"
              style={{ backgroundColor: 'var(--terracotta)', color: 'var(--ivory)', borderRadius: 'var(--radius)' }}
            >Order Online →</a>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section id="home" className="relative overflow-hidden" style={{ minHeight: '92vh' }}>
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={`absolute inset-0 w-full h-full object-cover hero-image ${index === activeHero ? 'hero-image-active' : ''}`}
            />
          ))}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(110deg, rgba(37,32,28,0.92) 42%, rgba(37,32,28,0.25) 100%)' }}></div>
          {/* Brass diagonal accent line */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden lg:block">
            <svg width="100%" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="none">
              <line x1="580" y1="0" x2="720" y2="900" stroke="#B58A4A" strokeWidth="1" strokeOpacity="0.25" />
            </svg>
          </div>
        </div>

        {/* Today's special floating badge */}
        <div className="absolute top-8 right-6 lg:right-16 z-10 hidden sm:block">
          <div className="relative w-24 h-24 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin" style={{ animationDuration: '18s' }}>
              <defs><path id="circle-path" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" /></defs>
              <text className="text-[9px]" fill="#B58A4A" letterSpacing="2.5">
                <textPath href="#circle-path">TODAY'S SPECIAL · KARAHI · HANDI · BBQ · </textPath>
              </text>
            </svg>
            <span className="text-2xl">✦</span>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-40 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12" style={{ backgroundColor: 'var(--brass)' }}></div>
              <span className="text-xs tracking-[0.25em] uppercase font-medium" style={{ color: 'var(--brass)' }}>Fateh Jang · Est. 2014</span>
            </div>

            <h1 className="font-display text-5xl lg:text-[4.5rem] leading-[1.05] mb-6" style={{ color: 'var(--ivory)' }}>
              Taste That<br />
              <em className="not-italic" style={{ color: 'var(--brass)' }}>Feels Like</em><br />
              Home.
            </h1>

            <p className="text-lg leading-relaxed mb-10 max-w-md" style={{ color: 'rgba(248,244,237,0.72)' }}>
              Authentic Pakistani flavours, time-honoured recipes and a table made for sharing.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#menu"
                className="cta-primary inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold transition-all"
                style={{ backgroundColor: 'var(--terracotta)', color: 'var(--ivory)', borderRadius: 'var(--radius)' }}
              >Explore Menu →</a>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold transition-all border"
                style={{ color: 'var(--ivory)', borderColor: 'rgba(248,244,237,0.35)', borderRadius: 'var(--radius)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--brass)'; e.currentTarget.style.color = 'var(--brass)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(248,244,237,0.35)'; e.currentTarget.style.color = 'var(--ivory)' }}
              >Order Online →</a>
            </div>

            <div className="hero-trust-strip">
              <span>Traditional Recipes</span><span>Freshly Prepared</span><span>Family Table</span>
            </div>

            <div className="hero-stats flex items-center gap-6 lg:gap-10 mt-14 pt-8 border-t" style={{ borderColor: 'rgba(248,244,237,0.1)' }}>
              {[{ to: 10, suffix: '+', label: 'Years of Service' }, { to: 50, suffix: '+', label: 'Menu Items' }, { to: 4, suffix: '.9★', label: 'Guest Rating' }].map(({ to, suffix, label }) => (
                <div key={label}>
                  <div className="font-display text-2xl" style={{ color: 'var(--brass)' }}>
                    <Counter to={to} suffix={suffix} />
                  </div>
                  <div className="hero-stat-label text-[10px] lg:text-xs whitespace-nowrap mt-0.5" style={{ color: 'rgba(248,244,237,0.45)' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee Strip ── */}
      <div style={{ backgroundColor: 'var(--terracotta)', overflow: 'hidden' }} className="py-3 select-none">
        <style>{`
          @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
          .marquee-inner { display: flex; animation: marquee 28s linear infinite; white-space: nowrap; }
        `}</style>
        <div className="marquee-inner">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="px-5 text-xs tracking-[0.2em] uppercase font-semibold" style={{ color: item === '✦' ? 'var(--brass)' : 'rgba(248,244,237,0.9)' }}>{item}</span>
          ))}
        </div>
      </div>

      {/* ── Restaurant Introduction ── */}
      <section id="our-story" className="story-section py-14 lg:py-24 px-6" style={{ backgroundColor: 'var(--ivory)' }}>
        <div ref={storyGridRef} className={`story-grid max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${storyGridInView ? 'is-visible' : ''}`}>
          <Reveal variant="scale" className="story-image-reveal relative order-2 lg:order-1">
            <img src={IMAGES.interior} alt="Mehran Desi Kitchen dining room" className="story-image-frame story-image-media w-full object-cover" style={{ borderRadius: '2px' }} />
            <div className="story-badge absolute bottom-6 left-6 px-5 py-4" style={{ backgroundColor: 'var(--charcoal)', borderRadius: 'var(--radius)' }}>
              <div className="font-display text-lg" style={{ color: 'var(--brass)' }}>Since 2014</div>
              <div className="text-xs" style={{ color: 'rgba(248,244,237,0.6)' }}>Serving Fateh Jang</div>
            </div>
            {/* Decorative number */}
            <div className="story-numeral absolute -top-6 -right-4 font-display text-8xl font-bold pointer-events-none" style={{ color: 'var(--border)', lineHeight: 1 }}>01</div>
          </Reveal>
          <div className="story-copy-reveal order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4 lg:mb-6">
              <div className="h-px w-12" style={{ backgroundColor: 'var(--brass)' }}></div>
              <span className="text-xs tracking-[0.25em] uppercase font-medium" style={{ color: 'var(--brass)' }}>Our Story</span>
            </div>
            <h2 className="font-display text-3xl lg:text-5xl mb-4 lg:mb-6 leading-tight" style={{ color: 'var(--charcoal)' }}>
              More Than Food.<br />It's a Taste of Home.
            </h2>
            <p className="text-base leading-relaxed mb-3 lg:mb-4" style={{ color: 'var(--warm-gray)' }}>
              At Mehran Desi Kitchen, traditional Pakistani cooking is more than a recipe — it is a shared family tradition. From our signature karahis and charcoal-grilled BBQ to fragrant rice dishes, every plate is prepared with fresh ingredients, house spices and time-honoured techniques.
            </p>
            <p className="text-base leading-relaxed mb-6 lg:mb-8" style={{ color: 'var(--warm-gray)' }}>
              We believe food tastes better when it is made for sharing: generous portions, freshly prepared plates, and family hospitality at every table.
            </p>
            <div className="flex flex-col gap-2 lg:gap-3">
              {[['Signature Karahis', 'Slow-cooked with care'],
              ['House Spices', 'Ground fresh each morning'],
              ['Made For Sharing', 'Generous family portions']].map(([t, d], i) => (
                <Reveal key={t} delay={240 + 100 * i} className="story-bullet-reveal">
                  <div className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--terracotta)' }}></div>
                    <div>
                      <span className="font-semibold text-sm" style={{ color: 'var(--charcoal)' }}>{t}</span>
                      <span className="text-sm ml-2" style={{ color: 'var(--warm-gray)' }}>{d}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── From Kitchen to Table — Process strip ── */}
      <div ref={processStripRef} style={{ backgroundColor: 'var(--charcoal)', borderTop: '1px solid rgba(181,138,74,0.2)', borderBottom: '1px solid rgba(181,138,74,0.2)' }} className={`process-strip py-10 px-6 ${processStripInView ? 'is-visible' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <div className="process-strip-grid grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x" style={{ borderColor: 'rgba(248,244,237,0.08)' }}>
            {[
              { step: '01', title: 'Sourced Locally', desc: 'Meat and produce from Fateh Jang markets, fresh daily' },
              { step: '02', title: 'Spices Ground Fresh', desc: 'No pre-mixed masalas — every blend made in-house each morning' },
              { step: '03', title: 'Slow Cooked', desc: 'Clay pots, open flame, and time — the only way we know' },
              { step: '04', title: 'Served with Care', desc: 'Straight from the kitchen to your table, while it is still speaking' },
            ].map((item, i) => (
              <div key={item.step} className="process-step px-6 py-4 lg:py-2" style={{ '--step-delay': `${i * 150}ms`, borderColor: 'rgba(248,244,237,0.08)' } as React.CSSProperties}>
                <div className="process-step-number font-display text-3xl mb-1" style={{ color: 'rgba(181,138,74,0.4)' }}>{item.step}</div>
                <div className="process-step-title text-sm font-semibold mb-1" style={{ color: 'var(--ivory)' }}>{item.title}</div>
                <div className="process-step-description text-xs leading-relaxed" style={{ color: 'rgba(248,244,237,0.45)' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── The Mehran Way ── */}
      <section className="mehran-way-section py-24 px-6" style={{ backgroundColor: 'var(--ivory)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4"><div className="h-px w-12" style={{ backgroundColor: 'var(--brass)' }}></div><span className="text-xs tracking-[0.25em] uppercase font-medium" style={{ color: 'var(--brass)' }}>From Kitchen to Table</span></div>
          <h2 className="font-display text-4xl lg:text-5xl mb-5 leading-tight" style={{ color: 'var(--charcoal)' }}>The Mehran Way</h2>
          <p className="max-w-xl text-sm leading-relaxed mb-14" style={{ color: 'var(--warm-gray)' }}>Authenticity is not an aesthetic at Mehran. It is the way every meal moves from our kitchen to your table.</p>
          <div className="mehran-way-grid">
            {mehranWay.map((step, i) => <Reveal key={step.number} delay={i * 100} className="mehran-way-step"><div className="mehran-way-marker">{step.number}</div><h3 className="font-display text-2xl" style={{ color: 'var(--charcoal)' }}>{step.title}</h3><p style={{ color: 'var(--warm-gray)' }}>{step.text}</p></Reveal>)}
          </div>
        </div>
      </section>

      {/* ── Signature Dishes ── */}
      <section className="py-24 px-6" style={{ backgroundColor: '#EDE8DF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{ backgroundColor: 'var(--brass)' }}></div>
            <span className="text-xs tracking-[0.25em] uppercase font-medium" style={{ color: 'var(--brass)' }}>Signature Dishes</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-4">
            <h2 className="font-display text-4xl lg:text-5xl leading-tight" style={{ color: 'var(--charcoal)' }}>
              Made to Be<br />Remembered
            </h2>
            <a href="#menu" className="text-sm font-semibold underline underline-offset-4" style={{ color: 'var(--terracotta)' }}>View full menu →</a>
          </div>

          <div className="signature-dishes-viewport">
            <div className="signature-dishes-track">
              {[0, 1].map(copy => (
                <div key={copy} className={`signature-dishes-group ${copy === 1 ? 'signature-dishes-copy' : ''}`}>
                  {signatureDishes.map((dish, i) => (
                    <Reveal key={`${copy}-${dish.name}`} delay={120 * i} className="signature-dish-item">
                      <div
                        className="group dish-card overflow-hidden cursor-pointer"
                        role="button"
                        tabIndex={0}
                        onClick={() => openDishDetails(dish)}
                        onKeyDown={event => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault()
                            openDishDetails(dish)
                          }
                        }}
                        style={{ backgroundColor: 'var(--ivory)', borderRadius: '2px' }}
                      >
                        <div className="overflow-hidden relative" style={{ height: '280px' }}>
                          <img src={dish.img} alt={dish.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                          <div className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold" style={{ backgroundColor: 'var(--terracotta)', color: 'var(--ivory)', borderRadius: 'var(--radius)' }}>{dish.tag}</div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="font-display text-2xl" style={{ color: 'var(--charcoal)' }}>{dish.name}</h3>
                            <span className="font-semibold text-sm mt-1 flex-shrink-0 ml-2" style={{ color: 'var(--terracotta)' }}>{dish.price}</span>
                          </div>
                          <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--warm-gray)' }}>{dish.desc}</p>
                          <button type="button" className="dish-order-link" onClick={event => { event.stopPropagation(); addToOrder(dish) }}>Add to Order +</button>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedDish && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 dish-modal-backdrop"
          role="presentation"
          onClick={event => {
            if (event.target === event.currentTarget) setSelectedDish(null)
          }}
        >
          <div
            className="w-full max-w-lg overflow-hidden dish-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="dish-modal-title"
            style={{ backgroundColor: 'var(--ivory)', borderRadius: 'var(--radius)' }}
          >
            <div className="relative" style={{ height: '260px' }}>
              <img src={selectedDish.img} alt={selectedDish.name} className="w-full h-full object-cover" />
              <button
                type="button"
                aria-label="Close dish details"
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-xl"
                style={{ backgroundColor: 'var(--ivory)', color: 'var(--charcoal)', borderRadius: '50%' }}
              >×</button>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--terracotta)' }}>{selectedDish.tag}</span>
                  <h2 id="dish-modal-title" className="font-display text-3xl mt-1" style={{ color: 'var(--charcoal)' }}>{selectedDish.name}</h2>
                </div>
                <span className="font-semibold mt-5 whitespace-nowrap" style={{ color: 'var(--terracotta)' }}>{selectedDish.price}</span>
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--warm-gray)' }}>{selectedDish.desc}</p>

              <div className="flex items-center justify-between gap-4 mb-5">
                <span className="text-sm font-semibold" style={{ color: 'var(--charcoal)' }}>Quantity</span>
                <div className="flex items-center border" style={{ borderColor: 'var(--border)' }}>
                  <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity(current => Math.max(1, current - 1))} className="w-10 h-9 text-lg" style={{ color: 'var(--charcoal)' }}>−</button>
                  <span className="w-10 text-center text-sm font-semibold" style={{ color: 'var(--charcoal)' }}>{quantity}</span>
                  <button type="button" aria-label="Increase quantity" onClick={() => setQuantity(current => current + 1)} className="w-10 h-9 text-lg" style={{ color: 'var(--charcoal)' }}>+</button>
                </div>
              </div>

              {cartMessage && <p className="text-sm mb-4" style={{ color: 'var(--terracotta)' }}>{cartMessage}</p>}
              <div className="flex flex-col sm:flex-row gap-3">
                <button type="button" onClick={addDishToCart} className="flex-1 px-5 py-3 text-sm font-semibold transition-all" style={{ backgroundColor: 'var(--terracotta)', color: 'var(--ivory)', borderRadius: 'var(--radius)' }}>Add to Cart{cartCount > 0 ? ` (${cartCount})` : ''}</button>
                <a href="#contact" onClick={() => { addDishToCart(); setSelectedDish(null) }} className="flex-1 px-5 py-3 text-sm font-semibold text-center border transition-all" style={{ color: 'var(--terracotta)', borderColor: 'var(--terracotta)', borderRadius: 'var(--radius)' }}>Order Now</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Menu Preview ── */}
      <section id="menu" className="menu-preview-section py-28 lg:py-32 px-6" style={{ backgroundColor: 'var(--ivory)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{ backgroundColor: 'var(--brass)' }}></div>
            <span className="text-xs tracking-[0.25em] uppercase font-medium" style={{ color: 'var(--brass)' }}>Our Menu</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl mb-12 leading-tight" style={{ color: 'var(--charcoal)' }}>
            Explore Our Menu
          </h2>

          <div className="menu-tabs flex flex-wrap gap-2 mb-12 border-b" style={{ borderColor: 'var(--border)' }}>
            {menuCategories.map(cat => (
              <button key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="menu-tab px-5 py-3 text-sm font-semibold transition-all border-b-2 -mb-px"
                style={{
                  color: activeCategory === cat.id ? 'var(--terracotta)' : 'var(--warm-gray)',
                  borderBottomColor: activeCategory === cat.id ? 'var(--terracotta)' : 'transparent',
                }}
              >{cat.label}</button>
            ))}
          </div>

          <div className="menu-items-panel p-3 sm:p-5 lg:p-6" style={{ backgroundColor: '#EDE8DF', border: '1px solid var(--border)', borderRadius: '2px' }}>
            <div key={activeCategory} className="menu-items-grid">
              {activeMenu.items.map((item, i) => (
                <article key={item.name} className="menu-item-card flex gap-4 sm:gap-5 p-3 sm:p-5" style={{ backgroundColor: 'var(--ivory)', border: '1px solid var(--border)', borderRadius: '2px' }}>
                  <div className="menu-item-image flex-shrink-0 overflow-hidden" style={{ borderRadius: '2px' }}>
                    <img src={menuItemImages[activeCategory as keyof typeof menuItemImages][i]} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0 flex-1 flex flex-col justify-center">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-display text-xl sm:text-2xl leading-tight" style={{ color: 'var(--charcoal)' }}>{item.name}</h3>
                      <span className="font-semibold text-sm whitespace-nowrap mt-1" style={{ color: 'var(--terracotta)' }}>{item.price}</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--warm-gray)' }}>{item.desc}</p>
                    <button type="button" className="dish-order-link text-left mt-3" onClick={() => addToOrder(item)}>Add to Order +</button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm mb-4" style={{ color: 'var(--warm-gray)' }}>All dishes served with fresh naan. Full menu available at the restaurant.</p>
            <a href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold border transition-all"
              style={{ color: 'var(--terracotta)', borderColor: 'var(--terracotta)', borderRadius: 'var(--radius)' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--terracotta)'; e.currentTarget.style.color = 'var(--ivory)' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--terracotta)' }}
            >Reserve a Table</a>
          </div>
        </div>
      </section>

      {/* ── Order from Mehran ── */}
      <section id="order" className="order-options-section py-24 px-6" style={{ backgroundColor: 'var(--charcoal)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4"><div className="h-px w-12" style={{ backgroundColor: 'var(--brass)' }}></div><span className="text-xs tracking-[0.25em] uppercase font-medium" style={{ color: 'var(--brass)' }}>Order From Mehran</span></div>
          <h2 className="font-display text-4xl lg:text-5xl mb-5 leading-tight" style={{ color: 'var(--ivory)' }}>Craving Something?<br />Bring Mehran To Your Table.</h2>
          <div className="order-options-grid mt-12">
            {[['Dine In', 'Experience the full Mehran atmosphere.', 'Explore the table'], ['Order Online', 'Choose your favourites and place an order.', 'Start your order'], ['WhatsApp', 'Quick enquiries and direct assistance.', 'Chat on WhatsApp']].map((option, i) => <article key={option[0]} className="order-option"><span>0{i + 1}</span><h3 className="font-display text-2xl">{option[0]}</h3><p>{option[1]}</p>{i === 1 ? <button type="button" className="order-option-link" onClick={() => { setOrderOpen(false); document.getElementById('menu')?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' }) }}>{option[2]} <span aria-hidden="true">→</span></button> : <a href={i === 0 ? '#contact' : 'https://wa.me/92XXXXXXXXXX'}>{option[2]} <span aria-hidden="true">→</span></a>}</article>)}
          </div>
        </div>
      </section>

      {/* ── Mehran Circle ── */}
      <section className="mehran-circle-section py-24 px-6" style={{ backgroundColor: '#EDE8DF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4"><div className="h-px w-12" style={{ backgroundColor: 'var(--brass)' }}></div><span className="text-xs tracking-[0.25em] uppercase font-medium" style={{ color: 'var(--brass)' }}>Mehran Circle</span></div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"><div><h2 className="font-display text-4xl lg:text-5xl mb-4" style={{ color: 'var(--charcoal)' }}>Stay Close To The Table.</h2><p className="max-w-xl text-sm leading-relaxed" style={{ color: 'var(--warm-gray)' }}>Be the first to know about seasonal dishes, family offers and special occasions.</p></div><button type="button" className="circle-join-button" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })}>Join the Mehran Circle →</button></div>
          <div className="circle-benefits-grid mt-12">{circleBenefits.map((benefit, i) => <div key={benefit.title} className="circle-benefit"><span>0{i + 1}</span><h3 className="font-display text-xl" style={{ color: 'var(--charcoal)' }}>{benefit.title}</h3><p style={{ color: 'var(--warm-gray)' }}>{benefit.text}</p></div>)}</div>
          <p className="text-xs mt-8" style={{ color: 'var(--warm-gray)' }}>Promotional updates are only sent with your explicit opt-in.</p>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="why-section py-24 lg:py-32 px-6 relative overflow-hidden" style={{ backgroundColor: 'var(--charcoal)' }}>
        <div className="max-w-7xl mx-auto">
          <Reveal variant="rise" className="why-header-reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12" style={{ backgroundColor: 'var(--brass)' }}></div>
              <span className="text-xs tracking-[0.25em] uppercase font-medium" style={{ color: 'var(--brass)' }}>Why Choose Us</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl mb-5 leading-tight" style={{ color: 'var(--ivory)' }}>
              More Than a Meal
            </h2>
            <p className="why-intro max-w-xl text-sm lg:text-base leading-relaxed" style={{ color: 'rgba(248,244,237,0.55)' }}>
              Rooted in tradition, prepared with care, and served with the warmth of a table made for everyone.
            </p>
          </Reveal>

          <div className="why-feature-list grid sm:grid-cols-2 lg:grid-cols-4 mt-14 lg:mt-20">
            {[
              { icon: 'dish' as const, title: 'Traditional Taste', desc: 'Every recipe traces its roots to regional Pakistani kitchens. No shortcuts, no compromises.' },
              { icon: 'fresh' as const, title: 'Freshly Prepared', desc: 'Spices ground daily. Meat sourced locally. Each order cooked from scratch — no pre-cooked batches.' },
              { icon: 'family' as const, title: 'Family Friendly', desc: 'A dining room designed for gatherings. Spacious seating, a welcoming atmosphere, and portions meant to share.' },
              { icon: 'welcome' as const, title: 'Warm Hospitality', desc: "In Fateh Jang, a guest is treated like family. You'll feel it the moment you walk through our door." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={120 * i} className="why-feature-reveal">
                <div className="why-feature group relative px-0 sm:px-6 lg:px-8 py-8 lg:py-0" style={{ backgroundColor: 'transparent' }}>
                  <div className="why-feature-number text-[10px] tracking-[0.2em] font-semibold mb-7" style={{ color: 'rgba(181,138,74,0.5)' }}>0{i + 1} / 04</div>
                  <div className="why-feature-icon w-9 h-9 mb-6" style={{ color: 'var(--brass)' }}><WhyIcon type={item.icon} /></div>
                  <h3 className="why-feature-title font-display text-xl mb-3" style={{ color: 'var(--ivory)' }}>{item.title}</h3>
                  <p className="why-feature-description text-sm leading-relaxed" style={{ color: 'rgba(248,244,237,0.5)' }}>{item.desc}</p>
                  <div className="why-feature-rule" />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-[10px] tracking-[0.25em] uppercase" style={{ color: 'rgba(181,138,74,0.55)' }}>From Our Kitchen · To Your Table</div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section id="gallery" className="py-24 px-6" style={{ backgroundColor: '#EDE8DF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{ backgroundColor: 'var(--brass)' }}></div>
            <span className="text-xs tracking-[0.25em] uppercase font-medium" style={{ color: 'var(--brass)' }}>Gallery</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl mb-14 leading-tight" style={{ color: 'var(--charcoal)' }}>
            A Table Made For Gathering
          </h2>
          <p className="gallery-intro">The food · The table · The place</p>

          <div className="gallery-editorial-grid">
            <Reveal variant="rise" delay={0} className="gallery-feature">
              <div className="gallery-image gallery-image-feature">
                <img src={IMAGES.galleryFamily} alt="Pakistani family sharing a meal together at Mehran Desi Kitchen" />
                <div className="gallery-image-caption">
                  <span>The Table</span>
                  <strong>Family Table</strong>
                </div>
                <span className="gallery-image-index">01 / 06</span>
              </div>
            </Reveal>
            <Reveal variant="rise" delay={100} className="gallery-collage">
              <div className="gallery-image gallery-image-collage">
                <img src={IMAGES.galleryFoodStory} alt="Collage of Mehran food, restaurant interiors, grill, dessert, and exterior" />
                <div className="gallery-image-caption">
                  <span>The Place</span>
                  <strong>Food · People · Place</strong>
                </div>
                <span className="gallery-image-index">02 / 06</span>
              </div>
            </Reveal>
            <Reveal variant="rise" delay={180} className="gallery-spice-stack">
              <div className="gallery-image">
                <img src={IMAGES.spices} alt="Fresh spices prepared for Pakistani cooking" />
                <div className="gallery-image-caption"><span>The Food</span><strong>House Spices</strong></div>
                <span className="gallery-image-index">03 / 06</span>
              </div>
            </Reveal>
            <Reveal variant="rise" delay={260} className="gallery-bottom gallery-bottom-food">
              <div className="gallery-image">
                <img src={IMAGES.gallery2} alt="Signature Pakistani dish prepared for sharing" />
                <div className="gallery-image-caption"><span>From the Kitchen</span><strong>Food &amp; Heritage</strong></div>
              </div>
            </Reveal>
            <Reveal variant="rise" delay={340} className="gallery-bottom gallery-bottom-interior">
              <div className="gallery-image">
                <img src={IMAGES.gallery1} alt="Warmly lit traditional restaurant interior" />
                <div className="gallery-image-caption"><span>Heritage</span><strong>Inside Mehran</strong></div>
              </div>
            </Reveal>
            <Reveal variant="rise" delay={420} className="gallery-bottom gallery-bottom-grill">
              <div className="gallery-image">
                <img src={IMAGES.gallery3} alt="BBQ skewers cooking over an open flame" />
                <div className="gallery-image-caption"><span>Over Open Flame</span><strong>From the Grill</strong></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section id="reviews" className="reviews-section py-24 px-6" style={{ backgroundColor: 'var(--ivory)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{ backgroundColor: 'var(--brass)' }}></div>
            <span className="text-xs tracking-[0.25em] uppercase font-medium" style={{ color: 'var(--brass)' }}>What Our Guests Say</span>
          </div>
          <h2 className="reviews-heading font-display text-4xl lg:text-5xl mb-14 leading-tight" style={{ color: 'var(--charcoal)' }}>
            Shared Around<br />the Table
          </h2>

          <div ref={reviewsTrackRef} className="reviews-track">
            {visibleReviews.map((r, i) => (
              <article key={`${r.name}-${activeReview}-${i}`} className={`review-card review-card-${i} p-8 border`}>
                <div className="review-card-shell">
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: r.stars }).map((_, i) => (
                      <span key={i} style={{ color: 'var(--brass)' }}>★</span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-6 italic" style={{ color: 'var(--warm-gray)' }}>"{r.text}"</p>
                  <div className="flex items-center gap-3 pt-5 border-t" style={{ borderColor: 'var(--border)' }}>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ backgroundColor: 'var(--terracotta)', color: 'var(--ivory)' }}>
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-semibold" style={{ color: 'var(--charcoal)' }}>{r.name}</div>
                      <div className="text-xs" style={{ color: 'var(--warm-gray)' }}>{r.location}</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="review-controls">
            <button type="button" aria-label="Previous guest review" onClick={() => shiftReview(-1)}>←</button>
            <span className="review-counter">{String(activeReview + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}</span>
            <button type="button" aria-label="Next guest review" onClick={() => shiftReview(1)}>→</button>
          </div>
          <div className="review-progress" aria-hidden="true">
            {reviews.map((review, index) => <span key={review.name} className={index === activeReview ? 'is-active' : ''}>{String(index + 1).padStart(2, '0')}</span>)}
          </div>
        </div>
      </section>

      {/* ── Location & Contact ── */}
      <section id="contact" className="py-24 px-6" style={{ backgroundColor: '#EDE8DF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{ backgroundColor: 'var(--brass)' }}></div>
            <span className="text-xs tracking-[0.25em] uppercase font-medium" style={{ color: 'var(--brass)' }}>Find Us</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl mb-14 leading-tight" style={{ color: 'var(--charcoal)' }}>
            Your Next Meal<br />Starts Here.
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <form className="reservation-form" onSubmit={event => { event.preventDefault(); setReservationSent(true) }}>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { label: 'Date', type: 'date', name: 'date' },
                  { label: 'Time', type: 'time', name: 'time' },
                  { label: 'Guests', type: 'number', name: 'guests', placeholder: '2', min: '1' },
                  { label: 'Name', type: 'text', name: 'name', placeholder: 'Your name' },
                  { label: 'Phone', type: 'tel', name: 'phone', placeholder: '+92 ...' },
                ].map(field => (
                  <label key={field.name} className="reservation-field flex flex-col gap-2">
                    <span className="text-xs tracking-[0.2em] uppercase font-semibold" style={{ color: 'var(--warm-gray)' }}>{field.label}</span>
                    <input
                      required
                      {...field}
                      className="w-full px-4 py-3 text-sm outline-none transition-colors"
                      style={{ backgroundColor: 'var(--ivory)', border: '1px solid var(--border)', borderRadius: '2px', color: 'var(--charcoal)' }}
                    />
                  </label>
                ))}
              </div>
              <label className="consent-row"><input type="checkbox" checked={marketingConsent} onChange={event => setMarketingConsent(event.target.checked)} /> <span>I'd like to receive Mehran offers, seasonal specials and updates on WhatsApp.</span></label>
              <p className="consent-note">You can unsubscribe from promotional messages anytime.</p>
              <button type="submit" className="reservation-submit inline-flex items-center justify-center gap-2 mt-8 px-7 py-4 text-sm font-semibold transition-all" style={{ backgroundColor: 'var(--terracotta)', color: 'var(--ivory)', borderRadius: 'var(--radius)' }}>
                Reserve a Table →
              </button>
              {reservationSent && <p className="text-sm mt-4" style={{ color: 'var(--terracotta)' }}>Thank you. We will confirm your table shortly.</p>}
            </form>

            <div>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a href="tel:+92-XXX-XXXXXXX"
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-4 text-sm font-semibold border transition-all"
                  style={{ color: 'var(--charcoal)', borderColor: 'var(--charcoal)', borderRadius: 'var(--radius)' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--charcoal)'; e.currentTarget.style.color = 'var(--ivory)' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--charcoal)' }}
                >Call</a>
                <a href="https://wa.me/92XXXXXXXXXX"
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-4 text-sm font-semibold transition-all"
                  style={{ backgroundColor: '#25D366', color: '#fff', borderRadius: 'var(--radius)' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1ebe5d')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#25D366')}
                >WhatsApp</a>
                <a href="https://maps.google.com/?q=Fateh+Jang+Punjab+Pakistan"
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-4 text-sm font-semibold transition-all"
                  style={{ backgroundColor: 'var(--terracotta)', color: 'var(--ivory)', borderRadius: 'var(--radius)' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#7a2620')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--terracotta)')}
                >Directions</a>
              </div>

              <div className="location-panel overflow-hidden relative" style={{ height: '320px', borderRadius: '2px', backgroundColor: 'var(--muted)' }}>
                <img src={IMAGES.gallery4} alt="Location visual" className="w-full h-full object-cover opacity-50" />
                <div className="relative z-10 absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <div className="px-6 py-5" style={{ backgroundColor: 'var(--charcoal)', borderRadius: 'var(--radius)' }}>
                    <div className="font-display text-lg mb-1" style={{ color: 'var(--brass)' }}>Mehran Desi Kitchen</div>
                    <div className="text-xs mb-3" style={{ color: 'rgba(248,244,237,0.65)' }}>Fateh Jang, Punjab, Pakistan</div>
                    <a href="https://maps.google.com/?q=Fateh+Jang+Punjab+Pakistan"
                      className="text-xs font-semibold underline underline-offset-2"
                      style={{ color: 'var(--brass)' }}>Get Directions →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-32 px-6 text-center relative overflow-hidden" style={{ backgroundColor: 'var(--terracotta)' }}>
        {/* Background texture dots */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="absolute w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--brass)', top: `${Math.sin(i * 1.7) * 40 + 50}%`, left: `${(i / 20) * 100}%` }}></div>
          ))}
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: 'rgba(248,244,237,0.35)' }}></div>
            <span className="text-xs tracking-[0.25em] uppercase font-medium" style={{ color: 'rgba(248,244,237,0.65)' }}>Mehran Desi Kitchen</span>
            <div className="h-px w-12" style={{ backgroundColor: 'rgba(248,244,237,0.35)' }}></div>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl mb-6 leading-tight" style={{ color: 'var(--ivory)' }}>
            Come Hungry.<br />Leave With a Taste of Home.
          </h2>
          <p className="text-base mb-10" style={{ color: 'rgba(248,244,237,0.7)' }}>Traditional Pakistani flavours, warm hospitality and a table made for sharing.</p>
          <a href="#contact"
            className="cta-primary inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold transition-all"
            style={{ backgroundColor: 'var(--ivory)', color: 'var(--terracotta)', borderRadius: 'var(--radius)' }}
          >Order Online →</a>
          <a href="#contact" className="final-cta-secondary">Get Directions →</a>
        </div>
      </section>

      {orderOpen && (
        <div className="order-drawer-backdrop" role="presentation" onClick={event => { if (event.target === event.currentTarget) setOrderOpen(false) }}>
          <aside id="order-drawer" className="order-drawer" role="dialog" aria-modal="true" aria-labelledby="order-drawer-title">
            <div className="flex items-start justify-between gap-4 mb-8"><div><span className="text-xs tracking-[0.2em] uppercase font-semibold" style={{ color: 'var(--brass)' }}>Order From Mehran</span><h2 id="order-drawer-title" className="font-display text-3xl mt-2" style={{ color: 'var(--charcoal)' }}>Your Mehran Table</h2></div><button type="button" className="order-close" aria-label="Close order drawer" onClick={() => setOrderOpen(false)}>×</button></div>
            <div className="order-drawer-list">{orderItems.length === 0 ? <p style={{ color: 'var(--warm-gray)' }}>Choose a dish from the menu to begin your table.</p> : orderItems.map(item => <div className="order-line" key={item.name}><div><strong>{item.name}</strong><small>{item.price} · Quantity {item.quantity}</small></div><div className="order-quantity"><button type="button" onClick={() => setOrderItems(items => items.flatMap(current => current.name === item.name ? (current.quantity > 1 ? [{ ...current, quantity: current.quantity - 1 }] : []) : [current]))}>−</button><span>{item.quantity}</span><button type="button" onClick={() => setOrderItems(items => items.map(current => current.name === item.name ? { ...current, quantity: current.quantity + 1 } : current))}>+</button></div></div>)}</div>
            <div className="order-summary"><div><span>Items</span><strong>PKR {orderTotal.toLocaleString()}</strong></div><div><span>Delivery</span><strong>Confirm at checkout</strong></div><div className="order-total"><span>Total</span><strong>PKR {orderTotal.toLocaleString()}</strong></div></div>
            <p className="order-prototype-note">Frontend prototype only. No order or customer data is stored or sent without a connected backend.</p>
            <button type="button" className="order-continue" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })}>Continue Order →</button>
          </aside>
        </div>
      )}

      {false && (
        /* ── Assessment Documentation Panel ── */
        <section style={{ backgroundColor: '#1a1613', borderTop: '2px solid var(--brass)' }}>
          <button
            onClick={() => setDocsOpen(!docsOpen)}
            className="w-full px-6 py-5 flex items-center justify-between transition-colors"
            style={{ color: 'var(--brass)' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(181,138,74,0.05)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <div className="flex items-center gap-4">
              <span className="text-xs tracking-[0.25em] uppercase font-semibold">Design Documentation</span>
              <span className="text-xs px-2 py-0.5 border" style={{ borderColor: 'rgba(181,138,74,0.4)', color: 'rgba(181,138,74,0.7)', borderRadius: '2px' }}>Assessment Tasks 08–10</span>
            </div>
            <span className="text-lg transition-transform" style={{ transform: docsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>⌄</span>
          </button>

          {docsOpen && (
            <div className="px-6 pb-14">
              <div className="max-w-5xl mx-auto">
                {/* Doc tabs */}
                <div className="flex gap-0 mb-8 border-b" style={{ borderColor: 'rgba(181,138,74,0.2)' }}>
                  {[
                    { id: 'ux', label: 'Task 01 — UX Structure' },
                    { id: 'feedback', label: 'Task 08 — Client Feedback' },
                    { id: 'presentation', label: 'Task 09 — Presentation' },
                    { id: 'handoff', label: 'Task 10 — Dev Handoff' },
                  ].map(tab => (
                    <button key={tab.id}
                      onClick={() => setActiveDoc(tab.id)}
                      className="px-4 py-3 text-xs font-semibold border-b-2 -mb-px transition-all"
                      style={{
                        color: activeDoc === tab.id ? 'var(--brass)' : 'rgba(181,138,74,0.45)',
                        borderBottomColor: activeDoc === tab.id ? 'var(--brass)' : 'transparent',
                      }}
                    >{tab.label}</button>
                  ))}
                </div>

                {activeDoc === 'ux' && (
                  <div className="grid lg:grid-cols-2 gap-10">
                    <div>
                      <h3 className="font-display text-xl mb-4" style={{ color: 'var(--brass)' }}>Primary User Goal</h3>
                      <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(248,244,237,0.6)' }}>
                        A first-time visitor should be able to view the menu, understand the restaurant atmosphere, and find contact or directions — all without leaving the homepage. The site turns passive discovery into an active decision to visit.
                      </p>
                      <h3 className="font-display text-xl mb-4" style={{ color: 'var(--brass)' }}>Primary CTA</h3>
                      <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(248,244,237,0.6)' }}>
                        <strong style={{ color: 'var(--ivory)' }}>Explore Our Menu</strong> — placed in the hero and navigation. Secondary CTAs: Get Directions (hero), WhatsApp / Call (contact section), Plan Your Visit (final CTA).
                      </p>
                      <h3 className="font-display text-xl mb-4" style={{ color: 'var(--brass)' }}>Navigation Structure</h3>
                      <div className="flex flex-wrap gap-2">
                        {['Home', 'Menu', 'Our Story', 'Gallery', 'Reviews', 'Contact'].map(n => (
                          <span key={n} className="px-3 py-1 text-xs border" style={{ color: 'rgba(248,244,237,0.65)', borderColor: 'rgba(181,138,74,0.3)', borderRadius: '2px' }}>{n}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-xl mb-4" style={{ color: 'var(--brass)' }}>User Journey</h3>
                      <div className="space-y-4">
                        {[
                          { stage: 'Discover', action: 'Lands on hero — strong headline and food photography immediately communicate the category and quality of the restaurant.' },
                          { stage: 'Explore', action: 'Scrolls through signature dishes, interactive menu tabs, and food gallery — builds appetite and understanding of the offering.' },
                          { stage: 'Trust', action: 'Reads real guest reviews, sees the "Our Story" section, and notices operational details (hours, local sourcing).' },
                          { stage: 'Visit', action: 'Reaches the contact section — clicks WhatsApp, Call, or Get Directions. Final CTA reinforces the decision.' },
                        ].map((step, i) => (
                          <div key={step.stage} className="flex gap-4">
                            <div className="font-display text-2xl flex-shrink-0" style={{ color: 'rgba(181,138,74,0.35)' }}>0{i + 1}</div>
                            <div>
                              <div className="text-sm font-semibold mb-1" style={{ color: 'var(--ivory)' }}>{step.stage}</div>
                              <div className="text-xs leading-relaxed" style={{ color: 'rgba(248,244,237,0.5)' }}>{step.action}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeDoc === 'feedback' && (
                  <div>
                    <div className="mb-8 p-5 border-l-2" style={{ borderColor: 'var(--brass)', backgroundColor: 'rgba(181,138,74,0.06)' }}>
                      <p className="text-sm italic" style={{ color: 'rgba(248,244,237,0.65)' }}>
                        Client says: <strong style={{ color: 'var(--ivory)' }}>"I like the design, but it feels too modern. We want people to feel the traditional Pakistani food experience as soon as they open the website."</strong>
                      </p>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-6">
                      {[
                        {
                          n: '01',
                          change: 'Replace hero photo with clay-pot / open-flame cooking image',
                          reason: 'The current plated-food hero reads as "modern restaurant." A raw, active cooking shot — smoke rising from a wok, coals under a handi — immediately signals traditional preparation and creates emotional warmth.',
                          effect: 'Visitors feel the kitchen, not just the plate. The authenticity signal arrives in the first three seconds.',
                        },
                        {
                          n: '02',
                          change: 'Add an Urdu script wordmark alongside the English logo',
                          reason: 'Urdu typography is immediately recognisable as Pakistani. A single Urdu script accent (مہران) paired with the English logotype grounds the brand in cultural identity without decorative overload.',
                          effect: 'Local customers feel seen; the brand reads as genuinely Pakistani rather than internationally styled.',
                        },
                        {
                          n: '03',
                          change: 'Introduce a warm, hand-textured background pattern in the hero',
                          reason: 'A subtle geometric tile motif — drawn from traditional Pakistani woodwork or textiles — applied at low opacity behind the hero text adds cultural depth without clutter or truck-art kitsch.',
                          effect: 'The design feels crafted and rooted. The atmosphere becomes more tangible before the user reads a single word.',
                        },
                      ].map(item => (
                        <div key={item.n} className="p-6 border" style={{ borderColor: 'rgba(181,138,74,0.2)', borderRadius: '2px' }}>
                          <div className="font-display text-3xl mb-4" style={{ color: 'rgba(181,138,74,0.3)' }}>{item.n}</div>
                          <div className="text-sm font-semibold mb-3" style={{ color: 'var(--ivory)' }}>Change: {item.change}</div>
                          <div className="text-xs leading-relaxed mb-3" style={{ color: 'rgba(248,244,237,0.5)' }}><strong style={{ color: 'rgba(248,244,237,0.75)' }}>Reason:</strong> {item.reason}</div>
                          <div className="text-xs leading-relaxed" style={{ color: 'rgba(248,244,237,0.5)' }}><strong style={{ color: 'rgba(248,244,237,0.75)' }}>Expected Effect:</strong> {item.effect}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeDoc === 'presentation' && (
                  <div className="grid lg:grid-cols-2 gap-10">
                    {[
                      {
                        title: '1. Design Concept',
                        content: 'The concept is "From the Kitchen to the Table." Every design decision — the warm ivory background, the clay-red primary colour, the editorial serif headings — is intended to evoke the feeling of sitting in a Pakistani family home, not visiting a generic restaurant chain. The site communicates tradition through restraint, not decoration.',
                      },
                      {
                        title: '2. Target Customer',
                        content: 'Families planning a meal out, local residents in Fateh Jang and surrounding areas (Attock, Rawalpindi corridor), and travellers passing through Punjab who want a trustworthy, high-quality local dining experience. The site is also calibrated for WhatsApp and mobile — how this customer actually discovers businesses.',
                      },
                      {
                        title: '3. Key Design Decision',
                        content: 'Making the menu interactive (tabbed categories) rather than a static list. A restaurant website visitor\'s primary decision is "do they serve what I want?" An interactive menu lets them discover the breadth of the offering at their own pace, reducing friction between curiosity and the decision to visit.',
                      },
                      {
                        title: '4. Business Value',
                        content: 'The website solves the restaurant\'s core problem: fragmented discovery across WhatsApp, Facebook, and word of mouth. It consolidates menu, atmosphere, location, and contact into one professional page — reducing the gap between someone seeing the food on Instagram and actually walking through the door.',
                      },
                    ].map(item => (
                      <div key={item.title} className="p-6 border" style={{ borderColor: 'rgba(181,138,74,0.2)', borderRadius: '2px' }}>
                        <h3 className="font-display text-lg mb-4" style={{ color: 'var(--brass)' }}>{item.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(248,244,237,0.6)' }}>{item.content}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeDoc === 'handoff' && (
                  <div className="grid lg:grid-cols-2 gap-10">
                    <div>
                      <h3 className="font-display text-xl mb-5" style={{ color: 'var(--brass)' }}>Colour Tokens</h3>
                      <div className="space-y-2 mb-8">
                        {[
                          { name: 'Terracotta / Primary', hex: '#8F2D24', role: 'CTAs, active states, tags' },
                          { name: 'Warm Ivory / Background', hex: '#F8F4ED', role: 'Page background' },
                          { name: 'Charcoal / Secondary', hex: '#25201C', role: 'Dark sections, footer, nav' },
                          { name: 'Muted Brass / Accent', hex: '#B58A4A', role: 'Headings accent, stars, dividers' },
                          { name: 'Deep Charcoal / Text', hex: '#292522', role: 'Body text, headings' },
                          { name: 'Warm Gray / Muted', hex: '#756E67', role: 'Secondary text, captions' },
                          { name: 'Border', hex: '#DDD5C8', role: 'Dividers, card borders' },
                          { name: 'Off-White Section', hex: '#EDE8DF', role: 'Alternating section bg' },
                        ].map(c => (
                          <div key={c.name} className="flex items-center gap-3">
                            <div className="w-5 h-5 flex-shrink-0 border" style={{ backgroundColor: c.hex, borderColor: 'rgba(181,138,74,0.2)', borderRadius: '2px' }}></div>
                            <div className="flex-1 flex items-baseline justify-between gap-2">
                              <span className="text-xs font-mono" style={{ color: 'var(--ivory)' }}>{c.hex}</span>
                              <span className="text-xs" style={{ color: 'rgba(248,244,237,0.45)' }}>{c.name} · {c.role}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-xl mb-5" style={{ color: 'var(--brass)' }}>Typography</h3>
                      <div className="space-y-3 mb-8">
                        {[
                          { face: 'DM Serif Display', weights: '400, 400 Italic', use: 'All headings (h1–h3), logo wordmark, section numbers' },
                          { face: 'Manrope', weights: '300, 400, 500, 600, 700', use: 'Body text, navigation, labels, buttons, captions' },
                        ].map(t => (
                          <div key={t.face} className="p-4 border" style={{ borderColor: 'rgba(181,138,74,0.2)', borderRadius: '2px' }}>
                            <div className="text-sm font-semibold mb-1" style={{ color: 'var(--ivory)' }}>{t.face}</div>
                            <div className="text-xs mb-1" style={{ color: 'var(--brass)' }}>Weights: {t.weights}</div>
                            <div className="text-xs" style={{ color: 'rgba(248,244,237,0.5)' }}>Use: {t.use}</div>
                          </div>
                        ))}
                      </div>

                      <h3 className="font-display text-xl mb-5" style={{ color: 'var(--brass)' }}>Button Styles</h3>
                      <div className="space-y-3 mb-8">
                        {[
                          { name: 'Primary', spec: 'bg #8F2D24 · text #F8F4ED · px-7 py-4 · radius 4px · hover #7a2620' },
                          { name: 'Secondary (outline)', spec: 'border #8F2D24 · text #8F2D24 · px-7 py-4 · hover fill terracotta' },
                          { name: 'Ghost (on dark)', spec: 'border rgba(ivory,0.35) · text ivory · hover border brass · text brass' },
                        ].map(b => (
                          <div key={b.name} className="text-xs p-3 border" style={{ borderColor: 'rgba(181,138,74,0.2)', borderRadius: '2px' }}>
                            <span className="font-semibold" style={{ color: 'var(--ivory)' }}>{b.name}: </span>
                            <span style={{ color: 'rgba(248,244,237,0.5)' }}>{b.spec}</span>
                          </div>
                        ))}
                      </div>

                      <h3 className="font-display text-xl mb-4" style={{ color: 'var(--brass)' }}>Grid & Spacing</h3>
                      <div className="text-xs space-y-1" style={{ color: 'rgba(248,244,237,0.55)' }}>
                        <div>Container: max-w-7xl (1280px) · px-6</div>
                        <div>Desktop grid: 12-col implicit via CSS Grid / Tailwind</div>
                        <div>Section padding: py-24 (96px) · reduced to py-16 on mobile</div>
                        <div>Card radius: 2px (sharp, not rounded)</div>
                        <div>Breakpoints: sm 640px · lg 1024px</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </section>
      )}

      {/* ── Footer ── */}
      <footer className="site-footer py-14 px-6" style={{ backgroundColor: 'var(--charcoal)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 pb-12 border-b" style={{ borderColor: 'rgba(248,244,237,0.07)' }}>
            <div className="lg:col-span-2">
              <div className="mb-3">
                <div className="footer-brand font-display text-2xl" style={{ color: 'var(--brass)' }}>Mehran</div>
                <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: 'rgba(248,244,237,0.35)' }}>Desi Kitchen</div>
              </div>
              <p className="text-sm leading-relaxed max-w-xs mb-6" style={{ color: 'rgba(248,244,237,0.45)' }}>
                Traditional Pakistani cuisine served with warmth and hospitality in the heart of Fateh Jang, Punjab.
              </p>
              <div className="flex gap-5">
                {['Facebook', 'Instagram', 'WhatsApp'].map(s => (
                  <a key={s} href="#" className="text-xs font-medium transition-colors" style={{ color: 'rgba(248,244,237,0.35)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--brass)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,244,237,0.35)')}
                  >{s}</a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs tracking-[0.2em] uppercase font-semibold mb-5" style={{ color: 'rgba(248,244,237,0.35)' }}>Navigation</div>
              <div className="flex flex-col gap-3">
                {restaurantNavItems.map(item => (
                  <a key={item.label} href={item.href}
                    className="text-sm transition-colors" style={{ color: 'rgba(248,244,237,0.5)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--ivory)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,244,237,0.5)')}
                  >{item.label}</a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs tracking-[0.2em] uppercase font-semibold mb-5" style={{ color: 'rgba(248,244,237,0.35)' }}>Contact</div>
              <div className="flex flex-col gap-3 text-sm" style={{ color: 'rgba(248,244,237,0.5)' }}>
                <span>Fateh Jang, Punjab</span>
                <span>Open daily · Noon – 11 PM</span>
                <a href="tel:+92XXXXXXXXXX" className="transition-colors"
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--brass)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,244,237,0.5)')}
                >📞 Call Us</a>
                <a href="https://wa.me/92XXXXXXXXXX" className="transition-colors"
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--brass)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,244,237,0.5)')}
                >💬 WhatsApp</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ color: 'rgba(248,244,237,0.25)' }}>
            <span>© 2024 Mehran Desi Kitchen · Fateh Jang, Punjab</span>
            <span>Fictional restaurant · UI/UX Assessment · Xenon Digital</span>
          </div>
        </div>
      </footer>

    </div>
  )
}
