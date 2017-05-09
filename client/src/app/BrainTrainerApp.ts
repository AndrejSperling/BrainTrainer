import xs, {Stream} from "xstream";
import {div, DOMSource, VNode} from "@cycle/dom";

import {Reducer, Sinks, Sources} from "./interfaces";
import {SidebarLeft} from "./component/SidebarLeft/index";

export type AppState = {
    count: number;
};

export function App(sources: Sources): Sinks {
    const action$: Stream<Reducer> = intent(sources.DOM);
    const vdom$: Stream<VNode> = view(sources.onion.state$);

    const sidebarLeft$ = SidebarLeft(sources);
    const mainContent$ = SidebarLeft(sources);

    const mainContainer$ = xs.combine(sidebarLeft$.DOM, mainContent$.DOM)
        .map(([sidebar, content]) => div('.pusher', [div('.full .height', [sidebar, content])]));

    return {DOM: mainContainer$, onion: action$}
}

function intent(DOM: DOMSource): Stream<Reducer> {
    /*const init$: Stream<Reducer> = xs.of(() => ({count: 0}));
    const add$: Stream<Reducer> = DOM.select('.add').events('click').mapTo(state => ({...state, count: state.count + 1}));
    const subtract$: Stream<Reducer> = DOM.select('.subtract').events('click').mapTo(state => ({...state, count: state.count - 1}));

    return xs.merge(init$, add$, subtract$);*/
    return xs.never()
}

function view(state$: Stream<AppState>): Stream<VNode> {
    return xs.of(div(["hello"]))
}