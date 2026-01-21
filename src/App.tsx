import React, { useState } from 'react';
import './App.css';
import { 
  User, 
  Truck, 
  Phone, 
  ShieldCheck, 
  Plus, 
  Search, 
  Bell, 
  ChevronRight, 
  TrendingUp, 
  Clock, 
  AlertTriangle,
  LayoutDashboard,
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('All');

  const widgets = [
    { id: 1, title: 'Traffic', value: '2,716h', sub: 'Reviewed 25%', trend: 25, icon: <Truck className="w-6 h-6 text-blue-500" /> },
    { id: 2, title: 'Phone Usage', value: '2,716h', sub: 'Reviewed 75%', trend: 75, icon: <Phone className="w-6 h-6 text-purple-500" /> },
    { id: 3, title: 'PPE', value: '2,716h', sub: 'Reviewed 45%', trend: 45, icon: <ShieldCheck className="w-6 h-6 text-emerald-500" /> },
  ];

  const alerts = [
    { id: '7412399', type: 'Speed', severity: 'High', status: 'Pending', time: '2h ago', driver: 'Rebecca', location: 'Main Gate' },
    { id: '7412400', type: 'Traffic', severity: 'Medium', status: 'Reviewed', time: '4h ago', driver: 'John', location: 'Zone A' },
    { id: '7412401', type: 'Phone', severity: 'Low', status: 'Pending', time: '5h ago', driver: 'Sara', location: 'Warehouse' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <div className="w-72 bg-[#00539F] hidden lg:flex flex-col h-screen sticky top-0 text-white shadow-xl">
        <div className="p-8 border-b border-white/10">
          <h1 className="text-2xl font-black flex items-center gap-3 text-white">
            <div className="p-2 bg-white rounded-lg">
              <ShieldCheck className="text-[#00539F]" size={24} />
            </div>
            APM SAFETY
          </h1>
        </div>
        <nav className="flex-1 px-4 py-8 space-y-2">
          <a href="#" className="flex items-center gap-4 px-4 py-4 bg-white/10 text-white rounded-xl font-semibold shadow-inner transition-all hover:bg-white/20">
            <LayoutDashboard size={22} /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-4 px-4 py-4 text-blue-100/70 hover:bg-white/5 hover:text-white rounded-xl transition-all group">
            <Bell size={22} className="group-hover:scale-110 transition-transform" /> Alerts
          </a>
          <a href="#" className="flex items-center gap-4 px-4 py-4 text-blue-100/70 hover:bg-white/5 hover:text-white rounded-xl transition-all group">
            <Settings size={22} className="group-hover:rotate-45 transition-transform" /> Settings
          </a>
        </nav>
        <div className="p-6 mt-auto border-t border-white/10">
          <button className="flex items-center gap-4 px-4 py-4 w-full text-blue-100/70 hover:bg-red-500/10 hover:text-red-400 rounded-xl transition-all font-medium">
            <LogOut size={22} /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-slate-50">
        {/* Header */}
        <header className="h-24 bg-white border-b border-slate-200 px-10 flex items-center justify-between sticky top-0 z-10 shadow-sm">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-[#00539F] tracking-tight">Hi Rebecca, Welcome!</h2>
            <p className="text-sm font-medium text-slate-500 mt-1">Stay updated on trends and insights across all alert types</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search alerts..." 
                className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-500 w-64"
              />
            </div>
            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-full relative">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold border-2 border-white shadow-sm cursor-pointer">
              R
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <main className="p-8 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {widgets.map((widget) => (
              <div key={widget.id} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-5 mb-6">
                  <div className="p-4 bg-slate-50 rounded-2xl ring-1 ring-slate-100">
                    {widget.icon}
                  </div>
                  <div>
                    <h3 className="text-slate-400 font-bold text-xs uppercase tracking-widest">{widget.title}</h3>
                    <p className="text-3xl font-black text-slate-900 mt-1">{widget.value}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-400">{widget.sub}</span>
                    <span className="text-[#00AEEF]">{widget.trend}%</span>
                  </div>
                  <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                    <div 
                      className="h-full bg-gradient-to-r from-[#00AEEF] to-[#00539F] transition-all duration-1000 ease-out" 
                      style={{ width: `${widget.trend}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
            <button className="bg-white p-8 rounded-[2rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-3 text-slate-400 hover:border-[#00AEEF] hover:text-[#00AEEF] hover:bg-blue-50/30 transition-all duration-300 group">
              <div className="p-3 bg-slate-50 rounded-full group-hover:scale-110 transition-transform ring-1 ring-slate-100">
                <Plus size={28} />
              </div>
              <span className="font-bold uppercase tracking-wider text-xs">Add New Alert</span>
            </button>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Incident Trend */}
            <div className="lg:col-span-2 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-2xl font-black text-[#00539F]">Incident Trend</h3>
                  <p className="text-sm font-medium text-slate-400 mt-1">Real-time data visualization across terminals</p>
                </div>
                <div className="flex gap-2 bg-slate-100 p-1.5 rounded-2xl">
                  {['Day', 'Week', 'Month'].map(t => (
                    <button 
                      key={t}
                      onClick={() => setActiveTab(t)}
                      className={`px-6 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                        activeTab === t ? 'bg-white text-[#00539F] shadow-lg' : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Fake Chart Illustration */}
              <div className="h-72 relative flex items-end justify-between px-6 pb-4">
                {[40, 65, 30, 85, 45, 90, 55, 75, 60].map((h, i) => (
                  <div key={i} className="flex flex-col items-center gap-4 w-full h-full justify-end">
                    <div className="w-2/3 max-w-[24px] bg-slate-50 rounded-t-xl relative group h-full overflow-hidden ring-1 ring-slate-100">
                      <div 
                        className="w-full bg-gradient-to-t from-[#00539F] to-[#00AEEF] rounded-t-xl absolute bottom-0 transition-all duration-[1500ms] ease-out shadow-lg" 
                        style={{ height: `${h}%` }}
                      >
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white/30 rounded-full"></div>
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#00539F] text-white text-[10px] font-black py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl transform translate-y-2 group-hover:translate-y-0">
                          {h*12}
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-400 font-bold uppercase tracking-tighter">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Severity Distribution */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="text-2xl font-black text-[#00539F] mb-1">Severity Levels</h3>
              <p className="text-sm font-medium text-slate-400 mb-10">Current system-wide risk assessment</p>
              
              <div className="flex flex-col items-center justify-center py-6">
                <div className="w-56 h-56 rounded-full border-[20px] border-slate-50 relative flex items-center justify-center shadow-inner">
                  <div className="absolute inset-0 rounded-full border-[20px] border-red-500 border-t-transparent border-r-transparent -rotate-45 shadow-lg"></div>
                  <div className="text-center">
                    <p className="text-5xl font-black text-slate-900 leading-none">72%</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black mt-2">Critical Risk</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 space-y-5">
                {[
                  { label: 'High Severity', value: 234, color: 'bg-red-500' },
                  { label: 'Medium Severity', value: 97, color: 'bg-orange-400' },
                  { label: 'Low Severity', value: 92, color: 'bg-yellow-400' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-3.5 h-3.5 rounded-full ${item.color} shadow-sm`}></div>
                      <span className="text-sm font-bold text-slate-600">{item.label}</span>
                    </div>
                    <span className="text-base font-black text-slate-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Alerts */}
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden mb-12">
            <div className="p-10 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
              <div>
                <h3 className="text-2xl font-black text-[#00539F]">Security Alerts</h3>
                <p className="text-sm font-medium text-slate-400 mt-1">Operational safety logs from all active terminals</p>
              </div>
              <button className="bg-white px-6 py-2.5 rounded-xl border border-slate-200 text-[#00539F] hover:bg-[#00539F] hover:text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-sm">
                View All Events
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Asset Info</th>
                    <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Violation Type</th>
                    <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Risk Grade</th>
                    <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Verification</th>
                    <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Timestamp</th>
                    <th className="px-6 py-6"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {alerts.map((alert) => (
                    <tr key={alert.id} className="hover:bg-slate-50/80 transition-all duration-300 group">
                      <td className="px-10 py-7">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#00539F] shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                            <AlertTriangle size={24} />
                          </div>
                          <div>
                            <p className="font-black text-slate-900 text-lg tracking-tight">ID-{alert.id}</p>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{alert.location}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-10 py-7 text-slate-700 font-bold tracking-tight">{alert.type}</td>
                      <td className="px-10 py-7">
                        <span className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest border ${
                          alert.severity === 'High' ? 'bg-red-50 text-red-600 border-red-100' :
                          alert.severity === 'Medium' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                          'bg-yellow-50 text-yellow-600 border-yellow-100'
                        }`}>
                          {alert.severity}
                        </span>
                      </td>
                      <td className="px-10 py-7">
                        <span className={`flex items-center gap-2.5 text-sm font-bold ${
                          alert.status === 'Reviewed' ? 'text-emerald-600' : 'text-slate-400'
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${
                            alert.status === 'Reviewed' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'
                          }`}></div>
                          {alert.status}
                        </span>
                      </td>
                      <td className="px-10 py-7 text-xs font-bold text-slate-400 flex items-center gap-2 mt-2">
                        <Clock size={16} className="text-[#00AEEF]" /> {alert.time.toUpperCase()}
                      </td>
                      <td className="px-6 py-7 text-right">
                        <button className="p-3 bg-slate-50 text-slate-400 hover:text-[#00539F] hover:bg-white hover:shadow-lg rounded-2xl transition-all duration-300 transform group-hover:translate-x-1">
                          <ChevronRight size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
