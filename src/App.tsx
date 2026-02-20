import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen p-4 sm:p-8 lg:p-16 max-w-[1600px] mx-auto flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 flex-grow">
        {/* Left section (Cols 1-4) */}
        <div className="lg:col-span-4 flex flex-col gap-12 lg:justify-between h-full">
          <div className="space-y-12 mt-4">
            <div className="flex items-center space-x-3 text-xs tracking-widest text-[#888888] font-mono uppercase">
              <div className="accent-dot"></div>
              <span>Product</span>
            </div>
            
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium tracking-tight leading-[1.1]">
                Droids meet you<br/>wherever you work.
              </h1>
              
              <p className="text-[#888888] font-mono text-sm leading-[1.8] max-w-md">
                Droids embed directly into your workflow.<br/>
                IDE, Web, CLI, Slack, Linear. Delegate tasks<br/>
                as they come to mind, wherever you are.<br/><br/>
                Parallelize your Droids with multiple entry points.
              </p>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-24 mb-4 space-y-4 font-mono text-xs tracking-wider">
            <div className="flex items-center space-x-2 text-[#888888] mb-8">
               <div className="flex space-x-1.5">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#ff5a00] shadow-[0_0_8px_#ff5a00]"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-[#444]"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-[#444]"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-[#444]"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-[#444]"></div>
               </div>
            </div>
            <div className="nav-item active flex items-center space-x-4 text-[#ff5a00]">
              <span>01</span>
              <span className="underline decoration-[#ff5a00]/30 underline-offset-4">TERMINAL / IDE</span>
            </div>
            <div className="nav-item flex items-center space-x-4 text-[#555]">
              <span>02</span>
              <span>WEB BROWSER</span>
            </div>
            <div className="nav-item flex items-center space-x-4 text-[#555]">
              <span>03</span>
              <span>COMMAND LINE</span>
            </div>
            <div className="nav-item flex items-center space-x-4 text-[#555]">
              <span>04</span>
              <span>SLACK / TEAMS</span>
            </div>
            <div className="nav-item flex items-center space-x-4 text-[#555]">
              <span>05</span>
              <span>PROJECT MANAGER</span>
            </div>
          </div>
        </div>
        
        {/* Middle section (Cols 5-7) */}
        <div className="lg:col-span-3 flex flex-col justify-end pb-4">
          <div className="panel p-6 sm:p-8 rounded-lg flex flex-col min-h-[300px] lg:h-[360px] justify-between relative overflow-hidden group">
            <div className="flex justify-between items-start">
              <div className="accent-dot mt-1.5"></div>
              <div className="text-[10px] font-mono text-[#555] uppercase tracking-widest">
                01 - Terminal / IDE
              </div>
            </div>
            
            <div className="space-y-5">
              <h3 className="text-xl font-medium text-white">Droids where you code</h3>
              <p className="text-[#888888] font-mono text-xs leading-[1.8]">
                Factory meets you in your editor without forcing a switch. Delegate to Droids in any IDE or terminal: VS Code, JetBrains, Vim, and more. All while maintaining your workflow, tools, and shortcuts.
              </p>
              <button className="mt-6 px-5 py-3 bg-white text-black text-[10px] font-mono font-bold uppercase tracking-widest rounded hover:bg-gray-200 transition-colors flex items-center space-x-3 w-fit">
                <span>Learn More</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Right section (Cols 8-12) */}
        <div className="lg:col-span-5 flex flex-col justify-end pb-4">
          <div className="panel rounded-lg h-[500px] lg:h-[640px] flex flex-col relative overflow-hidden">
            <div className="absolute top-6 left-6">
              <div className="accent-dot"></div>
            </div>
            <div className="absolute top-6 right-6 text-[10px] font-mono text-[#555] uppercase tracking-widest">
              Terminal / IDE
            </div>
            
            {/* Mock IDE Content */}
            <div className="flex-grow mt-16 sm:mt-20 mx-4 sm:mx-6 mb-4 sm:mb-6 border border-[rgba(255,255,255,0.05)] rounded-md bg-[#050505] flex flex-col overflow-hidden shadow-2xl">
              {/* IDE Header */}
              <div className="h-10 border-b border-[rgba(255,255,255,0.05)] flex items-center justify-center relative bg-[#0a0a0a]">
                <div className="absolute left-4 flex space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
                </div>
                <div className="text-[10px] font-mono text-[#555]">serviceWorker.js - create-react-app</div>
                <div className="absolute right-4 flex space-x-3 text-[#555]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
                </div>
              </div>
              
              {/* IDE Body */}
              <div className="flex flex-grow overflow-hidden bg-[#050505]">
                {/* Sidebar */}
                <div className="hidden md:flex w-48 border-r border-[rgba(255,255,255,0.05)] p-4 flex-col space-y-6">
                  <div className="text-[10px] font-mono text-[#888888] flex items-center space-x-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                    <span className="text-white tracking-widest">EXPLORER</span>
                  </div>
                  <div className="space-y-3 text-[10px] font-mono text-[#555]">
                    <div className="flex items-center space-x-2 text-white">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      <span className="tracking-widest">CREATE-REACT-APP</span>
                    </div>
                    <div className="pl-4 space-y-2.5">
                      <div className="flex items-center space-x-2"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg><span>.github</span></div>
                      <div className="flex items-center space-x-2"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg><span>.vscode</span></div>
                      <div className="flex items-center space-x-2"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg><span>node_modules</span></div>
                      <div className="flex items-center space-x-2"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg><span>public</span></div>
                      <div className="flex items-center space-x-2 text-white"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg><span>src</span></div>
                    </div>
                  </div>
                </div>
                
                {/* Code Area */}
                <div className="flex-grow p-4 overflow-auto text-[10px] font-mono leading-relaxed">
                  <div className="flex min-w-max">
                    <div className="text-[#333] text-right pr-6 select-none flex flex-col">
                      {Array.from({length: 35}).map((_, i) => <span key={i}>{i + 1}</span>)}
                    </div>
                    <div className="text-[#a8a8a8] flex flex-col">
                      <span className="text-[#7a8390] italic">// CSS Syntax Highlighter UI</span>
                      <span className="text-[#7a8390] italic">// Manages the Figma plugin interface</span>
                      <br/>
                      <span><span className="text-[#ff5a00] font-medium">import</span> <span className="text-[#e6edf3]">PluginManager</span> <span className="text-[#ff5a00] font-medium">from</span> <span className="text-[#7ee787]">'figma.js'</span>;</span>
                      <br/>
                      <span><span className="text-[#ff5a00] font-medium">interface</span> <span className="text-[#79c0ff]">PluginSettings</span> {'{'}</span>
                      <span className="pl-4"><span className="text-[#e6edf3]">cssColorScheme</span>: <span className="text-[#79c0ff]">Record</span>&lt;<span className="text-[#79c0ff]">string</span>, {'{'} <span className="text-[#e6edf3]">r</span>: <span className="text-[#79c0ff]">number</span>, <span className="text-[#e6edf3]">g</span>: <span className="text-[#79c0ff]">number</span>, <span className="text-[#e6edf3]">b</span>: <span className="text-[#79c0ff]">number</span> {'}'}&gt;;</span>
                      <span className="pl-4"><span className="text-[#e6edf3]">jsColorScheme</span>: <span className="text-[#79c0ff]">Record</span>&lt;<span className="text-[#79c0ff]">string</span>, {'{'} <span className="text-[#e6edf3]">r</span>: <span className="text-[#79c0ff]">number</span>, <span className="text-[#e6edf3]">g</span>: <span className="text-[#79c0ff]">number</span>, <span className="text-[#e6edf3]">b</span>: <span className="text-[#79c0ff]">number</span> {'}'}&gt;;</span>
                      <span className="pl-4"><span className="text-[#e6edf3]">enabled</span>: <span className="text-[#79c0ff]">boolean</span>;</span>
                      <span>{'}'}</span>
                      <br/>
                      <span><span className="text-[#ff5a00] font-medium">let</span> <span className="text-[#e6edf3]">settings</span>: <span className="text-[#79c0ff]">PluginSettings</span> = {'{'}</span>
                      <span className="pl-4"><span className="text-[#e6edf3]">cssColorScheme</span>: {'{'}</span>
                      <span className="pl-8"><span className="text-[#7ee787]">'selector'</span>: {'{'} <span className="text-[#e6edf3]">r</span>: <span className="text-[#d2a8ff]">0.5</span>, <span className="text-[#e6edf3]">g</span>: <span className="text-[#d2a8ff]">0.7</span>, <span className="text-[#e6edf3]">b</span>: <span className="text-[#d2a8ff]">0.9</span> {'}'},</span>
                      <span className="pl-8"><span className="text-[#7ee787]">'property'</span>: {'{'} <span className="text-[#e6edf3]">r</span>: <span className="text-[#d2a8ff]">0.6</span>, <span className="text-[#e6edf3]">g</span>: <span className="text-[#d2a8ff]">0.7</span>, <span className="text-[#e6edf3]">b</span>: <span className="text-[#d2a8ff]">0.9</span> {'}'},</span>
                      <span className="pl-8"><span className="text-[#7ee787]">'value'</span>: {'{'} <span className="text-[#e6edf3]">r</span>: <span className="text-[#d2a8ff]">0.6</span>, <span className="text-[#e6edf3]">g</span>: <span className="text-[#d2a8ff]">0.7</span>, <span className="text-[#e6edf3]">b</span>: <span className="text-[#d2a8ff]">0.6</span> {'}'},</span>
                      <span className="pl-8"><span className="text-[#7ee787]">'string'</span>: {'{'} <span className="text-[#e6edf3]">r</span>: <span className="text-[#d2a8ff]">0.8</span>, <span className="text-[#e6edf3]">g</span>: <span className="text-[#d2a8ff]">0.5</span>, <span className="text-[#e6edf3]">b</span>: <span className="text-[#d2a8ff]">0.4</span> {'}'},</span>
                      <span className="pl-8"><span className="text-[#7ee787]">'number'</span>: {'{'} <span className="text-[#e6edf3]">r</span>: <span className="text-[#d2a8ff]">0.6</span>, <span className="text-[#e6edf3]">g</span>: <span className="text-[#d2a8ff]">0.7</span>, <span className="text-[#e6edf3]">b</span>: <span className="text-[#d2a8ff]">0.5</span> {'}'},</span>
                      <span className="pl-8"><span className="text-[#7ee787]">'comment'</span>: {'{'} <span className="text-[#e6edf3]">r</span>: <span className="text-[#d2a8ff]">0.4</span>, <span className="text-[#e6edf3]">g</span>: <span className="text-[#d2a8ff]">0.5</span>, <span className="text-[#e6edf3]">b</span>: <span className="text-[#d2a8ff]">0.3</span> {'}'},</span>
                      <span className="pl-8"><span className="text-[#7ee787]">'punctuation'</span>: {'{'} <span className="text-[#e6edf3]">r</span>: <span className="text-[#d2a8ff]">0.9</span>, <span className="text-[#e6edf3]">g</span>: <span className="text-[#d2a8ff]">0.9</span>, <span className="text-[#e6edf3]">b</span>: <span className="text-[#d2a8ff]">0.9</span> {'}'},</span>
                      <span className="pl-8"><span className="text-[#7ee787]">'at-rule'</span>: {'{'} <span className="text-[#e6edf3]">r</span>: <span className="text-[#d2a8ff]">0.8</span>, <span className="text-[#e6edf3]">g</span>: <span className="text-[#d2a8ff]">0.5</span>, <span className="text-[#e6edf3]">b</span>: <span className="text-[#d2a8ff]">0.8</span> {'}'},</span>
                      <span className="pl-8"><span className="text-[#7ee787]">'whitespace'</span>: {'{'} <span className="text-[#e6edf3]">r</span>: <span className="text-[#d2a8ff]">1</span>, <span className="text-[#e6edf3]">g</span>: <span className="text-[#d2a8ff]">1</span>, <span className="text-[#e6edf3]">b</span>: <span className="text-[#d2a8ff]">1</span> {'}'},</span>
                      <span className="pl-8"><span className="text-[#7ee787]">'unknown'</span>: {'{'} <span className="text-[#e6edf3]">r</span>: <span className="text-[#d2a8ff]">1</span>, <span className="text-[#e6edf3]">g</span>: <span className="text-[#d2a8ff]">1</span>, <span className="text-[#e6edf3]">b</span>: <span className="text-[#d2a8ff]">1</span> {'}'}</span>
                      <span className="pl-4">{'}'},</span>
                      <span className="pl-4"><span className="text-[#e6edf3]">jsColorScheme</span>: {'{}'},</span>
                      <span className="pl-4"><span className="text-[#e6edf3]">enabled</span>: <span className="text-[#d2a8ff]">true</span></span>
                      <span>{'}'};</span>
                      <br/>
                      <span><span className="text-[#ff5a00] font-medium">const</span> <span className="text-[#e6edf3]">highlightButton</span> =</span>
                      <span><span className="text-[#e6edf3]">document</span>.<span className="text-[#d2a8ff]">getElementById</span>(<span className="text-[#7ee787]">'highlight-button'</span>);</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="h-14 border-t border-[rgba(255,255,255,0.05)] flex items-center justify-between px-4 sm:px-6 text-[10px] font-mono text-[#555] tracking-widest uppercase">
              <span>IDE</span>
              <span>Droids where you code</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
