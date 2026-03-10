import React from 'react';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              E
            </div>
            <h1 className="text-xl font-semibold text-slate-800 tracking-tight">Smart Energy Optimizer</h1>
          </div>
        </div>
      </header>
      <main className="max-w-[1600px] mx-auto px-6 py-8">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
