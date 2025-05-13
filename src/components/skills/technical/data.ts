import { useMemo } from "react";

export const useSkills = () => {
  const skills = useMemo(
    () => [
      {
        name: "Programming languages",
        items: [
          {
            name: "HTML",
            link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          },
          {
            name: "CSS",
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          },
          {
            name: "JavaScript",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          },
          { name: "TypeScript", link: "https://www.typescriptlang.org/" },
          { name: "Python", link: "https://www.python.org/" },
          { name: "Markdown", link: "https://www.markdownguide.org/" },
        ],
      },
      {
        name: "Biblioteki JavaScript",
        items: [
          { name: "React", link: "https://react.dev/" },
          { name: "React Native", link: "https://reactnative.dev/" },
          { name: "Lodash", link: "https://lodash.com/" },
          { name: "Axios", link: "https://axios-http.com/" },
          { name: "zod", link: "https://zod.dev/" },
          { name: "Framer Motion", link: "https://www.framer.com/motion/" },
        ],
      },
      {
        name: "Frameworks",
        items: [
          { name: "Next.js", link: "https://nextjs.org/" },
          { name: "Django", link: "https://www.djangoproject.com/" },
        ],
      },
      {
        name: "Styling",
        items: [
          { name: "Tailwind CSS", link: "https://tailwindcss.com/" },
          { name: "Emotion", link: "https://emotion.sh/docs/introduction" },
          { name: "styled-components", link: "https://styled-components.com/" },
        ],
      },
      {
        name: "UI Libraries",
        items: [
          { name: "Material UI", link: "https://mui.com/material-ui/" },
          { name: "Radix UI", link: "https://www.radix-ui.com/" },
          { name: "Chakra UI", link: "https://v2.chakra-ui.com/" },
        ],
      },
      {
        name: "Application State Management",
        items: [
          { name: "Redux (Redux Toolkit)", link: "https://redux.js.org/" },
          { name: "Zustand", link: "https://zustand-demo.pmnd.rs/" },
          { name: "TanStack Query", link: "https://tanstack.com/query/latest" },
        ],
      },
      {
        name: "Forms",
        items: [
          { name: "React Hook Form", link: "https://react-hook-form.com/" },
        ],
      },
      {
        name: "Database",
        items: [
          { name: "MySQL", link: "https://www.mysql.com/" },
          { name: "MongoDB", link: "https://www.mongodb.com/" },
          { name: "Redis", link: "https://redis.io/" },
        ],
      },
      {
        name: "Next.js Tools and Libraries",
        items: [
          { name: "next-auth", link: "https://next-auth.js.org/" },
          { name: "next-intl", link: "https://next-intl-docs.vercel.app/" },
          { name: "I18next", link: "https://www.i18next.com/" },
          {
            name: "Paraglide-Next",
            link: "https://inlang.com/m/gerre34r/library-inlang-paraglideJs",
          },
          {
            name: "neshca/cache-handler",
            link: "https://github.com/neshca/next-cache-handler",
          },
        ],
      },
      {
        name: "Linting",
        items: [{ name: "ESLint", link: "https://eslint.org/" }],
      },
      {
        name: "Version Control",
        items: [
          { name: "Git", link: "https://git-scm.com/" },
          { name: "GitHub", link: "https://github.com/" },
        ],
      },
      {
        name: "Testing",
        items: [
          { name: "Jest", link: "https://jestjs.io/" },
          {
            name: "React Testing Library",
            link: "https://testing-library.com/docs/react-testing-library/intro/",
          },
          { name: "Cypress", link: "https://www.cypress.io/" },
        ],
      },
      {
        name: "Development Tools",
        items: [
          {
            name: "Visual Studio Code",
            link: "https://code.visualstudio.com/",
          },
          { name: "Docker", link: "https://www.docker.com/" },
          {
            name: "Confluence",
            link: "https://www.atlassian.com/software/confluence",
          },
          { name: "PyCharm", link: "https://www.jetbrains.com/pycharm/" },
          { name: "Postman", link: "https://www.postman.com/" },
          { name: "Testfully", link: "https://testfully.io/" },
          { name: "Google Search Console", link: "https://search.google.com/search-console/about" },
          {
            name: "Redis Insight",
            link: "https://redis.com/redis-enterprise/redis-insight/",
          },
        ],
      },
      {
        name: "Project Tools",
        items: [{ name: "Figma", link: "https://www.figma.com/" }],
      },
      {
        name: "AI Tools",
        items: [
          { name: "ChatGPT", link: "https://openai.com/chatgpt" },
          {
            name: "GitHub Copilot",
            link: "https://github.com/features/copilot",
          },
          { name: "Dall-E 2/3", link: "https://openai.com/dall-e" },
          { name: "Claude.ai", link: "https://www.anthropic.com/" },
          { name: "Gemini", link: "https://gemini.google.com/" },
          { name: "Grok", link: "https://x.ai/grok" },
          { name: "Speechify", link: "https://speechify.com/" },
        ],
      },
    ],
    []
  );
  return { skills };
};
