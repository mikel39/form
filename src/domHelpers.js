import { countries, getEmojiFlag } from "countries-list";

const countriesNames = (() => {
    const countriesKeys = Object.keys(countries);
    return countriesKeys.map((country) => countries[country].name);
})();

const addCountriesInput = () => {
    const countriesKeys = Object.keys(countries);
    const div = document.querySelector("form > div:nth-child(2)");
    const label = document.createElement("label");
    const select = document.createElement("select");

    label.textContent = "Country";
    label.setAttribute("for", "countries");

    select.id = "countries";
    select.required = true;
    select.name = "countries";

    countriesNames.forEach((country, index) => {
        const option = document.createElement("option");
        option.textContent = `${getEmojiFlag(countriesKeys[index])} ${country}`;
        option.value = country.toLowerCase();
        select.appendChild(option);
    });

    div.appendChild(label);
    div.appendChild(select);
};

const errorElement = (element) => {
    return element.parentElement.querySelector("p");
};

const validEmail = () => {
    const email = document.querySelector("#email");
    const p = errorElement(email);

    email.setCustomValidity("");

    if (!email.validity.valid) {
        p.textContent = email.validationMessage;
        return;
    }

    if (!email.value.endsWith("@gmail.com")) {
        email.setCustomValidity("Please enter an email address of @gmail.com");
        p.textContent = email.validationMessage;
    }
};

const validPCode = () => {
    const pCode = document.querySelector("#postal-code");
    const p = errorElement(pCode);
    p.textContent = pCode.validationMessage;
};

const validPassword = () => {
    const password = document.querySelector("#password");
    const p = errorElement(password);
    p.textContent = password.validationMessage;
};

const confirmPassword = () => {
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirm-password");
    const p = errorElement(confirmPassword);

    confirmPassword.setCustomValidity("");

    if (confirmPassword.value !== password.value) {
        confirmPassword.setCustomValidity("Please match the passwords");
        p.textContent = confirmPassword.validationMessage;
    } else {
        p.textContent = confirmPassword.validationMessage;
    }
};

const checkValid = () => {
    validEmail();
    validPCode();
    validPassword();
    confirmPassword();
};
export { addCountriesInput, checkValid };
