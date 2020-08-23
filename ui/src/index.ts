/**
 * Youtube tracker
 * A Chrome extension to track Youtube Time
 * @copyright 2020 Ethan Lim, Luke Zhang, Victor Feng, Jaden Pereria
 * @author Luke Zhang luke-zhang-04.github.io/
 * @license ISC
 */

import DeStagnate, {createElement} from "destagnate"
import DatePlus from "@luke-zhang-04/dateplus"

interface DashState {
    ytTime?: number,
}

class Dashboard extends DeStagnate<undefined, DashState> {

    public constructor (parent: HTMLElement) {
        super(parent)

        this.state = {
            ytTime: undefined,
        }
    }

    public componentDidMount = (): void => {
        this._setTime()

        chrome.storage.onChanged.addListener(() => {
            this._setTime()
        })
    }

    /**
     * Render function
     * @returns renered content
     */
    public render = (): HTMLElement => (
        createElement("div", {class: "container"},
            createElement("p", null,
                this._getYtTime(),
                createElement(
                    "button",
                    {
                        class: "btn btn-primary",
                        onClick: this._reset
                    },
                    "Reset",
                )
            )
        )
    )

    /**
     * Get time from storage and display set it to state
     * @returns void
     */
    private _setTime = (): void => chrome.storage.sync.get((items) => {
        this.setState({ytTime: Number(items.ytTime)})
    })

    /**
     * Reset storage values
     */
    private _reset = (): void => {
        if (confirm("Are you sure you want to reset your time?")) {
            chrome.storage.sync.set({
                ytTime: 0,
                lastUsed: new Date().getDate()
            })
        }
    }

    private _getYtTime = (): HTMLElement => {
        if (this.state.ytTime === undefined) {
            return createElement("p", null, "Loading...")
        }

        const time = DatePlus.msToHours(this.state.ytTime)

        return createElement("p", {class: "mt-3"},
            `You've spent a total of ${time.hours} hours, ${time.minutes} minutes, and ${time.seconds} seconds on YouTube today.`
        )
    }

}

const root = document.getElementById("root")

if (root) {
    const dash = new Dashboard(root)

    dash.mount()
}
