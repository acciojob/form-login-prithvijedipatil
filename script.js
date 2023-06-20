function getFormvalue() {
    //Write your code here


    const fname = document.querySelector('input[name="fname"]');
    const lname = document.querySelector('input[name="flname"]');

    const firstname = fname.value;
    const lasttname = lname.value;
    alert(`First name: ${firstname}\n Last name: ${lasttname}`);

}
