function load_style()
{
    page_style = localStorage.getItem("page_stylesheet_name", "style.css");
    if (page_style === null)
    {
     page_style = "style.css";
    }
    document.getElementById('page_style').setAttribute("href", page_style);
}
function mono_mode()
{
    localStorage.setItem("page_stylesheet_name", "style.css");
    load_style();
}
function red_mode()
{
    localStorage.setItem("page_stylesheet_name", "style2.css");
    load_style();
}
load_style()  // load style immediately