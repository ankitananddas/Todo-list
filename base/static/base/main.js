
console.log('Hello world!')

const deadline = document.getElementById('deadline');

const deadlineDate = Date.parse(deadline.textContent);

const myCountDown=setInterval(()=>{
    const now = new Date().getTime();
    const diff = deadlineDate - now;
    const totalSeconds = diff/1000;
    const day = Math.floor(totalSeconds/ 3600/24);
    const hour = Math.floor(totalSeconds/3600) % 24;
    const min = Math.floor(totalSeconds / 60)% 60;
    const second = Math.floor(totalSeconds % 60);
    if (diff>0) {
        deadline.innerHTML = day + 'days' + hour + "hours" +min +"minutes" + second + "seconds"
    }else {
        clearInterval(myCountDown)
        deadline.innerHTML = "Deadline Reached"
    }
},1000)