import Link from 'next/link';
import type { ReactNode } from 'react';
import { Nav, ArrowDownRight, ArrowUpRight, SchedulerVisual } from '../../ui';

function Section({number, eyebrow, title, children, className='' }:{number:string;eyebrow:string;title:string;children:ReactNode;className?:string}){
  return <section className={`case-section site-width ${className}`}>
    <div className="case-section-intro"><span className="section-number">{number}</span><div><p className="overline">{eyebrow}</p><h2>{title}</h2></div></div>
    {children}
  </section>
}

function State({label, text, tone}:{label:string;text:string;tone:string}){
  return <div className={`state-card ${tone}`}><span>{label}</span><strong>{text}</strong></div>
}

function SystemFlow(){
  return <div className="system-flow">
    <div className="flow-node"><small>LEVEL 01</small><b>Tenant</b><span>North District</span></div>
    <i>→</i>
    <div className="flow-node"><small>LEVEL 02</small><b>Module</b><span>Employee Import</span></div>
    <i>→</i>
    <div className="flow-node"><small>LEVEL 03</small><b>Job</b><span>Background process</span></div>
    <i>→</i>
    <div className="flow-node"><small>LEVEL 04</small><b>State</b><span>Success · Processing · Pending · Failed</span></div>
  </div>
}

function FailureFlow(){
  return <div className="failure-flow">
    <div><small>01</small><b>FAILED</b><span>Something needs attention.</span></div>
    <i>→</i>
    <div><small>02</small><b>WHY?</b><span>Expose the failure context.</span></div>
    <i>→</i>
    <div><small>03</small><b>WHAT?</b><span>Show what was affected.</span></div>
    <i>→</i>
    <div><small>04</small><b>WHAT NEXT?</b><span>Give the operator a clear next action.</span></div>
  </div>
}

export default function SchedulerCaseStudy(){
  return <><Nav/><main className="case-study scheduler-case">
    <section className="case-hero site-width">
      <div className="case-kicker"><span>02 / ENTERPRISE SAAS</span><span>OPERATIONS · SYSTEM DESIGN</span></div>
      <h1>Make every operational state<br/><span>visible.</span></h1>
      <p className="case-lead">A multi-tenant operations workflow for monitoring modules, background jobs, processing states, and failures — designed to make invisible system activity easier to understand and act on.</p>
      <div className="case-meta"><div><small>ROLE</small><b>Senior Product Designer</b></div><div><small>SCOPE</small><b>IA · Workflow · UI · Interaction specs</b></div><div><small>TIMELINE</small><b>2024–2025</b></div><div><small>PLATFORM</small><b>Web · Enterprise SaaS</b></div></div>
    </section>

    <div className="case-hero-visual site-width"><SchedulerVisual large/><div className="visual-caption"><span>Scheduler Management</span><span>Tenant → Module → Job → State</span></div></div>

    <Section number="01" eyebrow="Context" title={<>Background work becomes a problem<br/><em>when nobody can see it.</em></>}>
      <div className="case-copy-grid"><p>Scheduler Management was designed for internal teams responsible for automated background jobs running across multiple tenants and product modules.</p><p>The work itself happens behind the interface. The design challenge was to give operators enough visibility to understand what was running, what had finished, what was waiting, and where intervention was required.</p></div>
      <SystemFlow/>
    </Section>

    <Section number="02" eyebrow="The problem" title={<>The system was working.<br/><em>The operational picture was not.</em></>}>
      <div className="problem-grid">
        <div><span>01</span><h3>INVISIBLE</h3><p>Background jobs could run without a clear, shared view of their current state.</p></div>
        <div><span>02</span><h3>AMBIGUOUS</h3><p>A failure is not useful information by itself. Operators need context around what failed and where.</p></div>
        <div><span>03</span><h3>REACTIVE</h3><p>When a job needs attention, the interface should shorten the path from detection to investigation.</p></div>
      </div>
    </Section>

    <Section number="03" eyebrow="Design challenge" title="Three questions shaped the experience.">
      <div className="question-list">
        <div><span>01</span><b>How do we show system activity without overwhelming operators?</b><p>Keep hierarchy visible: tenant first, then module, then job, then state.</p></div>
        <div><span>02</span><b>How do we make state meaningful?</b><p>Use a small, explicit state model so users can scan the system before opening details.</p></div>
        <div><span>03</span><b>How do we turn a failure into an actionable task?</b><p>Move from status → context → affected scope → next action.</p></div>
      </div>
    </Section>

    <section className="statement-band case-statement"><div className="site-width"><p className="overline">Core design move</p><h2>Turn invisible system activity<br/>into <span>actionable states.</span></h2></div></section>

    <Section number="04" eyebrow="State model" title="Four states. One shared mental model.">
      <div className="state-grid"><State label="SUCCESS" text="Completed" tone="success"/><State label="PROCESSING" text="Currently running" tone="processing"/><State label="PENDING" text="Waiting to run" tone="pending"/><State label="FAILED" text="Action required" tone="failed"/></div>
      <p className="section-note">The goal was not to add more status decoration. It was to make system state scannable and consistent across the monitoring experience.</p>
    </Section>

    <Section number="05" eyebrow="Information architecture" title="Let the hierarchy do the explaining.">
      <div className="ia-layout"><div className="ia-rail"><span>Tenant</span><span>Module</span><span>Job</span><span>State</span></div><div className="ia-content"><div><small>TENANT</small><h3>North District</h3><p>A stable top-level context for multi-tenant operations.</p></div><div><small>MODULE</small><h3>Employee Import</h3><p>Connect the job to the product area it belongs to.</p></div><div><small>JOB</small><h3>Employee Import</h3><p>Give operators the concrete background task they need to investigate.</p></div></div></div>
    </Section>

    <Section number="06" eyebrow="Monitoring experience" title="Make the operational picture scannable.">
      <div className="ui-showcase"><SchedulerVisual large/></div>
      <div className="annotation-grid"><div><b>01 / FILTER THE SCOPE</b><p>Start with the tenant and module context instead of forcing users to inspect every job.</p></div><div><b>02 / SCAN THE STATE</b><p>State is visible directly in the job list, reducing the need to open every record.</p></div><div><b>03 / PRIORITIZE ATTENTION</b><p>Failed jobs are framed as an operational condition, not just another row value.</p></div></div>
    </Section>

    <Section number="07" eyebrow="Failure investigation" title="A failure should answer the next question.">
      <FailureFlow/>
      <div className="failure-panel"><div className="failure-header"><span>JOB / EMPLOYEE IMPORT</span><strong>FAILED · ACTION REQUIRED</strong></div><div className="failure-body"><div><small>WHAT HAPPENED</small><h3>Employee Import failed during processing.</h3><p>The operator needs enough context to understand the affected job before deciding what to do next.</p></div><div><small>WHAT NEXT</small><ul><li>Review failure details</li><li>Identify affected scope</li><li>Trigger the appropriate follow-up</li></ul></div></div></div>
    </Section>

    <Section number="08" eyebrow="Design details" title="The small rules make the system feel consistent.">
      <div className="detail-grid"><div><small>STATE</small><h3>Explicit, not decorative.</h3><p>Each state carries a clear meaning and supports scanning across lists and detail views.</p></div><div><small>HIERARCHY</small><h3>Context before detail.</h3><p>Tenant and module context stay visible while the operator investigates a job.</p></div><div><small>ACTION</small><h3>Failure → next step.</h3><p>The failure state is designed around what the operator needs to do, not only what went wrong.</p></div><div><small>DELIVERY</small><h3>Designed for implementation.</h3><p>Interaction specs and frontend user stories translated the workflow into implementation-ready tasks.</p></div></div>
    </Section>

    <Section number="09" eyebrow="Outcome" title={<>From monitoring<br/><em>to intervention.</em></>}>
      <div className="outcome-grid"><div><strong>3–4h</strong><span>Previous MTTR target context</span></div><div><strong>&lt;1h</strong><span>Target MTTR after the workflow improvement</span></div></div>
      <p className="section-note">The &lt;1h figure is presented as the product target defined for the initiative, not as a measured post-launch result. The strongest evidence here is the workflow itself: making background activity visible, stateful, and actionable.</p>
    </Section>

    <section className="next-project"><div className="site-width"><p className="overline">Next project</p><Link href="/work/flo"><span>03 / FINTECH · AI</span><h2>Turn financial data<br/><em>into better decisions.</em></h2><span className="text-link">Explore Flo <ArrowUpRight size={17}/></span></Link></div></section>
    <footer className="footer site-width"><span>© 2026 NGOC NGO</span><span>Product Designer · UI/UX Designer</span><span>HCMC / GMT+7</span></footer>
  </main></>;
}
