import { useRouter } from 'next/router';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import React from 'react';

function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2561 769" height={20} fill="none">
      <path
        // currentColor ensures it works in dark mode.
        fill="currentColor"
        fillRule="evenodd"
        d="M794.179 0H654.434v754.671h139.745V0Zm447.141 666.925h8.49v2.281l1.11 85.468h223.03V651.572h-99.41V371.654c0-122.053-82.58-192.04-226.58-192.04-147.17 0-241.758 70.084-247.277 183.079h139.677c1.17-49.399 39.94-79.945 101.82-79.945 61.88 0 94.92 29.968 94.92 86.722v38.8l-2.21.16-163.05 13.33c-115.968 9.315-190.891 77.857-190.891 174.214 0 99.569 77.264 172.03 183.761 172.03 82.18 0 139.71-32.633 175.94-99.794l.67-1.285Zm-4.22-155.36v22.194c0 77.086-49.97 131.143-121.51 131.143-3.35 0-6.29 0-9.37-.225l-1.51.193c-.81 0-1.58-.131-2.38-.265-.31-.053-.63-.107-.96-.153l-2.14-.257c-19.87-1.638-36.29-6.167-48.7-13.554-26.09-13.265-36.79-32.119-40.94-45.417-5.21-15.464-3.87-32.279 3.75-46.797 15.86-28.519 81.03-37.181 90.25-38.407.5-.067.84-.111.99-.136l129.91-10.632 2.61-.224v2.537Zm301.94-318.591h139.74v561.7h-139.74v-561.7Zm754.75 561.701V386.076c0-134.901-65.93-206.462-190.66-206.462-78.17 0-134.59 30.866-172.56 94.334l-4.48 7.548v-88.553h-139.74v561.732h139.51V429.372c0-85.726 50.87-141.099 129.61-141.099 66.23 0 98.4 35.331 98.4 107.792v358.61h139.92ZM1539.04 0h139.74v134.194h-139.74V0ZM356.521 2.28A302.268 302.268 0 0 0 321.367 0H0v754.799h147.003V482.301h2.442l174.163.514c63.78-.018 125.167-23.323 171.717-65.192 46.549-41.869 74.778-99.168 78.964-160.282 4.186-61.115-15.985-121.471-56.422-168.834C477.429 41.145 419.749 10.32 356.521 2.28Zm37.428 123.788v235.015H147.003V123.819h246.946v2.249ZM2398.99 600.052H2560v154.621h-161.01V600.052Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const config: DocsThemeConfig = {
  logo: <Logo />,

  // Used to generate the “Edit this page” link and the “feedback” links
  docsRepositoryBase: 'https://github.com/team-plain/docs-new/tree/main',

  head: function useHead() {
    const { title } = useConfig();
    const { asPath, defaultLocale, locale, basePath } = useRouter();
    const domain = 'https://plain-docs-new.vercel.app';
    const baseUrl = domain + basePath;
    const url = baseUrl + (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/docs/sharing/social-card.png" />
        <meta name="twitter:site:domain" content="plain.com" />
        <meta name="twitter:url" content={url} />
        <meta name="og:title" content={title ? title + ' – Plain Docs' : 'Plain Docs'} />
        <meta name="og:image" content={`${baseUrl}sharing/social-card.png`} />
        <meta name="apple-mobile-web-app-title" content="Plain Docs" />
        <link rel="icon" href={`${baseUrl}/favicon/favicon.svg`} type="image/svg+xml" />
        <link rel="icon" href={`${baseUrl}/favicon/favicon.png`} type="image/png" />
        <link
          rel="icon"
          href={`${baseUrl}/favicon/favicon-dark.svg`}
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href={`${baseUrl}/favicon/favicon-dark.png`}
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    );
  },

  sidebar: {
    // Makes collapsible menus collapsed by default
    defaultMenuCollapseLevel: 1,
  },

  editLink: {
    text: 'Edit on GitHub →',
  },

  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },

  useNextSeoProps() {
    return {
      titleTemplate: '%s – Plain',
    };
  },

  footer: {
    text: <span>© Not Just Tickets Limited – {new Date().getFullYear()}</span>,
  },
};

export default config;
