var note_2000=0,note_500=0,note_100=0,sum=0;


function get_amount(){

    note_2000 +=Number(document.getElementById("note_2000").value);
    note_500 +=Number(document.getElementById("note_500").value);
    note_100 +=Number(document.getElementById("note_100").value);
    sum = (2000*note_2000) + (500*note_500) + (100*note_100);
    document.getElementById("amount").innerHTML=
    "Total 2000Rs. Note is :" + note_2000 +"<br>"+
    "Total 500Rs. Note is :" + note_500 +"<br>"+
    "Total 100Rs. Note is :" + note_100 +"<br>"+
    "Total amount is:" + sum;
    document.getElementById("note_2000").value=0;
    document.getElementById("note_500").value=0;
    document.getElementById("note_100").value=0;
}
