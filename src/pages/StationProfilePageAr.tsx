import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/seo/Seo';
import {
  DraftingCompass,
  Calculator,
  ClipboardList,
  Gavel,
  HardHat,
  Wrench,
  Cpu,
  Building2,
  Network,
  Boxes,
  Database,
  ShieldCheck,
  BadgeCheck,
  Sparkles,
  Brain,
  MapPin,
  Phone,
  Mail,
  ScanLine,
  Layers,
} from 'lucide-react';

interface PipelineStep {
  icon: React.ReactNode;
  step: string;
  title: string;
  detail: string;
}

const pipeline: PipelineStep[] = [
  {
    icon: <DraftingCompass />,
    step: '٠١',
    title: 'التصميم والنطاق',
    detail:
      'التقاط النطاق المعماري والهندسي من المخططات المبدئية وهيكلته في نموذج جاهز للتكلفة.',
  },
  {
    icon: <ScanLine />,
    step: '٠٢',
    title: 'النموذج الكمّي والتكلفة',
    detail:
      'حصر كميات بمساعدة الذكاء الاصطناعي ونمذجة التكلفة عبر أعمال البناء والبنية التحتية والصيانة.',
  },
  {
    icon: <Calculator />,
    step: '٠٣',
    title: 'جدول الكميات المسعّر',
    detail:
      'جدول كميات مفصّل ومرمّز ومبني على الأسعار — مرجعي بأسعار السوق ومسعّر للطرح.',
  },
  {
    icon: <Gavel />,
    step: '٠٤',
    title: 'المناقصة والترسية',
    detail:
      'كراسات العطاءات، التأهيل المسبق، تقييم العطاءات، ودعم الترسية — مخرجات جاهزة للطرح من اليوم الأول.',
  },
];

interface Capability {
  icon: React.ReactNode;
  title: string;
  detail: string;
  tag?: string;
}

const capabilities: Capability[] = [
  {
    icon: <DraftingCompass />,
    title: 'من التصميم إلى التكلفة',
    tag: 'منذ المخطط الأول',
    detail:
      'انضباط التكلفة منذ أول رسم — يتطور التصميم المعماري والهندسي جنبًا إلى جنب مع نموذج تكلفة حي، فلا يسبق النطاقُ الميزانيةَ أبدًا.',
  },
  {
    icon: <Calculator />,
    title: 'التكلفة الكاملة للمشروع',
    tag: 'تقدير رأسمالي',
    detail:
      'تقدير التكلفة الرأسمالية من الجدوى المبكرة حتى التصميم التفصيلي — للبناء والبنية التحتية وبرامج الصيانة معًا.',
  },
  {
    icon: <ClipboardList />,
    title: 'جداول الكميات المسعّرة',
    tag: 'جاهزة للطرح',
    detail:
      'جداول كميات مفصّلة ومرمّزة ومبنية على أسعار السوق الحالية — دقيقة وقابلة للتدقيق وجاهزة للطرح.',
  },
  {
    icon: <Gavel />,
    title: 'المناقصات والعطاءات',
    tag: 'مشتريات',
    detail:
      'كراسات العطاءات، التأهيل المسبق للمقاولين، تقييم العطاءات، التفاوض، ودعم الترسية — تُدار من البداية إلى النهاية.',
  },
  {
    icon: <HardHat />,
    title: 'مشاريع البنية التحتية',
    tag: 'أبعد من البناء',
    detail:
      'تقدير ومناقصات الطرق والمرافق والمياه والكهرباء وأعمال الأشغال العامة — بالانضباط نفسه المطبق على البنية التحتية المدنية الكبرى.',
  },
  {
    icon: <Wrench />,
    title: 'الصيانة وإدارة الأصول',
    tag: 'دورة الحياة',
    detail:
      'برامج الصيانة وتكلفة دورة الحياة وسجلات الأصول التي تبقي المرافق والمحافظ عاملةً بعد التسليم بوقت طويل.',
  },
  {
    icon: <Network />,
    title: 'نظام صيانة المعدات',
    tag: 'الجاهزية',
    detail:
      'نظام مُدار لصيانة المعدات — جداول الصيانة، أوامر العمل، تتبع الجاهزية، وخطط الاستبدال في مكان واحد.',
  },
  {
    icon: <Building2 />,
    title: 'حلول تقنية للمطوّرين العقاريين',
    tag: 'المحافظ',
    detail:
      'لوحات تحليلات التكلفة وذكاء تكاليف المحافظ وأدوات موجّهة للمطوّرين تمنح المالك رؤية حية لتكلفة مشاريعه.',
  },
];

interface MethodStep {
  icon: React.ReactNode;
  title: string;
  detail: string;
}

const method: MethodStep[] = [
  {
    icon: <Database />,
    title: 'التجميع',
    detail: 'هيكلة المخططات والمواصفات ومستندات النطاق في نموذج تكلفة موحّد.',
  },
  {
    icon: <Brain />,
    title: 'النمذجة',
    detail: 'حصر كميات وتسعير ومرجعية بأسعار السوق بمساعدة الذكاء الاصطناعي.',
  },
  {
    icon: <ShieldCheck />,
    title: 'التحقّق',
    detail: 'يراجع كبار مساحي الكميات والمهندسين كل بند ويستوونه.',
  },
  {
    icon: <BadgeCheck />,
    title: 'التسليم',
    detail: 'جدول كميات مسعّر جاهز للطرح وتقرير تكلفة بمسار تدقيق قابل للتتبع.',
  },
];

const sectors: string[] = [
  'سكني',
  'تجاري',
  'رعاية صحية',
  'تعليمي',
  'صناعي',
  'البنية التحتية والأشغال العامة',
  'برامج الصيانة',
  'محافظ المطوّرين',
];

const differentiators = [
  {
    icon: <Sparkles />,
    title: 'السرعة',
    detail: 'إنجاز التقديرات وجداول الكميات في جزء من الزمن التقليدي.',
  },
  {
    icon: <Boxes />,
    title: 'الدقّة',
    detail: 'حصر كميات بالذكاء الاصطناعي تراجعه مراجعة مساحية وهندسية عليا.',
  },
  {
    icon: <Layers />,
    title: 'الاتساق',
    detail: 'معيار هيكلي موحّد لكل مشروع ومحفظة وقطاع.',
  },
  {
    icon: <ShieldCheck />,
    title: 'قابلية التدقيق',
    detail: 'كل سعر وبند وتعديل قابل للتتبع حتى مصدره.',
  },
];

const StationProfilePageAr: React.FC = () => {
  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';

    const fontLinkId = 'hndasah-ar-fonts';
    if (!document.getElementById(fontLinkId)) {
      const link = document.createElement('link');
      link.id = fontLinkId;
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <>
      <Seo
        title="محطة هندسة | التقدير والمناقصات بالذكاء الاصطناعي — مجموعة نظم، السعودية"
        description="محطة هندسة — محطة التقدير والمناقصات المدعومة بالذكاء الاصطناعي ضمن مجموعة نظم. من التصميم المعماري إلى التكلفة الكاملة وجدول الكميات المسعّر، عبر البناء والبنية التحتية والصيانة وإدارة الأصول وتقنيات المطوّرين العقاريين."
        path="/station-ar"
      />
      <div dir="rtl" className="min-h-screen bg-secondary-50 text-secondary-900">
        <style>
          {`#hndasah-ar-root, #hndasah-ar-root * { font-family: 'IBM Plex Sans Arabic', 'Inter', system-ui, sans-serif !important; }
  #hndasah-ar-root h1, #hndasah-ar-root h2, #hndasah-ar-root h3, #hndasah-ar-root h4 {
    font-family: 'Amiri', 'IBM Plex Sans Arabic', serif !important;
    letter-spacing: 0 !important;
  }
  @media print {
  @page { size: A4; margin: 12mm; }
  .station-sheet { box-shadow: none !important; border: none !important; border-radius: 0 !important; }
  .station-dark { background-color: #ffffff !important; color: #0f172a !important; }
  .station-dark * { color: #334155 !important; }
  .station-dark h1, .station-dark h2, .station-dark h3 { color: #0a111b !important; }
  .station-dark .text-accent-400, .station-dark .text-accent-500, .station-dark .text-accent-600 { color: #047857 !important; }
  .print-break { break-inside: avoid; }
  body { background: #ffffff !important; }
}`}
        </style>

        <div
          id="hndasah-ar-root"
          className="station-sheet mx-auto min-h-screen max-w-5xl bg-white shadow-2xl"
        >
          {/* Cover hero */}
          <section className="station-dark relative overflow-hidden bg-navy-950 text-white">
            <div className="pointer-events-none absolute -left-32 top-0 h-[440px] w-[560px] rounded-full bg-accent-600/15 blur-[130px]" />
            <div className="pointer-events-none absolute -right-24 bottom-0 h-[320px] w-[440px] rounded-full bg-accent-500/10 blur-[120px]" />

            <div className="relative px-6 py-16 sm:px-10 md:px-14 md:py-24">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-4">
                  <img src="/logo.svg" alt="شعار محطة هندسة" className="h-12 w-auto invert" />
                  <div>
                    <p className="text-2xl font-extrabold tracking-tight text-white">
                      محطة هندسة
                    </p>
                    <p className="text-xs font-bold tracking-[0.06em] text-accent-400">
                      التقدير والمناقصات بالذكاء الاصطناعي &middot; إحدى محطات مجموعة نظم
                    </p>
                  </div>
                </div>
                <Link
                  to="/station"
                  className="rounded-full border border-white/15 px-4 py-1.5 text-sm font-medium text-secondary-300 transition-colors hover:border-accent-400 hover:text-white"
                >
                  English
                </Link>
              </div>

              <h1 className="mt-12 max-w-3xl text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl">
                من التصميم الأول إلى جدول كميات مسعّر جاهز للطرح.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-300">
                محطة واحدة ترافق المشروع في رحلة التكلفة كاملة — التصميم المعماري، التكلفة
                الكاملة للمشروع، وجدول كميات مسعّر — مدعومة بذكاء اصطناعي في التكاليف،
                ومثبتة بدقّة الهندسة.
              </p>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-7">
                {[
                  { icon: HardHat, label: 'البناء والبنية التحتية' },
                  { icon: Wrench, label: 'الصيانة وإدارة الأصول' },
                  { icon: Cpu, label: 'حلول تقنية للمطوّرين' },
                ].map(({ icon: Icon, label }) => (
                  <span key={label} className="inline-flex items-center gap-2 text-xs font-medium text-secondary-400">
                    <Icon className="h-4 w-4 text-accent-400" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* About the station */}
          <section className="px-6 py-16 sm:px-10 md:px-14 md:py-20">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="eyebrow">عن المحطة</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  مركز واحد لدورة تكلفة المشروع كاملة
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-secondary-600">
                  محطة هندسة هي وحدة التقدير والمناقصات المدعومة بالذكاء الاصطناعي ضمن مجموعة
                  نظم. ننطلق بالمشروع من أول فكرة معمارية وصولًا إلى تكلفة كاملة وجدول كميات
                  مسعّر مفصّل، ثم نرافقه حتى طرح المناقصة. وتوسّع المحطة إرث المجموعة الهندسي
                  عبر الحصر الكمي بالذكاء الاصطناعي، والتسعير بأسعار السوق، وتقنيات تكاليف
                  موجّهة للمطوّرين.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-secondary-200">
                <img
                  src="/station-overview.jpg"
                  alt="مشروع هندسي وإنشائي"
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {pipeline.map(({ icon, step, title, detail }) => (
                <div
                  key={step}
                  className="print-break relative rounded-2xl border border-secondary-200 bg-white p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-700">
                      {React.cloneElement(icon as React.ReactElement, { className: 'h-5 w-5' })}
                    </div>
                    <span className="text-sm font-extrabold tracking-tight text-secondary-300">
                      {step}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-navy-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary-600">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Capabilities */}
          <section className="px-6 py-16 sm:px-10 md:px-14 md:py-20">
            <div className="max-w-3xl">
              <p className="eyebrow">القدرات</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                أبعد من البناء — المحفظة كاملة
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-secondary-600">
                البناء ليس إلا البداية. تقدّر المحطة وتطرح المناقصات لمشاريع البنية التحتية
                وبرامج الصيانة وإدارة الأصول وأنظمة المعدات، والتقنيات التي يدير بها
                المطوّرون العقاريون أعمالهم.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {capabilities.map(({ icon, title, detail, tag }) => (
                <article
                  key={title}
                  className="print-break flex flex-col rounded-2xl border border-secondary-200 bg-white p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-700">
                      {React.cloneElement(icon as React.ReactElement, { className: 'h-6 w-6' })}
                    </div>
                    {tag && (
                      <span className="rounded-full border border-accent-600/30 px-3 py-1 text-[11px] font-bold tracking-wider text-accent-700">
                        {tag}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-navy-900">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary-600">{detail}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Method */}
          <section className="bg-secondary-50 px-6 py-16 sm:px-10 md:px-14 md:py-20">
            <div className="max-w-3xl">
              <p className="eyebrow">كيف تعمل المحطة</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                محرّك ذكاء اصطناعي، باعتماد المهندسين
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-secondary-600">
                الأتمتة تسرّع العمل؛ وكبار مساحي الكميات والمهندسون يضمنون المخرجات.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {method.map(({ icon, title, detail }) => (
                <div key={title} className="print-break rounded-2xl border border-secondary-200 bg-white p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-600 text-white">
                    {React.cloneElement(icon as React.ReactElement, { className: 'h-5 w-5' })}
                  </div>
                  <h3 className="mt-5 text-base font-bold text-navy-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary-600">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sectors + differentiators */}
          <section className="px-6 py-16 sm:px-10 md:px-14 md:py-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <p className="eyebrow">القطاعات</p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  حيث تعمل المحطة
                </h2>
                <div className="mt-7 flex flex-wrap gap-2.5">
                  {sectors.map((sector) => (
                    <span
                      key={sector}
                      className="rounded-full border border-secondary-200 bg-white px-4 py-2 text-sm font-medium text-secondary-700"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="eyebrow">لماذا المحطة</p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  بُنيت للسرعة والثقة
                </h2>
                <div className="mt-7 flex flex-col gap-4">
                  {differentiators.map(({ icon, title, detail }) => (
                    <div key={title} className="print-break flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-700">
                        {React.cloneElement(icon as React.ReactElement, { className: 'h-5 w-5' })}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy-900">{title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-secondary-600">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="station-dark bg-navy-950 px-6 py-16 text-white sm:px-10 md:px-14 md:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-bold tracking-[0.06em] text-accent-400">
                تواصل معنا
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                امنح المحطة نموذج تكلفة أو جدول كميات مسعّر
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-secondary-300">
                شارك مجموعة مخططات أو مستند نطاق أو محفظة، وتردّ المحطة بتكلفة مشروع كاملة
                وجدول كميات مسعّر — جاهز للطرح.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="print-break rounded-2xl border border-white/10 bg-white/5 p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-600 text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-bold text-white">المكتب</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary-300">
                  مكتب 10، 53165 شارع العليا
                  <br />
                  حائل، المملكة العربية السعودية
                </p>
              </div>
              <div className="print-break rounded-2xl border border-white/10 bg-white/5 p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-600 text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-bold text-white">الهاتف</h3>
                <a
                  href="tel:+966924445440"
                  className="mt-2 inline-block text-sm leading-relaxed text-secondary-300 transition-colors hover:text-white"
                >
                  924 445 440
                </a>
              </div>
              <div className="print-break rounded-2xl border border-white/10 bg-white/5 p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-600 text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-bold text-white">البريد الإلكتروني</h3>
                <a
                  href="mailto:gm@hndasah.com"
                  className="mt-2 inline-block text-sm leading-relaxed text-secondary-300 transition-colors hover:text-white"
                >
                  gm@hndasah.com
                </a>
              </div>
            </div>

            <p className="mt-10 border-t border-white/10 pt-8 text-xs italic leading-relaxed text-secondary-500">
              محطة هندسة هي وحدة تابعة لمجموعة نظم، وتقدّم خدمات استشارات التكلفة ودعم
              المناقصات والتقنيات المرتبطة بها فقط — وليست جهة مالية أو مصرفية أو أوراق
              مالية مرخّصة.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default StationProfilePageAr;
