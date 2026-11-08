import React from 'react';
import { ChangelogTimeline } from './components/ChangelogTimeline';
import { changelogData } from './data/changelogData';

export function App() {
  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
      {/* Luz ambiente superior sutil estilo Linear */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-emerald-500/10 via-blue-500/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <ChangelogTimeline releases={changelogData} />
    </div>
  );
}

export default App;
