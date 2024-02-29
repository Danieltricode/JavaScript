function criar() {
    let cal = document.getElementById('cal')
    let tab = document.getElementById('tab')
    if (cal.value.length == 0) {
        window.alert('Por favor adiciona um número!')
    } else {
        let num = Number(cal.value)
        let c = 1
        tab.innerHTML = ''

        /* while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${num} X ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
         } */
        for (let c = 1;c <= 10; c++) {
             let item = document.createElement('option')
             item.text = `${num} X ${c} = ${num*c}`
             tab.appendChild(item)
        } 
    }

}