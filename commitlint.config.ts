import type { UserConfig } from '@commitlint/types'

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Body
    'body-leading-blank': [2, 'always'],
    'body-empty': [0, 'never'],
    'body-min-length': [0, 'always', 1],
    'body-case': [0, 'always', 'lower-case'],

    // Footer
    'footer-leading-blank': [2, 'always'],
    'footer-empty': [0, 'never'],
    'footer-max-length': [0, 'always', 72],

    // Header
    'header-case': [0, 'always', 'lower-case'],
    'header-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
    'header-min-length': [2, 'always', 1],

    // Scope / Subject
    'scope-case': [0, 'always', 'lower-case'],
    'scope-empty': [0, 'always'],
    'subject-case': [0, 'always', 'lower-case'],
    'subject-empty': [0, 'never'],
    'subject-full-stop': [2, 'never', '.'],

    // Type
    'type-case': [0, 'always', 'lower-case'],
    'type-empty': [0, 'always'],
    'type-enum': [0, 'always', []],

    // Signed-off-by
    'signed-off-by': [2, 'always', 'Signed-off-by:'],
  },
  helpUrl:
    'https://avocado-framework.readthedocs.io/en/latest/guides/contributor/chapters/styleguides.html#commit-style-guide',
}

export default config

