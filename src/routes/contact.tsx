import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Clock, Timer, HelpCircle, ShieldCheck } from "lucide-react";
import { buildHead, PageHeader } from "@/components/site/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildHead({
      title: "تواصل معنا | منصة حماية المستهلك",
      description:
        "تواصل مع فريق الدعم الفني لـ منصة حماية المستهلك المستقلة عبر البريد الإلكتروني. نرد على استفساراتكم وملاحظاتكم خلال 24 ساعة عمل.",
      path: "/contact",
      breadcrumbs: [
        { name: "الرئيسية", path: "/" },
        { name: "تواصل معنا", path: "/contact" },
      ],
    }),
  component: ContactPage,
});

const CONTACT_EMAIL = "moetshakawi-uae@gmail.com";

function ContactPage() {
  return (
    <div dir="rtl" className="relative min-h-screen overflow-hidden bg-background pt-32 pb-20 md:pt-40 md:pb-28">
      {/* 1. خلفية الضوء والشبكة المعتمدة */}
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
          className="absolute left-1/2 top-1/3 h-[450px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[140px]"
          style={{ background: "color-mix(in srgb, var(--color-accent) 12%, transparent)" }}
        />
      </div>

      <div className="container-page relative z-10 space-y-10 md:space-y-14">
        {/* هيدر الصفحة المخصص */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <PageHeader
            eyebrow="تواصل معنا"
            title="نحن هنا للإجابة على استفساراتك"
            description="سواء كنت بحاجة إلى مساعدة في تقديم شكوى، أو لديك سؤال عام، يسعدنا التواصل معك عبر قنواتنا الرسمية."
          />
        </div>

        {/* شبكة كروت معلومات التواصل */}
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <InfoCard icon={Mail} title="البريد الإلكتروني الرسمي">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              dir="ltr"
              className="inline-block font-mono text-base font-bold text-accent hover:underline transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </InfoCard>

          <InfoCard icon={Clock} title="ساعات العمل والدعم">
            <p className="font-medium text-foreground">من الأحد إلى الخميس</p>
            <p className="mt-1 text-xs text-muted-foreground">
              9:00 صباحًا – 6:00 مساءً (بتوقيت دولة الإمارات)
            </p>
          </InfoCard>

          <InfoCard icon={Timer} title="زمن الرد المتوقع">
            <p className="font-medium text-foreground">استجابة سريعة ودقيقة</p>
            <p className="mt-1 text-xs text-muted-foreground">
              يتم الرد على جميع الاستفسارات خلال <span className="font-bold text-accent">24 ساعة عمل</span> من استلام الرسالة.
            </p>
          </InfoCard>

          <InfoCard icon={HelpCircle} title="الأسئلة الشائعة">
            <p className="font-medium text-foreground">تبحث عن إجابة فورية؟</p>
            <p className="mt-1 text-xs text-muted-foreground">
              استكشف{" "}
              <Link to="/faq" className="font-bold text-accent underline hover:text-accent/80 transition-colors">
                صفحة الأسئلة الشائعة
              </Link>{" "}
              للحصول على إجابات مباشرة لأكثر الاستفسارات تكراراً.
            </p>
          </InfoCard>
        </div>

        {/* طمأنة الأمان في أسفل الصفحة */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground/80 pt-4">
          <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden="true" />
          <span>تواصلك معنا محمي ومشفر بأعلى معايير الخصوصية</span>
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Mail;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative rounded-3xl border border-border/80 bg-surface/70 p-6 md:p-8 shadow-card backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft">
      <div className="flex items-center gap-4 mb-4">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 border border-accent/20 text-accent transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
      </div>
      <div className="text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}