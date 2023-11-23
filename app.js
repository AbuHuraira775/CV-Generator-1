const frontend = document.querySelector('.frontend')
const generateCV = document.querySelector('#generateCV')
const backend = document.querySelector('.backend')


generateCV.addEventListener('click',()=>{
    frontend.classList.add('none')
    backend.classList.remove('none')

    const fname = document.querySelector('.fname').value
    const lname = document.querySelector('.lname').value
    const email = document.querySelector('.email').value
    const number = document.querySelector('.number').value
    const birth = document.querySelector('.birth').value
    const gender = document.querySelector('input[name="gender"]:checked')
    const nationality = document.querySelector('.nationality').value
    const company = document.querySelector('.company').value
    const destination = document.querySelector('.destination').value
    const from = document.querySelector('.from').value
    const to = document.querySelector('.to').value
    const planguage = document.querySelector('.planguage').value
    const plevel = document.querySelector('.plevel').value
    const language = document.querySelector('.language').value
    const comprehension = document.querySelector('.comprehension').value
    const writing = document.querySelector('.writing').value
    const reading = document.querySelector('.reading').value
    const lisence = document.querySelector('.lisence')
    


    const tfname = document.querySelector('.tfname')
    const tlname = document.querySelector('.tlname')
    const temail = document.querySelector('.temail')
    const tnumber = document.querySelector('.tnumber')
    const tbirth = document.querySelector('.tbirth')
    const tgender = document.querySelector('.tgender')
    const tnationality = document.querySelector('.tnationality')
    const tcompany = document.querySelector('.tcompany')
    const tdestination = document.querySelector('.tdestination')
    const tfrom = document.querySelector('.tfrom')
    const tto = document.querySelector('.tto')
    const tplanguage = document.querySelector('.tplanguage')
    const tplevel = document.querySelector('.tplevel')
    const tlanguage = document.querySelector('.tlanguage')
    const tcomprehension = document.querySelector('.tcomprehension')
    const twriting = document.querySelector('.twriting')
    const treading = document.querySelector('.treading')
    const tlicense = document.querySelector('.tlicense')


    // // if (gender) {
    //     // Access the value of the selected radio button
    //     const selectedValue = gender.value;
    //     // alert("Selected value: " + selectedValue);
    //     console.log(selectedValue)
    //     console.log(tgender)
    // //   }
    // console.log(car)
    // console.log(bike)
    // console.log(tlicense)

    


    tfname.innerHTML = fname
    tlname.innerHTML = lname
    temail.innerHTML = email
    tnumber.innerHTML = number
    tbirth.textContent = birth
    tgender.textContent = gender.value
    tnationality.textContent = nationality
    tcompany.innerHTML = company
    tdestination.textContent = destination
    tfrom.textContent = from
    tto.textContent = to
    tplanguage.innerHTML = planguage
    tplevel.innerHTML = plevel
    tlanguage.textContent = language
    tcomprehension.textContent = comprehension
    twriting.textContent = writing
    treading.textContent = reading


    if (lisence.checked) {
       tlicense.textContent = lisence.value
    console.log(lisence.value)

    } 
    
})