const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const msg = document.querySelector('#msg')

    if (height === '' || height<0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`
    }
    else if (weight === '' || weight<0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`
    }
    else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    // Show the result
    results.innerHTML = `<span> ${bmi}  </span><br> `
    
    // Show msg
    if (bmi<18.6) {
        msg.innerHTML = `<span> You are below weight </span`
    }
    else if (bmi>18.6 || bmi<24.6) {
        msg.innerHTML = `<span> You are in Normal Range </span`
    }
    else{
        msg.innerHTML = `<span> You are overweight </span`
    }
    

    }
})