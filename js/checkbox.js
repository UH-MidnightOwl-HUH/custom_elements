document.getElementById("checkbox").addEventListener("click", function()
{
    let status = document.getElementById("checkbox-status");

    if (status.classList.contains("checkbox__checked"))
        status.classList.remove("checkbox__checked");
    else
        status.classList.add("checkbox__checked");
});