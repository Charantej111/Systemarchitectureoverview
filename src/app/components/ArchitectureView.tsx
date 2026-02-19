import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  Target, 
  FileText, 
  Wallet, 
  UserCircle, 
  Users, 
  Briefcase,
  ChevronRight,
  School,
  BookOpen,
  Calendar,
  Building2,
  Scroll,
  TrendingUp,
  CreditCard,
  FileSpreadsheet,
  Bus,
  Home,
  UserCheck,
  Fingerprint,
  Box,
  MonitorPlay,
  CheckCircle,
  LayoutDashboard,
  BarChart
} from 'lucide-react';

// Define the module structure based on the Mermaid diagram
const architectureData = {
  root: {
    id: 'root',
    title: 'UniPilot',
    description: 'Central University Management System',
    color: 'bg-slate-900',
    textColor: 'text-white',
    borderColor: 'border-slate-800',
    icon: School,
  },
  modules: [
    {
      id: 'academic',
      title: 'Academic Management',
      description: 'Core academic processes including curriculum, timetable, and infrastructure.',
      color: 'bg-sky-50',
      hoverColor: 'hover:bg-sky-100',
      borderColor: 'border-sky-500',
      textColor: 'text-sky-900',
      iconColor: 'text-sky-600',
      ringColor: 'ring-sky-200',
      accentColor: 'bg-sky-100',
      accentText: 'text-sky-600',
      icon: GraduationCap,
      submodules: [
        { id: 'dept-prog', title: 'Departments & Programs', icon: Building2, desc: 'Manage department structures, program offerings, and hierarchies.' },
        { id: 'course-mgmt', title: 'Course Management', icon: BookOpen, desc: 'Syllabus definition, credit allocation, and elective management.' },
        { id: 'regs', title: 'Regulations', icon: Scroll, desc: 'Academic regulations, grading policies, and promotion rules.' },
        { id: 'ttable', title: 'Timetable', icon: Calendar, desc: 'Automated scheduling for classes, labs, and faculty load.' },
        { id: 'infra', title: 'Infrastructure', icon: Box, desc: 'Classroom allocation, lab resources, and facility booking.' },
        { id: 'reports', title: 'Report Generation', icon: BarChart, desc: 'Generate comprehensive academic reports and analytics.' },
      ]
    },
    {
      id: 'obe',
      title: 'Outcome Based Education',
      description: 'Tracking learning outcomes, mapping, and attainment levels.',
      color: 'bg-pink-50',
      hoverColor: 'hover:bg-pink-100',
      borderColor: 'border-pink-500',
      textColor: 'text-pink-900',
      iconColor: 'text-pink-600',
      ringColor: 'ring-pink-200',
      accentColor: 'bg-pink-100',
      accentText: 'text-pink-600',
      icon: Target,
      submodules: [
        { id: 'pos', title: 'POs & PSOs', icon: Target, desc: 'Program Outcomes and Program Specific Outcomes definition.' },
        { id: 'cos', title: 'Course Outcomes', icon: Target, desc: 'Define outcomes for each course and unit.' },
        { id: 'mapping', title: 'CO-PO Mapping', icon: TrendingUp, desc: 'Map course outcomes to program outcomes for alignment.' },
        { id: 'attain', title: 'Attainment', icon: CheckCircle, desc: 'Calculate attainment levels based on assessment performance.' },
        { id: 'reports', title: 'Report Generation', icon: BarChart, desc: 'Generate outcome attainment reports and analytics.' },
      ]
    },
    {
      id: 'exams',
      title: 'Examination System',
      description: 'End-to-end examination lifecycle management.',
      color: 'bg-amber-50',
      hoverColor: 'hover:bg-amber-100',
      borderColor: 'border-amber-500',
      textColor: 'text-amber-900',
      iconColor: 'text-amber-600',
      ringColor: 'ring-amber-200',
      accentColor: 'bg-amber-100',
      accentText: 'text-amber-600',
      icon: FileText,
      submodules: [
        { id: 'cycles', title: 'Exam Cycles', icon: Calendar, desc: 'Manage exam sessions, dates, and recurring cycles.' },
        { id: 'hall-tickets', title: 'Script View & Hall Tickets', icon: FileSpreadsheet, desc: 'Generate hall tickets and manage answer script viewing.' },
        { id: 'grades', title: 'Grade Entry', icon: CheckCircle, desc: 'Faculty grade entry portal with validation.' },
        { id: 'results', title: 'Results & Moderation', icon: TrendingUp, desc: 'Result processing, moderation committees, and publishing.' },
        { id: 'reports', title: 'Report Generation', icon: BarChart, desc: 'Generate examination results and performance reports.' },
      ]
    },
    {
      id: 'finance',
      title: 'Finance & Accounting',
      description: 'Student fee management and financial tracking.',
      color: 'bg-green-50',
      hoverColor: 'hover:bg-green-100',
      borderColor: 'border-green-500',
      textColor: 'text-green-900',
      iconColor: 'text-green-600',
      ringColor: 'ring-green-200',
      accentColor: 'bg-green-100',
      accentText: 'text-green-600',
      icon: Wallet,
      submodules: [
        { id: 'fee-dash', title: 'Fee Dashboards', icon: LayoutDashboard, desc: 'Real-time overview of fee collections and dues.' },
        { id: 'payments', title: 'Online Payments', icon: CreditCard, desc: 'Integration with payment gateways for fee collection.' },
        { id: 'ledger', title: 'Ledger & History', icon: BookOpen, desc: 'Student financial history and ledger maintenance.' },
        { id: 'waivers', title: 'Waivers & Fines', icon: FileText, desc: 'Manage scholarship waivers and late payment fines.' },
        { id: 'reports', title: 'Report Generation', icon: BarChart, desc: 'Generate financial statements and collection reports.' },
      ]
    },
    {
      id: 'student',
      title: 'Student & Logistics',
      description: 'Student lifecycle services including hostels and transport.',
      color: 'bg-violet-50',
      hoverColor: 'hover:bg-violet-100',
      borderColor: 'border-violet-500',
      textColor: 'text-violet-900',
      iconColor: 'text-violet-600',
      ringColor: 'ring-violet-200',
      accentColor: 'bg-violet-100',
      accentText: 'text-violet-600',
      icon: UserCircle,
      submodules: [
        { id: 'hostel', title: 'Hostel & Mess', icon: Home, desc: 'Room allocation, mess attendance, and billing.' },
        { id: 'transport', title: 'Transport & Logs', icon: Bus, desc: 'Route management, vehicle tracking, and transport fees.' },
        { id: 'profile', title: 'Digital Profile', icon: UserCheck, desc: 'Comprehensive 360-degree student profile.' },
        { id: 'reports', title: 'Report Generation', icon: BarChart, desc: 'Generate student demographics and logistics reports.' },
      ]
    },
    {
      id: 'ops',
      title: 'HR & Operations',
      description: 'Staff management and campus operations.',
      color: 'bg-slate-50',
      hoverColor: 'hover:bg-slate-100',
      borderColor: 'border-slate-500',
      textColor: 'text-slate-900',
      iconColor: 'text-slate-600',
      ringColor: 'ring-slate-200',
      accentColor: 'bg-slate-100',
      accentText: 'text-slate-600',
      icon: Users,
      submodules: [
        { id: 'hr-payroll', title: 'HR & Payroll', icon: Wallet, desc: 'Staff records, salary processing, and payslips.' },
        { id: 'attendance', title: 'Staff Attendance', icon: UserCheck, desc: 'Leave management and daily attendance tracking.' },
        { id: 'biometric', title: 'Biometric Sync', icon: Fingerprint, desc: 'Integration with biometric devices for automated logging.' },
        { id: 'assets', title: 'Asset Management', icon: Box, desc: 'Tracking campus assets, inventory, and maintenance.' },
        { id: 'reports', title: 'Report Generation', icon: BarChart, desc: 'Generate HR, attendance, and inventory reports.' },
      ]
    },
    {
      id: 'placement',
      title: 'Placement Module',
      description: 'Career services and recruitment management.',
      color: 'bg-rose-50',
      hoverColor: 'hover:bg-rose-100',
      borderColor: 'border-rose-500',
      textColor: 'text-rose-900',
      iconColor: 'text-rose-600',
      ringColor: 'ring-rose-200',
      accentColor: 'bg-rose-100',
      accentText: 'text-rose-600',
      icon: Briefcase,
      submodules: [
        { id: 'drive-mgmt', title: 'Drive Management', icon: Calendar, desc: 'Schedule and manage recruitment drives.' },
        { id: 'comp-dash', title: 'Company Dashboard', icon: LayoutDashboard, desc: 'Portal for recruiters to manage job postings.' },
        { id: 'eligibility', title: 'Eligibility Check', icon: CheckCircle, desc: 'Automated student eligibility filtering.' },
        { id: 'portal', title: 'Application Portal', icon: MonitorPlay, desc: 'Student portal for applying to companies.' },
        { id: 'reports', title: 'Report Generation', icon: BarChart, desc: 'Generate placement statistics and recruitment reports.' },
      ]
    }
  ]
};

export function ArchitectureView() {
  const [selectedModule, setSelectedModule] = useState(architectureData.modules[0]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-slate-900 p-1.5 rounded-lg">
              <School className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">UniPilot <span className="text-slate-500 font-medium">Architecture</span></h1>
          </div>
          <div className="text-sm text-slate-500 hidden sm:block">
            System Architecture & Module Breakdown
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Intro Section */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive College Management</h2>
          <p className="text-lg text-slate-600">
            UniPilot integrates all aspects of university administration into a cohesive, modular system designed for scalability and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Navigation / Module List */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 ml-1">
              System Modules
            </h3>
            
            <div className="relative pl-4 border-l-2 border-slate-200 space-y-6">
              {architectureData.modules.map((module) => (
                <div key={module.id} className="relative">
                  {/* Connection Line */}
                  <div className={`absolute -left-[18px] top-6 w-4 h-0.5 ${selectedModule.id === module.id ? module.borderColor.replace('border', 'bg') : 'bg-slate-200'} transition-colors duration-300`}></div>
                  
                  {/* Active Dot */}
                  <div className={`absolute -left-[21px] top-[22px] w-2.5 h-2.5 rounded-full border-2 border-white ${selectedModule.id === module.id ? `${module.borderColor.replace('border', 'bg')} scale-125` : 'bg-slate-300'} transition-all duration-300 z-10`}></div>

                  <motion.button
                    onClick={() => setSelectedModule(module)}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group relative overflow-hidden ${
                      selectedModule.id === module.id 
                        ? `bg-white ${module.borderColor} shadow-lg ring-1 ${module.ringColor}` 
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                    }`}
                  >
                    {/* Background gradient for active state */}
                    {selectedModule.id === module.id && (
                      <div className={`absolute inset-0 opacity-10 ${module.color}`}></div>
                    )}
                    
                    <div className="flex items-center gap-3 relative z-10">
                      <div className={`p-2 rounded-lg ${selectedModule.id === module.id ? `${module.accentColor} ${module.accentText}` : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-700'} transition-colors`}>
                        <module.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className={`font-semibold ${selectedModule.id === module.id ? 'text-slate-900' : 'text-slate-600'}`}>
                          {module.title}
                        </h4>
                      </div>
                    </div>
                    {selectedModule.id === module.id && (
                      <ChevronRight className={`w-5 h-5 ${module.iconColor} relative z-10`} />
                    )}
                  </motion.button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Detail View */}
          <div className="lg:col-span-8 xl:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedModule.id}
                initial={{ opacity: 0, y: 10, x: 10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: -10, x: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden"
              >
                {/* Module Header */}
                <div className={`p-8 border-b ${selectedModule.color} ${selectedModule.borderColor} border-opacity-20`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-white shadow-sm border ${selectedModule.borderColor} border-opacity-30`}>
                      <selectedModule.icon className={`w-8 h-8 ${selectedModule.iconColor}`} />
                    </div>
                    <div>
                      <h2 className={`text-2xl font-bold ${selectedModule.textColor}`}>{selectedModule.title}</h2>
                      <p className="text-slate-600 mt-1">{selectedModule.description}</p>
                    </div>
                  </div>
                </div>

                {/* Submodules Grid */}
                <div className="p-8">
                  <h3 className="text-lg font-semibold text-slate-800 mb-6 flex items-center gap-2">
                    <div className="w-1 h-6 bg-slate-800 rounded-full"></div>
                    Module Components
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedModule.submodules.map((sub, index) => (
                      <motion.div
                        key={sub.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                        className="group p-5 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 hover:shadow-md transition-all duration-200"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`mt-1 p-2 rounded-lg bg-white shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-200`}>
                            <sub.icon className={`w-5 h-5 ${selectedModule.iconColor}`} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-1">{sub.title}</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">{sub.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Flow Connection Visual */}
                  <div className="mt-12 pt-8 border-t border-slate-100">
                    <div className="flex items-center justify-between text-sm text-slate-400">
                      <div className="flex items-center gap-2">
                        <School className="w-4 h-4" />
                        <span>Connected to UniPilot Core</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>Module ID: {selectedModule.id.toUpperCase()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </main>
    </div>
  );
}
