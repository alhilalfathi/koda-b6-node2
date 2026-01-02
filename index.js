const moment = require(`moment`)

// const tanggalInput = "99-12-2025"
function convertTanggal(tanggalInput){
    
    const tanggalFormat = "DD-MM-YYYY"
    const mo = moment(tanggalInput,tanggalFormat)
    const validate = mo.isValid()
    // console.log(validate)
    if(validate === false){
        console.log("Format tanggal tidak valid")
    }else console.log(tanggalInput)
}

convertTanggal("99-01-2026")
// convertTanggal(true)



// console.log(mo.isValid())


// function convertTanggal(tgl){
//     if()
// }
