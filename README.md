# NextJS Template - by Acea Spades

This is a starter template for NextJS projects.

# Get Started

1. After clining the repo, run `yarn` to install all the dependencies.
    - Not using yarn? Delete `yarn.lock`, then run `npm install` instead. Or, run `npm install -g yarn` to install yarn (it's debatably better than npm; pick your team, green or blue).

2. Run `yarn dev` to start the development server.

3. Run `yarn build` to build the project.

That's it!

## Next Steps

- Change the project name, title, description, etc. in:
-- package.json
-- lib/utils/AppConfig.ts

- Change favicons in `public/icons/favicons`
- Change og-image `public/images/og-image.png`

# Libraries

## Testing
- `cypress` for E2E + Component Testing

## Precommit Hooks
- Husky - Precommit Hooks
- Lint-Staged - Staged Files Linter

`husky` is engaging `lint-staged`, which in turn is calling `eslint` (fix) and `typescript` (no-emit) before every commit.

## Linting
- ESLint - Linter
- Typescript - Transpiler & Type Safety Checking
A combination of `eslint` (fix) and `typescript` (no-emit) are used to lint the codebase.

## Styling
- TailwindCSS - Utility Classes

`tailwind` with custom CSS. I'm not using SASS yet, though I'm definitely going to adding it in the near future.

## State Management
- `zustand` all the way! Client state management as it should be: stores that are easy to create, consume, and manipulate, without *any* boilerplate necessary.
- `useSWR` as a fetch-and-cache system is excellent.

## Security, Cryptography
- `jsonwebtoken` for singing / decoding JWTs,
- `bcrypt` for hashing, 
- `uuid` to generate UUIDs

## Utilities
- `cookies-next` has been the best cookie helper (for NextJS) I've found thus far (and I've tried quite a few!)
- `lodash` because... it's lodash!
