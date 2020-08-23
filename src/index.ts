/**
 * Youtube tracker
 * A Chrome extension to track Youtube Time
 * @copyright 2020 Ethan Lim, Luke Zhang, Victor Feng, Jaden Pereria
 * @author Luke Zhang luke-zhang-04.github.io/
 * @license ISC
 */

import YoutubeTracker from "./youtubeTracker"

chrome.runtime.onInstalled.addListener((): void => {
    chrome.storage.sync.set({ytTime: 0})
})

const ytTracker = new YoutubeTracker()

chrome.tabs.onActivated.addListener(ytTracker.onTabChange)
