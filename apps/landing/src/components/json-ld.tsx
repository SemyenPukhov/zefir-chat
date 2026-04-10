import { getOfficialSocialUrls, getSiteUrl } from "@/lib/site";

const SITE_NAME = "Зефирчат";
const SITE_DESCRIPTION =
  "Анонимная сеть лёгких посланий: зефирки от незнакомцев, голос, статистика и безопасная среда.";

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "Как устроены имя и профиль?",
    answer:
      "Вход — через почту или соцсети. Мы генерируем случайное имя: оно не показывается другим, пока вы сами не решите его раскрыть. После раскрытия имя можно отредактировать в профиле, туда же можно добавить аватар и краткое описание. Почта и данные входа для других пользователей недоступны.",
  },
  {
    question: "Как долго хранятся диалоги?",
    answer:
      "60 дней с момента последней активности в диалоге. Новое сообщение продлевает срок.",
  },
  {
    question: "Как долго хранятся картинки и голосовые?",
    answer:
      "Картинки и голосовые сообщения по умолчанию хранятся до 30 дней с момента загрузки или записи, затем исчезают. При отправке можно задать более короткий срок удаления, если хотите, чтобы файл пропал раньше (например, через несколько часов).",
  },
  {
    question: "Как отправить свою зефирку?",
    answer:
      "После запуска открой ленту, нажми «Отправить зефирку» и напиши короткое послание — его увидит случайный собеседник.",
  },
  {
    question:
      "Что делать, если зефирка неприятная или нарушает правила?",
    answer:
      "На каждую входящую зефирку есть кнопка «Пожаловаться» — нажми её, мы рассмотрим жалобу.",
  },
];

/** Организация, сайт и приложение — на всех страницах. */
export function JsonLdSite() {
  const url = getSiteUrl();
  const orgId = `${url}/#organization`;
  const websiteId = `${url}/#website`;
  const sameAs = getOfficialSocialUrls();

  const organization: Record<string, unknown> = {
    "@type": "Organization",
    "@id": orgId,
    name: SITE_NAME,
    url,
    description: SITE_DESCRIPTION,
  };
  if (sameAs.length > 0) {
    organization.sameAs = sameAs;
  }

  const graph: Record<string, unknown>[] = [
    organization,
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      url,
      inLanguage: "ru-RU",
      publisher: { "@id": orgId },
    },
    {
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      applicationCategory: "SocialNetworkingApplication",
      operatingSystem: "Web",
      description: SITE_DESCRIPTION,
      url,
      author: { "@id": orgId },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "RUB",
      },
    },
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** FAQ — только там, где блок FAQ на странице (главная). */
export function JsonLdFaq() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
