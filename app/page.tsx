import { Nav, WorkCard, ArrowDownRight, ArrowUpRight } from './ui';

export default function Home() {
  return <><Nav/><main>
    <section className="hero site-width">
      <div className="hero-kicker"><span className="status-dot"/> PRODUCT DESIGNER · UI/UX DESIGNER <span>OPEN TO OPPORTUNITIES · HCMC / REMOTE</span></div>
      <h1>Designing clarity<br/><span>into complex products.</span></h1>
      <div className="hero-proof"><div className="proof-flo"><span>FLO / FINANCIAL SIGNAL</span><b>Cash runway</b><em>Needs attention</em></div><div className="proof-scheduler"><span>SCHEDULER / JOB STATUS</span><b>Employee Import</b><em>FAILED · ACTION REQUIRED</em></div></div><div className="hero-bottom"><p>I design enterprise SaaS, data-heavy workflows, and AI-powered experiences — turning complex product logic into clear, usable interfaces.</p><a className="text-link" href="#work">Explore selected work <ArrowDownRight size={17}/></a></div>
    </section>

    <section id="work" className="section site-width">
      <div className="section-intro"><span className="section-number">01</span><div><p className="overline">Selected work</p><h2>Different products.<br/>Same obsession: better decisions.</h2></div></div>
      <div className="work-stack">
        <WorkCard href="/work/athena" number="01" year="2021–26" type="athena" title="Athena — Transportation Platform" tags={['Enterprise SaaS','GIS','Operations']} description="A large-scale transportation platform spanning routing, workforce management, mapping, and fleet operations."/>
        <WorkCard href="/work/flo" number="02" year="2026" type="flo" title="Flo — Financial Intelligence" tags={['B2B SaaS','AI','Fintech']} description="Turn financial signals into context, recommendations, and better decisions."/>
        <WorkCard href="/work/scheduler" number="03" year="2024–25" type="scheduler" title="Scheduler Management" tags={['Enterprise SaaS','Operations','Systems']} description="Make background jobs, processing states, and failures visible and actionable."/>
        <WorkCard href="/work/cryprice" number="04" year="2021" type="cry" title="Cryprice" tags={['Fintech','Mobile','UI/UX']} description="A mobile fintech concept exploring portfolio tracking, market data, and alerts."/>
      </div>
    </section>

    <section className="section section-rule site-width">
      <div className="section-intro"><span className="section-number">02</span><div><p className="overline">Design philosophy</p><h2>I work where<br/>complexity lives.</h2></div></div>
      <div className="split-copy"><div className="big-copy">Dense data. Operational workflows. Business rules. <em>Edge cases.</em></div><div className="body-copy"><p>I start with how the system works — then make the complexity easier to navigate, understand, and act on.</p><div className="principle-list"><div><b>01 / STRUCTURE</b><strong>Make complexity legible.</strong><small>Tenant → Module → Job. A hierarchy users can scan before they investigate.</small></div><div><b>02 / SIGNAL</b><strong>Surface what matters.</strong><small>Cash → Runway → Risk. Put the signal before the detail.</small></div><div><b>03 / ACTION</b><strong>Design for the next decision.</strong><small>Insight → Recommendation → Action. Reduce the distance between knowing and doing.</small></div></div></div></div>
    </section>

    <section id="experience" className="section section-rule site-width">
      <div className="section-intro"><span className="section-number">03</span><div><p className="overline">Experience</p><h2>6+ years inside<br/>complex systems.</h2></div></div>
      <div className="experience-list">
        <div className="experience-row"><span className="exp-year">2024 — 2026</span><div><h3>Senior Product Designer</h3><p>Edulog Vietnam · Enterprise SaaS</p><small>Owned new enterprise workflows from product structure through interaction specs, including Seating Chart and Scheduler Management.</small><div className="exp-tags"><span>Seating Chart</span><span>Scheduler</span><span>Enterprise workflows</span><span>Product structure</span></div></div><span className="exp-type">Product Design</span></div>
        <div className="experience-row"><span className="exp-year">2021 — 2024</span><div><h3>Product Designer</h3><p>Edulog Vietnam · Athena</p><small>Only Product Designer for Athena — designing across 4 major modules and a reusable 3-panel interaction pattern across 10 interconnected entities.</small><div className="exp-tags"><span>Routing</span><span>Time & Attendance</span><span>Mapping</span><span>Telematics</span></div></div><span className="exp-type">Product Design</span></div>
        <div className="experience-row"><span className="exp-year">2020 — 2021</span><div><h3>UI/UX Designer</h3><p>SGH Asia Ltd.</p><small>Designed document-processing and fintech business systems in Agile product teams.</small></div><span className="exp-type">UI / UX</span></div>
        <div className="experience-row"><span className="exp-year">2017 — 2020</span><div><h3>Solution Designer Lead</h3><p>SGH Asia Ltd.</p><small>Led solution design for OCR, capture, validation, and automation workflows.</small></div><span className="exp-type">Solution Design</span></div>
        <div className="experience-row"><span className="exp-year">2014 — 2017</span><div><h3>Production Team Lead</h3><p>SGH Asia Ltd.</p><small>Managed data-processing operations for a 20+ person team working under strict SLA requirements.</small></div><span className="exp-type">Operations</span></div>
      </div>
    </section>

    <section className="section section-rule site-width">
      <div className="section-intro"><span className="section-number">04</span><div><p className="overline">Capabilities</p><h2>Product thinking.<br/>UI craft.</h2></div></div>
      <div className="split-copy"><div className="big-copy">From <em>product logic</em> to the interface people actually use.</div><div className="body-copy"><div className="skill-list"><span>PRODUCT · Product thinking · UX / IA · Interaction design</span><span>SYSTEMS · Enterprise SaaS · Design systems · Complex workflows</span><span>DATA · Data-heavy UI · Information hierarchy · Operational dashboards</span><span>AI · AI-powered workflows · Recommendations · Human-AI interaction</span></div></div></div>
    </section>

    <section id="about" className="about-band"><div className="site-width"><div className="section-intro"><span className="section-number">05</span><div><p className="overline">About</p><h2>Product thinking.<br/>Interface craft.</h2></div></div><div className="about-grid"><p>I design where product logic gets complicated: enterprise SaaS, data-heavy workflows, operational systems, and emerging AI experiences.</p><p>My background spans operations, solution design, UX/UI, and product design — so I tend to start with how the system works before deciding how the interface should look.</p></div></div></section><section id="contact" className="statement-band"><div className="site-width"><p className="overline">Let&apos;s build something clear.</p><h2>I care about the details<br/>that make a product feel <span>obvious.</span></h2><a className="text-link light" href="mailto:kimngoc.max@gmail.com">Let&apos;s talk <ArrowUpRight size={17}/></a></div></section>
    <footer className="footer site-width"><span>© 2026 NGOC NGO</span><span>Product Designer · UI/UX Designer</span><span>HCMC / GMT+7</span></footer>
  </main></>;
}
