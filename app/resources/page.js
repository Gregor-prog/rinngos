'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';

const allResources = [
  {
    title: 'RINNGOS NGO Governance & Self-Regulation Guide',
    cat: 'Governance',
    desc: 'Comprehensive framework for statutory compliance, trustee roles, board oversight, financial management and peer accountability.'
  },
  {
    title: 'Participatory Community Development Plan (CDP) Toolkit',
    cat: 'Community Development',
    desc: 'Step-by-step guide for local baseline mapping, stakeholder consultations, priority formulation and project monitoring in Rivers State LGAs.'
  },
  {
    title: 'Host Community Rights & Extractive Engagement Manual',
    cat: 'Extractive Justice',
    desc: 'Resource guide for host communities to understand rights under the PIA 2021, document environmental concerns and engage oil/gas operators.'
  },
  {
    title: 'NGO Safeguarding & Protection Policy Template',
    cat: 'Safeguarding',
    desc: 'Model safeguarding policy addressing child protection, PSEAH, reporting procedures, survivor care and risk assessment.'
  },
  {
    title: 'Civil Society Funding Readiness & Proposal Development Handbook',
    cat: 'Resource Mobilisation',
    desc: 'Practical manual covering project design, logical frameworks, budget formulation, donor mapping and reporting standards.'
  },
  {
    title: 'Climate Resilience & Local Sustainability Guide for Rivers State',
    cat: 'Environment',
    desc: 'Community-led climate adaptation, coastal erosion response, mangrove conservation and environmental justice strategies.'
  }
];

function ResourceList() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);

  const filtered = allResources.filter(
    (r) =>
      r.title.toLowerCase().includes(query.toLowerCase()) ||
      r.cat.toLowerCase().includes(query.toLowerCase()) ||
      r.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="search" style={{ maxWidth: '500px', marginBottom: '30px' }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter resources by topic or keyword..."
          style={{ width: '100%' }}
        />
      </div>

      <div className="resource-grid">
        {filtered.map((item, idx) => (
          <article key={idx} className="card resource">
            <span className="badge">{item.cat}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div className="meta">Format: Reference Document (PDF / Guide)</div>
          </article>
        ))}
        {filtered.length === 0 && (
          <p className="notice">No resources found matching &quot;{query}&quot;.</p>
        )}
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / Resource Library
          </div>
          <span className="eyebrow" style={{ color: '#168a44' }}>
            Knowledge Hub
          </span>
          <h1>Resource Library & Publication Center</h1>
          <p>
            Access official publications, policy briefs, training toolkits, templates and research documents produced by RINNGOS and partner organisations.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Suspense fallback={<div>Loading resources...</div>}>
            <ResourceList />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
