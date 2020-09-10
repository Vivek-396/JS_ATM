var note_2000 = 0,
    note_500 = 0,
    note_100 = 0,
    balance = 0;

//Deposit Section

function get_amount(){
    var a=Number(document.getElementById("note_2000").value);
    var b=Number(document.getElementById("note_500").value);
    var c=Number(document.getElementById("note_100").value);
    if (a>=0 && b>=0 && c>=0){
        note_2000+=a;
        note_500+=b;
        note_100+=c;
        balance = (2000*note_2000) + (500*note_500) + (100*note_100);
        document.getElementById("amount").innerHTML=
        "Total 2000Rs. Note is :" + note_2000 +"<br>"+
        "Total 500Rs. Note is :" + note_500 +"<br>"+
        "Total 100Rs. Note is :" + note_100 +"<br>"+
        "Total amount is:" + balance;
        document.getElementById("note_2000").value=0;
        document.getElementById("note_500").value=0;
        document.getElementById("note_100").value=0;
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
