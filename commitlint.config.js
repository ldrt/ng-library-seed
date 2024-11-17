module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // adds or remove a new feature
        'fix', // fixes a bug
        'style', // edits that do not affect the meaning (white-space, formatting, missing semi-colons, etc)
        'test', // adds/corrects unit tests
        'e2e', // adds/corrects end-to-end tests
        'refactor', // rewrites/restructures code but does not change any API behaviour
        'perf', // improves performance (a special kind of refactor commit)
        'build', // affects build components like build tool, ci pipeline, dependencies, project version, etc
        'chore', // miscellaneous commits (e.g. modifying .gitignore)
        'doc', // affects documentation only
        'wip', // workinprogress (should be blocked by CI)
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-max-length': [2, 'always', 8],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-max-length': [2, 'always', 60],
  },
};
