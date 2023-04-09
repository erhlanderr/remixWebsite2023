import { useState } from "react";
import isServer from "../isServer";

const getItem = (key) =>
  document.cookie.split("; ").reduce((total, currentCookie) => {
    const item = currentCookie.split("=");
    const storedKey = item[0];
    const storedValue = item[1];
    return key === storedKey ? decodeURIComponent(storedValue) : total;
  }, "");

const setItem = (key, value, numberOfDays) => {
  let now = new Date();
  // set the time to be now + numberOfDays
  now.setTime(now.getTime() + numberOfDays * 60 * 60 * 24 * 1000);
  document.cookie = `${key}=${value};     expires=${now.toUTCString()}; path=/`;
};
/**
 * Custom hook to retrieve and store cookies for our application.
 * @param {String} key The key to store our data to
 * @param {String} defaultValue The default value to return in case the cookie doesn't exist
 */
const useCookie = (key, defaultValue) => {
  const getCookie = () =>
    !isServer() ? getItem(key) || defaultValue : defaultValue;
  const [cookie, setCookie] = useState(getCookie());
  const updateCookie = (value, numberOfDays) => {
    setCookie(value);
    if (!isServer()) setItem(key, value, numberOfDays);
  };
  return [cookie, updateCookie];
};

export default useCookie;
