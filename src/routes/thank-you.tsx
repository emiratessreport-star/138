import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  Clock3,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { buildHead } from "@/components/site/seo";

export const Route = createFileRoute("/thank-you")({
  head: () =>
    buildHead({
      title: "تم استلام شكواك بنجاح | منصة حماية المستهلك",
      description:
        "شكرًا لتقديم شكواك عبر منصة حماية المستهلك تم استلام الطلب وبدأت عملية المراجعة.",
      path: "/thank-you",
    }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <section dir="rtl" className="relative min-h-screen overflow-hidden bg-background pt-28 pb-16 md:pt-36 md:pb-24">
      {/* 1. خلفية الضوء والشبكة المعتمدة في الهيرو */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, var(--color-foreground) 0px, var(--color-foreground) 1px, transparent 1px, transparent 28px), repeating-linear-gradient(90deg, var(--color-foreground) 0px, var(--color-foreground) 1px, transparent 1px, transparent 28px)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/4 h-[450px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[140px]"
          style={{ background: "color-mix(in srgb, var(--color-accent) 15%, transparent)" }}
        />
      </div>

      <div className="relative z-10 container-page flex items-center justify-center">
        <div className="w-full max-w-3xl">
          
          {/* أيقونة النجاح الفخمة */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 scale-150 rounded-full bg-success/15 blur-2xl" />
              <div className="relative grid h-24 w-24 place-items-center rounded-full border border-success/30 bg-success/10 shadow-soft backdrop-blur-md">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-success text-white shadow-card">
                  <Check className="h-8 w-8" strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>

          {/* العنوان والمحتوى الرئيسي */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-1.5 text-xs sm:text-sm font-bold text-success backdrop-blur-sm">
              <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>تم تسجيل الطلب بنجاح</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-tight">
              شكواك وصلت إلينا بنجاح
            </h1>

            <p className="mx-auto max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
              شكرًا لثقتك بـ{" "}
              <span className="font-bold text-accent">منصة حماية المستهلك</span>
              . تم استلام شكواك، وبدأت عملية المراجعة والتحقق بواسطة الفريق المختص.
            </p>
          </div>

          {/* بطاقة حالة الطلب الزجاجية */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-border/80 bg-surface/80 shadow-card backdrop-blur-md">
            <div className="border-b border-border/60 bg-muted/30 px-6 py-5 md:px-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-muted-foreground">حالة الطلب الحالية</p>
                  <p className="mt-1 text-lg font-extrabold text-foreground">قيد المراجعة والتدقيق</p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent shrink-0">
                  <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* خطوات معالجة الشكوى */}
            <div className="px-6 py-8 md:px-8">
              <div className="grid gap-8 md:grid-cols-3">
                {/* الخطوة 1 */}
                <div className="relative">
                  <div className="flex items-start gap-3.5">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-success text-white shadow-sm">
                      <Check className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm">تم استلام الشكوى</p>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        تم حفظ وثائقك وبياناتك بنجاح
                      </p>
                    </div>
                  </div>
                  <div className="absolute right-10 top-5 hidden h-px w-[calc(100%-32px)] border-t border-dashed border-success/40 md:block" />
                </div>

                {/* الخطوة 2 */}
                <div className="relative">
                  <div className="flex items-start gap-3.5">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-accent/40 bg-accent/10 text-accent font-bold shadow-sm">
                      <Clock3 className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm">قيد المراجعة</p>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        جارٍ التحقق من الأطراف والبيانات
                      </p>
                    </div>
                  </div>
                  <div className="absolute right-10 top-5 hidden h-px w-[calc(100%-32px)] border-t border-dashed border-border md:block" />
                </div>

                {/* الخطوة 3 */}
                <div>
                  <div className="flex items-start gap-3.5">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-muted text-muted-foreground">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground/70 text-sm">متابعة الإجراءات</p>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        تحديثات فورية عبر البريد الإلكتروني
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* تنويه البريد الإلكتروني */}
          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-border/80 bg-surface/60 px-5 py-4 shadow-soft sm:flex-row sm:items-center sm:justify-between backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold text-foreground">تفقّد بريدك الإلكتروني</p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                  تم إرسال الرقم المرجعي للطلب لتتمكن من متابعة حالة الشكوى لاحقاً.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs font-bold text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-xl shrink-0 self-start sm:self-auto">
              <Clock3 className="h-4 w-4" aria-hidden="true" />
              <span>خلال 24 ساعة عمل</span>
            </div>
          </div>

          {/* أزرار الإجراءات */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>العودة للصفحة الرئيسية</span>
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          {/* طمأنة وتوثيق الأمان */}
          <div className="mt-10 flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground/80">
            <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden="true" />
            <span>جميع البيانات المقدمة خاضعة لسريّة التشفير الحكومي المعيارية</span>
          </div>

        </div>
      </div>
    </section>
  );
}