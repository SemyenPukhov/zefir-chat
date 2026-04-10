import Image from "next/image";
import Link from "next/link";
import { LandingNav } from "@/components/landing/landing-nav";
import { WaitlistCapture } from "@/components/landing/waitlist-capture";
import {
  TelegramMessengerIcon,
  VkMessengerIcon,
} from "@/components/landing/messenger-social-icons";
import { getTelegramUrl, getVkUrl } from "@/lib/site";

const SOCIAL_VK_URL = getVkUrl();
const SOCIAL_TELEGRAM_URL = getTelegramUrl();

const AVATARS = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC00hW9YSSSuPRXEof1TnfPt6-pxRcEhbmOXJHoD7rZ4uoMmjBjn1QXniAteX8eNWXRk7Rrv1T_m9ZgpHIe5zbfUcLbHe9lAOLDSp-wnLiX3zWJKvOAzATjpnlh74tPct3BNXyMP5dtV2T7WU47fCUuVttQTHUT0mf64S_HxasgvQwODb5ikfLMEUy6-1Jl2zwOsD0MmVbLVRnfc95QaghyOmuhGOAKV7WQ2c3hELfLFb4Mm0igbdcjiccv_1tLToOz7belL_TA0FZh",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBOFrwXurwr_mJIrIto-2Y8dOaYw_2NxZC6McqUXJD3kuE82mbGwhpLJhOzHS5pbi0EFdtSrZcxjAGV0PFWWTK_lhJGeAJ_O--omYh76HhvF5OHaSL0gaUrCevxC3dkfV7ZYo4scwLMwb4nzCAfKciV5DY9kOqyu_x_9JmZykLQah6PKd3OOyyJkkeXfuss8qMEmxJVaU3GTTm28uhEzA_RRVPi1ZTrC1QUvt4AyMWFSd9aO6Q1XLG18gIPsBKiMZxBBSKBYmpSpfHS",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDRDtOrhDHDOOZJUNNQFVTQMuZTF-jo0Bct7Ks8G0RZc4eJFMNEN6kNUniruK-p6FwnX8f6zQ0eAJKLJDMyXISf5QfKyOGU6Uclu1aufaVvrXtIjDGJkhfSdh2keH2LBVEGRraNwz6kP3zDgeef9s7nWPQUwmVNyvMKIvSKrZ678aEyBZTeIbJw6ZhDPhgqrcIe2tYgPSLUC7dkkot8YKqqgdkLdjV0LNOsrUd8L751TXBFk0W8b1KLrc3UlMNrYSgrsRZnAW0xYevb",
];

export function LandingPage() {
  return (
    <>
      <LandingNav />
      <header
        id="about"
        className="relative scroll-mt-24 overflow-hidden px-6 pb-32 pt-20"
        tabIndex={-1}
      >
        <div className="blob-bg bg-primary-fixed -left-20 -top-20 size-[400px]" />
        <div className="blob-bg bg-secondary-container -right-10 top-40 size-[300px]" />
        <div className="relative z-0 mx-auto flex max-w-[1200px] flex-col items-center text-center">
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-outline-variant/30 bg-primary-fixed px-4 py-2 text-sm font-bold text-primary dark:bg-surface-container dark:text-white">
            <span className="material-symbols-outlined text-sm" aria-hidden>
              rocket_launch
            </span>
            Скоро запуск
          </span>
          <p className="mb-4 max-w-2xl text-lg font-semibold leading-snug text-on-surface md:text-xl">
            Анонимный чат для живого общения
          </p>
          <h1 className="mb-6 max-w-4xl text-5xl font-bold leading-[1.1] tracking-[-0.04em] text-on-surface md:text-7xl">
            Лови зефирки — легкие послания от незнакомцев
          </h1>
          <p className="mb-12 max-w-2xl text-lg font-medium text-on-surface-variant md:text-xl">
            Запускайте зефирки и ловите чужие — ведите несколько переписок
            параллельно. Просто поболтайте или найдите своих людей. Короткие
            послания, голос и настроение — в одной ленте.
          </p>
          <WaitlistCapture
            className="mb-12 flex w-full max-w-md justify-center"
            ariaLabel="Подписка на запуск"
            buttonClassName="h-[52px] whitespace-nowrap rounded-full bg-primary px-8 font-bold text-on-primary transition-all hover:bg-primary/90 dark:shadow-lg dark:shadow-primary/20"
          />
          <div className="flex flex-col items-center gap-4">
            <div className="flex -space-x-3">
              {AVATARS.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={48}
                  height={48}
                  className="size-12 rounded-full border-4 border-surface object-cover"
                  priority={i === 0}
                />
              ))}
              <div className="flex size-12 items-center justify-center rounded-full border-4 border-surface bg-surface-container-high text-sm font-bold text-primary dark:bg-surface-container">
                +1.2k
              </div>
            </div>
            <p className="text-sm font-bold text-secondary">Уже в листе ожидания</p>
          </div>
        </div>
      </header>

      <section
        id="how-it-works"
        className="scroll-mt-24 bg-surface-container-low px-6 py-24"
        aria-labelledby="how-heading"
      >
        <div className="mx-auto max-w-[1200px] text-center">
          <h2
            id="how-heading"
            className="mb-20 text-3xl font-bold text-on-surface md:text-4xl"
          >
            Как это работает
          </h2>
          <div className="relative flex flex-col items-center justify-between gap-12 md:flex-row md:items-start md:gap-6">
            <div className="absolute left-[10%] right-[10%] top-12 z-0 hidden h-[2px] border-t-2 border-dashed border-outline-variant/50 md:block dark:border-outline-variant/30" />
            {[
              {
                icon: "cloud_download",
                step: "01 Поймай",
                text: "Случайное послание само найдет тебя в ленте",
              },
              {
                icon: "swap_horiz",
                step: "02 Ответь или пропусти",
                text: "Ты решаешь, продолжать ли общение",
              },
              {
                icon: "celebration",
                step: "03 Обменяйся",
                text: "Отправь свою зефирку в ответ и начни диалог",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative z-10 flex flex-1 flex-col items-center"
              >
                <div className="mb-6 flex size-24 items-center justify-center rounded-full border-2 border-outline-variant/20 bg-surface-container-lowest dark:border-outline-variant/30 dark:bg-surface-container">
                  <span className="material-symbols-outlined text-4xl text-primary">
                    {item.icon}
                  </span>
                </div>
                <span className="mb-2 text-xs font-black uppercase tracking-widest text-primary/40 dark:text-primary/60">
                  {item.step}
                </span>
                <p className="font-medium text-on-surface-variant">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24" aria-labelledby="why-heading">
        <div className="mx-auto max-w-[1200px]">
          <h2
            id="why-heading"
            className="mb-16 text-center text-3xl font-bold text-on-surface md:text-4xl"
          >
            Почему Зефирчат?
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                icon: "visibility_off",
                iconBg: "bg-secondary-fixed",
                iconColor: "text-secondary",
                title: "Анонимность",
                body: "Никаких имен и аватарок, пока вы оба не решите открыться. Общайтесь искренне.",
              },
              {
                icon: "mic",
                iconBg: "bg-secondary-fixed",
                iconColor: "text-secondary",
                title: "Голос",
                body: "Передавайте эмоции через короткие аудио-сообщения. Настоящая магия звука.",
              },
              {
                icon: "bar_chart",
                iconBg: "bg-tertiary-fixed",
                iconColor: "text-tertiary",
                title: "Статистика",
                body: "Смотрите, скольким людям понравились ваши мысли и сколько зефирок вы поймали.",
              },
              {
                icon: "add_photo_alternate",
                iconBg: "bg-secondary-fixed",
                iconColor: "text-secondary",
                title: "Фото",
                body: "Делись фото без сторонних сервисов",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="group rounded-lg border-2 border-outline-variant/10 bg-surface-container-lowest p-10 transition-all hover:border-primary/20 dark:border-outline-variant/30 dark:bg-surface-container dark:hover:border-primary/50"
              >
                <div
                  className={`mb-6 flex size-14 items-center justify-center rounded-2xl ${card.iconBg} transition-transform group-hover:scale-110`}
                >
                  <span
                    className={`material-symbols-outlined ${card.iconColor}`}
                  >
                    {card.icon}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-on-surface">
                  {card.title}
                </h3>
                <p className="leading-relaxed text-on-surface-variant">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-primary-container px-6 py-20 dark:bg-primary"
        aria-label="Статистика сообщества (иллюстрация до запуска)"
      >
        <p className="mx-auto mb-10 max-w-xl text-center text-sm font-medium opacity-90" style={{ color: "var(--stats-fg-muted)" }}>
          Ниже — примерные цифры для настроения интерфейса; после запуска здесь
          будут реальные метрики.
        </p>
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 text-center md:grid-cols-2">
          <div className="flex flex-col items-center">
            <span
              className="mb-4 text-6xl font-black tracking-[-0.04em]"
              style={{ color: "var(--stats-fg)" }}
            >
              2450
            </span>
            <p
              className="text-xl font-medium"
              style={{ color: "var(--stats-fg-muted)" }}
            >
              зефирок отправлено сегодня
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4 flex items-center gap-3">
              <span
                className="text-6xl font-black tracking-[-0.04em]"
                style={{ color: "var(--stats-fg)" }}
              >
                347
              </span>
              <span
                className="mt-2 size-4 animate-pulse rounded-full bg-[#4ade80]"
                aria-hidden
              />
            </div>
            <p
              className="text-xl font-medium"
              style={{ color: "var(--stats-fg-muted)" }}
            >
              пользователей онлайн
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-32 dark:bg-surface">
        <div className="blob-bg bg-tertiary-fixed -bottom-40 -left-20 size-[500px]" />
        <div className="blob-bg bg-primary-fixed right-0 top-0 size-[400px] dark:bg-surface-container/40" />
        <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-[-0.02em] text-on-surface md:text-5xl">
            Готов поймать свою первую зефирку?
          </h2>
          <p className="mb-12 max-w-xl text-lg text-on-surface-variant">
            Оставь почту, и мы пришлем секретное приглашение, как только облако
            откроется.
          </p>
          <WaitlistCapture
            className="mb-6 flex w-full max-w-md justify-center"
            ariaLabel="Финальная подписка на запуск"
            buttonClassName="h-[52px] rounded-full bg-primary px-8 font-bold text-on-primary transition-all hover:bg-primary/90 dark:shadow-lg dark:shadow-primary/20"
          />
          <p className="text-xs text-on-surface-variant/60">
            Нажимая кнопку, ты соглашаешься с политикой конфиденциальности.
          </p>
        </div>
      </section>

      <section
        id="faq"
        className="scroll-mt-24 bg-surface-container-low/50 px-6 py-24"
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto max-w-[800px]">
          <h2
            id="faq-heading"
            className="mb-16 text-center text-3xl font-bold text-on-surface"
          >
            FAQ
          </h2>
          <div className="space-y-4">
            <details
              open
              className="group rounded-lg border-2 border-outline-variant/20 bg-surface-container-lowest p-6 dark:border-primary/20 dark:bg-surface-container"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-lg [&::-webkit-details-marker]:hidden">
                <span style={{ color: "var(--faq-accent)" }}>
                  Как устроены имя и профиль?
                </span>
                <span
                  className="material-symbols-outlined shrink-0 transition-transform duration-200 ease-out group-open:rotate-180"
                  style={{ color: "var(--faq-accent)" }}
                >
                  expand_more
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-on-surface-variant">
                Вход — через почту или соцсети. Мы генерируем случайное имя: оно
                не показывается другим, пока вы сами не решите его раскрыть.
                После раскрытия имя можно отредактировать в профиле, туда же
                можно добавить аватар и краткое описание. Почта и данные входа
                для других пользователей недоступны.
              </p>
            </details>
            <details className="group rounded-lg border-2 border-outline-variant/10 bg-surface-container-lowest p-6 transition-colors hover:border-outline-variant/30 dark:bg-surface-container dark:hover:border-primary/30">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-lg text-on-surface [&::-webkit-details-marker]:hidden">
                <span>Как долго хранятся диалоги?</span>
                <span className="material-symbols-outlined shrink-0 text-outline-variant transition-transform duration-200 ease-out group-open:rotate-180 dark:text-on-surface-variant">
                  expand_more
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-on-surface-variant">
                60 дней с момента последней активности в диалоге. Новое
                сообщение продлевает срок.
              </p>
            </details>
            <details className="group rounded-lg border-2 border-outline-variant/10 bg-surface-container-lowest p-6 transition-colors hover:border-outline-variant/30 dark:bg-surface-container dark:hover:border-primary/30">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-lg text-on-surface [&::-webkit-details-marker]:hidden">
                <span>Как долго хранятся картинки и голосовые?</span>
                <span className="material-symbols-outlined shrink-0 text-outline-variant transition-transform duration-200 ease-out group-open:rotate-180 dark:text-on-surface-variant">
                  expand_more
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-on-surface-variant">
                Картинки и голосовые сообщения по умолчанию хранятся до 30 дней с
                момента загрузки или записи, затем исчезают. При отправке можно
                задать более короткий срок удаления, если хотите, чтобы файл
                пропал раньше (например, через несколько часов).
              </p>
            </details>
            <details className="group rounded-lg border-2 border-outline-variant/10 bg-surface-container-lowest p-6 transition-colors hover:border-outline-variant/30 dark:bg-surface-container dark:hover:border-primary/30">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-lg text-on-surface [&::-webkit-details-marker]:hidden">
                <span>Как отправить свою зефирку?</span>
                <span className="material-symbols-outlined shrink-0 text-outline-variant transition-transform duration-200 ease-out group-open:rotate-180 dark:text-on-surface-variant">
                  expand_more
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-on-surface-variant">
                После запуска открой ленту, нажми «Отправить зефирку» и напиши
                короткое послание — его увидит случайный собеседник.
              </p>
            </details>
            <details className="group rounded-lg border-2 border-outline-variant/10 bg-surface-container-lowest p-6 transition-colors hover:border-outline-variant/30 dark:bg-surface-container dark:hover:border-primary/30">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-lg text-on-surface [&::-webkit-details-marker]:hidden">
                <span>
                  Что делать, если зефирка неприятная или нарушает правила?
                </span>
                <span className="material-symbols-outlined shrink-0 text-outline-variant transition-transform duration-200 ease-out group-open:rotate-180 dark:text-on-surface-variant">
                  expand_more
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-on-surface-variant">
                На каждую входящую зефирку есть кнопка «Пожаловаться» — нажми
                её, мы рассмотрим жалобу.
              </p>
            </details>
          </div>
        </div>
      </section>

      <footer className="mt-20 w-full rounded-t-[3rem] bg-surface-container">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-8 px-10 py-12 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <div
              className="text-xl font-bold"
              style={{ color: "var(--footer-brand)" }}
            >
              Зефирчат
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--footer-muted)" }}
            >
              © {new Date().getFullYear()} Зефирчат. Сделано с нежностью.
            </p>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
            <div className="flex flex-wrap gap-8 text-sm">
              <Link
                href="#about"
                className="leading-relaxed transition-colors duration-300 hover:text-primary dark:hover:text-white"
                style={{ color: "var(--footer-muted)" }}
              >
                О проекте
              </Link>
              <Link
                href="/privacy"
                className="leading-relaxed transition-colors duration-300 hover:text-primary dark:hover:text-white"
                style={{ color: "var(--footer-muted)" }}
              >
                Конфиденциальность
              </Link>
            </div>
            <div
              className="flex items-center gap-3"
              aria-label="Мы ВКонтакте и в Telegram"
            >
              <a
                href={SOCIAL_VK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-1 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container"
                aria-label="ВКонтакте"
              >
                <VkMessengerIcon className="h-8 w-8" />
              </a>
              <a
                href={SOCIAL_TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-1 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-container"
                aria-label="Telegram"
              >
                <TelegramMessengerIcon className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
