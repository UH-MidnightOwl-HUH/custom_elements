function list_items()
{
    let list = document.getElementsByClassName("drop-box")[0];
    let checked_item = 0;
    
    list.addEventListener("click", function()
    {    
        for (let i = 0; i < list.children.length; ++i)
        {
            if (i === checked_item) continue;

            if (list.children[i].classList.contains("drop-box__item_listed"))
                list.children[i].classList.remove("drop-box__item_listed");
            else
                list.children[i].classList.add("drop-box__item_listed");
        }
    });

    list.addEventListener("mouseleave", function()
    {
        for (let i = 0; i < this.children.length; ++i)
        {
            if (i === checked_item) continue;

            list.children[i].classList.remove("drop-box__item_listed");
        }
    });


    for (let i = 0; i < list.children.length; ++i)
        list.children[i].addEventListener("click", function()
        {
            list.children[checked_item].classList.remove("drop-box__item_selected");
            checked_item = i;
            list.children[checked_item].classList.add("drop-box__item_selected");
        });

}

document.addEventListener("DOMContentLoaded", list_items);