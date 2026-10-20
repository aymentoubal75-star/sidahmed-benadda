import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, OrbitControls, Text } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import masarLogo from "../assets/masar-logo.png";
import profileImage from "../assets/profile.jpg";
import profile1 from "../assets/experience-1.png";
import profile2 from "../assets/experience-2.png";
import profile3 from "../assets/experience-3.png";
import profile4 from "../assets/experience-4.png";
import profile5 from "../assets/experience-5.png";
import profile6 from "../assets/experience-7.png";
import radioPresenterImage from "../assets/experience-9.png";
import voiceBrandVideo from "../assets/experience-13.mp4";
import sawtElDjazairVideo from "../assets/experience-14.mp4";
import adhanVideo from "../assets/experience-15.mp4";
import youthProgramVideo from "../assets/experience-16.mp4";
import ecommerceCourseImage from "../assets/course-1.PNG";
import ecommerceStartImage from "../assets/course-2.jpeg";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

const BEHANCE = "https://www.behance.net/aminaharik1";

const WORK_LINKS = {
  speakyClub: "https://www.behance.net/gallery/239040599/SOCIAL-MEDIA-POSTS-DESIGN",
  decode: "https://www.behance.net/gallery/241896583/DECODE-School-Event-Brand-Guidelines",
  speakyClubIdentity: "https://www.behance.net/gallery/241883423/SPEAKY-CLUB-English-Speaking-Club-Logo-Identity",
  leRetour: "https://www.behance.net/gallery/238189505/Le-Retour-Mens-Wear-Visual-Identity",
  yelo: "https://www.behance.net/gallery/241063723/YELO-Real-Estate-Logo-Design-Brand-Identity",
  visualIdentity: "https://www.behance.net/gallery/238456837/Auto-Spare-Parts-Brand-Guidelines"
};

function canUseWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")));
  } catch {
    return false;
  }
}

function AchievementVideo({ src, label, lang }) {
  const videoRef = useRef(null);
  const soundEnabledRef = useRef(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const handlePointerEnter = event => {
    if (event.pointerType !== "mouse" || soundEnabledRef.current) return;
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(error => {
      console.warn("Could not autoplay the achievement video on hover.", error);
    });
  };

  const handlePointerLeave = () => {
    const video = videoRef.current;
    if (!video || soundEnabledRef.current) return;
    video.pause();
    video.currentTime = 0;
  };

  const playWithSound = () => {
    const video = videoRef.current;
    if (!video) return;
    soundEnabledRef.current = true;
    setSoundEnabled(true);
    video.muted = false;
    video.play().catch(error => {
      console.error("Could not play the achievement video with sound.", error);
    });
  };

  return (
    <>
      <video
        ref={videoRef}
        className="achievement-video"
        src={src}
        controls
        playsInline
        preload="metadata"
        aria-label={label}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      />
      {!soundEnabled && (
        <button className="video-sound-start" type="button" onClick={playWithSound}>
          {lang === "ar" ? "▶ تشغيل مع الصوت" : "▶ Play with sound"}
        </button>
      )}
    </>
  );
}

const CV = {
  name: "sidahmed",
  title: { en: "Entrepreneur • Marketing & Youth Programs", ar: "رائد أعمال • تسويق • برامج الشباب" },
  location: { en: "Algeria", ar: "الجزائر" },
  email: "sidahmedbenadda1@gmail.com",
  phone: "+213 778 038 844",
  socials: {
    tiktok: "https://www.tiktok.com/@benadda_sidahmed",
    instagram: "https://www.instagram.com/benadda_sidahmed",
    facebook: "https://web.facebook.com/sidahmed.sidou.7359",
    whatsapp: "https://wa.me/213778038844"
  },
  summary: {
    en: "I am an entrepreneur and community leader with solid experience in project management, digital marketing, public communication, and youth programs. I build initiatives that connect strategy, leadership, and social impact.",
    ar: "أنا رائد أعمال وقائد مجتمعي، أملك خبرة في إدارة المشاريع والتسويق الرقمي والاتصال العام وبرامج الشباب، وأعمل على بناء مبادرات تربط بين الرؤية والاستراتيجية والتأثير المجتمعي."
  },
  goal: {
    en: "My goal is to keep growing initiatives that create value, empower communities, and strengthen the culture of innovation and entrepreneurship.",
    ar: "هدفي هو تطوير المبادرات التي تخلق قيمة، وتمكّن المجتمعات، وتُعزّز ثقافة الابتكار وريادة الأعمال."
  },
  skills: ["Brand Strategy","Digital Marketing","Project Management","Content Creation","Communication","Leadership","Youth Programs","Community Engagement"],
  softSkills: ["Team Leadership","Creativity","Adaptability","Public Speaking","Organization","Negotiation","Strategic Thinking","Mentorship"],
  experience: [
    { date: "حتى الآن", role: { en: "Founder & Director — Massar Project", ar: "مؤسس و مدير مشروع مسار" }, company: "Massar", image: profile1, text: { en: "Leading a project focused on innovation, entrepreneurship and community growth through strategic initiatives and impactful communication.", ar: "قيادة مشروع يركز على الابتكار وريادة الأعمال والنمو المجتمعي عبر مبادرات استراتيجية وتواصل مؤثر." } },
    { date: "حتى الآن", role: { en: "Founder & Director — Almaher Business Project", ar: "مؤسس و مدير مشروع Almaher Business" }, company: "Almaher Business", image: profile2, text: { en: "Establishing a business-oriented initiative to support entrepreneurship, marketing and sustainable economic development.", ar: "إطلاق مبادرة تهتم بريادة الأعمال والتسويق والتنمية الاقتصادية المستدامة." } },
    { date: "حتى الآن", role: { en: "Manager — MEMO BAC App", ar: "مسير تطبيق MEMO BAC" }, company: "MEMO BAC", image: profile4, text: { en: "Overseeing the direction and growth of the application as a practical educational support tool.", ar: "رعاية توجيه وتطوير التطبيق كأداة تعليمية عملية ومفيدة للطلبة." } },
    { date: "سابقًا", role: { en: "Administrative Officer — Institut International", ar: "مسؤول إداري بمؤسسة المعهد أنترناشيونال" }, company: "Institut International", image: profile5, text: { en: "Managing administrative processes and operational coordination to support institutional efficiency and service quality.", ar: "إدارة المهام الإدارية والتنسيق العملياتي لدعم الكفاءة المؤسسية وجودة الخدمة." } },
    { date: "سابقًا", role: { en: "Project Manager — Fen Lim", ar: "مدير مشروع فن ليم" }, company: "Fen Lim", image: profile6, text: { en: "Leading the project by coordinating vision, execution and communication to achieve the set objectives.", ar: "قيادة المشروع عبر التنسيق بين الرؤية والتنفيذ والتواصل لتحقيق الأهداف المرجوة." } },
    { date: "سابقًا", role: { en: "Radio and Television Program Presenter", ar: "مقدم برامج إذاعية وتلفزيونية" }, company: "Media", image: radioPresenterImage, text: { en: "Hosting programs and participating in media communication with a focus on audience engagement and public message delivery.", ar: "استضافة البرامج والمشاركة في الإعلام لتحقيق التواصل الفعّال مع الجمهور ونقل الرسائل العامة بوضوح." } },
    { date: "سابقًا", role: { en: "Project Commissioner — Makine Reading Project", ar: "مفوض مشروع قرائي مكين" }, company: "Makine", text: { en: "Supporting reading promotion and educational outreach as part of a community-based knowledge initiative.", ar: "المساهمة في تعزيز القراءة والتوعية التعليمية ضمن مبادرة مجتمعية معرفية." } },
    { date: "سابقًا", role: { en: "Podcast Producer & Host", ar: "مُعد و مقدم بودكاست" }, company: "Podcast", image: profile3, text: { en: "Preparing and delivering podcast content focused on education, culture and communication.", ar: "إعداد وتقديم محتوى بودكاست يركز على التعليم والثقافة والتواصل." } },
    { date: "سابقًا", role: { en: "Trainer — Digital Marketing & Entrepreneurship", ar: "مدرب في مجال التسويق الرقمي وريادة الأعمال" }, company: "Training", text: { en: "Training youth and professionals in digital marketing, personal branding and entrepreneurial thinking.", ar: "تدريب الشباب والممارسين في مجال التسويق الرقمي والهوية الشخصية والتفكير الريادي." } },
    { date: "سابقًا", role: { en: "Media & Educational Content Creator", ar: "صانع محتوى إعلامي وتعليمي" }, company: "Content", text: { en: "Creating educational and media content designed to inform, inspire and engage audiences across platforms.", ar: "إنتاج محتوى إعلامي وتعليمي يهدف إلى التوعية والإلهام والتواصل مع الجمهور عبر المنصات المختلفة." } }
  ],
  achievements: [
    { title: { en: "Voice Brand Creator", ar: "صانع شارات صوتية" }, detail: { en: "Creating distinctive voice identities and audio branding assets for public-facing communication.", ar: "إعداد هويات صوتية وشارات بصوتية مميزة للتواصل العام." }, video: voiceBrandVideo },
    { title: { en: "First Place — National Competition 'Sawt El Djazair'", ar: "المرتبة الأولى في المسابقة الوطنية \"صوت الجزائر\"" }, detail: { en: "Recognized as the top participant in the national voice competition.", ar: "حصد المركز الأول في المسابقة الوطنية المتخصصة في الصوت." }, video: sawtElDjazairVideo },
    { title: { en: "Adhan / Call to Prayer Presenter", ar: "تقديم الأذان" }, detail: { en: "Leading a spiritual and cultural role through the recitation and presentation of the adhan.", ar: "المساهمة في الدور الروحي والثقافي من خلال تقديم الأذان." }, video: adhanVideo },
    { title: { en: "Leader in the Youth Program — Ministry of Youth", ar: "قائد في برنامج وزارة الشباب (نادي الرياضة)" }, detail: { en: "Leading activities and youth engagement initiatives under the Ministry of Youth and Sports.", ar: "قيادة الأنشطة ومبادرات التفاعل الشبابي ضمن برنامج وزارة الشباب والرياضة." }, video: youthProgramVideo }
  ],
  memberships: [
    { title: { en: "Active member — Let's Go Aya Nrouho", ar: "عضو فعال في النادي السياحي \"Let's Go Aya Nrouho\"" } },
    { title: { en: "Member of the youth and sport community initiative", ar: "عضو في مبادرات الشباب والرياضة" } }
  ],
  courses: [
    { title: { en: "E-commerce Fundamentals", ar: "أساسيات التجارة الإلكترونية" }, image: ecommerceCourseImage },
    { title: { en: "E-commerce Start", ar: "التجارة الإلكترونية — E-Com Start" }, image: ecommerceStartImage }
  ],
  education: [
    { date: "2024 — 2025", title: { en: "Advanced Leadership and Communication Training", ar: "تدريب متقدم في القيادة والتواصل" }, place: "Professional Development" },
    { date: "2023", title: { en: "Youth Engagement and Program Design", ar: "إشراك الشباب وتصميم البرامج" }, place: "Community Programs" },
    { date: "2022", title: { en: "Digital Marketing & Content Strategy", ar: "التسويق الرقمي واستراتيجية المحتوى" }, place: "Digital Growth" }
  ],
  languages: [
    ["Arabic", "العربية", "●●●●●"],
    ["French", "الفرنسية", "●●●●○"],
    ["English", "الإنجليزية", "●●●●○"]
  ]
};

function CourseRegistrationPage() {
  const params = new URLSearchParams(window.location.search);
  const requestedCourse = params.get("course") || "";
  const [lang, setLang] = useState(() => new URLSearchParams(window.location.search).get("lang") === "en" ? "en" : "ar");
  const isArabic = lang === "ar";
  const isSuccessPage = window.location.pathname === "/registration-success";
  const [isSubmitted, setIsSubmitted] = useState(isSuccessPage);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const labels = isArabic
    ? {
        back: "العودة إلى الموقع",
        eyebrow: "التسجيل في الدورات",
        title: "ابدأ رحلتك",
        intro: "املأ النموذج التالي وسنتواصل معك بخصوص الدورة.",
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        course: "اختر الدورة",
        choose: "اختر الدورة المناسبة",
        message: "رسالة أو سؤال (اختياري)",
        submit: "إرسال طلب التسجيل",
        sending: "جارٍ الإرسال...",
        configError: "إعدادات إرسال البريد غير مكتملة. يرجى التواصل معنا مباشرة.",
        sendError: "تعذر إرسال طلبك الآن. يرجى المحاولة مرة أخرى.",
        required: "الحقول المعلّمة مطلوبة.",
        successTitle: "شكرًا على تسجيلك",
        successMessage: "تم استلام طلبك. سنتواصل معك قريبًا.",
        home: "العودة إلى الرئيسية",
        courses: {
          "E-commerce Fundamentals": "أساسيات التجارة الإلكترونية",
          "E-commerce Start": "التجارة الإلكترونية — E-Com Start"
        }
      }
    : {
        back: "Back to website",
        eyebrow: "COURSE REGISTRATION",
        title: "Start your journey",
        intro: "Fill in the form and we will contact you about the course.",
        name: "Full name",
        email: "Email address",
        phone: "Phone number",
        course: "Select a course",
        choose: "Choose a course",
        message: "Message or question (optional)",
        submit: "Submit registration",
        sending: "Sending...",
        configError: "Email delivery is not configured. Please contact us directly.",
        sendError: "Your request could not be sent. Please try again.",
        required: "Fields marked required must be completed.",
        successTitle: "Thank you for registering",
        successMessage: "Your registration request was received. We will contact you soon.",
        home: "Back to home",
        courses: {}
      };

  const handleSubmit = async event => {
    event.preventDefault();
    setSubmitError("");

    const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } = import.meta.env;
    if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
      setSubmitError(labels.configError);
      return;
    }

    setIsSending(true);
    try {
      await emailjs.sendForm(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        event.currentTarget,
        { publicKey: VITE_EMAILJS_PUBLIC_KEY }
      );
      setIsSubmitted(true);
    } catch (error) {
      console.error("Could not send the course registration through EmailJS.", error);
      setSubmitError(labels.sendError);
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.body.classList.toggle("arabic", isArabic);
    document.title = isArabic ? "التسجيل في الدورات — sidahmed" : "Course Registration — sidahmed";
  }, [lang, isArabic]);

  return (
    <main className="registration-page">
      <header className="registration-nav">
        <div aria-hidden="true" />
        <div className="registration-actions">
          <button className="lang" type="button" onClick={() => setLang(isArabic ? "en" : "ar")}>
            {isArabic ? "EN" : "العربية"}
          </button>
          <a className="inline-link" href="/">{labels.back}</a>
        </div>
      </header>

      <section className="registration-card">
        <small>{labels.eyebrow}</small>
        {isSubmitted ? (
          <div className="registration-success" role="status">
            <h1>{labels.successTitle}</h1>
            <p>{labels.successMessage}</p>
            <a className="contact-button" href="/">{labels.home}</a>
          </div>
        ) : (
          <>
            <h1>{labels.title}</h1>
            <p className="registration-intro">{labels.intro}</p>
            <form
              className="registration-form"
              name="course-registration"
              onSubmit={handleSubmit}
            >
              <label>
                {labels.name}
                <input name="full_name" type="text" autoComplete="name" required />
              </label>
              <label>
                {labels.email}
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                {labels.phone}
                <input name="phone" type="tel" autoComplete="tel" required />
              </label>
              <label>
                {labels.course}
                <select name="course" defaultValue={CV.courses.some(course => course.title.en === requestedCourse) ? requestedCourse : ""} required>
                  <option value="" disabled>{labels.choose}</option>
                  {CV.courses.map(course => (
                    <option key={course.title.en} value={course.title.en}>
                      {labels.courses[course.title.en] || course.title.en}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                {labels.message}
                <textarea name="message" rows="4" />
              </label>
              {submitError && <p className="registration-error" role="alert">{submitError}</p>}
              <p className="registration-required">{labels.required}</p>
              <button className="contact-button" type="submit" disabled={isSending}>
                {isSending ? labels.sending : labels.submit}
              </button>
            </form>
          </>
        )}
      </section>
      <footer className="registration-footer">© 2026 by massar</footer>
    </main>
  );
}

function Scene({ accent = "#32977d", lang = "en" }) {
  const group = useRef();
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = (lang === "ar" ? -1 : 1) * (Math.sin(t * .22) * .18 + state.pointer.x * .12);
    group.current.rotation.x = Math.cos(t * .17) * .08 + state.pointer.y * .06;
    group.current.position.y = Math.sin(t * .55) * .12;
  });
  return (
    <>
      <ambientLight intensity={.55}/>
      <directionalLight position={[4,6,5]} intensity={4}/>
      <pointLight position={[-5,1,3]} intensity={18} color={accent}/>
      <pointLight position={[4,-3,-2]} intensity={12} color="#5ce1ff"/>
      <Environment preset="city"/>
      <group ref={group}>
        <Float speed={1.6} rotationIntensity={1.1} floatIntensity={1.2}>
          <mesh position={[-2.5,1.2,0]} rotation={[.3,.5,.2]}>
            <boxGeometry args={[1.7,1.7,1.7]}/>
            <MeshDistortMaterial color={accent} metalness={.82} roughness={.12} distort={.22} speed={1.8}/>
          </mesh>
        </Float>
        <Float speed={2} rotationIntensity={1.4} floatIntensity={1.6}>
          <mesh position={[2.5,1.4,-.8]}>
            <torusGeometry args={[1.05,.28,36,100]}/>
            <MeshDistortMaterial color="#f3f3f3" metalness={.9} roughness={.12}/>
          </mesh>
        </Float>
        <Float speed={1.7} rotationIntensity={1.8} floatIntensity={1.5}>
          <mesh position={[1.8,-1.8,.5]}>
            <sphereGeometry args={[.85,64,64]}/>
            <MeshDistortMaterial color="#5ce1ff" metalness={.7} roughness={.15} distort={.28} speed={2.2}/>
          </mesh>
        </Float>
        <Float speed={1.4} rotationIntensity={1.2} floatIntensity={1.2}>
          <mesh position={[-2.2,-1.6,-.5]} rotation={[.2,.5,0]}>
            <icosahedronGeometry args={[.75,1]}/>
            <MeshDistortMaterial color="#fff" metalness={.7} roughness={.18}/>
          </mesh>
        </Float>
        <Text position={[0,.15,-.5]} fontSize={.62} letterSpacing={.02} color="#32977d" anchorX="center" anchorY="middle">MSR.</Text>
      </group>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={.25}/>
    </>
  );
}

function ContactScene({ lang = "en" }) {
  return (
    <>
      <ambientLight intensity={.8}/>
      <pointLight position={[3,3,3]} intensity={18} color="#32977d"/>
      <pointLight position={[-3,-2,1]} intensity={10} color="#32977d"/>
      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.7}>
        <mesh rotation={[.25,.45,.1]}>
          <icosahedronGeometry args={[2,3]}/>
          <MeshDistortMaterial color="#32977d" metalness={.9} roughness={.1} distort={.38} speed={2.2}/>
        </mesh>
      </Float>
    </>
  );
}

function App() {
  const [lang, setLang] = useState("en");
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("home");
  const [webgl, setWebgl] = useState(canUseWebGL);
  const t = (obj) => obj?.[lang] ?? obj;

  useEffect(() => {
    const onContextLost = () => setWebgl(false);
    const canvases = document.querySelectorAll("canvas");
    canvases.forEach(canvas => canvas.addEventListener("webglcontextlost", onContextLost));
    return () => canvases.forEach(canvas => canvas.removeEventListener("webglcontextlost", onContextLost));
  }, [webgl]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.classList.toggle("arabic", lang === "ar");

    const sections = ["home","work","about","experience","contact"];
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * .35;
      let current = "home";
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive:true });

    const reveals = gsap.utils.toArray(".reveal");
    reveals.forEach(el => {
      gsap.fromTo(el, { y:35, opacity:0 }, {
        y:0, opacity:1, duration:1, ease:"power3.out",
        scrollTrigger:{ trigger:el, start:"top 88%", once:true }
      });
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lang]);

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
    setMenu(false);
  };

  const nav = lang === "ar"
    ? [["home","الرئيسية"],["work","الأعمال"],["about","نبذة"],["experience","الخبرة"],["courses","الدورات"],["contact","تواصل"]]
    : [["home","Home"],["work","Work"],["about","About"],["experience","Experience"],["courses","Courses"],["contact","Contact"]];

  return (
    <div className="site">
      <header className="nav">
        <button className="brand" onClick={() => scrollTo("home")} aria-label="Back to home">SB<span>.</span></button>
        <nav className={menu ? "nav-links open" : "nav-links"}>
          {nav.map(([id,label]) => id === "courses"
            ? <a key={id} href={`/register?lang=${lang}`} onClick={() => setMenu(false)}>{label}</a>
            : <button key={id} className={active===id?"active":""} onClick={() => scrollTo(id)}>{label}</button>)}
        </nav>
        <div className="nav-actions">
          <a className="behance-mini" href={`mailto:${CV.email}`} target="_blank" rel="noreferrer">Email ↗</a>
          <button className="lang" onClick={() => setLang(lang === "en" ? "ar" : "en")}>{lang === "en" ? "العربية" : "EN"}</button>
          <button className="menu" onClick={() => setMenu(!menu)}>☰</button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-3d">{webgl ? <Canvas dpr={[1, 1.5]} gl={{ antialias: false, powerPreference: "high-performance" }} camera={{position:[0,0,8],fov:44}}><Scene lang={lang}/></Canvas> : <div className="webgl-fallback"/>}</div>
          <div className="hero-overlay"/>
          <div className="hero-content">
            <p className="kicker">{lang==="ar" ? "ريادة أعمال · برامج الشباب · تأثير مجتمعي" : "ENTREPRENEURSHIP · YOUTH PROGRAMS · COMMUNITY IMPACT"}</p>
            <h1>SIDAHMED<span>PROJECT</span></h1>
            <p className="hero-title">{t(CV.title)}</p>
            <p className="hero-copy">{t(CV.summary)}</p>
            <div className="hero-actions">
              <button className="pill primary" onClick={() => scrollTo("work")}>{lang==="ar" ? "اكتشف المبادرات ↗" : "Explore initiatives ↗"}</button>
              <a className="pill" href={`mailto:${CV.email}`} target="_blank" rel="noreferrer">{lang==="ar" ? "تواصل معنا ↗" : "Contact us ↗"}</a>
            </div>
          </div>
          <figure className="hero-portrait">
            <div className="hero-portrait-frame"><img src={profileImage} alt="MASSAR founder" /></div>
            <figcaption>{lang === "ar" ? "sidahmed · مبادرات تصنع الأثر" : "sidahmed · Initiatives that make an impact"}</figcaption>
          </figure>
          <div className="hero-meta"><span>{t(CV.location)}</span><span>{lang==="ar" ? "استكشف المسار ↓" : "SCROLL TO EXPLORE ↓"}</span></div>
        </section>

        <section className="marquee"><div>PROJECTS — ENTREPRENEURSHIP — YOUTH PROGRAMS — MEDIA — MARKETING — COMMUNITY IMPACT —</div></section>

        <section className="section" id="work">
          <div className="section-head reveal">
            <div><small>01 / {lang==="ar" ? "الإنجازات والجوائز" : "ACHIEVEMENTS & AWARDS"}</small><h2>{lang==="ar" ? <>إنجازات<br/><i>مؤثرة.</i></> : <>Impactful<br/><i>achievements.</i></>}</h2></div>
            <div className="head-copy">
              <p>{lang==="ar" ? "مجموعة من الإنجازات التي تعكس الخبرة في القيادة، التفاعل المجتمعي، والخدمات الإعلامية والتنظيمية." : "A set of achievements reflecting leadership, community engagement, media work and project execution."}</p>
            </div>
          </div>

          <div className="work-grid">
            {CV.achievements.filter(item => !item.video).map((item, i) => (
              <article className="work-card image-card reveal" key={item.title.en}>
                <div className="card-top"><span>0{i+1}</span><span>★</span></div>
                <div className="card-info">
                  <span className="card-cta">{lang === "ar" ? "إنجاز" : "Achievement"}</span>
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.detail)}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="video-showcase" aria-label={lang === "ar" ? "فيديوهات الإنجازات" : "Achievement videos"}>
            {CV.achievements.filter(item => item.video).map((item, i) => (
              <article className="work-card achievement-video-card video-showcase-card reveal" key={item.title.en}>
                <AchievementVideo src={item.video} label={t(item.title)} lang={lang} />
                <div className="image-shade" aria-hidden="true" />
                <div className="card-top"><span>V{i+1}</span><span>▶</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-head reveal"><div><small>02 / {lang==="ar" ? "نبذة عن sidahmed" : "ABOUT SIDAHMED"}</small><h2>{lang==="ar" ? <>الرؤية تتحول<br/><i>إلى مبادرات.</i></> : <>Vision turns<br/><i>into action.</i></>}</h2></div></div>
          <div className="about-grid reveal">
            <p className="about-lead">{t(CV.summary)}</p>
            <div className="about-copy"><p>{t(CV.goal)}</p>
              <div className="skill-columns">
                <div><h4>{lang==="ar" ? "المهارات" : "SKILLS"}</h4>{CV.skills.map(s=><span key={s}>{s}</span>)}</div>
                <div><h4>{lang==="ar" ? "القدرات" : "STRENGTHS"}</h4>{CV.softSkills.map(s=><span key={s}>{s}</span>)}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section experience" id="experience">
          <div className="section-head reveal"><div><small>03 / {lang==="ar" ? "الخبرة والدورات" : "EXPERIENCE & COURSES"}</small><h2>{lang==="ar" ? <>الخبرة<br/><i>والتعليم.</i></> : <>Experience<br/><i>& learning.</i></>}</h2></div><p>{lang==="ar" ? "مسار عملي متنوع يجمع بين الإدارة، التسويق، الإعلام، والتأثير المجتمعي." : "A diverse professional path combining management, marketing, media, and community impact."}</p></div>
          <div className="timeline">
            {CV.experience.map(item => <article className="timeline-item reveal" key={item.role.en+item.date}><div className="timeline-date">{item.date}</div><div className={item.image ? "timeline-main has-image" : "timeline-main"}>{item.image && <img className="timeline-image" src={item.image} alt={t(item.role)} loading="lazy" />}<div className="timeline-copy"><h3>{t(item.role)}</h3><strong>{item.company}</strong><p>{t(item.text)}</p></div></div></article>)}
          </div>

          <div className="education-grid">
            <div><small>{lang==="ar" ? "المشاركات" : "PARTICIPATION"}</small><h3>{lang==="ar" ? <>مشاركة فعالة<br/><i>في المجتمع.</i></> : <>Active voice<br/><i>in the community.</i></>}</h3></div>
            <div>{CV.memberships.map(m => <div className="edu-row reveal" key={t(m.title)}><span>{lang==="ar" ? "عضو" : "Member"}</span><div><h4>{t(m.title)}</h4></div></div>)}</div>
          </div>

          <div className="languages reveal">
            <div><small>{lang==="ar" ? "الدورات التدريبية" : "TRAINING COURSES"}</small><h3>{lang==="ar" ? <>دورات لتطوير<br/><i>المهارات.</i></> : <>Courses for<br/><i>growth.</i></>}</h3></div>
            <div className="course-cards">{CV.courses.map(course => <article className="course-card reveal" key={course.title.en}>
              <img src={course.image} alt={t(course.title)} loading="lazy" />
              <div className="course-card-info">
                <h4>{t(course.title)}</h4>
                <a href={`/register?course=${encodeURIComponent(course.title.en)}&lang=${lang}`} className="inline-link">{lang==="ar" ? "سجل الآن ↗" : "Register now ↗"}</a>
              </div>
            </article>)}</div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-3d">{webgl ? <Canvas dpr={[1, 1.5]} gl={{ antialias: false, powerPreference: "high-performance" }} camera={{position:[0,0,7],fov:48}}><ContactScene lang={lang}/></Canvas> : <div className="webgl-fallback"/>}</div>
          <div className="contact-content reveal">
            <small>04 / {lang==="ar" ? "تواصل" : "CONTACT"}</small>
            <h2>{lang==="ar" ? <>لنبني معًا<br/><i>مبادرة قوية.</i></> : <>Let's build<br/><i>a stronger initiative.</i></>}</h2>
            <p>{lang==="ar" ? "هل ترغب في التعاون أو التسجيل في دورة أو دعم مشروع؟" : "Want to collaborate, register for a course, or support an initiative?"}</p>
            <a className="contact-button" href={`mailto:${CV.email}`}>{lang==="ar" ? "راسلنا الآن ↗" : "Contact us now ↗"}</a>
            <div className="contact-links">
              <a href={`mailto:${CV.email}`}>Email ↗</a>
              <a href={`tel:${CV.phone.replace(/\s/g,"")}`}>WhatsApp / Phone: {CV.phone}</a>
              <a href={CV.socials.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a>
              <a href={CV.socials.tiktok} target="_blank" rel="noreferrer">TikTok ↗</a>
              <a href={CV.socials.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
              <a href={CV.socials.facebook} target="_blank" rel="noreferrer">Facebook ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer><span>© 2026 by massar</span><span>{t(CV.title)} · {t(CV.location)}</span><span>معا نصنع الأثر</span></footer>
    </div>
  );
}

const isRegistrationRoute = ["/register", "/registration-success"].includes(window.location.pathname);
createRoot(document.getElementById("root")).render(isRegistrationRoute ? <CourseRegistrationPage/> : <App/>);
