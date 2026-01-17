import React, { useState } from 'react';
import { Star, CheckCircle, Clock, AlertCircle, Grid, Sparkles, BarChart3, Layers, Filter, Archive, Calendar } from 'lucide-react';
import { LpHero } from './lpHero';
import { LpHowItWorks } from './lpHowItWorks';
import { LpResources } from './lpResources';
import { LpStats } from './lpStats';
import { LpRegisterPush } from './lpRegisterPush';
import { LpFooter } from './lpFooter';

export default function EstudakiLanding() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="w-full">
      {/* Hero */}
      <LpHero/>

      {/* Como Funciona */}
      <LpHowItWorks/>
      

      {/* Recursos */}
      <LpResources/>

      {/* Stats */}
      <LpStats/>

      {/* CTA Final */}
      <LpRegisterPush/>

      {/* Footer */}
      <LpFooter/>
    </div>
  );
}