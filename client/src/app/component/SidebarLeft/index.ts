import {Stream} from "xstream";
import {div, DOMSource, img, VNode} from "@cycle/dom";
import {Menu} from "./Menu/index";

interface Sources {
    DOM: DOMSource
}

interface Sinks {
    DOM: Stream<VNode>;
}

function header(): VNode {
    return div([
        img('#header-logo', {
            "attrs": {
                "src": "src/img/logo.png",
                "height": "50"
            }
        })
    ])
}

export function SidebarLeft(sources: Sources): Sinks {

    const menuSink$ = Menu(sources)
    const vdom$ = menuSink$.DOM
        .map(dom =>
            div('.sidebar .toc',
                [header(), dom]
            )
        )

    const DOM = vdom$

    return {DOM}

}