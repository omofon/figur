import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("Overview");

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
      {/* Sidebar - Desktop Only */}
      <aside className="hidden md:flex w-64 bg-primary-navy flex-col text-white p-6 gap-8">
        <h2 className="text-white text-2xl font-bold tracking-tight">Figur.</h2>
        <nav className="flex flex-col gap-2">
          {["Overview", "Dollar Card", "Airtime", "Bills", "Settings"].map(
            (item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
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
          onClick={logout}
          className="mt-auto border border-gray-600 px-4 py-2 rounded-lg hover:bg-red-500/10 hover:border-red-500 transition-all"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-10 lg:px-20 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-2xl font-bold">
              Welcome, {user?.name || user?.email}!
            </h1>
            <p className="text-sm">
              Here's what's happening with your money today.
            </p>
          </div>
          <div className="h-10 w-10 bg-mint rounded-full flex items-center justify-center border border-teal/20">
            <span className="text-teal font-bold">
              {user?.name?.[0] || "A"}
            </span>
          </div>
        </header>

        {/* Hero Card - Matches App UI */}
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
};

export default Dashboard;
