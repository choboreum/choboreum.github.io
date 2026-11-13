const navItems = [
  { href: "#top", label: "Portfolio" },
  { href: "/resume/", label: "Career Detail" },
  { href: "#case-study", label: "Case Study" },
  { href: "#developmentJourney", label: "Journey" },
  { href: "#guide", label: "Guide" },
  { href: "#works", label: "Works" },
];

const profileSummary = [
  ["Experience", "5년 웹 퍼블리싱/운영 실무"],
  ["Project", "10개+ 실무 프로젝트 참여"],
  ["Focus", "프론트엔드 개발 · 웹 접근성"],
];

const careerMetrics = [
  ["5년", "웹 퍼블리싱/운영 실무"],
  ["10+", "공공, 금융, 브랜드, 커머스 프로젝트"],
  ["대상", "LG CNS 부트캠프 ErumPay 프로젝트"],
  ["가이드", "개인 퍼블리싱 가이드 제안 및 채택"],
];

const careerKeywords = ["서울시청", "롯데렌탈", "스타벅스", "LG생활건강", "매일유업", "금융 MSA"];

const workingStyles = [
  {
    number: "01",
    title: "운영 흐름 이해",
    description: "사용자 문의와 현업 요청을 기능 요구사항으로 바꾸고, 화면 개선의 우선순위를 판단했습니다.",
  },
  {
    number: "02",
    title: "화면 구현",
    description: "반응형, 적응형, 브랜드형 웹을 구현하며 기획, 디자인, 개발 사이의 전달 비용을 줄였습니다.",
  },
  {
    number: "03",
    title: "API 연동과 예외 처리",
    description: "도메인의 API를 구현하며 데이터 흐름과 정합성을 함께 고려했습니다.",
  },
  {
    number: "04",
    title: "작업 기준화",
    description: "네이밍, 폴더 구조, 컴포넌트 기준을 문서화해 개인 작업 방식을 팀 기준으로 확장했습니다.",
  },
];

const creatorsScope = [
  "크리에이터 6명의 소개·스티커와 회차별 목록 구성",
  "각 크리에이터의 소속 회차로 상세 링크 연결",
  "홈과 회차 페이지에서 이벤트 화면 재사용",
];

const creatorsEvidence = [
  {
    title: "홈은 현재 회차로, 상세는 참여한 회차로",
    description: "2회차를 열어도 1회차 작가를 선택한 사용자는 그 작가의 소개를 볼 수 있어야 했습니다. 홈에 표시할 회차는 한곳에서 관리하고, 목록의 상세 링크는 각 작가가 참여한 회차를 기준으로 만들었습니다.",
  },
  {
    title: "같은 화면을 쓰되, FAQ는 회차에 맡기기",
    description: "홈과 회차 페이지는 공통 이벤트 화면을 사용하도록 합쳤습니다. 반면 공용 푸터가 첫 회차의 FAQ를 직접 읽는 부분은 분리했습니다. 화면 전체를 회차마다 등록하는 방식도 비교했지만, 달라지는 부분은 FAQ였기에 기존 등록 방식을 유지하고 회차에 맞는 푸터만 선택했습니다.",
  },
  {
    title: "새 회차를 등록하는 일은 빌드 단계에서",
    description: "회차 폴더를 추가한 뒤 목록에도 같은 회차를 손으로 등록하던 단계를 없앴습니다. 빌드 전에 폴더를 읽어 등록 코드를 생성하는 스크립트를 작성하고, 기존 회차와 새 회차 각각에서 목록과 상세 화면이 올바르게 연결되는지 확인했습니다.",
  },
];

const bootcampProjects = [
  {
    type: "01 / Frontend",
    stack: "React",
    title: "AI 기반 맞춤형 면접 준비 및 피드백 플랫폼",
    description: "프론트엔드 담당으로 화면 흐름, 사용자 입력, API 연동을 중심으로 구현했습니다.",
    role: "Frontend",
    focus: "React UI, 상태 관리, API 연동",
    github: "https://github.com/mPJT1-team7",
  },
  {
    type: "02 / Backend",
    stack: "Spring",
    title: "MyBill: 청구서/고지서 납부 일정 관리 서비스",
    description: "MSA 구조 안에서 청구서 관리, 인증, 서비스 연동 흐름을 학습하고 구현한 프로젝트입니다.",
    role: "Frontend · Backend",
    focus: "청구서 관리 API, 반복 납부 로직, Soft Delete",
    github: "https://github.com/lgcns-mini2nd-team3",
  },
  {
    type: "03 / Backend MSA",
    stack: "Spring Cloud",
    title: "ErumPay: QR 기반 간편결제 서비스",
    description: "최종 프로젝트로 결제 도메인과 가맹점 서비스를 중심으로 백엔드 구현 범위를 가장 깊게 다룹니다.",
    role: "Frontend PL · Full Stack",
    focus: "결제 사용자 여정, 공통 UI·상태 관리, 가맹점 API",
    award: "LG CNS AM Inspire Camp 최종 프로젝트 대상",
    featured: true,
    link: "/projects/erumpay/",
  },
];

const guideChecks = [
  "PC/Mobile 컴포넌트 분리",
  "클래스 네이밍과 파일 구조 규칙화",
  "웹 접근성 및 크로스브라우징 체크리스트",
  "팀 작업 기준으로 제안 및 채택",
];

const works = [
  {
    type: "Career Detail",
    title: "Career Detail",
    description: "메인에서 다루지 못한 실무 프로젝트와 운영 경험을 자세히 확인할 수 있는 상세 경력 페이지입니다.",
    href: "/resume/",
    link: "자세히 보기",
  },
  /*
  {
    type: "Responsive / Adaptive",
    title: "퍼블리싱 작업물",
    description: "반응형, 적응형, Bootstrap 기반 작업물을 정리했습니다.",
    href: "/legacy/",
    link: "작업물 보기",
  },
  */
];

const featuredWorks = [
  {
    title: "롯데렌탈 MyCar",
    period: "2023.08 ~ 2024.07",
    summary: "리브랜딩, 계약 프로세스 UI 개선, 운영 대응을 함께 경험한 렌탈 서비스 프로젝트",
    badges: ["리브랜딩", "운영", "신규 구축"],
    tech: ["JSP", "CSS", "JavaScript", "jQuery"],
    logo: "/resume/images/pj_lotterental.jpg",
  },
  {
    title: "스타벅스 간편결제",
    period: "2024.08 ~ 2024.11",
    summary: "앱 결제 고도화와 KBPay 제휴 흐름을 다룬 결제 앱뷰 프로젝트",
    badges: ["결제", "제휴", "앱뷰"],
    tech: ["JSP", "CSS", "JavaScript", "jQuery"],
    logo: "/resume/images/pj_sck.png",
  },
  {
    title: "LG생활건강 법인 홈페이지",
    period: "2022.03 ~ 2023.07",
    summary: "웹 접근성, ESG/채용 페이지, 브랜드 운영을 함께 다룬 법인 사이트 프로젝트",
    badges: ["운영", "접근성", "브랜드"],
    tech: ["JSP", "CSS", "JavaScript", "jQuery"],
    logo: "/resume/images/pj_lghnh.png",
  },
  {
    title: "서울시청 외국어 홈페이지",
    period: "2021.01 ~ 2022.01",
    summary: "공공 서비스의 다국어 CMS 운영과 주요 프로모션 현행화를 경험한 프로젝트",
    badges: ["공공", "CMS", "리뉴얼"],
    tech: ["WordPress", "HTML", "CSS", "jQuery"],
    logo: "/resume/images/pj-seoul.svg",
  },
];

const skills = [
  ["Frontend", "Next.js, React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS"],
  ["Backend", "Java, Spring Boot, JPA, MySQL, REST API"],
  ["Development Tools", "Playwright E2E, Git, GitHub, Figma, Docker, Postman"],
];

const contacts = [
  {
    label: "GitHub",
    value: "github.com/choboreum",
    href: "https://github.com/choboreum",
  },
  {
    label: "Career Detail",
    value: "상세 경력 보기",
    href: "/resume/",
  },
  {
    label: "Velog",
    value: "velog.io/@choboreum",
    href: "https://velog.io/@choboreum",
  },
  {
    label: "Email",
    value: "choboreum@naver.com",
    href: "mailto:choboreum@naver.com",
  },
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top">CHOBOREUM</a>
      <nav className="site-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
    </header>
  );
}

function SectionTitle({ eyebrow, title, children, actions }) {
  return (
    <div className="section-title">
      <div className="section-title-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {children}
      </div>
      {actions && <div className="section-actions">{actions}</div>}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">조보름 · 개발자 포트폴리오</p>
        <h1>
          웹 서비스를 운영한 경험을 바탕으로, 사용자가 보고 쓰는 화면을 만듭니다.
        </h1>
        <p className="lead">
          반응형 웹과 결제 화면을 구현하고 운영해 왔습니다.<br />
          화면을 만들 때는 사용자의 입력이 어떻게 처리되는지, 오류가 나면 무엇을 보여줄지까지 함께 살핍니다.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#case-study">Case Study 보기</a>
          <a className="button" href="#developmentJourney">Journey 보기</a>
          <a className="button" href="/resume/">Career Detail 보기</a>
        </div>
      </div>
      <aside className="hero-panel" aria-label="Profile summary">
        <dl>
          {profileSummary.map(([term, description]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{description}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </section>
  );
}

function Career() {
  return (
    <section id="career" className="section career-section">
      <SectionTitle eyebrow="Career Highlights" title="실무 경험은 숫자와 프로젝트 맥락으로 먼저 보여줍니다." />
      <div className="metric-grid">
        {careerMetrics.map(([value, label]) => (
          <article key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </div>
      <div className="career-keywords">
        {careerKeywords.map((keyword) => (
          <span key={keyword}>{keyword}</span>
        ))}
      </div>
    </section>
  );
}

function WorkingStyle() {
  return (
    <section className="section compact-section">
      <SectionTitle eyebrow="Working Style" title="운영 경험을 개발 역량으로 연결합니다." />
      <div className="value-grid">
        {workingStyles.map((item) => (
          <article key={item.number}>
            <span>{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CaseStudy() {
  return (
    <section id="case-study" className="section case-section">
      <SectionTitle eyebrow="Representative Project" title="LINE Creators+">
        <p className="section-lead">새로운 크리에이터와 캐릭터를 발견하고 LINE 스티커 구매로 응원하는 서비스입니다.</p>
      </SectionTitle>
      <div className="case-layout">
        <article className="case-summary">
          <div className="case-summary-inner">
            <div className="case-summary-brand">
              <div className="case-brand-row">
                <div className="case-brand-meta">
                  <span className="award-badge">IPX · 프론트엔드 인턴</span>
                  <p className="project-type">LINE MINI App · Next.js · React · TypeScript</p>
                </div>
              </div>
              <h3>2회차 이벤트를 구현하며, 이전 회차의 작가와 콘텐츠도 계속 찾아볼 수 있도록 화면 구조를 바꿨습니다.</h3>
              <a className="text-link" href="https://creatorsplus.line.me/" target="_blank" rel="noreferrer">공개 서비스 보기</a>
            </div>
            <div className="case-summary-scope">
              <ul className="plain-list">
                {creatorsScope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
        <div className="case-detail evidence-detail">
          {creatorsEvidence.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BootcampProjects() {
  return (
    <section id="developmentJourney" className="section bootcamp-section">
      <SectionTitle eyebrow="development Journey" title="사용자 화면부터 결제 API까지 구현한 팀 프로젝트입니다.">
        <p className="section-lead">
          AI 면접 플랫폼에서는 사용자 입력과 API 연동을, MyBill과 ErumPay에서는 요청을 처리하는 서버를 경험했습니다.
        </p>
      </SectionTitle>
      <div className="bootcamp-grid">
        {bootcampProjects.map((project) => (
          <article className={`bootcamp-card${project.featured ? " featured" : ""}`} key={project.title}>
            <div className="project-label">
              <p className="project-type">{project.type}</p>
              <strong className="journey-stack">{project.stack}</strong>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <dl className="compact-meta">
              {project.award && <div><dt>수상</dt><dd>{project.award}</dd></div>}
              <div>
                <dt>Role</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>{project.focus}</dd>
              </div>
            </dl>
            {project.github && (
              <a className="text-link" href={project.github} target="_blank" rel="noreferrer">
                GitHub 보기
              </a>
            )}
            {project.link && <a className="text-link" href={project.link}>ErumPay 상세 보기</a>}
          </article>
        ))}
      </div>
    </section>
  );
}

function Guide() {
  return (
    <section id="guide" className="section guide-section">
      <SectionTitle eyebrow="Publishing System" title="반복되는 퍼블리싱 작업을 표준화하여 협업 효율을 높였습니다." />
      <div className="guide-layout">
        <article className="guide-card">
          <h3>가이드는 단순 문서가 아니라, 팀의 반복 작업을 줄이기 위한 기준이었습니다.</h3>
          <p>
            네이밍 규칙, 폴더 구조, HTML/CSS/JS 작성 기준, 접근성 체크리스트,
            PC/Mobile 컴포넌트를 정리했습니다.
          </p>
          <a className="text-link" href="/guide/">가이드 보기</a>
        </article>
        <ul className="check-list">
          {guideChecks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Works() {
  return (
    <section id="works" className="section works-section">
      <SectionTitle
        eyebrow="Featured Work"
        title="운영부터 신규 구축까지 다양한 실무 프로젝트를 경험했습니다."
        actions={<a className="button" href="/resume/">Career Detail 보기</a>}
      >
        <p className="section-lead">
          기간, 프로젝트 성격, 대표 기술만 먼저 보여주고 자세한 담당 범위는 Career Detail에서 확인할 수 있게 연결했습니다.
        </p>
      </SectionTitle>
      <div className="featured-work-grid" aria-label="Featured professional work">
        {featuredWorks.map((work) => (
          <article className="featured-work-card" key={work.title}>
            <div className="featured-work-head">
              <div>
                <div className="work-logo">
                  <img src={work.logo} alt={`${work.title} logo`} loading="lazy" />
                </div>
              </div>
              <div className="featured-badges">
                {work.badges.map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </div>
            </div>
            <h3>{work.title}</h3>
            <p className="featured-period">{work.period}</p>
            <p>{work.summary}</p>
            <div className="featured-tech">
              {work.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills-section">
      <SectionTitle eyebrow="Skills" title="기술은 나열보다 프로젝트에서 어떻게 연결했는지를 기준으로 정리했습니다." />
      <div className="skill-columns">
        {skills.map(([title, description]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>더 자세한 기록과 코드는 링크에서 확인할 수 있습니다.</h2>
        <p>연락, 코드, 학습 기록, 상세 이력을 바로 확인할 수 있도록 정리했습니다.</p>
      </div>
      <div className="contact-links" aria-label="Contact links">
        {contacts.map((contact) => (
          <a key={contact.label} href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noreferrer" : undefined}>
            <span>{contact.label}</span>
            <strong>{contact.value}</strong>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Career />
        <WorkingStyle />
        <CaseStudy />
        <BootcampProjects />
        <Guide />
        <Works />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
