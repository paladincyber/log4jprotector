# Log4J Immunizer

Browser extension to prevent Log4J exploits via websocket against services running on private network and localhost. This extension will disable connections over websocket to localhost and private IP addresses unless the initiator is also localhost or a private IP. This should harden your browser against drive-by websites, phishing landing pages, malicous HTML attachments and malicious ads that seek to use your browser as a beachhead for launching Log4J exploits against your company's internal web applications.

## How to install

### Install from browser store

We have submitted this extension to the Chrome, Edge and Mozilla stores and will update the sections below as the extension passes review and are made available to the public.

#### Chrome

Submitted 12/20/2021, will update link when available.

#### Edge

Submitted 12/20/2021, will update link when available.

#### Mozilla

Submitted 12/20/2021, will update link when available.

#### Building from source

1. Clone this repo via git
2. Install dependencies with `npm ci`
3. Build typescript to Javascript with `npm run build`
4. Package the extension with `npm run package`
5. Unpackage `./log4jprotector.zip` and target load the extension to the browser of your choice from the unpacked directory.

## License

See `./LICENSE`
