document.getElementById("input-box").addEventListener("click", function()
{
    document.getElementById("input").focus();
    document.getElementById("input-placeholder").classList.add("input__placeholder_not-empty");
    document.getElementById("input-placeholder").classList.add("input__placeholder_active");
});

document.getElementById("input").addEventListener("focus", function()
{
    document.getElementById("input-box").click();
});

document.getElementById("input").addEventListener("blur", function()
{
    document.getElementById("input-placeholder").classList.remove("input__placeholder_active");

    if (document.getElementById("input").value.length === 0)
        document.getElementById("input-placeholder").classList.remove("input__placeholder_not-empty");
});

