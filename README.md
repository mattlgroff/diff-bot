# diff-bot
Discord WebHook bot for notifying when a change in a webpage occurs.

![alt text](https://i.imgur.com/DqW2G4s.png "Example Image")

Requires [diff-socket](https://github.com/mattlgroff/diff-socket)

## Example .env File
Get WebHook ID and Token from Discord (under Server Settings -> WebHook)
```
DISCORD_WEBHOOK_ID=0000000000
DISCORD_WEBHOOK_TOKEN=awdhawlkfhlfhawfwa0f90808080
```
Fill these in with your diff-socket URL and the URL of the webpage to watch.
```
DIFF_URL='http://mattlgroff.github.io'
SOCKET_URL='http://localhost:8080'
```
