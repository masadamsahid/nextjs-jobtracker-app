import moment from "moment";

moment.updateLocale('en-short', {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "1 s",
    ss: "%d s",
    m: "1 m",
    mm: "%d m",
    h: "1 h",
    hh: "%d h",
    d: "1 d",
    dd: "%d d",
    M: "1 mo",
    MM: "%d mo",
    y: "1 y",
    yy: "%d y"
  },
});

const original = moment();
export const momentNormal = original.clone();
export const momentShort = original.clone().locale('en-short');


export default moment;