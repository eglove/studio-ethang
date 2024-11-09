import {defineType} from 'sanity'

export default defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {
      lists: [{
        title: "Bullet",
        value: "bullet",
      }],
      marks: {
        annotations: [
          {
            fields: [
              {
                name: "href",
                title: "URL",
                type: "url",
              },
            ],
            name: "link",
            title: "URL",
            type: "object",
          },
        ],
        decorators: [
          {
            title: "Strong",
            value: "strong",
          },
          {
            title: "Emphasis",
            value: "em",
          },
        ],
      },
      styles: [
        {
          title: "Normal",
          value: "normal",
        },
        {
          title: "H1",
          value: "h1",
        },
        {
          title: "H2",
          value: "h2",
        },
        {
          title: "H3",
          value: "h3",
        },
        {
          title: "H4",
          value: "h4",
        },
        {
          title: "Quote",
          value: "blockquote",
        },
      ],
      title: "Block",
      type: "block",
    },
    {
      fields: [
        {
          name: "altText",
          title:
            "Alt Text",
          type: "string",
          validation(rule) {
            return rule
              .required()
              .error(
                "Alt Text is required for all images, to add click the three dots on the image, then click the pencil icon.",
              );
          },
        },
      ],
      type: "image",
    },
  ],
})