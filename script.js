const EVENT_DATA = {
  title: "Seminário Interdisciplinar 2026 do PPGDC",
  theme: "Planejamento Estratégico e Autoavaliação",
  status: "Programação preliminar",
  date: "24 de agosto de 2026",
  time: "8h30 às 17h",
  location: "Auditório da Reitoria do IFBA, Canela, Salvador/BA",
  registrationUrl: "https://forms.gle/QNzUyheT1ZPk66xF6",
  mapsUrl: "https://maps.app.goo.gl/VHeKD7UGJdAHbzjx6",
  introduction: "O Seminário Interdisciplinar 2026 reúne a comunidade do PPGDC para relacionar a avaliação do Programa, o processo de autoavaliação e o Planejamento Estratégico 2025–2028 às orientações da Área Interdisciplinar da CAPES.",
  registrationText: "A inscrição prévia é necessária para quem desejar receber certificado. Mesmo quem ainda não tiver certeza sobre sua participação deve preencher o formulário, para que seu nome conste na lista de presença. É esperada a participação dos discentes ativos do PPGDC.",
  certificateText: "O certificado será emitido após o evento para participantes com inscrição prévia e presença confirmada.",
  participants: [
    {
      name: "Urânia Maia",
      role: "Coordenação Geral do PPGDC, idealização do Seminário, abertura institucional, moderação da conferência e plenária de síntese",
      group: "Coordenação e articulação institucional",
      image: "assets/images/urania-maia.jpg",
      alt: "Retrato de Urânia Maia",
      objectPosition: "46% 42%",
      initials: "UM"
    },
    {
      name: "Fátima Hanaque",
      role: "Coordenação do Seminário, organização geral, Planejamento Estratégico e Mesa Temática",
      group: "Coordenação e articulação institucional",
      image: "assets/images/fatima-hanaque.jpg",
      alt: "Retrato de Fátima Hanaque",
      objectPosition: "52% 38%",
      treatment: "is-warm-editorial",
      initials: "FH"
    },
    {
      name: "Djalma Thürler",
      role: "Conferência de abertura",
      group: "Conferência e palestra",
      image: "assets/images/djalma-thurler.jpg",
      alt: "Retrato de Djalma Thürler",
      objectPosition: "50% 44%",
      initials: "DT"
    },
    {
      name: "Eduardo Jorge",
      role: "Palestra sobre produção acadêmica e indicadores bibliométricos",
      group: "Conferência e palestra",
      image: "assets/images/eduardo-freitas-jorge.jpg",
      alt: "Retrato de Eduardo Jorge",
      objectPosition: "47% 24%",
      initials: "EF"
    }
  ],
  schedule: [
    {
      time: "08h30–09h00",
      title: "Abertura institucional",
      meta: "Coordenação: Urânia Maia e Fátima Hanaque"
    },
    {
      time: "09h00–10h15",
      session: "Conferência de abertura",
      title: "Planejamento estratégico e autoavaliação na Área Interdisciplinar da CAPES",
      speakerLabel: "Conferencista",
      speaker: "Djalma Thürler",
      meta: "Moderação: Urânia Maia"
    },
    { time: "10h15–10h30", title: "Pausa para café", type: "break" },
    {
      time: "10h30–12h00",
      session: "Mesa temática",
      title: "Avaliação, autoavaliação e planejamento do PPGDC",
      subthemes: [
        {
          title: "Apresentação da avaliação quadrienal",
          participants: "Participantes: Urânia Maia, Eduardo Meirelles e Lisiane Weber"
        },
        {
          title: "Autoavaliação no PPGDC: processos, indicadores e cultura avaliativa",
          participants: "Participantes: Fátima Hanaque, Igor Sobral e Fausto Guimarães"
        },
        {
          title: "Planejamento Estratégico do PPGDC 2025–2028",
          participants: "Participantes: Fátima Hanaque e Urânia Maia"
        }
      ]
    },
    { time: "12h00–14h00", title: "Intervalo para almoço", type: "break" },
    {
      time: "14h00–15h30",
      session: "Palestra",
      title: "Critérios de produção acadêmica para o PPGDC e indicadores bibliométricos",
      speakerLabel: "Conferencista",
      speaker: "Eduardo Jorge",
      status: "Participação remota confirmada",
      meta: "Moderação: Fabiane Caldas e Nádia Pires"
    },
    { time: "15h30–16h00", title: "Pausa para café", type: "break" },
    {
      time: "16h00–17h00",
      session: "Plenária de síntese e proposições",
      title: "Sistematização de propostas e encaminhamentos do quadriênio 2025–2028",
      meta: "Coordenação: Urânia Maia, Fátima Hanaque e Ana Maria Menezes"
    },
    { time: "17h00", title: "Encerramento" }
  ],
  organization: {
    realization: "Programa de Pós-Graduação Multi-Institucional em Difusão do Conhecimento",
    coordination: ["Urânia Maia", "Fátima Hanaque"],
    team: [
      "Fátima Hanaque",
      "Igor Sobral",
      "Fabiane Caldas",
      "Euzébio Silva",
      "Fausto Guimarães",
      "Nádia Pires"
    ]
  }
};

(function initializeSite() {
  "use strict";

  const select = (selector, scope = document) => scope.querySelector(selector);
  const selectAll = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  function setText(selector, value) {
    const element = select(selector);
    if (element) element.textContent = value;
  }

  function createImageMedia(participant, className) {
    const media = document.createElement("div");
    media.className = className;
    if (participant.treatment) media.classList.add(participant.treatment);

    const initials = document.createElement("span");
    initials.className = "portrait-initials";
    initials.setAttribute("aria-hidden", "true");
    initials.textContent = participant.initials;

    const image = document.createElement("img");
    image.alt = participant.alt;
    image.width = 480;
    image.height = 520;
    image.decoding = "async";
    image.loading = "eager";
    image.style.objectPosition = participant.objectPosition;
    image.addEventListener("load", () => {
      media.classList.add("has-image");
      image.classList.remove("is-missing");
    });
    image.addEventListener("error", () => {
      media.classList.remove("has-image");
      image.classList.add("is-missing");
      const card = image.closest(".person-card");
      if (card) card.classList.add("has-missing-image");
    });
    image.src = participant.image;

    if (image.complete && image.naturalWidth > 0) media.classList.add("has-image");

    media.append(initials, image);
    return media;
  }

  function renderEventDetails() {
    setText("[data-event-title]", EVENT_DATA.title);
    setText("[data-event-theme]", EVENT_DATA.theme);
    setText("[data-event-status]", EVENT_DATA.status);
    setText("[data-event-date]", EVENT_DATA.date);
    setText("[data-event-time]", EVENT_DATA.time);
    setText("[data-event-location]", EVENT_DATA.location);
    setText("[data-event-location-detail]", EVENT_DATA.location);
    setText("[data-event-introduction]", EVENT_DATA.introduction);
    setText("[data-registration-text]", EVENT_DATA.registrationText);
    setText("[data-certificate-text]", EVENT_DATA.certificateText);
    setText("[data-organization-realization]", EVENT_DATA.organization.realization);

    selectAll('a[href="https://forms.gle/QNzUyheT1ZPk66xF6"]').forEach((link) => {
      link.href = EVENT_DATA.registrationUrl;
    });
    selectAll('a[href="https://maps.app.goo.gl/VHeKD7UGJdAHbzjx6"]').forEach((link) => {
      link.href = EVENT_DATA.mapsUrl;
    });
  }

  function renderSchedule() {
    const container = select("[data-schedule]");
    if (!container) return;

    let activityIndex = 0;

    EVENT_DATA.schedule.forEach((entry) => {
      const item = document.createElement("article");
      item.className = `timeline-item${entry.type === "break" ? " is-break" : ""}`;

      const time = document.createElement("p");
      time.className = "timeline-time";
      time.textContent = entry.time;

      const content = document.createElement("div");
      content.className = "timeline-content";

      if (entry.session) {
        const session = document.createElement("p");
        session.className = "timeline-session";
        session.textContent = entry.session;
        content.append(session);
      }

      const title = document.createElement("h3");
      title.textContent = entry.title;
      content.append(title);

      if (entry.speaker) {
        const speaker = document.createElement("p");
        speaker.className = "timeline-speaker";
        speaker.textContent = entry.speakerLabel ? `${entry.speakerLabel}: ${entry.speaker}` : entry.speaker;
        content.append(speaker);
      }

      if (entry.status) {
        const status = document.createElement("span");
        status.className = "remote-label";
        status.textContent = entry.status;
        content.append(status);
      }

      if (entry.meta) {
        const meta = document.createElement("p");
        meta.className = "timeline-meta";
        meta.textContent = entry.meta;
        content.append(meta);
      }

      if (entry.subthemes?.length) {
        const list = document.createElement("ol");
        list.className = "timeline-subthemes";
        entry.subthemes.forEach((subtheme) => {
          const listItem = document.createElement("li");

          const subthemeContent = document.createElement("div");
          subthemeContent.className = "timeline-subtheme-content";

          const subthemeTitle = document.createElement("span");
          subthemeTitle.className = "timeline-subtheme-title";
          subthemeTitle.textContent = typeof subtheme === "string" ? subtheme : subtheme.title;
          subthemeContent.append(subthemeTitle);

          if (typeof subtheme !== "string" && subtheme.participants) {
            const participants = document.createElement("p");
            participants.className = "timeline-subtheme-participants";
            participants.textContent = subtheme.participants;
            subthemeContent.append(participants);
          }

          listItem.append(subthemeContent);
          list.append(listItem);
        });
        content.append(list);
      }

      const itemIndex = document.createElement("span");
      itemIndex.className = "timeline-index";
      itemIndex.setAttribute("aria-hidden", "true");
      if (entry.type !== "break") {
        activityIndex += 1;
        itemIndex.textContent = String(activityIndex).padStart(2, "0");
      }

      item.append(time, content, itemIndex);
      container.append(item);
    });
  }

  function renderParticipants() {
    const container = select("[data-participants]");
    if (!container) return;

    const groups = [...new Set(EVENT_DATA.participants.map((participant) => participant.group))];

    groups.forEach((groupName, groupIndex) => {
      const group = document.createElement("section");
      group.className = "people-group";

      const heading = document.createElement("div");
      heading.className = "people-group-heading";

      const index = document.createElement("span");
      index.className = "people-group-index";
      index.setAttribute("aria-hidden", "true");
      index.textContent = String(groupIndex + 1).padStart(2, "0");

      const title = document.createElement("h3");
      title.id = `people-group-${groupIndex + 1}`;
      title.textContent = groupName;
      group.setAttribute("aria-labelledby", title.id);
      heading.append(index, title);

      const pair = document.createElement("div");
      pair.className = "people-pair";

      EVENT_DATA.participants
        .filter((participant) => participant.group === groupName)
        .forEach((participant, participantIndex) => {
          const card = document.createElement("article");
          card.className = "person-card";

          const media = createImageMedia(participant, "person-media");
          const content = document.createElement("div");
          content.className = "person-content";
          const name = document.createElement("h4");
          name.id = `participant-${groupIndex + 1}-${participantIndex + 1}`;
          name.textContent = participant.name;
          card.setAttribute("aria-labelledby", name.id);
          const role = document.createElement("p");
          role.textContent = participant.role;
          const pending = document.createElement("span");
          pending.className = "image-pending";
          pending.textContent = "Imagem oficial pendente";
          content.append(name, role, pending);

          card.append(media, content);
          pair.append(card);
        });

      group.append(heading, pair);
      container.append(group);
    });
  }

  function renderOrganization() {
    const coordinationList = select("[data-organization-coordination]");
    const teamList = select("[data-organization-team]");
    if (!coordinationList || !teamList) return;

    const renderPeople = (people, list) => {
      people.forEach((person) => {
        const item = document.createElement("li");
        item.textContent = person;
        list.append(item);
      });
    };

    renderPeople(EVENT_DATA.organization.coordination, coordinationList);
    renderPeople(EVENT_DATA.organization.team, teamList);
  }

  function setupMenu() {
    const toggle = select("[data-menu-toggle]");
    const nav = select("[data-nav]");
    if (!toggle || !nav) return;

    const closeMenu = () => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menu de navegação");
      nav.dataset.open = "false";
    };

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Abrir menu de navegação" : "Fechar menu de navegação");
      nav.dataset.open = String(!isOpen);
    });

    selectAll("a", nav).forEach((link) => link.addEventListener("click", closeMenu));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
        toggle.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) closeMenu();
    });
  }

  function setupImages() {
    selectAll("[data-asset-image]").forEach((image) => {
      const mark = image.closest(".brand-mark");
      const showImage = () => {
        image.classList.remove("is-missing");
        mark?.classList.add("has-image");
      };
      const showFallback = () => {
        image.classList.add("is-missing");
        mark?.classList.remove("has-image");
      };

      image.addEventListener("load", showImage);
      image.addEventListener("error", showFallback);

      if (image.complete) {
        if (image.naturalWidth > 0) showImage();
        else showFallback();
      }
    });
  }

  function setupBackToTop() {
    const button = select("[data-back-to-top]");
    if (!button) return;

    button.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  renderEventDetails();
  renderSchedule();
  renderParticipants();
  renderOrganization();
  setupMenu();
  setupImages();
  setupBackToTop();
})();
