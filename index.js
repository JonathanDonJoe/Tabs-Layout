var element = document.querySelectorAll(".tab");
var content = document.querySelectorAll(".tab-content")

// console.log(element)
// console.log(content)

// element.addEventListener('click',handleClick)


function handleClick(event) {
    // console.log(event.target.dataset);
    // console.log(this);
    element.forEach(el => el.classList.remove('selected'));
    this.classList.add('selected');
    // console.log(this);
    content.forEach(el => el.classList.remove('selected'))
    content.forEach(el => el.classList.add('hidden'))
    // console.log(this.dataset.tab)

    // content.forEach(el => console.log(el.dataset.tab))
    content.forEach(el => {if(el.dataset.tab === this.dataset.tab) 
        {el.classList.add('selected');
        el.classList.remove('hidden')
    }});
    // content.forEach(el => console.log(el.classList));
}

element.forEach(el => el.addEventListener('click',handleClick))

