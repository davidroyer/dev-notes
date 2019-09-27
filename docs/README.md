# :books: My DevNotes

> Keeping track of what I know

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
