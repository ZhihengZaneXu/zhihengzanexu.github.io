// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-neovim-configuration",
        
          title: "Neovim configuration",
        
        description: "a short note on the neovim config I use day-to-day.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/neovim-config/";
          
        },
      },{id: "news-presented-a-poster-at-nyc-privacy-day-on-ongoing-research-about-privacy-expectations-in-public",
          title: 'Presented a poster at NYC Privacy Day on ongoing research about privacy expectations...',
          description: "",
          section: "News",},{id: "news-passed-my-qualifying-exam-with-committee-members-dr-lee-dr-daher-and-dr-vinnikov",
          title: 'Passed my qualifying exam with committee members Dr. Lee, Dr. Daher, and Dr....',
          description: "",
          section: "News",},{id: "news-student-volunteer-for-citation-check-on-two-accepted-papers-in-soups-2026-https-soups-page",
          title: 'Student volunteer for citation check on two accepted papers in [SOUPS 2026] (https://soups.page/)....',
          description: "",
          section: "News",},{id: "teachings-is-cs-485-usable-security-amp-privacy",
          title: 'IS/CS 485 — Usable Security &amp;amp; Privacy',
          description: "Teaching Assistant for an undergraduate course on usable security and privacy, covering lessons from human-centered security research and how to apply them.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/CS485-2024-Fall/";
            },},{id: "teachings-is-350-computer-society-amp-ethics",
          title: 'IS 350 — Computer, Society &amp;amp; Ethics',
          description: "Teaching Assistant for an upper-level online course examining the ethical implications of computers and information systems, including privacy, professionalism, algorithmic bias, and digital intellectual property.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/IS350-2025-Fall/";
            },},{id: "teachings-is-350-computer-society-amp-ethics",
          title: 'IS 350 — Computer, Society &amp;amp; Ethics',
          description: "Teaching Assistant for an upper-level course examining the ethical implications of computing in society, including privacy, professionalism, algorithmic bias, and digital intellectual property.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/IS350-2025-Spring/";
            },},{id: "teachings-is-350-computer-society-amp-ethics",
          title: 'IS 350 — Computer, Society &amp;amp; Ethics',
          description: "Teaching Assistant for an upper-level online course examining the ethical implications of computers and information systems, including privacy, professionalism, algorithmic bias, and digital intellectual property.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/IS350-2026-Spring/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%78%34@%6E%6A%69%74.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ZhihengZaneXu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zane-xu-842365223", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
