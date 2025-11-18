import propNames from "../propNames";

const isElHasProperty = (el: HTMLElement | null, property: string) => {
  if (el && el.getAttribute(propNames.dataAttr)?.includes(property)) {
    return true;
  } else {
    return false;
  }
};

export default isElHasProperty;
