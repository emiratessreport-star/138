import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Search, Send, Bell, ArrowLeft, ShieldCheck, CheckCircle2 } from "lucide-react";
import { buildHead, PageHeader } from "@/components/site/seo";

const steps = [
  {
    icon: FileText,
    stepNumber: "01",
    title: "تعبئة نموذج الشكوى",
    desc: "أدخل بياناتك واسم الشركة وتفاصيل واضحة عن الشكوى. كل ما تحتاجه هو دقائق قليلة من وقتك.",
  },
  {
    icon: Search,
    stepNumber: "02",
    title: "مراجعة الشكوى والتحقق",
    desc: "يقوم فريقنا المختص بمراجعة المحتوى والوثائق للتحقق من اكتمال البيانات ومطابقتها للشروط.",
  },
  {
    icon: Send,
    stepNumber: "03",
    title: "توجيه الشكوى للجهة المعنية",
    desc: "نُرسل الشكوى مباشرة إلى الجهات والشركات المعنية عبر القنوات الرسمية والموثوقة.",
  },
  {
    icon: Bell,
    stepNumber: "04",
    title: "متابعة وإشعارات فورية",
    desc: "تصلك التحديثات لحظة بلحظة عبر بريدك الإلكتروني مع الاحتفاظ بالرقم المرجعي الخاص بك.",
  },
];

export const Route = createFileRoute("/how-it-works")({
  head: () =>
    buildHead({
      title: "كيف تعمل المنصة | منصة حماية المستهلك",
      description:
        "تعرف على كيفية تقديم وتوثيق الشكاوى عبر منصة حماية المستهلك خطوة بخطوة: من تعبئة النموذج وحتى متابعة الرد واستلام الإشعارات.",
      path: "/how-it-works",
      breadcrumbs: [
        { name: "الرئيسية", path: "/" },
        { name: "كيف تعمل المنصة", path: "/how-it-works" },
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "طريقة تقديم وتوثيق شكوى عبر منصة حماية المستهلك",
        description: "خطوات بسيطة وشفافة لتقديم شكوى ضد الشركات في المنصة.",
        step: steps.map((s, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: s.title,
          itemListElement: [
            {
              "@type": "HowToDirection",
              text: s.desc,
            },
          ],
        })),
      },
    }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <div dir="rtl" className="relative min-h-screen overflow-hidden bg-background pt-32 pb-20 md:pt-40 md:pb-28">
      {/* 1. خلفية إضاءة ضبابية ونقاط أمان دقيقة */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, var(--color-foreground) 0px, var(--color-foreground) 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, var(--color-foreground) 0px, var(--color-foreground) 1px, transparent 1px, transparent 32px)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/4 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[140px]"
          style={{ background: "color-mix(in srgb, var(--color-accent) 12%, transparent)" }}
        />
      </div>

      <div className="container-page relative z-10 space-y-12 md:space-y-16">
        {/* هيدر الصفحة المخصص مع المحاذاة والتباعد الممتاز */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <PageHeader
            eyebrow="آلية العمل المعتمدة"
            title="من الفكرة إلى حسم الشكوى… خطوة بخطوة"
            description="صمّمنا سير العمل ليكون واضحاً وشفافاً وسريعاً، مما يُبقيك على اطلاع كامل بجميع مراحل معالجة طلبك."
          />
        </div>

        {/* شبكة الخطوات مع تأثيرات الإطار والتصميم الحديث */}
        <ol className="grid gap-6 md:grid-cols-2 lg:gap-8 max-w-5xl mx-auto">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <li
                key={s.stepNumber}
                className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-surface/70 p-7 md:p-8 shadow-card backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xl font-extrabold text-accent/60 group-hover:text-accent transition-colors">
                      {s.stepNumber}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-foreground tracking-tight">{s.title}</h2>
                  <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground font-normal">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/40 flex items-center gap-2 text-xs font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>مرحلة موثقة في النظام</span>
                </div>
              </li>
            );
          })}
        </ol>

        {/* كارت الدعوة للبدء بأسلوب فاخر (Call to Action Card) */}
        <div className="max-w-4xl mx-auto rounded-[32px] border border-border bg-gradient-to-b from-surface/90 to-surface/50 p-8 sm:p-12 text-center shadow-card backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-xs font-bold">
              <ShieldCheck className="h-4 w-4" />
              <span>خدمة مجانية ومعتمدة 100%</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-foreground tracking-tight">
              هل أنت جاهز لتقديم شكواك الآن؟
            </h2>

            <p className="mx-auto max-w-lg text-sm sm:text-base text-muted-foreground leading-relaxed">
              تأخذ العملية دقائق معدودة فقط. قدّم كافة المستندات والتفاصيل وسيقوم فريقنا بمتابعتها فوراً.
            </p>

            <div className="pt-4">
              <Link
                to="/"
                hash="complaint-form"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>تقديم شكوى جديدة</span>
                <ArrowLeft className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}