"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "ready" | "error";

// text-base (16px) prevents iOS Safari auto-zoom when an input is focused
const fieldClass =
  "w-full rounded-sm border border-border bg-white px-3.5 py-2.5 text-base text-black outline-none transition placeholder:text-zinc-400 focus:border-black";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Full Detail");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !message.trim()) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(
      `Gloss Auto booking enquiry: ${service}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name.trim()}`,
        `Phone: ${phone.trim()}`,
        `Email: ${email.trim() || "n/a"}`,
        `Service: ${service}`,
        "",
        message.trim(),
      ].join("\n"),
    );

    window.location.href = `${site.emailMailto}?subject=${subject}&body=${body}`;
    setStatus("ready");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="rounded-sm border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950">
        <p className="font-semibold">Prototype: final features to come</p>
        <p className="mt-1 text-amber-900/80">
          This is a working prototype built to show what Gloss Auto looks like
          online. The final site can add direct calendar scheduling for
          bookings, an enquiries dashboard that collects every message sent
          from this page, or manual email replies. Kept simple for now, so the
          final choice is yours.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" required>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
            placeholder="Your name"
            required
          />
        </Field>
        <Field label="Phone" htmlFor="phone" required>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={fieldClass}
            placeholder="04xx xxx xxx"
            required
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={fieldClass}
            placeholder="you@email.com"
          />
        </Field>
        <Field label="Service" htmlFor="service">
          <select
            id="service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={fieldClass}
          >
            <option>Exterior Detail</option>
            <option>Interior Detail</option>
            <option>Full Detail</option>
            <option>Cut & Polish</option>
            <option>Not sure yet</option>
          </select>
        </Field>
      </div>

      <Field label="Message" htmlFor="message" required>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${fieldClass} resize-y`}
          placeholder="Car type, location, preferred day/time..."
          required
        />
      </Field>

      {status === "error" ? (
        <p className="text-sm text-red-600" role="alert">
          Please add your name, phone, and a short message.
        </p>
      ) : null}
      {status === "ready" ? (
        <p className="text-sm text-zinc-600" role="status">
          Opening your email app. If nothing opens, call{" "}
          <a href={site.phoneTel} className="underline">
            {site.phoneDisplay}
          </a>
          .
        </p>
      ) : null}

      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center rounded-sm bg-black px-6 font-display text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-zinc-800 sm:w-auto"
      >
        Send enquiry
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm" htmlFor={htmlFor}>
      <span className="mb-1.5 block font-medium text-zinc-800">
        {label}
        {required ? <span className="text-zinc-400"> *</span> : null}
      </span>
      {children}
    </label>
  );
}
