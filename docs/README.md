# :books: My DevNotes

> Keeping track of what I know

## Structure

docs
┣ .vuepress

┃ ┣ components
┃ ┃ ┗ Mermaid.vue

┃ ┣ snippets
┃ ┃ ┗ circleci-config.yml
┃ ┣ styles
┃ ┃ ┗ index.styl
┃ ┗ config.js
┣ guide
┃ ┣ file1.md
┃ ┣ file2.md
┃ ┗ newfile.md
┣ vue
┃ ┣ notes.md
┃ ┣ plugins.md
┃ ┗ testing.md
┣ README.md
┣ circleci.md
┣ firebase.md
┣ git.md
┣ javascript.md
┣ nuxt.md
┣ releases.md
┣ vscode.md
┣ vue2-editor.md
┣ vuepress.md
┗ vuexfire.md

## Things To Look Into To

Got odd message when running `git push`. Check on what this means:

```sh
Warning: Permanently added the RSA host key for IP address '140.82.113.4' to the list of known hosts.
```

```bash
npm WARN lifecycle The node binary used for scripts is /var/folders/2c/1dnbncws3t7cjs3rw1zpkdj40000gn/T/yarn--1563442289788-0.24791787254492803/node but npm is using /Users/davidroyer/.nvm/versions/node/v10.15.0/bin/node itself. Use the `--scripts-prepend-node-path` option to include the path for the node binary npm was executed with.
```

Message after updating PHP via Brew

```bash
To enable PHP in Apache add the following to httpd.conf and restart Apache:
    LoadModule php7_module /usr/local/opt/php/lib/httpd/modules/libphp7.so

    <FilesMatch \.php$>
        SetHandler application/x-httpd-php
    </FilesMatch>

Finally, check DirectoryIndex includes index.php
    DirectoryIndex index.php index.html

The php.ini and php-fpm.ini file can be found in:
    /usr/local/etc/php/7.3/

To have launchd start php now and restart at login:
  brew services start php
Or, if you don't want/need a background service you can just run:
  php-fpm
```

---

## Terminalizer

```bash
The recording data is saved into the file:
/Users/davidroyer/Repos/NuxtBookProject/demo.yml
You can edit the file and even change the configurations.

Let's now share your recording on https://terminalizer.com
The command `terminalizer share`can be used anytime to share recordings!

The global config directory is created at
/Users/davidroyer/.terminalizer
Open the following link in your browser and login into your account
https://terminalizer.com/token?token=62f8f6f8-e093-4235-9a96-7ffe3719867d

When you do it, press any key to continue
```
