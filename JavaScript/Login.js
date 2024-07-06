document.getElementById('Login').addEventListener('submit', function(event){
    event.preventDefault();

    const User=document.getElementById('User').value;
    const Pass=document.getElementById('Password').value;
    const Alert=document.getElementById('Alert');

    const VeUser='Jair'
    const VePass='123'

    if ( User===VeUser && Pass===VePass){
        Alert.textContent='Login exitoso';
        Alert.style.color='green';
        window.location.href='Home.html'
    }
    else{
        Alert.textContent='User and password incorrect'
        Alert.style.color='red'
    }
});
