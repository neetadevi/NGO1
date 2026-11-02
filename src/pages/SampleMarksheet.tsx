import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './PagesCommon.css'

export default function SampleMarksheet() {
  return (
    <div className="page-wrapper">
      <Navbar />

      <section className="inner-hero-banner">
        <div className="inner-hero-content">
          <span className="inner-hero-badge">Academic Transcript</span>
          <h1 className="inner-hero-title">Sample Mark Sheet</h1>
          <p className="inner-hero-subtitle">
            Comprehensive statement of marks detailing theory, practical, project work, and grading breakdown.
          </p>
          <div className="breadcrumb-nav">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Franchise</span>
            <span>/</span>
            <span>Sample Mark sheet</span>
          </div>
        </div>
      </section>

      <div className="page-content-container">
        <div className="content-card">
          <h2>Official Statement of Marks Format</h2>
          <p>
            Every enrolled student receiving an authorized certificate also receives an official mark sheet with subject-wise evaluation, grading rubric, and tamper-resistant serial tracking.
          </p>

          <div style={{ maxWidth: '850px', margin: '30px auto', background: '#ffffff', border: '3px solid #3b0764', borderRadius: '12px', padding: '28px', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)' }}>
            <div style={{ textAlign: 'center', borderBottom: '2px solid #e2e8f0', paddingBottom: '16px' }}>
              <h3 style={{ margin: '0 0 4px', color: '#4b087d', fontSize: '22px' }}>
                SHIKASHVIK WELFARE FOUNDATION
              </h3>
              <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>
                (Registered under Section 8 of the Companies Act, 2013, Ministry of Corporate Affairs, Govt. of India)
              </p>
              <span style={{ display: 'inline-block', marginTop: '8px', background: '#f5f3ff', color: '#4b087d', border: '1px solid #c4b5fd', fontSize: '11px', fontWeight: 800, padding: '3px 12px', borderRadius: '20px' }}>
                STATEMENT OF MARKS / GRADE SHEET
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', margin: '20px 0', fontSize: '13px' }}>
              <div><strong>Roll Number:</strong> SWF-2026-1082</div>
              <div><strong>Enrollment No:</strong> ENR-2026-9812</div>
              <div><strong>Student Name:</strong> ANITA VERMA</div>
              <div><strong>Father's Name:</strong> MR. SUNIL VERMA</div>
              <div><strong>Course Name:</strong> DIPLOMA IN COMPUTER APPLICATIONS (DCA)</div>
              <div><strong>Duration:</strong> 6 MONTHS</div>
              <div><strong>Center Name:</strong> SHIKASHVIK STUDY CENTER (ETAH)</div>
              <div><strong>Center Code:</strong> SWF-C-101</div>
            </div>

            <table className="result-table">
              <thead>
                <tr>
                  <th>Paper Code & Title</th>
                  <th>Max</th>
                  <th>Theory</th>
                  <th>Practical</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>DCA-101: Computer Fundamentals & Windows OS</td>
                  <td>100</td>
                  <td>76</td>
                  <td>18</td>
                  <td><strong>94</strong></td>
                </tr>
                <tr>
                  <td>DCA-102: Office Automation (Word, Excel, PowerPoint)</td>
                  <td>100</td>
                  <td>74</td>
                  <td>19</td>
                  <td><strong>93</strong></td>
                </tr>
                <tr>
                  <td>DCA-103: Financial Accounting with Tally</td>
                  <td>100</td>
                  <td>70</td>
                  <td>18</td>
                  <td><strong>88</strong></td>
                </tr>
                <tr>
                  <td>DCA-104: Internet, E-Commerce & Cyber Safety</td>
                  <td>100</td>
                  <td>78</td>
                  <td>18</td>
                  <td><strong>96</strong></td>
                </tr>
              </tbody>
              <tfoot>
                <tr style={{ background: '#f8fafc', fontWeight: 800 }}>
                  <td>TOTAL MARKS:</td>
                  <td>400</td>
                  <td colSpan={2} style={{ textAlign: 'right' }}>AGGREGATE OBTAINED:</td>
                  <td style={{ color: '#059669', fontSize: '15px' }}>371 / 400 (92.75%)</td>
                </tr>
              </tfoot>
            </table>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', padding: '12px 18px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '13px' }}>
              <div><strong>Final Division:</strong> FIRST DIVISION WITH DISTINCTION</div>
              <div><strong>Grade:</strong> <span style={{ color: '#059669', fontWeight: 800 }}>A+</span></div>
              <div><strong>Result:</strong> <span style={{ color: '#059669', fontWeight: 800 }}>PASSED</span></div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '36px', borderTop: '1px dashed #cbd5e1', paddingTop: '16px', fontSize: '12px', color: '#64748b' }}>
              <div>Checked By</div>
              <div>Security Serial: MS-2026-8812</div>
              <div>Controller of Examinations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
