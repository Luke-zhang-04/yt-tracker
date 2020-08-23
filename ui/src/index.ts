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
        createElement(
            "div",
            null,
            this.state.ytTime === undefined
                ? "Loading..."
                : JSON.stringify(DatePlus.msToHrs(this.state.ytTime), null, 2)
        )
    )

    /**
     * Get time from storage and display set it to state
     * @returns void
     */
    private _setTime = (): void => chrome.storage.sync.get((items) => {
        this.setState({ytTime: Number(items.ytTime)})
    })

}

const root = document.getElementById("root")

if (root) {
    const dash = new Dashboard(root)

    dash.mount()
}
