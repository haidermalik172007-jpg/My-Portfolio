import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";


import classNames from "classnames";

import {
  Background,
  Column,
  Flex,
  Meta,
  opacity,
  RevealFx,
  SpacingToken,
} from "@once-ui-system/core";

import {
  Footer,
  Header,
  RouteGuard,
  Providers,
} from "@/components";

import {
  baseURL,
  effects,
  fonts,
  style,
  dataStyle,
  home,
  person,
} from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex
      as="html"
      lang={person.locale ?? "en"}
      fillWidth
      suppressHydrationWarning
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable
      )}
    >
      <head>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const root = document.documentElement;

                  const config = ${JSON.stringify({
                    brand: style.brand,
                    accent: style.accent,
                    neutral: style.neutral,
                    solid: style.solid,
                    "solid-style": style.solidStyle,
                    border: style.border,
                    surface: style.surface,
                    transition: style.transition,
                    scaling: style.scaling,
                    "viz-style": dataStyle.variant,
                  })};

                  Object.entries(config).forEach(([key, value]) => {
                    root.setAttribute('data-' + key, value);
                  });

                  const resolveTheme = (theme) => {
                    if (!theme || theme === 'system') {
                      return window.matchMedia(
                        '(prefers-color-scheme: dark)'
                      ).matches
                        ? 'dark'
                        : 'light';
                    }
                    return theme;
                  };

                  const savedTheme =
                    localStorage.getItem('data-theme');

                  root.setAttribute(
                    'data-theme',
                    resolveTheme(savedTheme)
                  );

                  Object.keys(config).forEach((key) => {
                    const value = localStorage.getItem(
                      'data-' + key
                    );

                    if (value) {
                      root.setAttribute(
                        'data-' + key,
                        value
                      );
                    }
                  });
                } catch (error) {
                  document.documentElement.setAttribute(
                    'data-theme',
                    'dark'
                  );
                }
              })();
            `,
          }}
        />
      </head>

      <Providers>
        <Column
          as="body"
          suppressHydrationWarning
          background="page"
          fillWidth
          margin="0"
          padding="0"
          horizontal="center"
          style={{
            minHeight: "100vh",
          }}
        >
          <RevealFx fill position="absolute">
            <Background
              mask={{
                x: effects.mask.x,
                y: effects.mask.y,
                radius: effects.mask.radius,
                cursor: effects.mask.cursor,
              }}
              gradient={{
                display: effects.gradient.display,
                opacity: effects.gradient.opacity as opacity,
                x: effects.gradient.x,
                y: effects.gradient.y,
                width: effects.gradient.width,
                height: effects.gradient.height,
                tilt: effects.gradient.tilt,
                colorStart: effects.gradient.colorStart,
                colorEnd: effects.gradient.colorEnd,
              }}
              dots={{
                display: effects.dots.display,
                opacity: effects.dots.opacity as opacity,
                size: effects.dots.size as SpacingToken,
                color: effects.dots.color,
              }}
              grid={{
                display: effects.grid.display,
                opacity: effects.grid.opacity as opacity,
                color: effects.grid.color,
                width: effects.grid.width,
                height: effects.grid.height,
              }}
              lines={{
                display: effects.lines.display,
                opacity: effects.lines.opacity as opacity,
                size: effects.lines.size as SpacingToken,
                thickness: effects.lines.thickness,
                angle: effects.lines.angle,
                color: effects.lines.color,
              }}
            />
          </RevealFx>

          <Flex
            fillWidth
            minHeight="16"
            s={{ hide: true }}
          />

          <Header />

          <Flex
            zIndex={0}
            fillWidth
            padding="l"
            horizontal="center"
            flex={1}
          >
            <Flex
              horizontal="center"
              fillWidth
              minHeight="0"
            >
              <RouteGuard>{children}</RouteGuard>
            </Flex>
          </Flex>

          <Footer />
        </Column>
      </Providers>
    </Flex>
  );
}