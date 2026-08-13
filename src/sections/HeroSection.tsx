"use client";

import React from "react";
import { Link } from "@tanstack/react-router"; 
import { 
  FileText, 
  ArrowLeft, 
  Clock,
  CheckCircle2,
  Lock
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-background text-foreground">
      
      {/* خلفية إضاءة ضبابية */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/15 rounded-full blur-[150px] opacity-70" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 space-y-4 relative z-10">
        
        {/* 🌟 البانر الذهبي المطابق للصورة تماماً */}
        <div 
          dir="rtl" 
          className="relative overflow-hidden rounded-2xl px-8 py-12 sm:px-16 sm:py-16 shadow-sm bg-[rgb(212,185,110)] text-white flex items-center justify-start min-h-[180px] sm:min-h-[220px]"
        >
          {/* العنوان في أقصى اليمين تماماً */}
          <div className="relative z-10 text-right w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight m-0 text-white leading-none">
              الإبلاغ عن الاحتيال
            </h1>
          </div>

          {/* الزخارف الإسلامية الناعمة في أقصى اليسار */}
          <div className="absolute left-0 top-0 bottom-0 w-2/5 sm:w-1/3 pointer-events-none overflow-hidden z-0 flex items-center justify-start opacity-30 text-white">
            <svg 
              className="h-full w-auto block transform -translate-x-6 scale-125" 
              viewBox="0 0 300 200" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* وحدات النجمة الثمانية الإسلامية الناعمة */}
                <g id="arabic-star">
                  <path d="M 50,0 L 64.6,14.6 L 85.3,14.6 L 85.3,35.3 L 100,50 L 85.3,64.6 L 85.3,85.3 L 64.6,85.3 L 50,100 L 35.3,85.3 L 14.6,85.3 L 14.6,64.6 L 0,50 L 14.6,35.3 L 14.6,14.6 L 35.3,14.6 Z" />
                  <path d="M 50,12.5 L 61.2,23.7 L 77.5,23.7 L 77.5,40 L 88.7,50 L 77.5,60 L 77.5,76.3 L 61.2,76.3 L 50,87.5 L 38.8,76.3 L 22.5,76.3 L 22.5,60 L 11.3,50 L 22.5,40 L 22.5,23.7 L 38.8,23.7 Z" opacity="0.6" />
                  <circle cx="50" cy="50" r="15" opacity="0.5" />
                  <circle cx="50" cy="50" r="28" opacity="0.4" />
                </g>
              </defs>

              {/* توزيع النجوم بنفس تكوين الصورة */}
              <use href="#arabic-star" x="-10" y="20" transform="scale(1.7)" />
              <use href="#arabic-star" x="90" y="-10" transform="scale(0.9)" />
              <use href="#arabic-star" x="120" y="80" transform="scale(0.85)" />
              <use href="#arabic-star" x="40" y="130" transform="scale(0.95)" />
              <use href="#arabic-star" x="-20" y="-30" transform="scale(1.1)" />
            </svg>
          </div>
        </div>

        {/* النص التعريفي */}
        <div dir="rtl" className="w-full space-y-3 text-right leading-relaxed bg-background/60 dark:bg-card/40 py-6 px-6 sm:px-10 rounded-3xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] backdrop-blur-xl mt-6">
          <p className="font-semibold text-foreground text-base sm:text-lg">
            تلتزم دائرة التنمية الاقتصادية بضمان أن تتم جميع أعمال الدائرة وفقاً لمعايير أخلاقية ومهنية وقانونية صارمة.
          </p>
          
          <p className="text-muted-foreground text-sm sm:text-base">
            ان هذه الوسيلة هي آلية لقيام المتعاملين بالإبلاغ عن المخالفات التي تواجههم مع الدائرة بكل شفافية ومصداقية، مع العلم بأن هذا البلاغ سيتم التعامل معه بفاعلية وسرية تامة.
          </p>
          
          <p className="text-gray-400 dark:text-muted-foreground/80 text-sm sm:text-base my-2">
            يمكنك أن تظل مجهول الهوية إذا كنت ترغب في ذلك ولكننا نشجعك على تزويدنا بتفاصيل الاتصال الخاصة بك حتى نتمكن من إبلاغك عن التقدم المحرز في البلاغ الخاص بك، وكذلك طلب المزيد من المعلومات التي من شأنها أن تساعد في التحقيق، تذكر أن المزيد من المعلومات التي يمكن أن تقدمها، سوف تساعدنا على معالجة البلاغ بكفاءة وفعالية. لذا يرجى تقديم أكبر قدر ممكن من المعلومات التفصيلية.
          </p>
        </div>

        {/* الأزرار */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/"
            hash="complaint-form"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-bold text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <FileText className="h-5 w-5 shrink-0" />
            <span>تقديم بلاغ جديد</span>
            <ArrowLeft className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-x-1" />
          </Link>

          <Link
            to="/how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border border-white/20 dark:border-white/10 bg-background/50 hover:bg-muted/80 text-foreground font-semibold text-base transition-all duration-200 backdrop-blur-md active:scale-98 shadow-sm"
          >
            <span>دليل الاستخدام</span>
          </Link>
        </div>

        {/* الإحصائيات */}
       

      </div>
    </section>
  );
}

export default HeroSection;