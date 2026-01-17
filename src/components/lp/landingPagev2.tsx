import { LpHero } from './lpHero';
import { LpHowItWorks } from './lpHowItWorks';
import { LpResources } from './lpResources';
import { LpStats } from './lpStats';
import { LpRegisterPush } from './lpRegisterPush';
import { LpFooter } from './lpFooter';

export default function EstudakiLanding() {

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