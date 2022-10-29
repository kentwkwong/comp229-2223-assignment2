// IIFE -- Immediately Invoked FUnction Expression

(function(){
    function Start()
    {
        console.log("app start..");

        let deleteButtons = document.querySelectorAll('.btn-danger')
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if (!confirm('Are you sure?'))
                {
                    event.preventDefault();
                    window.location.assign('/book-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);
})();