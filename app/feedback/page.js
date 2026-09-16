import Link from 'next/link';
import FormWrapper from '@/components/FormWrapper';

export const metadata = {
  title: 'Feedback Mechanism | RINNGOS',
  description: 'Submit feedback, suggestions, complaints or community reports to RINNGOS Secretariat.'
};

export default function FeedbackPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> / Feedback
          </div>
          <span className="eyebrow" style={{ color: '#168a44' }}>
            Accountability Channel
          </span>
          <h1>Community & Member Feedback Mechanism</h1>
          <p>
            We value your input, suggestions, grievances and questions to help improve RINNGOS operations and civil-society representation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FormWrapper name="feedback-submission">
            <div className="form-grid">
              <div className="field">
                <label htmlFor="fbName">Name (Optional)</label>
                <input id="fbName" name="name" placeholder="Your Name" />
              </div>
              <div className="field">
                <label htmlFor="fbEmail">Email / Phone (Optional)</label>
                <input id="fbEmail" name="contact" placeholder="Contact Details" />
              </div>
              <div className="field full">
                <label htmlFor="fbCategory">Feedback Category *</label>
                <select id="fbCategory" name="category" required>
                  <option value="General Feedback">General Feedback</option>
                  <option value="Programme Suggestion">Programme Suggestion</option>
                  <option value="Membership Enquiry">Membership Enquiry</option>
                  <option value="Safeguarding / Grievance">Safeguarding / Grievance</option>
                  <option value="Website Issue">Website Issue</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="fbMessage">Feedback Details *</label>
                <textarea id="fbMessage" name="message" required placeholder="Describe your feedback, comment or inquiry..." />
              </div>
            </div>
            <div style={{ marginTop: '20px' }}>
              <button type="submit" className="btn btn-green">Submit Feedback →</button>
            </div>
          </FormWrapper>
        </div>
      </section>
    </main>
  );
}
