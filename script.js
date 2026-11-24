/* Relais landing page: language toggle (EN default, FR) and sign-up form. */

(function () {
  "use strict";

  /* ------------------------------------------------------------------
     CONFIG
     Leave FORM_ENDPOINT empty to run in demo mode: the form only shows
     the thank-you screen. To collect real sign-ups, create a free form
     on https://formspree.io and paste its URL here, e.g.
     "https://formspree.io/f/abcdwxyz".
  ------------------------------------------------------------------ */
  var FORM_ENDPOINT = "";

  /* French copy. English lives in index.html and is read from the page. */
  var FR = {
    skip: "Aller au contenu",
    cta: "Ça m'intéresse",
    nav_how: "Comment ça marche",
    nav_benefits: "Ce que vous y gagnez",
    nav_faq: "Questions",

    hero_tag: "Pour les juniors et les nouveaux arrivants",
    hero_title: "La personne qui avait la réponse vient de partir. Posez-lui quand même la question.",
    hero_sub: "Relais vous met en relation avec d'anciens collègues expérimentés qui donnent bénévolement 45 minutes pour répondre à vos vraies questions de travail, et qui apprennent aussi quelque chose de vous en retour.",
    hero_secondary: "Voir comment ça marche",
    assure1: "Gratuit pour vous pendant ce test",
    assure2: "45 minutes, sans devoirs",
    assure3: "Deux minutes pour s'inscrire",
    alt_hero: "Une jeune professionnelle discute avec un collègue expérimenté aux cheveux gris autour d'une table, dans un bureau lumineux",

    card_label: "Votre demande a été acceptée",
    card_team: "Alumni Expert, ancien directeur des programmes",
    card_question: "Comment présenter une émission de prime time au comité de direction\u00a0?",
    card_slot: "Mar. 10h00",
    card_back_label: "Vous lui apprendrez",
    card_back_value: "Le montage vidéo avec l'IA",
    card_change: "Changer d'horaire",
    card_confirm: "Confirmer la séance",

    emp_title: "Certaines réponses ne sont pas dans le manuel.",
    emp_body: "Comment présenter au comité de direction pour la première fois\u00a0? Comment négocier avec un fournisseur qui augmente sans cesse ses prix\u00a0? De quels droits a-t-on besoin pour un documentaire\u00a0? La personne qui connaissait la réponse a fait sa passation en trois jours et est partie avec son badge dans un carton. Il ne vous reste qu'à deviner, ou à déranger un manager déjà débordé.",
    hb_query: "présenter au comité, première fois",
    hb_none: "0 résultat dans le manuel de l'équipe",
    hb_hint: "Dernière modification par quelqu'un parti en mars.",
    alt_empathy: "Une jeune professionnelle, une tasse de café à la main, regarde par la fenêtre du bureau, pensive",

    how_title: "Comment ça marche",
    how_sub: "Trois étapes, depuis les outils que vous utilisez déjà.",
    how1_title: "Demandez",
    how1_body: "Publiez une vraie question de travail depuis les outils que vous utilisez déjà\u00a0: sujet, contexte, échéance.",
    v1_label: "Nouvelle demande aux Alumni Experts",
    v1_topic_l: "Sujet",
    v1_topic: "Première présentation au comité",
    v1_ctx_l: "Contexte",
    v1_ctx: "Émission de prime time, 10 minutes",
    v1_dl_l: "Échéance",
    v1_dl: "Vendredi",
    how2_title: "Trouvez votre expert",
    how2_body: "Un Alumni Expert, un collègue retraité de votre entreprise, voit votre demande et décide s'il l'accepte.",
    v2_title: "Karim a accepté votre demande",
    v2_text: "32 ans dans la programmation télé. Il aimerait apprendre le montage vidéo avec l'IA.",
    how3_title: "Échangez 45 minutes",
    how3_body: "Choisissez un créneau, obtenez votre réponse, puis dites-nous si cela vous a aidé.",
    mini_pick: "Choisissez un créneau",
    mini_slot1: "Mar. 10h00",
    mini_slot2: "Mer. 15h00",
    v3_helped: "Cela vous a aidé\u00a0?",
    v3_yes: "Oui",
    v3_no: "Pas vraiment",

    feat_title: "Ce que vous y gagnez",
    alt_benefits: "Un homme expérimenté à la barbe blanche montre un écran, et un jeune collègue réagit avec enthousiasme",
    f1_title: "Des réponses de gens qui l'ont fait",
    f1_body: "Des décennies d'expérience sur exactement le type de problème que vous rencontrez.",
    f2_title: "Rapide et limité",
    f2_body: "Une séance dure 45 minutes. Vous demandez, vous obtenez un créneau, vous avancez.",
    f3_title: "Sans risque",
    f3_body: "Posez la question que vous hésiteriez à poser à votre manager.",
    f4_title: "Un échange dans les deux sens",
    f4_body: "Vous pouvez offrir quelque chose en retour\u00a0: montage vidéo avec l'IA, nouveaux outils, nouvelles tendances. Transmettre un peu fait de l'échange une conversation, pas une faveur.",
    f5_title: "Un suivi qui compte",
    f5_body: "30 jours plus tard, vous notez ce qui a changé grâce à la séance.",
    f6_title: "Un contact sur la durée",
    f6_body: "L'expert reste dans votre réseau après la séance.",

    not_title: "Ce que Relais n'est pas",
    not1: "Pas un remplaçant de votre manager ou de votre équipe.",
    not2: "Ni une formation, ni un programme de mentorat formel avec des devoirs.",
    not3: "Pas la garantie d'un oui à chaque demande\u00a0: les experts choisissent ce qu'ils acceptent.",

    quote: "«\u00a0Nos juniors ne savent souvent pas à qui demander quand ils sont bloqués.\u00a0»",
    quote_src: "Une professionnelle RH d'un grand groupe de distribution, rencontrée pour ce projet",
    about_title: "Qui sommes-nous",
    about_body: "Nous sommes une équipe d'étudiants qui travaille sur Relais parce que chaque année, de l'expérience quitte les entreprises, et ceux qui restent doivent souvent redécouvrir ce que la génération précédente savait déjà. Pour nous, une carrière ne devrait pas se terminer par une passation et un pot de départ. Relais est notre façon de tester si elle peut continuer, et nous le construisons avec les personnes à qui il s'adresse.",

    su_title: "Vous voulez faire partie des premiers à demander\u00a0?",
    su_sub: "Laissez vos coordonnées et une vraie question. Cela prend deux minutes.",
    next_title: "Et ensuite\u00a0?",
    next1: "Nous vous ajoutons à la liste d'accès anticipé.",
    next2: "Votre question nous aide à trouver les premiers experts.",
    next3: "Quand Relais ouvre dans votre entreprise, nous vous contactons par e-mail.",
    alt_signup: "Une jeune professionnelle devant son ordinateur, stylo levé, réfléchit à une question",
    su_name: "Prénom",
    su_email: "E-mail professionnel",
    su_team: "Équipe ou fonction",
    su_team_ph: "Par exemple\u00a0: programmation, marketing, achats",
    su_question: "Quelle question aimeriez-vous poser à quelqu'un qui travaille dans votre domaine depuis 30 ans\u00a0?",
    su_teach: "Que pourriez-vous lui apprendre en retour\u00a0?",
    optional: "(facultatif)",
    su_button: "Rejoindre la liste d'accès anticipé",
    su_note: "Gratuit pour vous pendant ce test. Votre e-mail sert uniquement à vous parler de Relais.",
    err_name: "Merci d'indiquer votre prénom.",
    err_email: "Merci d'indiquer un e-mail professionnel valide, par exemple nom@entreprise.fr.",
    err_team: "Merci d'indiquer votre équipe ou votre fonction.",
    err_question: "Merci d'écrire une question, même courte.",
    th_title: "Merci",
    th_body: "Vous êtes sur la liste d'accès anticipé, et nous avons bien reçu votre question. Nous vous écrirons par e-mail.",

    faq_title: "Vos questions",
    q1: "Est-ce gratuit pour moi\u00a0?",
    a1: "Pour ce test, oui. Nous cherchons le bon modèle avec votre entreprise.",
    q2: "Qui sont les experts\u00a0?",
    a2: "Des collègues retraités de votre propre entreprise qui ont choisi de rester disponibles.",
    q3: "Et si personne n'accepte ma demande\u00a0?",
    a3: "Les experts choisissent ce qu'ils acceptent. Si une demande n'est pas prise, vous êtes prévenu, et vous pouvez la reformuler ou réessayer.",
    q4: "Est-ce confidentiel\u00a0?",
    a4: "Dites ce que vous pouvez partager. Laissez les informations clients ou sensibles en dehors de la demande\u00a0; le champ contexte sert à ce dont l'expert a besoin.",
    q5: "Mon manager voit-il ma question\u00a0?",
    a5: "Nous définissons ce point avec votre équipe RH avant le lancement. Pendant ce test, vos réponses ne vont qu'à notre équipe d'étudiants, pas à votre entreprise.",

    footer: "Posez la question à la personne qui l'a déjà résolue.",
    footer_small: "Prototype en accès anticipé, 2026.",
    credits: "Photographies\u00a0: Pexels."
  };

  var META = {
    en: {
      title: "Relais. Ask the person who already solved it.",
      toggle: "Français",
      toggleAria: "Lire cette page en français"
    },
    fr: {
      title: "Relais. Posez la question à la personne qui l'a déjà résolue.",
      toggle: "English",
      toggleAria: "Read this page in English"
    }
  };

  /* Store the English text from the HTML so we can switch back. */
  var textNodes = document.querySelectorAll("[data-i18n]");
  var placeholderNodes = document.querySelectorAll("[data-i18n-placeholder]");
  var altNodes = document.querySelectorAll("[data-i18n-alt]");
  var EN = {};
  textNodes.forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (!(key in EN)) EN[key] = el.textContent;
  });
  placeholderNodes.forEach(function (el) {
    EN[el.getAttribute("data-i18n-placeholder")] = el.getAttribute("placeholder");
  });
  altNodes.forEach(function (el) {
    EN[el.getAttribute("data-i18n-alt")] = el.getAttribute("alt");
  });

  var current = "en";

  function t(key) {
    var dict = current === "fr" ? FR : EN;
    return dict[key] != null ? dict[key] : EN[key];
  }

  function applyLang(lang) {
    current = lang === "fr" ? "fr" : "en";
    textNodes.forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    placeholderNodes.forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    altNodes.forEach(function (el) {
      el.setAttribute("alt", t(el.getAttribute("data-i18n-alt")));
    });
    document.documentElement.lang = current;
    document.title = META[current].title;
    var toggle = document.getElementById("lang-toggle");
    document.getElementById("lang-toggle-label").textContent = META[current].toggle;
    toggle.setAttribute("aria-label", META[current].toggleAria);
    toggle.setAttribute("lang", current === "en" ? "fr" : "en");
    try { localStorage.setItem("relais-lang", current); } catch (e) { /* storage unavailable */ }
  }

  /* Starting language: ?lang=fr in the link wins, then the last choice, then English. */
  var start = "en";
  var param = new URLSearchParams(window.location.search).get("lang");
  if (param === "fr" || param === "en") {
    start = param;
  } else {
    try { start = localStorage.getItem("relais-lang") || "en"; } catch (e) { start = "en"; }
  }
  if (start !== "en") applyLang(start);

  document.getElementById("lang-toggle").addEventListener("click", function () {
    applyLang(current === "en" ? "fr" : "en");
    track("language_" + current);
  });

  /* ------------------------------------------------------------------
     Click tracking. Works with Vercel Web Analytics custom events if it
     is enabled on the project; otherwise it does nothing.
  ------------------------------------------------------------------ */
  function track(name) {
    try { if (typeof window.va === "function") window.va("event", { name: name }); } catch (e) { /* ignore */ }
  }
  document.querySelectorAll("[data-track]").forEach(function (el) {
    el.addEventListener("click", function () { track(el.getAttribute("data-track")); });
  });

  /* ------------------------------------------------------------------
     Sign-up form
  ------------------------------------------------------------------ */
  var form = document.getElementById("signup-form");
  var fields = [
    { input: "first-name", error: "err-first-name", valid: function (v) { return v.trim().length > 0; } },
    { input: "email", error: "err-email", valid: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); } },
    { input: "team", error: "err-team", valid: function (v) { return v.trim().length > 0; } },
    { input: "question", error: "err-question", valid: function (v) { return v.trim().length > 0; } }
  ];

  fields.forEach(function (f) {
    var input = document.getElementById(f.input);
    input.setAttribute("aria-describedby", f.error);
    input.addEventListener("input", function () {
      if (input.getAttribute("aria-invalid") === "true" && f.valid(input.value)) {
        input.removeAttribute("aria-invalid");
        document.getElementById(f.error).hidden = true;
      }
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var firstInvalid = null;
    fields.forEach(function (f) {
      var input = document.getElementById(f.input);
      var ok = f.valid(input.value);
      document.getElementById(f.error).hidden = ok;
      if (ok) {
        input.removeAttribute("aria-invalid");
      } else {
        input.setAttribute("aria-invalid", "true");
        if (!firstInvalid) firstInvalid = input;
      }
    });
    if (firstInvalid) { firstInvalid.focus(); return; }

    var data = {
      first_name: form.first_name.value.trim(),
      email: form.email.value.trim(),
      team: form.team.value.trim(),
      question: form.question.value.trim(),
      teach_back: form.teach_back.value.trim(),
      language: current,
      submitted_at: new Date().toISOString()
    };

    track("signup_" + current);

    if (FORM_ENDPOINT) {
      fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data)
      }).catch(function () { /* still thank the person; the test continues */ });
    }

    showThanks(data.first_name);
  });

  function showThanks(name) {
    document.getElementById("signup-form-wrap").hidden = true;
    document.getElementById("thanks-name").textContent = name ? ", " + name : "";
    var thanks = document.getElementById("signup-thanks");
    thanks.hidden = false;
    thanks.focus();
    thanks.scrollIntoView({ block: "center" });
  }
})();
