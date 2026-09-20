import React from 'react';

export default function IntegrationsSection() {
  return (
    <section className="z-10 relative">
      <div className="sm:px-6 lg:px-8 max-w-6xl mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-violet-300">
              <rect width="7" height="7" x="3" y="3" rx="1"></rect>
              <rect width="7" height="7" x="14" y="3" rx="1"></rect>
              <rect width="7" height="7" x="14" y="14" rx="1"></rect>
              <rect width="7" height="7" x="3" y="14" rx="1"></rect>
            </svg>
            Integrations
          </div>
          <h2 className="sm:text-4xl text-3xl font-semibold text-white tracking-tight">Works with your favorite tools</h2>
          <p className="mt-3 text-base text-zinc-300">Connect Nova with the tools you already use every day</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">
          {/* Card 1: GitHub */}
          <div className="integration-card z-10 rounded-2xl pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" style={{ background: 'radial-gradient(circle 230px at 0% 0%, rgba(113, 113, 122, 0.4), #0c0d0d)' }}>
            <div className="animated-dot bg-zinc-400 w-[5px] h-[5px] z-[2] rounded-full absolute" style={{ boxShadow: 'rgba(139, 92, 246, 0.8) 0px 0px 10px', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite paused' }}></div>
            <div className="hover:bg-white/10 transition-all duration-300 group z-[1] bg-white/5 h-full rounded-2xl pt-7 pr-9 pb-7 pl-9 relative backdrop-blur" style={{ background: 'radial-gradient(circle 280px at 0% 0%, rgba(68, 68, 68, 0.3), #0c0d0d)', border: '1px solid #202222' }}>
              <div className="blur-[10px] z-10 opacity-40 w-[220px] h-[45px] rounded-full absolute top-0 left-0" style={{ backgroundColor: 'rgba(113, 113, 122, 0.3)', boxShadow: '0 0 50px rgba(113, 113, 122, 0.5)', transform: 'rotate(40deg)', transformOrigin: '10%' }}></div>
              <div className="flex z-10 relative items-start justify-between">
                <div className="flex w-12 h-12 rounded-xl items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[24px] h-[24px] text-slate-400" style={{ width: '24px', height: '24px' }}>
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-zinc-300 bg-zinc-400/10 ring-zinc-400/20 ring-1 rounded-md pt-1 pr-2 pb-1 pl-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                  Connected
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-white relative z-10">GitHub</h3>
              <p className="mt-1 text-sm text-zinc-400 relative z-10">Link pull requests to features. Auto-update task status when PRs merge.</p>
              <div className="flex gap-2 z-10 mt-4 relative items-center">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d74688b7-be82-48a3-9cec-f76b3dab7664_320w.webp)] bg-cover bg-center ring-zinc-900 ring-2 rounded-full"></div>
                  <div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7468f79a-0c70-4144-876e-c2b1838fef60_320w.webp)] bg-cover bg-center ring-zinc-900 ring-2 rounded-full"></div>
                  <div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1c97346f-367a-4525-88c9-983c427260ae_320w.webp)] bg-cover bg-center ring-zinc-900 ring-2 rounded-full"></div>
                </div>
                <span className="text-xs text-zinc-400">Used by 847 teams</span>
              </div>
              <div className="bg-slate-50/5 w-full h-[1px] absolute" style={{ top: '10%', left: '0%', background: 'linear-gradient(90deg, rgba(136, 136, 136, 0.3) 30%, rgb(29, 31, 31) 70%)', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)' }}></div>
              <div className="bg-slate-50/5 w-[1px] h-full absolute" style={{ left: '10%', top: '0%', background: 'linear-gradient(rgba(116, 116, 116, 0.3) 30%, rgb(34, 36, 36) 70%)', maskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)' }}></div>
              <div className="bg-slate-50/5 w-full h-[1px] z-[1] absolute" style={{ bottom: '10%', left: '0%', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)' }}></div>
              <div className="bg-[#ffffff]/5 w-[1px] h-full absolute" style={{ right: '10%', top: '0%', maskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)' }}></div>
            </div>
          </div>

          {/* Card 2: Slack */}
          <div className="z-[1] integration-card rounded-2xl pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" style={{ background: 'radial-gradient(circle 230px at 0% 0%, rgba(113, 113, 122, 0.4), #0c0d0d)' }}>
            <div className="z-[2] animated-dot bg-zinc-400 w-[5px] h-[5px] rounded-full absolute" style={{ boxShadow: 'rgba(59, 130, 246, 0.8) 0px 0px 10px', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite paused' }}></div>
            <div className="hover:bg-white/10 transition-all duration-300 group z-[1] bg-white/5 h-full rounded-2xl pt-7 pr-9 pb-7 pl-9 relative backdrop-blur" style={{ background: 'radial-gradient(circle 280px at 0% 0%, rgba(68, 68, 68, 0.3), #0c0d0d)', border: '1px solid #202222' }}>
              <div className="blur-[10px] opacity-40 w-[220px] h-[45px] rounded-full absolute top-0 left-0" style={{ backgroundColor: 'rgba(113, 113, 122, 0.3)', boxShadow: '0 0 50px rgba(113, 113, 122, 0.5)', transform: 'rotate(40deg)', transformOrigin: '10%' }}></div>
              <div className="flex z-10 relative items-start justify-between">
                <div className="flex w-12 h-12 rounded-xl items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[24px] h-[24px] text-slate-400" style={{ width: '24px', height: '24px' }}>
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <path d="m7.5 4.21 4.5 2.6 4.5-2.6"></path>
                    <path d="M12 17.5V22"></path>
                    <path d="M3.27 6.96 8 12.01 8 17"></path>
                    <path d="M12 17.5V12l-5-3"></path>
                  </svg>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-zinc-400/10 px-2 py-1 text-xs text-zinc-300 ring-1 ring-zinc-400/20">
                  Available
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-white relative z-10">Slack</h3>
              <p className="mt-1 text-sm text-zinc-400 relative z-10">Get notified about sprint updates, task assignments, and mentions in your channels.</p>
              <div className="flex gap-2 z-10 mt-4 relative items-center">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/15654b26-7c5f-4651-ba85-3a208a386304_320w.webp)] bg-cover bg-center ring-zinc-900 ring-2 rounded-full"></div>
                  <div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9fe835bd-f1a4-4aed-ade9-38038cdd0542_320w.webp)] bg-cover bg-center ring-zinc-900 ring-2 rounded-full"></div>
                </div>
                <span className="text-xs text-zinc-400">Used by 623 teams</span>
              </div>
              <div className="w-full h-[1px] absolute" style={{ top: '10%', left: '0%', background: 'linear-gradient(90deg, rgba(136, 136, 136, 0.3) 30%, #1d1f1f 70%)', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)' }}></div>
              <div className="w-[1px] h-full absolute" style={{ left: '10%', top: '0%', background: 'linear-gradient(180deg, rgba(116, 116, 116, 0.3) 30%, #222424 70%)', maskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)' }}></div>
              <div className="bg-slate-50/5 w-full h-[1px] absolute" style={{ bottom: '10%', left: '0%', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)' }}></div>
              <div className="bg-slate-50/5 w-[1px] h-full absolute" style={{ right: '10%', top: '0%', maskImage: 'linear-gradient(180deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 15%, black 85%, transparent)' }}></div>
            </div>
          </div>

          {/* Card 3: Figma */}
          <div className="z-[1] integration-card rounded-2xl pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" style={{ background: 'radial-gradient(circle 230px at 0% 0%, rgba(113, 113, 122, 0.4), #0c0d0d)' }}>
            <div className="z-[2] animated-dot bg-zinc-400 w-[5px] h-[5px] rounded-full absolute" style={{ boxShadow: '0 0 10px rgba(167, 139, 250, 0.8)', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite paused' }}></div>
            <div className="hover:bg-white/10 transition-all duration-300 group z-[1] bg-white/5 h-full rounded-2xl pt-7 pr-9 pb-7 pl-9 relative backdrop-blur" style={{ background: 'radial-gradient(circle 280px at 0% 0%, rgba(68, 68, 68, 0.3), #0c0d0d)', border: '1px solid #202222' }}>
              <div className="blur-[10px] opacity-40 w-[220px] h-[45px] rounded-full absolute top-0 left-0" style={{ backgroundColor: 'rgba(113, 113, 122, 0.3)', boxShadow: '0 0 50px rgba(113, 113, 122, 0.5)', transform: 'rotate(40deg)', transformOrigin: '10%' }}></div>
              <div className="flex items-start justify-between relative z-10">
                <div className="flex w-12 h-12 rounded-xl items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[24px] h-[24px] text-slate-400" style={{ width: '24px', height: '24px' }}>
                    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
                    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
                    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
                    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
                    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
                  </svg>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-zinc-300 bg-zinc-400/10 ring-zinc-400/20 ring-1 rounded-md pt-1 pr-2 pb-1 pl-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                  Connected
                </span>
              </div>
              <h3 className="z-10 text-lg font-semibold text-white tracking-tight mt-4 relative">Figma</h3>
              <p className="mt-1 text-sm text-zinc-400 relative z-10">Embed designs in tasks. Keep mockups and implementation in sync automatically.</p>
              <div className="flex gap-2 z-10 mt-4 relative items-center">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8e2b95ff-a165-434a-bdc9-cdb963c750e9_320w.webp)] bg-cover bg-center ring-zinc-900 ring-2 rounded-full"></div>
                  <div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ce224171-c77b-4f9d-bcb4-78d291d25746_320w.webp)] bg-cover bg-center ring-zinc-900 ring-2 rounded-full"></div>
                  <div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ed0e64fa-763f-438b-9101-248ccb06c3b0_320w.webp)] bg-cover bg-center ring-zinc-900 ring-2 rounded-full"></div>
                </div>
                <span className="text-xs text-zinc-400">Used by 512 teams</span>
              </div>
              <div className="w-full h-[1px] absolute" style={{ top: '10%', left: '0%', background: 'linear-gradient(90deg, rgba(136, 136, 136, 0.3) 30%, #1d1f1f 70%)', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)' }}></div>
              <div className="w-[1px] h-full absolute" style={{ left: '10%', top: '0%', background: 'linear-gradient(180deg, rgba(116, 116, 116, 0.3) 30%, #222424 70%)', maskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)' }}></div>
              <div className="bg-slate-50/5 w-full h-[1px] absolute" style={{ bottom: '10%', left: '0%', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)' }}></div>
              <div className="bg-slate-50/5 w-[1px] h-full absolute" style={{ right: '10%', top: '0%', maskImage: 'linear-gradient(180deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 15%, black 85%, transparent)' }}></div>
            </div>
          </div>

          {/* Card 4: Notion */}
          <div className="z-[1] integration-card rounded-2xl pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" style={{ background: 'radial-gradient(circle 230px at 0% 0%, rgba(113, 113, 122, 0.4), #0c0d0d)' }}>
            <div className="z-[2] animated-dot bg-zinc-400 w-[5px] h-[5px] rounded-full absolute" style={{ boxShadow: '0 0 10px rgba(249, 115, 22, 0.8)', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite paused' }}></div>
            <div className="hover:bg-white/10 transition-all duration-300 group z-[1] bg-white/5 h-full rounded-2xl pt-7 pr-9 pb-7 pl-9 relative backdrop-blur" style={{ background: 'radial-gradient(circle 280px at 0% 0%, rgba(68, 68, 68, 0.3), #0c0d0d)', border: '1px solid #202222', maskImage: 'linear-gradient(90deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 0%, black 100%, transparent)' }}>
              <div className="blur-[10px] opacity-40 w-[220px] h-[45px] z-10 rounded-full absolute top-0 left-0" style={{ backgroundColor: 'rgba(113, 113, 122, 0.3)', boxShadow: '0 0 50px rgba(113, 113, 122, 0.5)', transform: 'rotate(40deg)', transformOrigin: '10%' }}></div>
              <div className="flex z-10 relative items-start justify-between">
                <div className="flex w-12 h-12 rounded-xl items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[24px] h-[24px] text-slate-400" style={{ width: '24px', height: '24px' }}>
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M9 3v18"></path>
                  </svg>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-zinc-300 bg-zinc-400/10 ring-zinc-400/20 ring-1 rounded-md pt-1 pr-2 pb-1 pl-2">
                  Available
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-white relative z-10">Notion</h3>
              <p className="z-10 text-sm text-zinc-400 mt-1 relative">Sync roadmaps with your team docs. Two-way updates keep everyone aligned.</p>
              <div className="flex gap-2 z-10 mt-4 relative items-center">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5ad0226f-b99c-4dd2-af42-ef28d1218fc2_320w.webp)] bg-cover bg-center ring-zinc-900 ring-2 rounded-full"></div>
                  <div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f6b5dd2c-270e-4d8c-999d-e80c1fd8ce4f_320w.webp)] bg-cover bg-center ring-zinc-900 ring-2 rounded-full"></div>
                </div>
                <span className="text-xs text-zinc-400">Used by 389 teams</span>
              </div>
              <div className="w-full h-[1px] absolute" style={{ top: '10%', left: '0%', background: 'linear-gradient(90deg, rgba(136, 136, 136, 0.3) 30%, #1d1f1f 70%)', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)' }}></div>
              <div className="w-[1px] h-full absolute" style={{ left: '10%', top: '0%', background: 'linear-gradient(rgba(116, 116, 116, 0.3) 30%, rgb(34, 36, 36) 70%)', maskImage: 'linear-gradient(transparent, black 15%, black 85%, transparent)' }}></div>
              <div className="bg-slate-50/5 w-full h-[1px] absolute" style={{ bottom: '10%', left: '0%', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)' }}></div>
              <div className="bg-slate-50/5 w-[1px] h-full z-10 absolute" style={{ right: '10%', top: '0%', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)' }}></div>
            </div>
          </div>

          {/* Card 5: Linear */}
          <div className="z-[1] integration-card rounded-2xl pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" style={{ background: 'radial-gradient(circle 230px at 0% 0%, rgba(113, 113, 122, 0.4), rgb(12, 13, 13))' }}>
            <div className="z-[2] animated-dot bg-zinc-400 w-[5px] h-[5px] rounded-full absolute" style={{ boxShadow: 'rgba(168, 85, 247, 0.8) 0px 0px 10px', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite paused' }}></div>
            <div className="hover:bg-white/10 transition-all duration-300 group z-[1] bg-white/5 h-full rounded-2xl pt-7 pr-9 pb-7 pl-9 relative backdrop-blur" style={{ background: 'radial-gradient(circle 280px at 0% 0%, rgba(68, 68, 68, 0.3), rgb(12, 13, 13))', border: '1px solid rgb(32, 34, 34)' }}>
              <div className="blur-[10px] opacity-40 w-[220px] h-[45px] z-10 rounded-full absolute top-0 left-0" style={{ backgroundColor: 'rgba(113, 113, 122, 0.3)', boxShadow: '0 0 50px rgba(113, 113, 122, 0.5)', transform: 'rotate(40deg)', transformOrigin: '10%' }}></div>
              <div className="flex items-start justify-between relative z-10">
                <div className="flex w-12 h-12 rounded-xl items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 w-[24px] h-[24px]" style={{ width: '24px', height: '24px' }}>
                    <path d="M20 7h-9"></path>
                    <path d="M14 17H5"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-zinc-400/10 px-2 py-1 text-xs text-zinc-300 ring-1 ring-zinc-400/20">
                  Available
                </span>
              </div>
              <h3 className="z-10 text-lg font-semibold text-white tracking-tight mt-4 relative">Linear</h3>
              <p className="mt-1 text-sm text-zinc-400 relative z-10">Import existing issues and sync status. Maintain your Linear workflow seamlessly.</p>
              <div className="flex gap-2 z-10 mt-4 relative items-center">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c61ae90a-e493-4cce-bea2-a162a411950f_320w.webp)] bg-cover bg-center ring-zinc-900 ring-2 rounded-full"></div>
                  <div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e6dafb6e-9b5b-48fb-91ee-fc60ed98224a_320w.webp)] bg-cover bg-center rounded-full ring-zinc-900 ring-2"></div>
                </div>
                <span className="text-xs text-zinc-400">Used by 294 teams</span>
              </div>
              <div className="w-full h-[1px] absolute" style={{ top: '10%', left: '0%', background: 'linear-gradient(90deg, rgba(136, 136, 136, 0.3) 30%, #1d1f1f 70%)', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)' }}></div>
              <div className="w-[1px] h-full absolute" style={{ left: '10%', top: '0%', background: 'linear-gradient(180deg, rgba(116, 116, 116, 0.3) 30%, #222424 70%)', maskImage: 'linear-gradient(360deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(360deg, transparent, black 15%, black 85%, transparent)' }}></div>
              <div className="bg-slate-50/5 w-full h-[1px] absolute" style={{ bottom: '10%', left: '0%', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)' }}></div>
              <div className="bg-slate-50/5 w-[1px] h-full absolute" style={{ right: '10%', top: '0%', maskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)' }}></div>
            </div>
          </div>

          {/* Card 6: Custom Integration */}
          <div className="z-[1] integration-card rounded-2xl pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" style={{ background: 'radial-gradient(circle 230px at 0% 0%, rgba(113, 113, 122, 0.4), #0c0d0d)' }}>
            <div className="z-[2] animated-dot bg-zinc-400 w-[5px] h-[5px] rounded-full absolute" style={{ boxShadow: '0 0 10px rgba(113, 113, 122, 0.8)', right: '10%', top: '10%', animation: 'moveDot 6s linear infinite paused' }}></div>
            <div className="hover:bg-white/10 transition-all duration-300 group z-[1] bg-white/5 h-full rounded-2xl pt-7 pr-9 pb-7 pl-9 relative backdrop-blur" style={{ background: 'radial-gradient(circle 280px at 0% 0%, rgba(68, 68, 68, 0.3), #0c0d0d)', border: '1px solid #202222' }}>
              <div className="blur-[10px] opacity-40 w-[220px] h-[45px] rounded-full absolute top-0 left-0" style={{ backgroundColor: 'rgba(113, 113, 122, 0.3)', boxShadow: '0 0 50px rgba(113, 113, 122, 0.5)', transform: 'rotate(40deg)', transformOrigin: '10%' }}></div>
              <div className="flex z-10 relative items-start justify-between">
                <div className="flex w-12 h-12 rounded-xl items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[24px] h-[24px] text-slate-400" style={{ width: '24px', height: '24px' }}>
                    <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-zinc-300 bg-zinc-400/10 ring-zinc-400/20 ring-1 rounded-md pt-1 pr-2 pb-1 pl-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                  API
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-white relative z-10">Custom Integration</h3>
              <p className="mt-1 text-sm text-zinc-400 relative z-10">Build your own integration with our REST API and webhooks. Full documentation included.</p>
              <div className="flex gap-2 z-10 mt-4 relative items-center">
                <a href="#" className="text-xs text-zinc-400 flex items-center gap-1">
                  View API docs
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="w-full h-[1px] absolute" style={{ top: '10%', left: '0%', background: 'linear-gradient(90deg, rgba(136, 136, 136, 0.3) 30%, #1d1f1f 70%)', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)' }}></div>
              <div className="w-[1px] h-full z-[1] absolute" style={{ left: '10%', top: '0%', background: 'linear-gradient(180deg, rgba(116, 116, 116, 0.3) 30%, #222424 70%)', maskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 15%, black 85%, transparent)' }}></div>
              <div className="bg-[#2c2c2c] w-full h-[1px] absolute" style={{ bottom: '10%', left: '0%', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)' }}></div>
              <div className="bg-[#2c2c2c] w-[1px] h-full absolute" style={{ right: '10%', top: '0%', maskImage: 'linear-gradient(10deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(10deg, transparent, black 15%, black 85%, transparent)' }}></div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-400 mb-4">Need another integration?</p>
          <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
            Request integration
          </button>
        </div>
      </div>
    </section>
  );
}
