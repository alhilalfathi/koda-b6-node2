const moment = require(`moment`)

function convertTanggal(tanggalInput){
    
    const tanggalFormat = "DD-MM-YYYY"
    const mo = moment(tanggalInput,tanggalFormat,true)
    const validate = mo.isValid()

    // console.log(validate)
    if(validate === false){
        console.log("Format tanggal tidak valid")
    }else console.log(mo)
}

convertTanggal("01-01-2026")
convertTanggal("1")



// console.log(mo.isValid())

