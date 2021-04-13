/* This piece of javascript handles dark and light mode
use toggle 
if toggle on , apply different styling to body 
replace dark mode bottom with light theme buttom 
//some kind of onclick funciton*/


document.getElementById("dark_light_button").addEventListener("click",changeword);

function changeword(){
    if (document.getElementById("dark_light_button").innerText === "Dark Theme")
    {
        document.getElementById("body").className += " darkmode";
        document.getElementById("container").className += " darkmode";
        document.getElementById("myNotes").className += " darkmode";
        document.getElementById("textarea").className += " darkmode";
        document.getElementById("save").className += " darkmode";
        document.getElementById("cancel").className += " darkmode";
        document.getElementById("setting").className += " darkmode";
        document.getElementById("dark_light_button").innerText = "Light Theme";

    } else {
        document.getElementById("body").classList.remove("darkmode");
        document.getElementById("container").classList.remove("darkmode");
        document.getElementById("myNotes").classList.remove("darkmode");
        document.getElementById("textarea").classList.remove("darkmode");
        document.getElementById("save").classList.remove("darkmode");
        document.getElementById("cancel").classList.remove("darkmode");
        document.getElementById("setting").classList.remove("darkmode");
        document.getElementById("dark_light_button").innerText = "Dark Theme";}
}




/* This piece of javascript handles cancel button
if clicked, 
note and file_handle object with be hidden 
*/


document.getElementById("cancel").addEventListener("click",hide_elements);

function hide_elements(){
    console.log("cancel is called")
    document.getElementsByClassName('textarea')[0].style.visibility = 'hidden';
    document.getElementsByClassName('file_handle')[0].style.visibility = 'hidden';
}


/*
"write notes" 
revent the changes made from cancel 
clears the text-area 

*/

document.getElementById("newnote").addEventListener("click",organize_text_area);

function organize_text_area(){
    console.log("newnote is clicked !");
    if ((document.getElementsByClassName('file_handle')[0].style.visibility) == 'hidden')
    {
        console.log("stuff is hidden :( ")
        document.getElementsByClassName('textarea')[0].style.visibility = 'visible';
        document.getElementsByClassName('file_handle')[0].style.visibility = 'visible';
    }else{
        console.log("stuff is not hidden :) ");
        console.log("let me sweep off text area!");
        document.getElementById("textarea").value= '';
    }
   
}



/* */
var note_array = [];
var note_object = {title:"note one",body:"this is my first note"};
/* this piece of javascript handles clicking on saved buttom
if save is clicked and text area is not empty
    show alert and ask for title
    if user_input == None
        save note with a default name
    else 
        append input as title, content in textbox as body
else 
doesn't do anything 

in nav 
    create a new object name as the first item of the string
*/
note_array.push(note_object)

function CreateNotesNavigation(){
    if (note_object.body != '' ){
        if (note_object.title ==''){
            note_object.title = `Default Note_name ${note_array.length}`
        }
     
        }
        let note_nav = document.createElement("li");
        note_nav.textContent=note_array[0].title;
        document.getElementById("note_index").appendChild(note_nav);
    }


function write_to_array(){
    if ((document.getElementById("textarea").value) != '')
    {
        var notetitle= prompt("Enter the Title of your notes!");
        note_object.title=notetitle
        note_object.body=(document.getElementById("textarea").value);
        note_array.push(note_object)
        console.log("note is saved!, this is the arry:",note_array);
        document.getElementById("textarea").value= '';

    }else {
        note_object.title=''
        note_object.body= ''
        console.log("Thank god there is nothing to save ")
    }
    
}

document.getElementById("save").addEventListener("click",write_to_array);
document.getElementById("save").addEventListener("click",CreateNotesNavigation);


/*this piece of java script handles when user click on nav 
if content in nav is clicked 
    look for object_name in object arry
    display body in textbox 
*/

document.getElementById("note_index").addEventListener("click",display_body_to_textbox)

function display_body_to_textbox(clicked){
    let child_text = clicked.target.innerHTML;
    console.log("you have found the child !",child_text);
    for (item in note_array){
        //console.log(note_array[item].title)
        if (child_text === note_array[item].title){
            console.log(note_array[item].body);
            document.getElementById("textarea").value= note_array[item].body;
        }
    }
   
}
