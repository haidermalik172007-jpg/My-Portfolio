import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person, newsletter } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* ✅ Professional Heading */}
      <Heading marginBottom="8" variant="display-strong-l" marginLeft="24">
        Articles & Insights
      </Heading>
      <Text
        marginLeft="24"
        marginBottom="40"
        onBackground="neutral-medium"
        variant="body-default-l"
      >
        Practical guides and tutorials on React, Next.js, JavaScript and modern frontend development.
      </Text>

      <Column fillWidth flex={1} gap="40">
        <Posts range={[1, 1]} thumbnail />
        <Posts range={[2, 3]} columns="2" thumbnail direction="column" />
        <Mailchimp marginBottom="l" />

        {/* ✅ "Earlier posts" bhi professional */}
        <Heading as="h2" variant="heading-strong-l" marginLeft="l">
          More Articles
        </Heading>
        <Posts range={[4]} columns="2" />
      </Column>
    </Column>
  );
}