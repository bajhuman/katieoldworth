const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });

    // navLinks.forEach((link,index)={
    //     link.style.animation - 'navLinkFade 0.5s ease forwards 1s';
    // });

}

navSlide();



function formSubmit(){

    var firstname = document.getElementById('firstname');
    var lastname = document.getElementById('lastname');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var message = document.getElementById('message');

    if(!firstname.value || !lastname.value || !email.value){

    }
    else{

        Email.send({
            SecureToken:"f692505b-310b-4259-a217-87a7a31f18b6",
            To : "katie@katieoldworth.com",
            From : "katie@katieoldworth.com",
            Subject : "New enquiry",
            Body : "Test"
        }).then(
          alert('Success')
        );

    }


}