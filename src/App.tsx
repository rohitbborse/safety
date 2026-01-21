import React, { useState } from 'react';
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
      <div className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col h-screen sticky top-0">
        <div className="p-6">
          <h1 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="text-blue-600" />
            VideoSafety
          </h1>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-xl font-medium">
            <LayoutDashboard size={20} /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
            <Bell size={20} /> Alerts
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
            <Settings size={20} /> Settings
          </a>
        </nav>
        <div className="p-4 mt-auto border-t border-slate-100">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-slate-900">Hi Rebecca, Welcome!</h2>
            <p className="text-sm text-slate-500">Stay updated on trends and insights across all alert types</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {widgets.map((widget) => (
              <div key={widget.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-slate-50 rounded-2xl">
                    {widget.icon}
                  </div>
                  <div>
                    <h3 className="text-slate-500 font-medium text-sm">{widget.title}</h3>
                    <p className="text-2xl font-bold text-slate-900">{widget.value}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>{widget.sub}</span>
                    <span className="font-semibold text-slate-700">{widget.trend}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 transition-all duration-500" 
                      style={{ width: `${widget.trend}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
            <button className="bg-white p-6 rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 text-slate-400 hover:border-blue-400 hover:text-blue-500 transition-all">
              <div className="p-2 bg-slate-50 rounded-full">
                <Plus size={24} />
              </div>
              <span className="font-semibold">Add Alert</span>
            </button>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Incident Trend */}
            <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Incident Trend</h3>
                  <p className="text-sm text-slate-500">Trends over the last 9 months</p>
                </div>
                <div className="flex gap-2">
                  {['Day', 'Week', 'Month'].map(t => (
                    <button 
                      key={t}
                      onClick={() => setActiveTab(t)}
                      className={`px-4 py-1.5 rounded-xl text-sm font-medium transition-all ${
                        activeTab === t ? 'bg-blue-600 text-white shadow-md shadow-blue-200' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Fake Chart Illustration */}
              <div className="h-64 relative flex items-end justify-between px-4">
                {[40, 65, 30, 85, 45, 90, 55, 75, 60].map((h, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 w-full">
                    <div className="w-2/3 max-w-[20px] bg-blue-100 rounded-t-lg relative group h-full">
                      <div 
                        className="w-full bg-blue-500 rounded-t-lg absolute bottom-0 transition-all duration-1000" 
                        style={{ height: `${h}%` }}
                      >
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                          {h*12}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Severity Distribution */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Severity Distribution</h3>
              <p className="text-sm text-slate-500 mb-8">Top high-severity incidents</p>
              
              <div className="flex flex-col items-center justify-center py-4">
                <div className="w-48 h-48 rounded-full border-[16px] border-slate-100 relative flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-[16px] border-red-500 border-t-transparent border-r-transparent -rotate-45"></div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-slate-900">72%</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">High</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-sm font-medium text-slate-600">High Severity</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900">234</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    <span className="text-sm font-medium text-slate-600">Medium Severity</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900">97</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <span className="text-sm font-medium text-slate-600">Low Severity</span>
                  </div>
                  <span className="text-sm font-bold text-slate-900">92</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Alerts */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-8">
            <div className="p-8 border-b border-slate-50 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Recent Alerts</h3>
                <p className="text-sm text-slate-500">View and manage latest incident reports</p>
              </div>
              <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1">
                View All <ChevronRight size={16} />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Alert Details</th>
                    <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Type</th>
                    <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Severity</th>
                    <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                    <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Time</th>
                    <th className="px-4 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {alerts.map((alert) => (
                    <tr key={alert.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500">
                            <AlertTriangle size={20} />
                          </div>
                          <div>
                            <p className="font-bold text-slate-900">#{alert.id}</p>
                            <p className="text-xs text-slate-500">{alert.location}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-slate-600 font-medium">{alert.type}</td>
                      <td className="px-8 py-5">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          alert.severity === 'High' ? 'bg-red-100 text-red-600' :
                          alert.severity === 'Medium' ? 'bg-orange-100 text-orange-600' :
                          'bg-yellow-100 text-yellow-600'
                        }`}>
                          {alert.severity}
                        </span>
                      </td>
                      <td className="px-8 py-5">
                        <span className={`flex items-center gap-1.5 text-sm font-medium ${
                          alert.status === 'Reviewed' ? 'text-emerald-600' : 'text-slate-400'
                        }`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            alert.status === 'Reviewed' ? 'bg-emerald-500' : 'bg-slate-300'
                          }`}></div>
                          {alert.status}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-sm text-slate-500 flex items-center gap-1.5">
                        <Clock size={14} /> {alert.time}
                      </td>
                      <td className="px-4 py-5">
                        <button className="p-2 opacity-0 group-hover:opacity-100 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
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
