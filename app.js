const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.remove('hidden');
            entry.target.classList.add('show');
            console.log('remove')
        }else{
            entry.target.classList.remove('show');
            entry.target.classList.add('hidden');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));