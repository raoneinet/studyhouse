import { LpHero } from './lpHero';
import { LpStats } from './lpStats';
import { LpHowItWorks } from './lpHowItWorks';
import { LpResources } from './lpResources';
import { LpTestimonials } from './lpTestimonials';
import { LpRegisterPush } from './lpRegisterPush';
import { LpFooter } from './lpFooter';

export default function LearnizzeLanding() {

  return (
    <div className="w-full">
      {/* Hero */}
      <LpHero/>

      {/* Stats */}
      <LpStats/>

      {/* Como Funciona */}
      <LpHowItWorks/>

      {/* Recursos */}
      <LpResources/>

      {/* Depoimentos */}
      <LpTestimonials/>

      {/* CTA Final */}
      <LpRegisterPush/>

      {/* Footer */}
      <LpFooter/>
    </div>
  );
}