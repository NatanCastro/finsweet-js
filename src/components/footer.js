import { factoryService } from "/service/factory/index.js";
import { linkComponent } from "./index.js";
import { footerData } from "/data/index.js";

export function footerComponent(footerSect) {
  const leftDiv = factoryService.createElement("div", {
    class: "footer-left",
  });
  const leftContent = factoryService.createElement("div");
  const logo = factoryService.createElement("img", {
    attrs: [
      {
        key: "src",
        value: footerData.logo,
      },
    ],
  });
  const leftText = factoryService.createElement("p", {
    text: footerData.leftText,
  });
  const contactDiv = factoryService.createElement("div", {
    class: "footer-contact",
  });
  const emailDiv = factoryService.createElement("div", {
    class: "footer-contact-email",
  });
  const emailText = factoryService.createElement("p", {
    text: footerData.contact.email.text,
  });
  const email = factoryService.createElement("a", {
    text: footerData.contact.email.email,
    attrs: [
      {
        key: "href",
        value: `mailto:${footerData.contact.email.email}`,
      },
    ],
  });
  const phoneDiv = factoryService.createElement("div", {
    class: "footer-contact-phone",
  });
  const phoneText = factoryService.createElement("p", {
    text: footerData.contact.phone.text,
  });
  const phone = factoryService.createElement("a", {
    text: footerData.contact.phone.phone,
    attrs: [
      {
        key: "href",
        value: `tel:${footerData.contact.phone.phone}`,
      },
    ],
  });
  const rightDiv = factoryService.createElement("div", {
    class: "footer-right",
  });
  const title = factoryService.createElement("h2", {
    text: footerData.title,
  });
  const rightText = factoryService.createElement("p", {
    text: footerData.rightText,
  });
  const socialsDiv = factoryService.createElement("div", {
    class: "footer-socials",
  });
  footerData.socials.forEach((s) => {
    const a = factoryService.createElement("a", {
      attrs: [
        {
          key: "href",
          value: s.action,
        },
      ],
    });
    const img = factoryService.createElement("img", {
      attrs: [
        {
          key: "src",
          value: s.image,
        },
      ],
    });

    factoryService.placeElement([
      { element: img, position: a },
      { element: a, position: socialsDiv },
    ]);
  });
  const bottonDiv = factoryService.createElement("div", {
    class: "footer-bottom",
  });
  const copy = factoryService.createElement("p", {
    text: footerData.copy,
  });
  const nav = factoryService.createElement("nav", {
    class: "footer-nav",
  });
  const ul = factoryService.createElement("ul");
  footerData.links.map((l) => {
    const li = factoryService.createElement("li");
    const link = linkComponent(l.text, l.action);
    factoryService.placeElement([
      { element: link, position: li },
      { element: li, position: ul },
    ]);
  });

  factoryService.placeElement([
    { element: logo, position: leftContent },
    { element: leftText, position: leftContent },
    { element: leftContent, position: leftDiv },
    { element: emailText, position: emailDiv },
    { element: email, position: emailDiv },
    { element: emailDiv, position: contactDiv },
    { element: phoneText, position: phoneDiv },
    { element: phone, position: phoneDiv },
    { element: phoneDiv, position: contactDiv },
    { element: contactDiv, position: leftDiv },
    { element: leftDiv, position: footerSect },
    { element: title, position: rightDiv },
    { element: rightText, position: rightDiv },
    { element: socialsDiv, position: rightDiv },
    { element: rightDiv, position: footerSect },
    { element: copy, position: bottonDiv },
    { element: ul, position: nav },
    { element: nav, position: bottonDiv },
    { element: bottonDiv, position: footerSect },
  ]);
}