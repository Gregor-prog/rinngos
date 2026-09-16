'use client';

import { useState, useRef, useEffect } from 'react';
import { getClinicReply } from '@/lib/data';

export default function ClinicAI() {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Welcome to RINNGOS Clinic AI. Tell me the NGO, community or sub-national civil-society issue you need help with.'
    }
  ]);
  const [input, setInput] = useState('');
  const chatLogRef = useRef(null);

  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (textToSend) => {
    const q = (textToSend || input).trim();
    if (!q) return;

    const newMsgs = [...messages, { sender: 'user', text: q }];
    setMessages(newMsgs);
    setInput('');

    setTimeout(() => {
      const reply = getClinicReply(q);
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    }, 250);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSend();
  };

  const sampleQuestions = [
    { label: 'NGO registration', q: 'How can an NGO improve its governance and registration readiness?' },
    { label: 'Funding readiness', q: 'How do we become funding ready?' },
    { label: 'Self-regulation', q: 'What does self-regulation mean for NGOs?' },
    { label: 'Community plan', q: 'How do we start a community development plan?' },
    { label: 'Safeguarding', q: 'What should an NGO safeguarding system include?' },
    { label: 'Extractive justice', q: 'How can RINNGOS support extractive justice issues?' }
  ];

  return (
    <div className="clinic" style={{ marginTop: '24px' }}>
      <aside className="clinic-sidebar">
        <h3>Try a question</h3>
        <div className="pill-grid">
          {sampleQuestions.map((item, idx) => (
            <button
              key={idx}
              className="filter-btn"
              onClick={() => handleSend(item.q)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <hr style={{ border: 0, borderTop: '1px solid var(--line)', margin: '22px 0' }} />
        <p>
          <strong>Clinic topics:</strong> registration, governance, policy, funding, safeguarding, membership, webinars, training, community planning and extractive justice.
        </p>
      </aside>

      <div className="clinic-main">
        <div className="chat-log" id="chatLog" ref={chatLogRef}>
          {messages.map((m, idx) => (
            <div key={idx} className={`bubble ${m.sender}`}>
              {m.text}
            </div>
          ))}
        </div>
        <form className="chat-input" onSubmit={handleFormSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question about NGO operations, policy or support…"
            aria-label="Clinic question"
          />
          <button type="submit" className="btn btn-green">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
