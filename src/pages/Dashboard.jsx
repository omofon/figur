import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Overview");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to sign out. Please try again.");
    }
  }

  function toggleSidebar() {
    setIsSidebarOpen((prev) => !prev);
  }

  const stats = [
    {
      label: "Total Income",
      amount: "$78,000",
      change: "+12%",
      color: "text-teal",
    },
    {
      label: "Total Expense",
      amount: "$43,000",
      change: "-10%",
      color: "text-red-500",
    },
    {
      label: "Total Savings",
      amount: "$56,000",
      change: "+24%",
      color: "text-primary-blue",
    },
  ];

  const savings = [
    { title: "Emergency Fund", current: 5000, target: 10000, progress: 50 },
    { title: "Vacation Fund", current: 3000, target: 5000, progress: 60 },
    { title: "Home Down Payment", current: 7250, target: 20000, progress: 36 },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 font-inter">
      {/* Sidebar - Handles both desktop and mobile */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 max-h-screen bg-primary-navy flex flex-col gap-5 justify-between text-white p-6 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 mb-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.789.422a4.001 4.001 0 0 0-3.578 0l-8 4A4.0011 4.0011 0 0 0 0 8v8c0 1.515.856 2.9 2.211 3.578l8 4a4.001 4.001 0 0 0 3.578 0l8-4A4.0011 4.0011 0 0 0 24 16V8c0-1.515-.856-2.9-2.211-3.578l-8-4ZM8 8c0-2.209 1.791-4 4-4s4 1.791 4 4v8c0 2.209-1.791 4-4 4s-4-1.791-4-4V8Zm6 0c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2Z" />
            </svg>
            <span className="text-2xl font-bold text-white">figur</span>
          </Link>
          {/* Close button for mobile */}
          <button onClick={toggleSidebar} className="md:hidden text-white">
            ✕
          </button>
        </div>
        <nav className="flex flex-col gap-2">
          {["Overview", "Dollar Card", "Airtime", "Bills", "Settings"].map(
            (item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveTab(item);
                  setIsSidebarOpen(false);
                }}
                className={`text-left px-4 py-3 rounded-lg transition-all ${
                  activeTab === item
                    ? "bg-primary-blue text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {item}
              </button>
            ),
          )}
        </nav>
        <button
          onClick={handleLogout}
          className="mt-auto border border-gray-600 px-4 py-2 rounded-lg hover:bg-red-500/10 hover:border-red-500 transition-all"
        >
          Logout
        </button>
      </aside>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-10 lg:px-20 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-4">
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 rounded-lg bg-white shadow-sm border border-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div>
              <h1 className="text-2xl font-bold">
                {currentUser.displayName || currentUser.email}
              </h1>
              <p className="text-sm">
                Here's what's happening with your money today.
              </p>
            </div>
          </div>
          <button className="h-10 w-10 bg-mint rounded-full flex items-center justify-center border border-teal/20 text-teal hover:bg-green-100 cursor-pointer">
            <span className="text-teal font-bold">
              {currentUser?.name?.[0] || "A"}
            </span>
          </button>
        </header>

        {/* Hero Card */}
        <div className="bg-primary-navy rounded-3xl p-8 text-white mb-8 shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-gray-400 text-sm mb-1">Total Balance</p>
            <h2 className="text-white text-4xl font-bold mb-8">$562,000</h2>
            <div className="flex gap-4">
              <button className="bg-primary-blue hover:bg-blue-hover px-6 py-2 rounded-full text-sm font-medium transition-all">
                Top Up
              </button>
              <button className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-full text-sm font-medium transition-all">
                Transfer
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 p-8">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white/20 rounded-full" />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
            >
              <p className="text-sm mb-2">{stat.label}</p>
              <div className="flex items-end justify-between">
                <h3 className="text-xl font-bold">{stat.amount}</h3>
                <span className={`text-xs font-bold ${stat.color}`}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section - Savings & Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Saving Plans */}
          <section className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold mb-6">Saving Plans</h3>
            <div className="flex flex-col gap-6">
              {savings.map((plan, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold text-primary-navy">
                      {plan.title}
                    </span>
                    <span className="text-gray-400">
                      Target: ${plan.target.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-teal h-full transition-all duration-500"
                      style={{ width: `${plan.progress}%` }}
                    />
                  </div>
                  <p className="text-[10px] mt-1 text-teal font-bold">
                    {plan.progress}% reached
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Actions / Activity */}
          <section className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {[
                {
                  name: "Weekly Groceries",
                  date: "Mar 04",
                  amount: "-$204.07",
                  type: "Expense",
                },
                {
                  name: "Electricity Bill",
                  date: "Mar 01",
                  amount: "-$295.81",
                  type: "Bill",
                },
                {
                  name: "Salary Deposit",
                  date: "Feb 28",
                  amount: "+$4,500.00",
                  type: "Income",
                },
              ].map((tx, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
                >
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-primary-navy">
                      {tx.name}
                    </span>
                    <span className="text-xs text-gray-400">
                      {tx.date} • {tx.type}
                    </span>
                  </div>
                  <span
                    className={`text-sm font-bold ${tx.amount.startsWith("+") ? "text-teal" : "text-primary-navy"}`}
                  >
                    {tx.amount}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
