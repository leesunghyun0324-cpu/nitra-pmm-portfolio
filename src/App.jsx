import { useState } from 'react'
import { PERSONAS, COMPETITIVE, SCENARIOS, PITCHES } from './data.js'

const NAVY = '#1e3a5f'

const CARD_TYPES = {
  profile:     { icon: '🏥', accent: '#64748b', bg: '#f8fafc', title: 'Practice Profile' },
  pain:        { icon: '⚠️', accent: '#dc2626', bg: '#fef2f2', title: 'Key Pain Points' },
  positioning: { icon: '🎯', accent: '#2563eb', bg: '#eff6ff', title: 'Nitra Product Positioning' },
  objection:   { icon: '💬', accent: '#16a34a', bg: '#f0fdf4', title: 'Objection Handling' },
}

function PersonaCard({ type, children }) {
  const t = CARD_TYPES[type]
  return (
    <div
      className="rounded-lg shadow-sm"
      style={{
        backgroundColor: t.bg,
        borderLeft: `4px solid ${t.accent}`,
        padding: '24px',
        lineHeight: 1.6,
      }}
    >
      <h3
        className="uppercase font-bold mb-3 flex items-center gap-2"
        style={{ color: t.accent, fontSize: '0.78rem', letterSpacing: '0.06em' }}
      >
        <span style={{ fontSize: '1.1rem' }} aria-hidden="true">{t.icon}</span>
        {t.title}
      </h3>
      <div className="text-sm text-slate-700" style={{ lineHeight: 1.6 }}>
        {children}
      </div>
    </div>
  )
}

function YesNo({ value }) {
  const isYes = value.startsWith('Yes')
  return (
    <span className={isYes ? 'font-semibold' : ''} style={{ color: isYes ? '#15803d' : '#94a3b8' }}>
      {value}
    </span>
  )
}

export default function App() {
  const [active, setActive] = useState(0)
  const [scenarioIdx, setScenarioIdx] = useState(0)
  const persona = PERSONAS[active]
  const scenario = SCENARIOS[scenarioIdx]
  const pitch = PITCHES[persona.id][scenario.id]

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight mb-2" style={{ color: NAVY }}>
            Nitra — Persona-Based Product Messaging Framework
          </h1>
          <p className="text-lg text-slate-500 mb-1">
            How Nitra's value proposition shifts across medical practice segments
          </p>
          <p className="text-sm text-slate-400">Built by Sam Lee</p>
        </header>

        {/* Framing Note */}
        <div className="mb-10 p-4 bg-white rounded-lg border border-slate-200">
          <p className="text-sm text-slate-500 leading-relaxed">
            Four practice archetypes selected to illustrate how Nitra's value proposition shifts
            across different financial profiles, purchasing behaviors, and operational pain points.
            These are representative segments, not exhaustive. Pain point details include assumptions
            based on publicly available industry data.
          </p>
        </div>

        {/* Orientation: How to read these personas (collapsed by default) */}
        <details className="mb-6 bg-white rounded-lg border border-slate-200 shadow-sm">
          <summary
            className="cursor-pointer px-4 py-3 text-sm font-medium text-slate-700 select-none"
            style={{ listStyle: 'none' }}
          >
            <span className="mr-2">▸</span> How to read these personas
          </summary>
          <div className="px-4 pb-4 pt-1">
            <div className="grid grid-cols-[110px_1fr_1fr] gap-px bg-slate-200 rounded-md overflow-hidden text-xs">
              <div className="bg-white p-2"></div>
              <div className="bg-white p-2 uppercase tracking-wide text-slate-500 text-center">Descriptive</div>
              <div className="bg-white p-2 uppercase tracking-wide text-slate-500 text-center">Dialogue</div>

              <div className="bg-white p-2 uppercase tracking-wide text-slate-500 flex items-center">Customer-side</div>
              <div className="p-2 flex items-center gap-2" style={{ backgroundColor: CARD_TYPES.profile.bg }}>
                <span aria-hidden="true">{CARD_TYPES.profile.icon}</span>
                <span style={{ color: CARD_TYPES.profile.accent }} className="font-semibold">Practice Profile</span>
              </div>
              <div className="p-2 flex items-center gap-2" style={{ backgroundColor: CARD_TYPES.pain.bg }}>
                <span aria-hidden="true">{CARD_TYPES.pain.icon}</span>
                <span style={{ color: CARD_TYPES.pain.accent }} className="font-semibold">Key Pain Points</span>
              </div>

              <div className="bg-white p-2 uppercase tracking-wide text-slate-500 flex items-center">Nitra-side</div>
              <div className="p-2 flex items-center gap-2" style={{ backgroundColor: CARD_TYPES.positioning.bg }}>
                <span aria-hidden="true">{CARD_TYPES.positioning.icon}</span>
                <span style={{ color: CARD_TYPES.positioning.accent }} className="font-semibold">Product Positioning</span>
              </div>
              <div className="p-2 flex items-center gap-2" style={{ backgroundColor: CARD_TYPES.objection.bg }}>
                <span aria-hidden="true">{CARD_TYPES.objection.icon}</span>
                <span style={{ color: CARD_TYPES.objection.accent }} className="font-semibold">Objection Handling</span>
              </div>
            </div>
          </div>
        </details>

        {/* Persona Selector */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {PERSONAS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className="px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
              style={
                active === i
                  ? { backgroundColor: NAVY, color: '#ffffff', border: `1.5px solid ${NAVY}` }
                  : {
                      backgroundColor: '#ffffff',
                      color: NAVY,
                      border: `1.5px solid ${NAVY}`,
                    }
              }
              onMouseEnter={e => {
                if (active !== i) e.currentTarget.style.backgroundColor = '#e8f0fb'
              }}
              onMouseLeave={e => {
                if (active !== i) e.currentTarget.style.backgroundColor = '#ffffff'
              }}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Persona Content — 2×2 grid with row labels */}
        <div className="mb-14">

          {/* Row 1 label */}
          <div className="mb-3">
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="uppercase font-medium text-slate-700" style={{ fontSize: '16px', letterSpacing: '0.04em' }}>
                <span aria-hidden="true" className="mr-1.5">👥</span>THE CUSTOMER
              </span>
              <span className="italic text-slate-500" style={{ fontSize: '14px' }}>
                Who they are · What hurts
              </span>
            </div>
            <div className="mt-2 border-t border-slate-200" />
          </div>

          {/* Row 1: Profile + Pain */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <PersonaCard type="profile">
              <p>{persona.profile}</p>
            </PersonaCard>

            <PersonaCard type="pain">
              <ul className="list-none p-0 m-0">
                {persona.painPoints.map((pt, i) => (
                  <li
                    key={i}
                    className="flex gap-3"
                    style={{ marginBottom: i === persona.painPoints.length - 1 ? 0 : '12px' }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        color: CARD_TYPES.pain.accent,
                        fontSize: '0.7rem',
                        lineHeight: '1.6',
                        marginTop: '2px',
                      }}
                    >●</span>
                    <span style={{ flex: 1 }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </PersonaCard>
          </div>

          {/* Row 2 label */}
          <div className="mb-3">
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="uppercase font-medium text-slate-700" style={{ fontSize: '16px', letterSpacing: '0.04em' }}>
                <span aria-hidden="true" className="mr-1.5">🏢</span>NITRA'S RESPONSE
              </span>
              <span className="italic text-slate-500" style={{ fontSize: '14px' }}>
                What we offer · How we handle pushback
              </span>
            </div>
            <div className="mt-2 border-t border-slate-200" />
          </div>

          {/* Row 2: Positioning + Objection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PersonaCard type="positioning">
              <ul className="list-none p-0 m-0 space-y-4">
                {persona.positioning.map((item, i) => (
                  <li key={i}>
                    <span
                      className="inline-block rounded-full text-white font-medium mb-1.5"
                      style={{
                        backgroundColor: CARD_TYPES.positioning.accent,
                        fontSize: '14px',
                        padding: '4px 12px',
                      }}
                    >
                      {item.product}
                    </span>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
            </PersonaCard>

            <PersonaCard type="objection">
              <ul className="list-none p-0 m-0 space-y-5">
                {persona.objections.map((item, i) => (
                  <li key={i}>
                    <p className="italic text-slate-500 mb-1.5">{item.objection}</p>
                    <p>{item.response}</p>
                  </li>
                ))}
              </ul>
            </PersonaCard>
          </div>

        </div>

        {/* Competitive Landscape */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold mb-2" style={{ color: NAVY }}>
            Competitive Landscape
          </h2>
          <p className="text-sm text-slate-500 mb-5 leading-relaxed">
            Nitra's positioning is unique because it bundles financial tools, procurement, and
            practice operations into a single healthcare-specific platform. Each competitor type
            below is strong in one or two dimensions but does not cover the full stack.
          </p>

          <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: NAVY }}>
                  <th className="text-left px-4 py-3 text-white font-semibold w-48">Dimension</th>
                  <th className="text-left px-4 py-3 text-white font-semibold">Nitra</th>
                  <th className="text-left px-4 py-3 text-white font-semibold">
                    Horizontal Fintech<br />
                    <span className="font-normal text-blue-200 text-xs">(Brex, Ramp)</span>
                  </th>
                  <th className="text-left px-4 py-3 text-white font-semibold">
                    AP Automation<br />
                    <span className="font-normal text-blue-200 text-xs">(Bill.com)</span>
                  </th>
                  <th className="text-left px-4 py-3 text-white font-semibold">
                    Legacy GPOs<br />
                    <span className="font-normal text-blue-200 text-xs">(Vizient, Premier)</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPETITIVE.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-medium text-slate-800 border-r border-slate-100">
                      {row.dimension}
                    </td>
                    <td className="px-4 py-3" style={{ backgroundColor: '#dbeafe' }}>
                      <YesNo value={row.nitra} />
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      <YesNo value={row.fintech} />
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      <YesNo value={row.ap} />
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      <YesNo value={row.gpo} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Sales Enablement — Pitch Builder */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold mb-2" style={{ color: NAVY }}>
            Sales Enablement — Pitch Builder
          </h2>
          <p className="text-sm text-slate-500 mb-5 leading-relaxed">
            Select a scenario to see how outreach messaging adapts for the selected practice
            segment. Each message reflects the persona-specific pain points and product positioning
            above.
          </p>

          {/* Scenario selector — smaller pills, distinct from persona tabs */}
          <div className="flex gap-2 mb-5 flex-wrap">
            {SCENARIOS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setScenarioIdx(i)}
                className="px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer"
                style={
                  scenarioIdx === i
                    ? { backgroundColor: '#dbeafe', color: NAVY, border: `1px solid ${NAVY}` }
                    : {
                        backgroundColor: '#ffffff',
                        color: '#64748b',
                        border: '1px solid #cbd5e1',
                      }
                }
                onMouseEnter={e => {
                  if (scenarioIdx !== i) e.currentTarget.style.backgroundColor = '#f1f5f9'
                }}
                onMouseLeave={e => {
                  if (scenarioIdx !== i) e.currentTarget.style.backgroundColor = '#ffffff'
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Message preview card */}
          <div
            className="bg-slate-50 rounded-md p-6 shadow-sm border border-slate-200"
            style={{ borderLeft: `4px solid ${NAVY}` }}
          >
            {scenario.kind === 'email' ? (
              <>
                <p className="text-sm font-semibold text-slate-900 mb-4 pb-3 border-b border-slate-200">
                  <span className="text-slate-500 font-normal mr-2">Subject:</span>
                  {pitch.subject}
                </p>
                <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                  {pitch.body}
                </div>
              </>
            ) : (
              <blockquote className="text-sm text-slate-700 leading-relaxed italic">
                <span className="text-slate-400 mr-1">"</span>
                {pitch.body}
                <span className="text-slate-400 ml-1">"</span>
              </blockquote>
            )}

            <p className="text-xs text-slate-400 mt-5 pt-3 border-t border-slate-200">
              Persona: {persona.label} &nbsp;|&nbsp; Scenario: {scenario.label}
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-600 mb-1">Built by Sam Lee — April 2026</p>
          <p className="text-sm text-slate-600 mb-4">
            Native Japanese speaker with healthcare sales and marketing experience across Japan
            (J&J, Medical Geek). Available to support APAC market expansion.
          </p>
          <p className="text-xs text-slate-400 leading-relaxed">
            Portfolio content based on publicly available information and industry research.
            Assumptions are noted where applicable.
          </p>
        </footer>

      </div>
    </div>
  )
}
