import "./style.css";
import { addCountriesInput, checkValid } from "./domHelpers";
addCountriesInput();
document.querySelector("form").addEventListener("input", checkValid);

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (document.querySelector("form").checkValidity()) {
        window.alert("high five");
        document.querySelector("form").reset();
    } else {
        window.alert("read errors");
    }
});
