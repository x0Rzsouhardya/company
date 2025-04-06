import React from 'react'
import "../style/OurApp.css"

const OurApp = () => {
  return (
    <>
    <section className="ourAppIntro">
  <h1>Our App: Smart Employee Management</h1>
  <p>
    The F Standard Employee Management System is a modern digital solution designed to simplify workforce operations. From attendance to maintenance, this app is your all-in-one operations companion.
  </p>
</section>

<section className="appPurposeAndBenefits">
  <div className="contentWrapper">
    <div className="purposeBox">
      <h2>Purpose</h2>
      <p>
        The purpose of this app is to develop an Employee Management System that allows administrators to create and manage employees, track their work hours through QR-based login/logout, and facilitate maintenance and repair management.
      </p>
    </div>
    <div className="benefitsBox">
      <h2>Benefits</h2>
      <ul>
        <li>✅ Real-time attendance tracking using QR codes</li>
        <li>✅ Easy employee onboarding and offboarding</li>
        <li>✅ Transparent and auditable logs</li>
        <li>✅ Reduced manual errors in reporting</li>
        <li>✅ Instant alerts for repairs or absenteeism</li>
        <li>✅ Streamlined workflow between admins and ground staff</li>
      </ul>
    </div>
  </div>
</section>


<section className="ourAppFeatures">
  <h2>Key Features</h2>
  <div className="featureGrid">
    <div className="featureBox">
      <h3>👨‍💼 Employee Management</h3>
      <p>Add, edit, and organize employees with unique IDs and branch details.</p>
    </div>
    <div className="featureBox">
      <h3>📲 QR-Based Attendance</h3>
      <p>Track login and logout times using a single QR scan system.</p>
    </div>
    <div className="featureBox">
      <h3>📁 Auto Excel Reports</h3>
      <p>Export daily/monthly attendance data instantly without downloading any software.</p>
    </div>
    <div className="featureBox">
      <h3>🔧 Maintenance & Repair</h3>
      <p>Raise, assign, and resolve maintenance issues with ease.</p>
    </div>
    <div className="featureBox">
      <h3>🔄 Reliever System</h3>
      <p>Assign relievers automatically if someone is absent, ensuring zero workflow disruption.</p>
    </div>
    <div className="featureBox">
      <h3>🛡️ Admin Panel</h3>
      <p>Role-based login, dashboard view, notifications, and full control over all activities.</p>
    </div>
  </div>
</section>

<section className="howItWorks">
  <h2>How It Works</h2>
  <ol>
    <li><strong>Step 1:</strong> Admin logs in to the dashboard</li>
    <li><strong>Step 2:</strong> Employees scan the QR code to log in/out</li>
    <li><strong>Step 3:</strong> Attendance and work hours are logged automatically</li>
    <li><strong>Step 4:</strong> Admin can view records, assign tasks, and generate reports</li>
  </ol>
</section>


<section className="callToAction">
  <h2>Want to See It in Action?</h2>
  <p>Click below to schedule a demo or get access to the dashboard preview.</p>
  <button>Request Demo</button>
</section>

    </>
  )
}

export default OurApp