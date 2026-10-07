window.NEXUS_CONFIG = {
  name: 'NexusPeople',
  domain: 'people, payroll, attendance, approvals and administration',
  aiNote: 'Demo UI response · Connect your local model and people-data layer for live results.',
  suite: {
    NexusDistro: 'https://abraar05.github.io/NexusDistro/',
    NexusLogistics: 'https://abraar05.github.io/NexusLogistics/',
    NexusPortal: 'https://abraar05.github.io/NexusPortal/',
    NexusCRM: 'https://abraar05.github.io/NexusCRM/'
  },
  generated: {
    employees: { title: 'Employees', sub: 'Directory, org structure, contracts and employee 360 profiles.', cards: [
      { i: '◉', t: 'Directory', d: 'Search 284 people by team, role, location or skill.' },
      { i: '▤', t: 'Org chart', d: 'Live reporting lines across 6 departments.' },
      { i: '✉', t: 'Employee 360', d: 'Contracts, assets, compensation and documents in one view.' }],
      events: [{ t: 'Mahin Rahman joined Sales', s: 'Today · Dhaka' }, { t: 'Nina Kabir updated contract', s: 'Yesterday' }, { t: 'IT asset assigned to Rafi Ahmed', s: '2d ago' }] },
    attendance: { title: 'Attendance', sub: 'Live attendance, shifts, overtime and exceptions.', cards: [
      { i: '◷', t: 'Live attendance', d: '96.8% present today across all sites.' },
      { i: '▦', t: 'Shift board', d: 'Plan coverage by warehouse and team.' },
      { i: '!', t: 'Exceptions', d: 'Late arrivals, missed punches and overtime flags.' }],
      events: [{ t: 'Overtime above 14% in Operations', s: 'This week' }, { t: 'Friday absenteeism up 8% in one team', s: 'Trend watch' }, { t: 'New shift roster published', s: 'Yesterday' }] },
    leave: { title: 'Leave & shifts', sub: 'Balances, calendars, shift planning and coverage.', cards: [
      { i: '☂', t: 'Leave balances', d: 'Company-wide balances with accrual rules.' },
      { i: '▤', t: 'Team calendar', d: 'Who is off, by team and location.' },
      { i: '↻', t: 'Coverage planner', d: 'Avoid under-staffed shifts automatically.' }],
      events: [{ t: '2 leave requests awaiting review', s: 'Today' }, { t: 'Eid roster published', s: 'Last week' }, { t: 'Coverage gap flagged · Dhaka night shift', s: 'Action needed' }] },
    payroll: { title: 'Payroll', sub: 'Runs, allowances, deductions and approval trails.', cards: [
      { i: '৳', t: 'Payroll runs', d: '৳8.42M this month · closes in 3 days.' },
      { i: '＋', t: 'Allowances', d: 'Transport, phone and medical allowances per grade.' },
      { i: '−', t: 'Deductions & loans', d: 'Track loans, advances and tax adjustments.' }],
      events: [{ t: 'Payroll draft approved by Finance', s: 'Today' }, { t: 'Overtime variance flagged', s: 'Yesterday' }, { t: 'New joinee added to payroll', s: '2d ago' }] },
    performance: { title: 'Performance', sub: 'Goals, reviews, feedback and growth plans.', cards: [
      { i: '↗', t: 'Goal tracking', d: 'OKRs rolled from company to individual.' },
      { i: '↺', t: 'Review cycles', d: 'Half-yearly reviews with evidence links.' },
      { i: '✦', t: 'Engagement signals', d: 'AI watches for disengagement early.' }],
      events: [{ t: '4 high performers showing declining engagement', s: 'AI insight' }, { t: 'Review cycle H2 opened', s: 'This week' }, { t: 'Goal completion at 68%', s: 'Company average' }] },
    recruitment: { title: 'Recruitment', sub: 'Pipeline, interviews, offers and onboarding.', cards: [
      { i: '◌', t: 'Open roles', d: '12 roles across Sales, Ops and Warehouse.' },
      { i: '✉', t: 'Interviews', d: 'This week’s schedule and feedback.' },
      { i: '＋', t: 'Offers', d: 'Track offers, acceptance and start dates.' }],
      events: [{ t: 'Offer accepted · Warehouse Supervisor', s: 'Today' }, { t: '18 interviews this week', s: 'Updated' }, { t: 'Job post for Area Sales closed', s: 'Yesterday' }] },
    approvals: { title: 'Approvals', sub: 'Every request routed, audited and expedited.', cards: [
      { i: '✓', t: 'Inbox', d: '17 pending · 6 need attention.' },
      { i: '⏱', t: 'Ageing', d: 'Average decision time 5h, down from 9h.' },
      { i: '⌘', t: 'Rules', d: 'Approval chains by amount, team and type.' }],
      events: [{ t: 'Leave request · Mahin Rahman', s: '2h old' }, { t: 'Expense ৳18,400 · Nusrat Jahan', s: '4h old' }, { t: 'Purchase approval SLA breached', s: 'Escalated' }] },
    settings: { title: 'Settings', sub: 'Company profile, roles, permissions and integrations.', cards: [
      { i: '⚙', t: 'Company profile', d: 'Legal entity, locations and tax details.' },
      { i: '⚿', t: 'Roles & permissions', d: 'Least-privilege access across modules.' },
      { i: '⇄', t: 'Integrations', d: 'Biometric devices, accounting and payroll rails.' }],
      events: [{ t: 'New admin added', s: 'Yesterday' }, { t: 'Biometric gateway synced', s: 'Today' }, { t: 'Audit log exported', s: '2d ago' }] }
  }
};
