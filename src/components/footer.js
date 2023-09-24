import { linkComponent } from "./link.js";
import { footerData } from "/data/footer.js";
import { createElement } from "/factory/create-element.factory.js";
import { placeElement } from "/factory/place-element.factory.js";

export function footerComponent(footerSect) {
  const leftDiv = createElement("div", {
    class: "footer-left",
  });
  const leftContent = createElement("div");
  const logo = createElement("img", {
    attrs: [
      {
        key: "src",
        value: footerData.logo,
      },
    ],
  });
  const leftText = createElement("p", {
    text: footerData.leftText,
  });
  const contactDiv = createElement("div", {
    class: "footer-contact",
  });
  const emailDiv = createElement("div", {
    class: "footer-contact-email",
  });
  const emailText = createElement("p", {
    text: footerData.contact.email.text,
  });
  const email = createElement("a", {
    text: footerData.contact.email.email,
    attrs: [
      {
        key: "href",
        value: `mailto:${footerData.contact.email.email}`,
      },
    ],
  });
  const phoneDiv = createElement("div", {
    class: "footer-contact-phone",
  });
  const phoneText = createElement("p", {
    text: footerData.contact.phone.text,
  });
  const phone = createElement("a", {
    text: footerData.contact.phone.phone,
    attrs: [
      {
        key: "href",
        value: `tel:${footerData.contact.phone.phone}`,
      },
    ],
  });
  const rightDiv = createElement("div", {
    class: "footer-right",
  });
  const title = createElement("h2", {
    text: footerData.title,
  });
  const rightText = createElement("p", {
    text: footerData.rightText,
  });
  const socialsDiv = createElement("div", {
    class: "footer-socials",
  });
  footerData.socials.forEach((s) => {
    const a = createElement("a", {
      attrs: [
        {
          key: "href",
          value: s.action,
        },
      ],
    });
    const img = createElement("img", {
      attrs: [
        {
          key: "src",
          value: s.image,
        },
      ],
    });

    placeElement(img, a);
    placeElement(a, socialsDiv);
  });
  const bottonDiv = createElement("div", {
    class: "footer-bottom",
  });
  const copy = createElement("p", {
    text: footerData.copy,
  });
  const nav = createElement("nav", {
    class: "footer-nav",
  });
  const ul = createElement("ul");
  footerData.links.map((l) => {
    const li = createElement("li");
    const link = linkComponent(l.text, l.action);
    placeElement(link, li);
    placeElement(li, ul);
  });

  placeElement(logo, leftContent);
  placeElement(leftText, leftContent);
  placeElement(leftContent, leftDiv);
  placeElement(emailText, emailDiv);
  placeElement(email, emailDiv);
  placeElement(emailDiv, contactDiv);
  placeElement(phoneText, phoneDiv);
  placeElement(phone, phoneDiv);
  placeElement(phoneDiv, contactDiv);
  placeElement(contactDiv, leftDiv);
  placeElement(leftDiv, footerSect);
  placeElement(title, rightDiv);
  placeElement(rightText, rightDiv);
  placeElement(socialsDiv, rightDiv);
  placeElement(rightDiv, footerSect);
  placeElement(copy, bottonDiv);
  placeElement(ul, nav);
  placeElement(nav, bottonDiv);
  placeElement(bottonDiv, footerSect);
}