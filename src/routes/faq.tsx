import { createFileRoute, Link } from "@tanstack/react-router";
import { buildHead, PageHeader } from "@/components/site/seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageSquare, ArrowLeft, ShieldCheck } from "lucide-react";

const faqs = [
  {
    q: "هل هذه المنصة تابعة لجهة حكومية في الإمارات؟",
    a: "لا. المنصة خاصة ومستقلة تمامًا، ولا تمثل أي جهة حكومية أو رسمية في الدولة، بل تعمل كوسيط رقمي وتوثيقي لضمان حماية حقوق المستهلك.",
  },
  {
    q: "ما نوع الشكاوى التي تقبلها المنصة؟",
    a: "نستقبل الشكاوى المتعلقة بالشركات الخاصة في قطاعات مثل الاتصالات، التسوق الإلكتروني، العقارات، الطيران، الخدمات المالية الخاصة، وغيرها.",
  },
  {
    q: "هل خدمة تقديم الشكوى مجانية؟",
    a: "نعم، تقديم الشكوى عبر المنصة مجاني بالكامل للمستهلكين ولا يتم فرض أي رسوم على تقديم الطلبات.",
  },
  {
    q: "كم يستغرق الرد على الشكوى؟",
    a: "نقوم بمراجعة الشكوى والتحقق منها خلال 24 ساعة عمل عادةً، بينما يعتمد وقت الرد النهائي والحل على الشركة المعنية وطبيعة الشكوى.",
  },
  {
    q: "هل تضمنون حل المشكلة؟",
    a: "لا نقدم أي ضمان بحل الشكوى أو الحصول على تعويض. دورنا هو التوثيق المعتمد وتوصيل الشكوى إلى الإدارات المعنية ومتابعتها بشكل احترافي.",
  },
  {
    q: "كيف تحمي المنصة بياناتي الشخصية؟",
    a: "نلتزم بأعلى معايير حماية البيانات وتشفيرها، ولا نشارك معلوماتك مع أي طرف باستثناء ما هو ضروري لمعالجة الشكوى مع الجهة المعنية.",
  },
  {
    q: "هل يمكنني تعديل أو حذف شكواي؟",
    a: "نعم، يمكنك التواصل معنا عبر البريد الإلكتروني للمطالبة بتعديل أو حذف بياناتك وفقًا لسياسة الخصوصية المعمول بها.",
  },
  {
    q: "هل تتعاملون مع الشكاوى ضد جهات حكومية؟",
    a: "لا، المنصة مخصصة للشكاوى ضد الشركات الخاصة فقط. للشكاوى ضد الجهات الحكومية يُرجى التوجه مباشرة إلى القنوات الرسمية المعتمدة.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () =>
    buildHead({
      title: "الأسئلة الشائعة | منصة حماية المستهلك",
      description:
        "إجابات مفصلة وشاملة عن أكثر الأسئلة شيوعًا حول منصة حماية المستهلك: كيفية تقديم الشكاوى، شروط الخدمة، والخصوصية.",
      path: "/faq",
      breadcrumbs: [
        { name: "الرئيسية", path: "/" },
        { name: "الأسئلة الشائعة", path: "/faq" },
      ],
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    }),
  component: FaqPage,
});

function FaqPage() {
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
          className="absolute left-1/2 top-1/3 h-[450px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[140px]"
          style={{ background: "color-mix(in srgb, var(--color-accent) 12%, transparent)" }}
        />
      </div>

      <div className="container-page relative z-10 space-y-10 md:space-y-14">
        {/* هيدر الصفحة المخصص */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <PageHeader
            eyebrow="الأسئلة الشائعة"
            title="إجابات واضحة لأكثر استفساراتكم شيوعاً"
            description="جمعنا لكم أهم التساؤلات التي تصلنا حول آلية عمل المنصة والخدمات المتاحة وحماية حقوقكم."
          />
        </div>

        {/* قائمة الأسئلة بالأكورديون الفاخر */}
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-2xl border border-border/80 bg-surface/70 px-6 py-1 shadow-card backdrop-blur-md transition-all duration-200 hover:border-accent/40"
              >
                <AccordionTrigger className="text-right text-base sm:text-lg font-bold text-foreground hover:no-underline py-5 leading-snug">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-accent shrink-0 hidden sm:inline" />
                    <span>{f.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed text-muted-foreground pb-5 pt-1 border-t border-border/40 font-normal">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* كارت المساعدة الإضافية سفلي */}
        <div className="max-w-3xl mx-auto rounded-3xl border border-border bg-gradient-to-b from-surface/90 to-surface/50 p-8 text-center shadow-card backdrop-blur-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-right">
            <div className="space-y-1 text-center sm:text-right">
              <h3 className="text-xl font-extrabold text-foreground flex items-center justify-center sm:justify-start gap-2">
                <MessageSquare className="h-5 w-5 text-accent" />
                <span>لم تجد إجابة لسؤالك؟</span>
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                فريق الدعم الفني متواجد لمساعدتك والإجابة على كافة استفساراتك.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-md hover:shadow-lg transition-all shrink-0"
            >
              <span>تواصل معنا</span>
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* شارة توثيق الأمان */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground/80 pt-4">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          <span>منصة معتمدة لحماية وتوثيق حقوق المستهلكين</span>
        </div>
      </div>
    </div>
  );
}