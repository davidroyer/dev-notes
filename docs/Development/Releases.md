# Releases & Publishing

I use `standard-version`. It has lifecycle scripts allowing to run a build after the version has been bumped.

## Inside `package.json`

```json
{
  "scripts": {
    "release": "standard-version && git push --follow-tags && npm publish",
    "release:next": "standard-version --prerelease next && git push --follow-tags origin dev && npm publish --tag next"
  },
  "standard-version": {
    "scripts": {
      "postbump": "yarn build && git add dist && git commit -m 'chore: new build'"
    }
  }
}
```

## References

- [Conventional Changelog Configuration Spec](https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.0.0/README.md#types)

## Notes

If a version has been published within the past 72 hours it can be removed if needed.
As follows:

```bash
npm unpublish vue2-editor@version
```
