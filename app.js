const data = [
    {
        name:'allay',
        age:22,
        city: 'toronto',
        language : 'javascript',
        framework: 'Django',
        image : 'https://randomuser.me/api/portraits/women/67.jpg'
    },
    {
        name:'alex',
        age:24,
        city: 'LA',
        language : 'javascript',
        framework: 'Django',
        image : 'https://randomuser.me/api/portraits/men/71.jpg'
    },
    {
        name:'hanna',
        age:20,
        city: 'toronto',
        language : 'python',
        framework: 'Angular',
        image : 'https://randomuser.me/api/portraits/women/70.jpg'
    },
    {
        name:'Hales',
        age:21,
        city: 'Rome',
        language : 'python',
        framework: 'flask',
        image : 'https://randomuser.me/api/portraits/men/69.jpg'
    },
    {
        name:'Taylor',
        age:25,
        city: 'Los Vegas',
        language : 'javascript',
        framework: false,
        image : 'https://randomuser.me/api/portraits/women/75.jpg'
    },
]

//cv iterator

function cvIterator(profiles){
    let nextIndex = 0;
    return {
        next:function(){
            return nextIndex < profiles.length ? 
            {value: profiles[nextIndex++],done:false} :
            {done:true}
        }

    }
}


let candidate = cvIterator(data);
//button listener for next profile
const next = document.getElementById('next');
next.addEventListener('click',nextCV);

//calling here to show first data after load
nextCV();

function nextCV() {
    const currentCandidate = candidate.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
     
    if(currentCandidate != undefined){
    image.innerHTML = `<img src = '${currentCandidate.image}'>`
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  
  </ul>`
}
else{
    alert('Candidates end');
    window.location.reload();
}
}