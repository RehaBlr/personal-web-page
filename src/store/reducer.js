//
import { source } from "../languages/languageSource";
const initialStore = {
  lan: "tr",
  source: { ...source.en },
};
export function reducer(state = initialStore, action) {
  if (action.type === "swit") {
    const { lan, setdata } = action.payload;
    // action.payload.setData(veri.en);
    lan === "tr" ? setdata(source.tr) : setdata(source.en);

    // setdata(veri.en);
    console.log("swit kısmındayız", lan);
    if (lan === "tr") {
      return { ...initialStore, source: source.tr };
    } else {
      return { ...initialStore, source: source.en };
    }
  }
  return state;
}
