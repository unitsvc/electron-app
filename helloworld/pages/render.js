const btn1 = document.getElementById('btn1')

btn1.onclick = () => {
    func()
    alert("click")
}

const func = async () => {
    const response = await window.versions.ping()
    console.log(response)
    const chrome = await window.versions.chrome()
    console.log(chrome)
}

