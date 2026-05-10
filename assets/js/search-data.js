// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/al-folio/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/news/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-presented-a-poster-at-nyc-privacy-day-on-ongoing-research-about-privacy-expectations-in-public",
          title: 'Presented a poster at NYC Privacy Day on ongoing research about privacy expectations...',
          description: "",
          section: "News",},{id: "teachings-is-cs-485-usable-security-amp-privacy",
          title: 'IS/CS 485 — Usable Security &amp;amp; Privacy',
          description: "Teaching Assistant for an undergraduate course on usable security and privacy, covering lessons from human-centered security research and how to apply them.",
          section: "Teachings",handler: () => {
              window.location.href = "/al-folio/teachings/CS485-2024-Fall/";
            },},{id: "teachings-is-350-computer-society-amp-ethics",
          title: 'IS 350 — Computer, Society &amp;amp; Ethics',
          description: "Teaching Assistant for an upper-level online course examining the ethical implications of computers and information systems, including privacy, professionalism, algorithmic bias, and digital intellectual property.",
          section: "Teachings",handler: () => {
              window.location.href = "/al-folio/teachings/IS350-2025-Fall/";
            },},{id: "teachings-is-350-computer-society-amp-ethics",
          title: 'IS 350 — Computer, Society &amp;amp; Ethics',
          description: "Teaching Assistant for an upper-level course examining the ethical implications of computing in society, including privacy, professionalism, algorithmic bias, and digital intellectual property.",
          section: "Teachings",handler: () => {
              window.location.href = "/al-folio/teachings/IS350-2025-Spring/";
            },},{id: "teachings-is-350-computer-society-amp-ethics",
          title: 'IS 350 — Computer, Society &amp;amp; Ethics',
          description: "Teaching Assistant for an upper-level online course examining the ethical implications of computers and information systems, including privacy, professionalism, algorithmic bias, and digital intellectual property.",
          section: "Teachings",handler: () => {
              window.location.href = "/al-folio/teachings/IS350-2026-Spring/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/al-folio/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%78%34@%6E%6A%69%74.%65%64%75", "_blank");
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
