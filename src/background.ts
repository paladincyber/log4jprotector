'use strict';

import { isPrivate } from 'ip';

function requestProtection(
    details : chrome.webRequest.WebRequestBodyDetails
): { redirectUrl?: string, cancel?: boolean } {
    const thisURL = new URL(details.url);

    // We want to disable websocket connections to localhost and private IPs
    // Kill all local and private IP traffic unless the initator is on the private network
    const initiator = details.initiator || (details as any).originUrl; // Allow for both firefox and chrome
    if (['wss:', 'ws:'].includes(thisURL.protocol) 
        && initiator 
        && initiator !== 'null') {
        const thisInitiator = new URL(initiator);

        const hostnamePrivate = isPrivate(thisURL.hostname) || thisURL.hostname === 'localhost';
        const initiatorPrivate = isPrivate(thisInitiator.hostname) || thisInitiator.hostname === 'localhost';
        if ( hostnamePrivate && !initiatorPrivate) {
            console.log('Blocked', thisInitiator.href, 'from accessing websockets on', thisURL.origin);
            return { cancel: true };
        }
  }

  return {};
}


function main() {
    const hasListener = chrome.webRequest.onBeforeRequest.hasListener(requestProtection);
    if (!hasListener) {
        chrome.webRequest.onBeforeRequest.addListener(requestProtection, { urls: ['<all_urls>'] }, ['blocking']);
        console.log('Webrequest listener added');
        console.log('Paladin Log4J Immunizer Initialized!');
    }
}

// Ensure we register listener on install
chrome.runtime.onInstalled.addListener(details => {
   main();     
});

// Initialize main program logic 
main();

