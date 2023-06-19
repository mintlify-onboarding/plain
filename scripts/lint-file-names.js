const { glob } = require('glob');

// These files are exceptions
const exceptions = [
  'tsconfig.tsbuildinfo',
  'tsconfig.json',
  'theme.config.tsx',
  'pnpm-lock.yaml',
  'package.json',
  'next.config.js',
  'next-env.d.ts',
  'readme.md',
];

const codeFile = /[a-zA-Z]+\.(js|ts|tsx)/g;
const cssModuleFiles = /[a-zA-Z]+\.module\.css/g;
const pageRegex = /pages\/[a-z-\/]+\.mdx/g;
const pageMetaRegex = /pages\/[a-z-\/]*_meta\.json/g;
const imageRegex = /public\/[a-z-/0-9]+\.(png|svg|ico|jpeg|jpg)/g;

async function lint() {
  const errors = [];
  const allFiles = await glob('**/**.*', { ignore: ['node_modules/**'] });

  console.log(`👉 Linting ${allFiles.length} files.`);

  allFiles.forEach((file) => {
    const allowedPatterns = [pageRegex, pageMetaRegex, imageRegex, codeFile, cssModuleFiles];

    const isException = exceptions.includes(file);

    if (isException) {
      return;
    }

    const match = allowedPatterns.find((pattern) => {
      return new RegExp(pattern).test(file);
    });

    if (!match) {
      console.error(`❌ ${file}`);
      errors.push(file);
    }
  });

  if (errors.length) {
    console.error(`\n${errors.length} files have invalid names.`);
    process.exit(1);
  }
}

lint();
