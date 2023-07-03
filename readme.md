# Plain Documentation

This is the documentation for Plain and its API.

It is built using [NextJS](https://nextjs.org/), [Nextra](https://nextra.site/) and [MDX](https://mdxjs.com/).

To read the docs head to [plain.com/docs](https://plain.com/docs)

## Contributing

We use `pnpm` instead of npm which you can install following [these instructions](https://pnpm.io/installation).

First, run `pnpm i` to install the dependencies. Then, run `pnpm dev` to start the development server.

You can now edit any .mdx file and changes should live reload. If you run into any stale cache issues where your changes are not being reflected, try and delete the `.next` directory and then restart the dev server.

There are some key language/style choices you should follow (and add to):

- Key features are uppercased e.g. "Customer Cards" vs "customer cards"
- Be consistent in which words are used for different groups of people:
  - When refering to people who are helped via Plain use the name "customer"
  - When refering to people who use Plain to help other people use the name "user"
