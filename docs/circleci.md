# CircleCI

Things To Remember

- image: circleci/node:10.15
- Had to set node version
  ```yml
  - image: circleci/node:10.15
  ```
- Needed to set git config
- Setup a Deploy Key (_it's possible this isn't necessary but I believe it is_)
- Added `[skip ci]` to commit message so that CircleCI doesn't run again when pushing back to Github for Tagged Release
  ```yml
  - run: npm version patch -m 'new release [skip ci]'
  ```
- Added a step to set fingerprint that is in CircleCI config. When you push to your GitHub repository from a job, CircleCI will use the SSH key you added.
  ```yml
  steps:
    - add_ssh_keys:
        fingerprints:
          - "dc:b5:e1:9a:c2:71:1b:f5:ff:b7:6a:e6:15:51:36:ab"
  ```

## Setup

For generating an SSH Key for the Deploy Key, you can't use what's found in Github Docs because it doesn't work now. See [CircleCI's mention](https://circleci.com/docs/2.0/gh-bb-integration/#creating-a-github-user-key).

```bash
ssh-keygen -m PEM -t rsa -C "droyer01@gmail.com"
```

## References

<https://circleci.com/docs/2.0/gh-bb-integration/#enable-your-project-to-check-out-additional-private-repositories>

## Example File

<<< @/docs/.vuepress/snippets/circleci-config.vue
