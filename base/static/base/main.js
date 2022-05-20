
console.log('Hello world!')

const deadline = document.getElementById('deadline')

const date = Date.parse(deadline.textContent)
console.log(date)
setInterval(()=>{
    const now = new Date().getTime()
    const diff = date - now
    const day = Math.floor(date / (1000*60*60*24) - (now/(1000*60*60*24)))
    const hour = Math.floor(date/(1000*60*60) - (now/(1000*60*60)) % 24)
    const min = Math.floor(date/(1000*60) - (now/(1000*60)) % 60)
    const second = Math.floor(date/(1000) - (now/(1000))%60)
    
    if (diff>0) {
        deadline.innerHTML = day + 'days' + hour + min + second
    }else {
        deadline.innerHTML = "Deadline Reached"
    }
},1000)

