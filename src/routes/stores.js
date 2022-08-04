import {writable} from "svelte/store";
import {browser} from "$app/env"

export const userName = writable(
    browser && (localStorage.getItem("userName" || "Fred"))
);

export const top = writable (
    browser && (localStorage.getItem("top" || "topAr"))
);

userName.subscribe((val) => browser && (localStorage.userName = val));

top.subscribe((val) => browser && (localStorage.top = val));
