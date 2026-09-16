export const programs = [
  ['1', 'NGO Capacity, Governance & Leadership', 'Strengthening boards, executives, staff systems, safeguarding, financial accountability, programme quality and organisational sustainability.'],
  ['2', 'Self-Regulation & NGO Harmonisation', 'Promoting shared standards, ethical practice, peer accountability, credible membership and coordinated civil-society action.'],
  ['3', 'Extractive Justice & Community Rights', 'Supporting host communities to understand rights, engage extractive actors, strengthen evidence and advocate for fair social and environmental outcomes.'],
  ['4', 'Policy Advocacy, Governance & Accountability', 'Turning community and NGO evidence into constructive engagement with government, MDAs and other decision-makers.'],
  ['5', 'Community Development Planning', 'Supporting inclusive, evidence-led Community Development Plans and community priority setting across Rivers State.'],
  ['6', 'Environmental Sustainability & Climate Action', 'Advancing climate resilience, environmental justice, ecosystem protection and locally owned sustainability solutions.'],
  ['7', 'Social Inclusion, Gender & Youth Development', 'Promoting participation, protection and opportunity for women, young people, persons with disabilities and marginalised groups.'],
  ['8', 'Knowledge, Research & Rimpact', 'Generating reports, policy briefs, newsletters, learning products and data to strengthen civil-society practice and public dialogue.'],
  ['9', 'Partnerships, Resource Mobilisation & Innovation', 'Building strategic partnerships, funding readiness, innovation pathways and collaborative initiatives for member organisations.'],
  ['10', 'Civil Society Digital Transformation & Support Services', 'Providing digital tools, RINNGOS Clinic AI, learning systems, partnership support and responsible technology for NGO effectiveness.']
];

export const lgas = [
  'Abua/Odual', 'Ahoada East', 'Ahoada West', 'Akuku-Toru', 'Andoni', 'Asari-Toru',
  'Bonny', 'Degema', 'Eleme', 'Emohua', 'Etche', 'Gokana', 'Ikwerre', 'Khana',
  'Obio/Akpor', 'Ogba/Egbema/Ndoni', 'Ogu/Bolo', 'Okrika', 'Omuma', 'Opobo/Nkoro',
  'Oyigbo', 'Port Harcourt', 'Tai'
];

export const clinicKB = [
  {
    k: ['register', 'registration', 'ngo registration', 'cac'],
    a: 'For organisational registration, start with a clear legal identity, governing instrument, trustees/directors as applicable, official address, documented leadership and current compliance records. RINNGOS can help members organise a compliance checklist and referral pathway; use the Membership page to register or request support.'
  },
  {
    k: ['fund', 'funding', 'grant', 'donor', 'proposal'],
    a: 'Funding readiness usually requires a current organisational profile, governance documents, recent activity evidence, financial controls, safeguarding policies, monitoring data and a credible project concept with a realistic budget. Use Sweep Academy and the Resource Library for proposal-development and funding-readiness support.'
  },
  {
    k: ['policy', 'policies', 'regulation', 'regulatory'],
    a: 'RINNGOS groups regulatory guidance into governance and registration, financial accountability, safeguarding, data protection, anti-fraud, programme quality, environmental/social safeguards and government engagement. Visit Regulatory Policies for the practical checklist and links to official sources.'
  },
  {
    k: ['harmonisation', 'self regulation', 'self-regulation', 'code of conduct'],
    a: 'Self-regulation means NGOs commit to standards beyond minimum legal compliance: integrity, transparency, accountability, safeguarding, conflict-of-interest management, responsible partnerships and credible public reporting. RINNGOS promotes peer learning, readiness checks and progressive adoption of harmonised standards.'
  },
  {
    k: ['community development', 'cdp', 'community plan', 'lga'],
    a: 'The proposed Community Development Plan process is participatory: community profile and baseline; stakeholder mapping; needs and assets assessment; prioritisation; project design; financing/partnership plan; implementation responsibilities; indicators; grievance/feedback channels; annual review. The website lists all 23 Rivers State LGAs.'
  },
  {
    k: ['extractive', 'oil', 'gas', 'host community', 'petroleum'],
    a: 'For extractive-sector issues, document the concern, affected community, location, evidence, responsible actor, existing engagement and desired remedy. RINNGOS can support rights awareness, referral, dialogue preparation, evidence-based advocacy and learning across host communities. Urgent legal or safety matters should be referred to qualified professionals and relevant authorities.'
  },
  {
    k: ['safeguard', 'abuse', 'harassment', 'protection'],
    a: 'Safeguarding concerns should be handled confidentially, survivor-centred and according to the organisation’s safeguarding procedure. Preserve relevant records, avoid unnecessary disclosure, use designated reporting channels and refer immediate safety or criminal concerns to competent authorities. RINNGOS can support policy strengthening, but the Clinic does not replace professional legal or protection services.'
  },
  {
    k: ['training', 'course', 'academy', 'sweep'],
    a: 'Sweep Academy is the capacity-building platform linked from this site. It covers NGO governance, proposal writing, M&E, safeguarding, resource mobilisation, digital tools, leadership, climate/sustainability, community engagement and policy advocacy. You can register interest directly from the Sweep Academy page.'
  },
  {
    k: ['webinar', 'event', 'zoom'],
    a: 'The Annual Webinar Schedule page contains the RINNGOS learning calendar and registration buttons. After registration, webinar access details can be issued by the Secretariat. Webinar records and post-event resources can also be published in the Resource Library.'
  },
  {
    k: ['membership', 'join', 'member'],
    a: 'Membership connects organisations to peer learning, visibility, thematic collaboration, capacity building, policy engagement, resource opportunities, referrals and statewide mobilisation. Use the Membership Registration Portal to submit your organisation’s details and supporting information.'
  }
];

export function getClinicReply(q) {
  const s = q.toLowerCase();
  let best = null;
  let score = 0;
  clinicKB.forEach(x => {
    let n = x.k.filter(k => s.includes(k)).length;
    if (n > score) {
      score = n;
      best = x;
    }
  });
  return best
    ? best.a
    : 'I can help with NGO registration, governance, funding readiness, regulatory policies, self-regulation, safeguarding, Community Development Plans, extractive justice, training, webinars and RINNGOS membership. Please describe the issue in one or two sentences and include the type of organisation or community involved.';
}
