import DatePlus from "@luke-zhang-04/dateplus"

interface PageInfo {
    title?: string,
    duration?: number,
}

/**
 * Gets duration of video in seconds
 * @param timestamp - string timestamp of video (e.g 3:11 or 1:20:15)
 * @returns duration
 */
const getDuration = (timestamp?: string | null): number | undefined => {
        if (timestamp) {
            const [hours, minutes, seconds] = timestamp.split(":")

            if (seconds === undefined) { // Hours turns into minutes and minutes into seconds
                return Number(minutes) + DatePlus.minsToSecs(Number(hours))
            }

            return Number(seconds) +
            DatePlus.minsToSecs(Number(minutes)) +
            DatePlus.hrsToMins(Number(hours))
        }

        return undefined
    },

    /**
     * Queryselector string for title element
     */
    titleQuery = "h1.title.style-scope.ytd-video-primary-info-renderer",

    /**
     * Gets the title of element
     * @returns string for title, undefined if a none found
     */
    getTitle = (): string | undefined => {
        const element = document.querySelector(titleQuery)

        if (element instanceof HTMLElement) {
            return element.innerText
        } else if (element) {
            return element.innerHTML
        }

        return undefined
    },

    /**
     * Queryselector string for duration
     */
    durationQuery = "span.ytp-time-duration",

    /**
     * Page info
     */
    info: PageInfo = {
        title: getTitle(),
        duration: getDuration(document.querySelector(durationQuery)?.innerHTML)
    },

    /**
     * Main function
     * @returns void
     */
    main = (): void => {
        console.table(info)
    }

/* eslint-disable @typescript-eslint/no-unsafe-call */
if (window.location.href.includes("youtube")) {
    setInterval(main, DatePlus.secsToMs(1))
}
/* eslint-enable @typescript-eslint/no-unsafe-call */


