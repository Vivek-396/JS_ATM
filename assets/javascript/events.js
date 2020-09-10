var note_2000 = 0,
    note_500 = 0,
    note_100 = 0,
    balance = 0;

//Deposit Section

function get_amount(){
    var a=(document.getElementById("note_2000").value);
    var b=(document.getElementById("note_500").value);
    var c=(document.getElementById("note_100").value);
    var x=Number(a);
    var y=Number(b);
    var z=Number(c);
    if(isNaN(x) || !Number.isInteger(x) || isNaN(y) || !Number.isInteger(y) || isNaN(z) || !(Number.isInteger(z)) || x<0 || y<0 || z<0){
        document.getElementById("amount").innerHTML= "Please enter a  valid number";
    }
    else{
        note_2000+=x;
        note_500+=y;
        note_100+=z;
        balance = (2000*note_2000) + (500*note_500) + (100*note_100);
        document.getElementById("amount").innerHTML=
        "Total 2000Rs. Note is :" + note_2000 +"<br>"+
        "Total 500Rs. Note is :" + note_500 +"<br>"+
        "Total 100Rs. Note is :" + note_100 +"<br>"+
        "Total amount is:" + balance;
        a=null;
        b=null;
        c=null;
    }
}


//Withdraw Section

function getInputAmount() {

    var amt = document.getElementById("myInput").value;

    var amtTemp = parseInt(amt);
    if (amt <= 0) {
        document.getElementById("result").innerHTML = "Please enter suitable value.";
    } else if (amtTemp != amt) {
        document.getElementById("result").innerHTML = "Cannot proceed transaction for the input amount.";
    } else {

        if (amt > balance) {
            document.getElementById("result").innerHTML = "Cannot proceed transaction due to low balance.";
        } else {
            var count_2000 = note_2000,
                count_500 = note_500,
                count_100 = note_100,
                val = amt;

            var temp = Math.floor(val / 2000);

            while (temp > 0 && count_2000) {
                val = val - 2000;
                count_2000--;
                temp = Math.floor(val / 2000);
            }

            temp = Math.floor(val / 500);
            while (temp > 0 && count_500) {
                val = val - 500;
                count_500--;
                temp = Math.floor(val / 500);
            }

            temp = Math.floor(val / 100);
            while (temp > 0 && count_100) {
                val = val - 100;
                count_100--;
                temp = Math.floor(val / 100);
            }

            if (val == 0) {
                note_2000 = count_2000;
                note_500 = count_500;
                note_100 = count_100;
                balance = balance - amt;

                document.getElementById("result").innerHTML = "Transaction Successful." + "<br> Your current balance is : " + balance;
            } else {
                document.getElementById("result").innerHTML = "Cannot proceed transaction due to unavailability of notes.";
            }

        }
    }

}
