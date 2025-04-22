

const passwordBox= document.getElementById("password");


function generatepassword()
{
    const uppercase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase= "abcdefghijklmnopqrstuvwxyz";
    const numbers= "0123456789";
    const symbols= "!@#$%^&*()_+[]{}|;:,.<>?";
    const allCharacters= uppercase + lowercase + numbers + symbols;

    const len=12;

    let password="";

    for(let i=0;i<len;i++)
    {
        const a=Math.floor( Math.random() * allCharacters.length);
        password+=allCharacters[a];
    }

    passwordBox.value=password;

}

function copypass()
{
    passwordBox.select();
    document.execCommand("copy",false,null);
    alert("Password copied to clipboard!");
}

