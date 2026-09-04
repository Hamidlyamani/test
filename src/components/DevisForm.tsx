"use client";

import { useState, type FormEvent } from "react";
import { business } from "@/lib/business";

const needs = [
  "Réfection complète de toiture",
  "Réparation / recherche de fuite",
  "Zinguerie",
  "Démoussage et hydrofuge",
  "Isolation de combles",
  "Autre demande",
];

export default function DevisForm({
  id,
  variant = "light",
}: {
  id?: string;
  variant?: "light" | "dark" | "glass";
}) {
  const [sent, setSent] = useState(false);
  const dark = variant === "dark";
  const glass = variant === "glass";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div
        id={id}
        className={
          glass
            ? "bg-white p-6 text-sm text-ink sm:p-8"
            : dark
            ? "border border-blue/30 bg-blue p-6 text-sm text-white sm:p-8"
            : "border border-blue/20 bg-blue/5 p-6 text-sm text-ink sm:p-8"
        }
      >
        <p className="font-display text-lg font-semibold text-ink">
          Demande envoyée — merci.
        </p>
        <p className="mt-2 text-slate">
          Nous revenons vers vous sous 48 heures. Pour une fuite active, appelez directement le{" "}
          <a href={business.phoneHref} className="font-semibold text-blue underline">
            {business.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  const fieldClass = glass
    ? "w-full border border-black/30 bg-white px-3 py-2 text-sm text-ink outline-none placeholder:text-slate/60 focus:border-blue"
    : dark
    ? "w-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/35 focus:border-blue"
    : "w-full border border-slate-light bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-blue";
  const labelClass = glass
    ? "mb-1 block text-sm font-medium text-ink"
    : dark
    ? "mb-1 block text-sm font-medium text-white"
    : "mb-1 block text-sm font-medium text-ink";

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={
        glass
          ? "grid grid-cols-1 gap-4  bg-white p-6 pt-20 sm:grid-cols-2 sm:p-8"
          : dark
          ? "grid grid-cols-1 gap-4 border border-white/15 bg-white/5 p-6 backdrop-blur sm:grid-cols-2 sm:p-8"
          : "grid grid-cols-1 gap-4 border border-slate-light bg-white p-6 sm:grid-cols-2 sm:p-8"
      }
    >
      <div className="sm:col-span-1">
        <label htmlFor="name" className={labelClass}>
          Nom
        </label>
        <input id="name" name="name" type="text" required className={fieldClass} placeholder="Votre nom" />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="phone" className={labelClass}>
          Téléphone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className={fieldClass}
          placeholder="06 12 34 56 78"
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="need" className={labelClass}>
          Type de besoin
        </label>
        <select id="need" name="need" required className={fieldClass} defaultValue="">
          <option value="" disabled>
            Sélectionnez une prestation
          </option>
          {needs.map((need) => (
            <option key={need} value={need} className="text-ink">
              {need}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelClass}>
          Votre message (facultatif)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className={fieldClass}
          placeholder="Adresse du chantier, ce que vous avez constaté, une photo à envoyer par mail si besoin..."
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="btn-skew w-full bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-dark sm:w-auto"
        >
          Demander mon devis gratuit
        </button>
        <p className={glass ? "mt-2 text-xs text-slate" : dark ? "mt-2 text-xs text-white/50" : "mt-2 text-xs text-slate"}>
          Réponse sous 48 h. Aucun engagement. Urgence fuite : appelez le {business.phone}.
        </p>
      </div>
    </form>
  );
}
