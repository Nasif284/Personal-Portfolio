import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { SkillsAndArchitecture } from './components/SkillsAndArchitecture';
import { GitHubActivity } from './components/GitHubActivity';
import { EducationAndContact } from './components/EducationAndContact';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ProjectsShowcase />
        <SkillsAndArchitecture />
        <GitHubActivity />
        <EducationAndContact />
      </main>
    </div>
  );
};

export default App;
