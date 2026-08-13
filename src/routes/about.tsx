import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, CheckCircle2, XCircle, ShieldCheck } from "lucide-react";
import { buildHead, PageHeader } from "@/components/site/seo";
import { IndependenceNotice } from "@/components/site/IndependenceNotice";

export const Route = createFileRoute("/about")({
  head: () =>
    buildHead({
      title: "من نحن | منصة حماية المستهلك - توثيق شكاوى المستهلكين في الإمارات",
      description:
        "تعرّف على منصة حماية المستهلك - المنصة المستقلة لتوثيق شكاوى المستهلكين في الإمارات: رؤيتنا ومهمتنا في توثيق شكاوى المستهلكين وحمايتهم وتوفير مساحة آمنة لإيصال صوتهم للشركات الخاصة.",
      path: "/about",
      breadcrumbs: [
        { name: "الرئيسية", path: "/" },
        { name: "من نحن", path: "/about" },
      ],
    }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "مهمتنا", desc: "تمكين المستهلك من إيصال صوته وتوثيق شكواه بطريقة منظمة وشفافة مع الجهات المعنية." },
  { icon: Eye, title: "رؤيتنا", desc: "أن نكون المرجع الأول والأكثر موثوقية للمستهلكين في الإمارات لتوثيق الشكاوى تجاه القطاع الخاص." },
  { icon: Heart, title: "قيمنا", desc: "الاستقلالية، الشفافية المطلقة، احترام خصوصية البيانات، والحياد التام في التعامل." },
];

const provide = [
  "استقبال الشكاوى وتوثيقها برقم مرجعي معتمد.",
  "توجيه الشكوى إلى الشركة الخاصة المعنية بأسلوب رسميّ.",
  "متابعة الرد وإرسال التحديثات المستمرة للمستخدم.",
  "توفير مساحة آمنة وموثوقة لتوثيق تجارب المستهلكين.",
];

const dontProvide = [
  "لا نمثّل أي جهة حكومية أو قضائية في دولة الإمارات.",
  "لا نقدّم استشارات قانونية أو تمثيلًا قانونيًا رسمياً.",
  "لا نضمن حلاً محدوماً للشكوى أو الحصول على تعويض.",
  "لا نتعامل مع الشكاوى الجنائية، بل نوجّه للجهات المختصة.",
];

function AboutPage() {
  return (
    <div dir="rtl" className="relative min-h-screen overflow-hidden bg-background pt-32 pb-20 md:pt-40 md:pb-28">
      {/* 1. خلفية إضاءة وضبابية متناسقة */}
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
          className="absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[140px]"
          style={{ background: "color-mix(in srgb, var(--color-accent) 12%, transparent)" }}
        />
      </div>

      <div className="container-page relative z-10 space-y-12 md:space-y-16">
        {/* هيدر الصفحة المخصص */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <PageHeader
            eyebrow="من نحن"
            title="منصة مستقلة لخدمة وتوثيق حقوق المستهلك"
            description="نساعد المستهلكين على توثيق شكاواهم تجاه الشركات الخاصة في الإمارات بأسلوب احترافي وشفاف بعيداً عن التعقيد."
          />
        </div>

        {/* تنبيه الاستقلالية */}
        <div className="max-w-4xl mx-auto">
          <IndependenceNotice />
        </div>

        {/* قيم ومهمة المنصة (3 كروت) */}
        <section className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <article
                key={v.title}
                className="group relative rounded-3xl border border-border/80 bg-surface/70 p-7 shadow-card backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 border border-accent/20 text-accent transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-xl font-bold text-foreground">{v.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </article>
            );
          })}
        </section>

        {/* قسم قصتنا وكيف تراجع الشكاوى */}
        <section className="max-w-4xl mx-auto rounded-[32px] border border-border/80 bg-surface/80 p-8 md:p-12 shadow-card backdrop-blur-md">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">قصة المنصة</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              بدأت المنصة كمبادرة خاصة يقودها فريق يؤمن بأن المستهلك يستحق قناة واضحة
              لتوثيق تجربته مع الشركات الخاصة. لاحظنا أن كثيرًا من الشكاوى تضيع بين رسائل
              البريد الإلكتروني ومكالمات مراكز الاتصال، فقررنا بناء منصة تُبقي الشكوى موثقة
              من لحظة تقديمها وحتى الرد عليها.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              نحن كيان خاص مستقل، ولا نمثّل أي جهة حكومية. نعمل ضمن إطار الشفافية والالتزام
              بحقوق المستخدم في الخصوصية وحماية البيانات.
            </p>

            <div className="pt-6 border-t border-border/60">
              <h3 className="text-xl font-bold text-foreground mb-4">آلية مراجعة ومعالجة الشكاوى</h3>
              <ol className="grid gap-3 sm:grid-cols-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-3 bg-muted/30 p-3.5 rounded-xl border border-border/40">
                  <span className="font-mono font-bold text-accent">01</span>
                  <span>استلام الشكوى وإرسال الرقم المرجعي فوراً.</span>
                </li>
                <li className="flex items-start gap-3 bg-muted/30 p-3.5 rounded-xl border border-border/40">
                  <span className="font-mono font-bold text-accent">02</span>
                  <span>مراجعة المستندات والتفاصيل للتحقق من اكتمالها.</span>
                </li>
                <li className="flex items-start gap-3 bg-muted/30 p-3.5 rounded-xl border border-border/40">
                  <span className="font-mono font-bold text-accent">03</span>
                  <span>التواصل المباشر مع القنوات الرسمية للشركة.</span>
                </li>
                <li className="flex items-start gap-3 bg-muted/30 p-3.5 rounded-xl border border-border/40">
                  <span className="font-mono font-bold text-accent">04</span>
                  <span>تزويدك بالتحديثات خطوة بخطوة عبر البريد.</span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* نطاق خدمات المنصة: ما نقدمه وما لا نقدمه */}
        <section className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {/* ما نقدمه */}
          <div className="rounded-3xl border border-border/80 bg-surface/70 p-7 md:p-8 shadow-card backdrop-blur-md">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-emerald-600" />
              <span>نطاق خدماتنا وما نقدّمه</span>
            </h3>
            <ul className="mt-5 space-y-3.5">
              {provide.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm leading-relaxed text-foreground">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ما لا نقدمه */}
          <div className="rounded-3xl border border-border/80 bg-surface/70 p-7 md:p-8 shadow-card backdrop-blur-md">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <XCircle className="h-6 w-6 text-destructive" />
              <span>تنويهات حول حدود خدماتنا</span>
            </h3>
            <ul className="mt-5 space-y-3.5">
              {dontProvide.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm leading-relaxed text-foreground">
                  <XCircle className="mt-1 h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* شارة الأمان */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground/80 pt-4">
          <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden="true" />
          <span>منصة مستقلة تضمن التشفير وحماية سرية بيانات المستهلك</span>
        </div>
      </div>
    </div>
  );
}