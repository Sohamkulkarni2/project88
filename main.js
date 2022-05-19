
canvas=new fabric.Canvas("myCanvas");
r_y=1;
r_x=1;
xstore=0;
ystore=0;
rangerimage_width = 350;
rangerimage_height = 430;
rect=0;

var ranges_image_object= " ";

function new_image(get_image)
{
   fabric.Image.fromURL(get_image,function(img){
       ranges_image_object=img;
       ranges_image_object.scaleToWidth(rangerimage_width);
       ranges_image_object.scaleToHeight(rangerimage_height);
       ranges_image_object.set({
           top:r_y,
           left:r_x
           
       });
       canvas.add(ranges_image_object);
   })

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

   if(keyPressed == '82') 
   {      r_y=1;
       r_x=10;
       new_image("rr1.png");
       console.log("r")
   }
   if(keyPressed == '71')
   {
       r_x = 240;
       new_image("gr.png");
       console.log("g")
   }
   
   if(keyPressed == '89')
   {   r_y=10;
       r_x =650;
       new_image("yr.png");
       console.log("y")
   }
   if(keyPressed == '80')
   {
       r_x = 430;
       new_image("pr.png");
       console.log("p")
   }
   if(keyPressed == '66')
   {   r_y=50;
       r_x = 900;
       new_image("output-onlinepngtools.png");
       console.log("b")
   }
   
}


