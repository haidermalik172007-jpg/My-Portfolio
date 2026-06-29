"use client";

import React from "react";
import {
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  href: string;
  githubLink?: string;
  liveLink?: string;
  priority?: boolean;
  content?: string;
  avatars?: { src: string }[];
  link?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  images,
  href,
  githubLink,
  liveLink,
}) => {
  return (
    <Flex
      fillWidth
      gap="xl"
      padding="24"
      radius="xl"
      border="neutral-medium"
      background="surface"
      s={{ direction: "column" }}
      vertical="center"
    >
      <Column flex={1} fillWidth>
        <Carousel
          sizes="(max-width: 960px) 100vw, 600px"
          items={images.map((image) => ({
            slide: image,
            alt: title,
          }))}
        />
      </Column>

      <Column flex={1} gap="20" fillWidth>
        <Heading as="h2" variant="heading-strong-xl" align="center">
          {title}
        </Heading>

        <Text variant="body-default-m" onBackground="neutral-weak" align="center">
          {description}
        </Text>

        <Column gap="12">
          <SmartLink
            href={href}
            style={{
              width: "100%",
              justifyContent: "center",
              padding: "14px",
              border: "1px solid #5f4bff",
              borderRadius: "12px",
            }}
          >
            <Text>How it was made</Text>
          </SmartLink>

          {githubLink && (
            <SmartLink
              href={githubLink}
              style={{
                width: "100%",
                justifyContent: "center",
                padding: "14px",
                border: "1px solid #5f4bff",
                borderRadius: "12px",
              }}
            >
              <Text>View Code</Text>
            </SmartLink>
          )}

          {liveLink && (
            <SmartLink
              href={liveLink}
              style={{
                width: "100%",
                justifyContent: "center",
                padding: "14px",
                border: "1px solid #5f4bff",
                borderRadius: "12px",
              }}
            >
              <Text>Live Demo</Text>
            </SmartLink>
          )}
        </Column>
      </Column>
    </Flex>
  );
};