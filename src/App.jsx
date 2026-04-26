import { useState } from 'react'
import { PERSONAS, COMPETITIVE } from './data.js'

const NAVY = '#1e3a5f'

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
  const persona = PERSONAS[active]

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

        {/* Persona Content — 2×2 grid */}
        <div className="grid grid-cols-2 gap-5 mb-14">

          {/* Panel A: Practice Profile */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: NAVY }}>
              Practice Profile
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">{persona.profile}</p>
          </div>

          {/* Panel B: Key Pain Points */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: NAVY }}>
              Key Pain Points
            </h2>
            <ul className="space-y-0 divide-y divide-slate-100">
              {persona.painPoints.map((pt, i) => (
                <li key={i} className="py-2.5 text-sm text-slate-700 leading-relaxed first:pt-0 last:pb-0">
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          {/* Panel C: Nitra Product Positioning */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: NAVY }}>
              Nitra Product Positioning — Lead With
            </h2>
            <ul className="space-y-4">
              {persona.positioning.map((item, i) => (
                <li key={i} className="text-sm text-slate-700 leading-relaxed">
                  <span className="font-semibold text-slate-900">{item.product}: </span>
                  {item.description}
                </li>
              ))}
            </ul>
          </div>

          {/* Panel D: Objection Handling */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: NAVY }}>
              Objection Handling
            </h2>
            <ul className="space-y-5">
              {persona.objections.map((item, i) => (
                <li key={i}>
                  <p className="text-sm italic text-slate-500 mb-1.5">{item.objection}</p>
                  <p className="text-sm text-slate-700 leading-relaxed">{item.response}</p>
                </li>
              ))}
            </ul>
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
