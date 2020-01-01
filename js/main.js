// Get modal element
var modal = document.getElementById('simpleModal');

//Get open modal button
var modalBtn = document.getElementById('modalBtn');

//Close Btn
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for open click
modalBtn.addEventListener('click', openModal);

//Listen for close click
closeBtn.addEventListener('click', closeModal);

//Outside click
window.addEventListener('click', clickOutside);

//function to open Modal
function openModal()
{
    modal.style.display = 'block';
}

//Function to close modal
function closeModal()
{
    modal.style.display = 'none';
}

//Function to close modal with window
function clickOutside(e)
{
    if(e.target == modal)
    {
        modal.style.display = 'none';
    }
}
