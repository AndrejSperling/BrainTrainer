import {button, DOMSource} from "@cycle/dom";
import {Stream} from "xstream";
import {VNode} from "snabbdom/vnode";
import {Sinks as MainSinks} from "../../main";

export type Sources = {
    DOM: DOMSource,
};
export type Sinks = {
    DOM: Stream<VNode>,
};

function intent(dom) {
    return {
        click$: dom.select('.center-content').events('click')
    };
}

function model(intent) {
    return {
        click$: intent.click$.map(stream => {
            alert("CenterContent!");
            return stream;
        }).startWith('')
    }
}

function view(model) {
    return model.click$.map(j =>
        button('.center-content', ['Center Knopf']))
}

function CenterContent(sources: Sources): MainSinks {

    const intents = intent(sources.DOM);
    const models = model(intents);
    const view$ = view(models);

    return {DOM: view$}
}

export default CenterContent;