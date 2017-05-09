import {Stream} from "xstream";
import {a, div, DOMSource, li, ul, VNode} from "@cycle/dom";

interface Sources {
    DOM: DOMSource
}

interface Sinks {
    DOM: Stream<VNode>;
}

export function Menu(sources: Sources): Sinks {

    const DOM = Stream.of(
        div('.menu', [
            ul([
                li(".item", [a({"attrs": {"href": "/"}}, ['Start'])]),
                li(".item", [a({"attrs": {"href": "/feed"}}, ['Feed'])]),
                li(".item", [a({"attrs": {"href": "/store"}}, ['Store'])])
            ])
        ])
    )

    return {DOM}
}