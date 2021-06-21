canvas.addEventListner("mousedown",my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("Color").value;
    width_of_line = document.getElementById("Width").value;
    radius = document.getElementById("Radius").value;

    mouseEvent = "mouseDown";
}
canvas.addEventListner("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUp"
}
canvas.addEventListner("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    
    if (mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.radius = radius;

        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
