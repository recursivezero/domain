import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./pages/**/*.{js,html,md,mdx,ts,tsx,astro,html}",
    "./components/**/*.{js,html,md,mdx,ts,tsx,astro, html}",
    "./src/**/*.{js,html,md,mdx,ts,tsx,astro, html}"
  ],
  darkMode: "class",
  corePlugins: {
    // disable aspect ratio as per docs -> @tailwindcss/aspect-ratio
    aspectRatio: false,
    // disable some core plugins as they are included in the css, even when unused
    touchAction: false,
    ringOffsetWidth: false,
    ringOffsetColor: false,
    scrollSnapType: false,
    borderOpacity: false,
    textOpacity: false,
    fontVariantNumeric: false
  },
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        customLight: {
          DEFAULT: "#1D4ED8", // Light theme link color
          hover: "#2563EB", // Light theme hover color
          active: "#1E40AF" // Light theme active color
        },
        customDark: {
          DEFAULT: "#F59E0B", // Dark theme link color
          hover: "#FBBF24", // Dark theme hover color
          active: "#F1D032" // Dark theme active color
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    },
    fontFamily: {
      // Add any custom fonts here
      custom: ["Mudra"],
      sans: [...fontFamily.sans],
      serif: [...fontFamily.serif]
    },
    transitionProperty: {
      height: "height"
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // Remove above once tailwindcss exposes theme type
    typography: (theme) => ({
      blog: {
        css: {
          "--tw-prose-body": theme("colors.textColor / 1"),
          "--tw-prose-headings": theme("colors.accent-2 / 1"),
          "--tw-prose-links": theme("colors.textColor / 1"),
          "--tw-prose-bold": theme("colors.textColor / 1"),
          "--tw-prose-bullets": theme("colors.textColor / 1"),
          "--tw-prose-quotes": theme("colors.quote / 1"),
          "--tw-prose-code": theme("colors.textColor / 1"),
          "--tw-prose-hr": "0.5px dashed #666",
          "--tw-prose-th-borders": "#666"
        }
      },
      sm: {
        css: {
          code: {
            fontSize: theme("fontSize.sm")[0],
            fontWeight: "400"
          }
        }
      }
    })
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    plugin(function ({ addComponents }) {
      addComponents({
        ".title": {
          "@apply leading-relaxed text-2xl font-semibold text-accent": {}
        }
      });
    })
  ]
} satisfies Config;
