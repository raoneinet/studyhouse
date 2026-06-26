'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { useTransition } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function LanguageSwitcher() {
  const t = useTranslations('Footer');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace({ pathname }, { locale: nextLocale });
    });
  };

  return (
    <div className="flex items-center gap-2">
      <Select defaultValue={locale} onValueChange={onSelectChange} disabled={isPending}>
        <SelectTrigger className="w-[140px] h-8 bg-transparent border-slate-700 text-slate-300">
          <SelectValue placeholder={t('language')} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="pt">{t('portuguese')}</SelectItem>
          <SelectItem value="en">{t('english')}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
