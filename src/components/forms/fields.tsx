import { cn } from "@/lib/utils";
import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

const control =
  "block w-full rounded-xl border-0 bg-white px-4 py-3 text-base text-navy-900 shadow-sm ring-1 ring-inset ring-ink-300 placeholder:text-ink-500 focus:ring-2 focus:ring-inset focus:ring-teal-600";

export function Field({ label, htmlFor, hint, error, children }: { label: string; htmlFor: string; hint?: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-navy-900">{label}</label>
      {children}
      {hint && !error && <p className="mt-1.5 text-sm text-ink-600">{hint}</p>}
      {error && <p id={`${htmlFor}-error`} className="mt-1.5 text-sm font-medium text-danger-600">{error}</p>}
    </div>
  );
}

export const TextInput = (p: InputHTMLAttributes<HTMLInputElement>) => <input {...p} className={cn(control, p.className)} />;
export const SelectInput = (p: SelectHTMLAttributes<HTMLSelectElement>) => <select {...p} className={cn(control, "pr-10", p.className)} />;
export const TextArea = (p: TextareaHTMLAttributes<HTMLTextAreaElement>) => <textarea {...p} className={cn(control, "min-h-36", p.className)} />;

export function CheckboxRow({ id, name, value, label, checked, onChange, required }: { id: string; name: string; value: string; label: string; checked: boolean; onChange: (v: boolean) => void; required?: boolean }) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-start gap-3 rounded-xl p-2 hover:bg-sky-50">
      <input id={id} type="checkbox" name={name} value={value} checked={checked} required={required} onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-5 w-5 shrink-0 rounded border-ink-300 text-teal-700 focus:ring-teal-600" />
      <span className="text-sm leading-6 text-ink-700">{label}</span>
    </label>
  );
}

export function Honeypot() {
  // Hidden field that real visitors never fill in. Many spam bots do.
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>Leave this field empty<input type="text" name="company_website" tabIndex={-1} autoComplete="off" /></label>
    </div>
  );
}

export function FormMessage({ status, message }: { status: string; message?: string }) {
  if (status === "success") {
    return <div role="status" className="rounded-xl bg-teal-50 p-4 text-sm font-medium text-teal-800 ring-1 ring-inset ring-teal-200">Thank you! We've got it. We'll be in touch.</div>;
  }
  if (status === "error" || status === "unconfigured") {
    return <div role="alert" className="rounded-xl bg-danger-50 p-4 text-sm font-medium text-danger-600 ring-1 ring-inset ring-danger-200">{message}</div>;
  }
  return null;
}
