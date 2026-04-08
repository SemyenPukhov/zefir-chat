# Зефирчат — список задач

## Сделано

- [x] Базовый SEO: мета, `sitemap.xml`, `robots.txt`, `lang="ru"`, JSON-LD (Organization, WebSite, SoftwareApplication, FAQ на главной).
- [x] OG/Twitter-картинки, фавикон, `manifest.webmanifest`.
- [x] Страница `/privacy` (черновик), ссылка из футера, дисклеймер у блока «статистика».
- [x] Расширенный `public/llms.txt` для ассистентов и ботов.
- [x] Линт `landing-nav`: `Link` вместо `<a href="/">`, `sameAs`/таймер без `prefer-const`, отложенный `syncFromDom` в эффектах.

## В ближайшее время

- [ ] Подключить формы «Жду запуск» к бэкенду или сервису рассылки (сейчас `action="#"`).
- [ ] Заменить черновик на `/privacy` полным текстом политики и контактом (email / форма).
- [ ] Выставить в проде `NEXT_PUBLIC_SITE_URL`, реальные `NEXT_PUBLIC_VK_URL` и `NEXT_PUBLIC_TELEGRAM_URL` для `Organization.sameAs`.
- [ ] Кнопка «Присоединиться» в шапке: поведение (скролл к форме, модалка или внешняя ссылка).

## Позже

- [ ] `apple-touch-icon` при необходимости (отдельный asset или `app/apple-icon.tsx`).
- [ ] Реальные метрики вместо иллюстрации на лендинге после запуска.
- [ ] Отдельные страницы под запросы (блог, `/about`) — по мере роста SEO.
- [ ] Проверка в [Rich Results Test](https://search.google.com/test/rich-results) и превью в соцсетях после деплоя.
