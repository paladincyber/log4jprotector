# WebSocket Log4j Exploit Immunizer by Paladin Cyber

Browser extension to prevent Log4J exploits via WebSocket against services running on private network and localhost. This extension will disable connections over WebSocket to localhost and private IP addresses unless the initiator is also localhost or a private IP. This should harden your browser against drive-by websites, phishing landing pages, malicious HTML attachments and malicious ads that seek to use your browser as a beachhead for launching Log4J exploits against your company's internal web applications.

This protection is already included in the XSS defense feature for our paid Paladin Shield users. However, due to the severity of Log4j vulnerability (CVE-2021-44228) and how it can now be exploited by drive-by websites, phishing landing pages, malicious HTML attachments and malicious ads via WebSockets, we believed the right thing to do is to release this protection as open source and allow anyone to defend themselves against the WebSocket variant of the Log4j exploit.

## How to install

### Install from browser store

We have submitted this extension to the Chrome, Edge and Mozilla stores and will update the sections below as the extension passes review and are made available to the public.

#### Chrome

Submitted 12/20/2021, will update with link when available.

#### Edge

Submitted 12/20/2021, will update with link when available.

#### Mozilla

https://addons.mozilla.org/en-US/firefox/addon/paladin-log4j-immunizer/

#### Building from source

Git source: https://github.com/paladincyber/log4jprotector

1. Clone this repo via git
2. Install dependencies with `npm ci`
3. Build typescript to Javascript with `npm run build`
4. Package the extension with `npm run package`
5. Unpackage `./log4jprotector.zip` and target load the extension to the browser of your choice from the unpacked directory.

## License

AGPL-3.0-or-later
