const filterInput = document.getElementById('filterInput')

filterInput.addEventListener('input', filterNames);

function filterNames(){
    let filterValue = filterInput.value.toUpperCase();
    let ul = document.getElementById('names')
    let li = ul.querySelectorAll('li.collection-item');
    for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0]
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = '';
        }
        else{
            li[i].style.display = 'none';
        }
    }


    // console.log(filterValue)
}