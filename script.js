function beforesubmit() {
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log(inputdate.value);

    let formatted = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formatted;
}