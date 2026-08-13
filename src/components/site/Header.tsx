"use client";

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { 
  Menu, 
  X, 
  ShieldAlert, 
  Home, 
  Info, 
  HelpCircle, 
  PhoneCall, 
  Layers,
  ChevronLeft
} from "lucide-react";

const navItems = [
  { to: "/", label: "الرئيسية", icon: Home },
  { to: "/about", label: "من نحن", icon: Info },
  { to: "/how-it-works", label: "كيف تعمل المنصة", icon: Layers },
  { to: "/faq", label: "الأسئلة الشائعة", icon: HelpCircle },
  { to: "/contact", label: "تواصل معنا", icon: PhoneCall },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* هيدر عائم بإطار دائري وتصميم عصري */}
      <header className="fixed top-4 inset-x-0 z-50 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="relative flex items-center justify-between h-20 px-6 rounded-2xl bg-background/70 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] transition-all duration-300">
          
          {/* 1. شعار المنصة - مباشر بدون خلفية أو حواف */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group shrink-0"
          >
            <img 
              src="/sanadk.png" 
              alt="شعار منصة حماية المستهلك" 
              className="h-10 sm:h-12 md:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              fetchPriority="high"
              decoding="async"
            />
          </Link>

          {/* 2. روابط التنقل للـ Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground group"
                activeProps={{ 
                  className: "text-primary font-bold" 
                }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {/* خط سفلي متحرك للرابط النشط */}
                    {isActive && (
                      <span className="absolute bottom-0 inset-x-3 h-0.5 bg-primary rounded-full layout-id" />
                    )}
                  </>
                )}
              </Link>
            ))}
          </nav>

          {/* 3. الإجراءات الفرعية ورابط تقديم الشكوى */}
          <div className="flex items-center gap-3">
            
            {/* زر الشكوى - تصميم متوهج وبارز */}
            <Link
              to="/"
              hash="complaint-form"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs sm:text-sm font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <ShieldAlert className="h-4 w-4 animate-pulse" />
              <span>تقديم شكوى</span>
            </Link>

            {/* زر فتح القائمة الجانبية للموبايل */}
            <button
              type="button"
              className="p-2.5 rounded-xl bg-muted/60 hover:bg-muted text-foreground md:hidden transition-colors focus:outline-none"
              aria-label="القائمة البرمجية"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

        </div>
      </header>

      {/* 4. قائمة الموبايل الجانبية (Slide-over Drawer) */}
      <div 
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside 
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-background p-6 shadow-2xl transition-transform duration-300 ease-out md:hidden flex flex-col justify-between ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="space-y-6">
          {/* هيدر القائمة الجانبية */}
          <div className="flex items-center justify-between pb-4 border-b border-border">
            <img 
              src="/sanadk.png" 
              alt="شعار منصة حماية المستهلك" 
              className="h-10 w-auto object-contain" 
            />
            <button
              type="button"
              className="p-2 rounded-lg bg-muted text-foreground hover:bg-muted/80 transition-colors"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* روابط التنقل الموبايل */}
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all font-medium text-sm group"
                  activeProps={{ className: "bg-primary/10 text-primary font-bold" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 opacity-80" />
                    <span>{item.label}</span>
                  </div>
                  <ChevronLeft className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* زر الشكوى في أسفل القائمة الجانبية */}
        <div className="pt-6 border-t border-border">
          <Link
            to="/"
            hash="complaint-form"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-lg shadow-primary/20 active:scale-98 transition-all"
          >
            <ShieldAlert className="h-4 w-4" />
            <span>تقديم شكوى جديدة</span>
          </Link>
        </div>
      </aside>
    </>
  );
}