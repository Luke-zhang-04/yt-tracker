/**
 * Youtube tracker
 * A Chrome extension to track Youtube Time
 * @copyright 2020 Ethan Lim, Luke Zhang, Victor Feng, Jaden Pereria
 * @author Luke Zhang luke-zhang-04.github.io/
 * @license ISC
 */

/**
 * Youtube tracker class
 */
export default class YoutubeTracker {

    /**
     * Keep track of total Youtube Time
     */
    private _ytTime = 0

    /**
     * Keep track of amount of time spend on Youtube at once
     */
    private _curTime: number | undefined

    /**
     * Initial storage sync
     */
    public constructor () {
        chrome.storage.sync.get((items) => {
            this._ytTime = Number(items.ytTime)
        })
    }

    /**
     * Function to call on tab change
     * @returns void
     */
    public onTabChange = (): void => {
        chrome.tabs.getSelected((tab): void => {
            if (
                tab.url?.includes("youtube.com") &&
                this._curTime === undefined
            ) {
                this._curTime = Date.now()
            } else if (this._curTime !== undefined) {
                this._ytTime = this._ytTime + Date.now() - this._curTime
                this._curTime = undefined

                chrome.storage.sync.set({ytTime: this._ytTime})
            }
        })
    }

}
