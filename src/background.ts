'use strict';

import { isPrivate } from 'ip';

function requestProtection(
    details : chrome.webRequest.WebRequestBodyDetails
): { redirectUrl?: string, cancel?: boolean } {
    // Remove query parameters so we don't trigger on search engines
    const thisURL = new URL(details.url);
    // We want to disable websocket connections to localhost and private IPs
    // Kill all local and private IP traffic unless the initator is on the private network

    if (['wss:', 'ws:'].includes(thisURL.protocol) 
        && details.initiator 
        && details.initiator !== 'null') {
        const thisInitiator = new URL(details.initiator);

        const hostnamePrivate = isPrivate(thisURL.hostname) || thisURL.hostname === 'localhost';
        const initiatorPrivate = isPrivate(thisInitiator.hostname) || thisInitiator.hostname === 'localhost';
        if ( hostnamePrivate && !initiatorPrivate) {
            console.log('Blocked ', thisInitiator.origin, ' from accessing websockets on ', thisURL.origin);
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

