calculateAge(2000)
function calculateAge(birthYear){
    const currentYear =new Date().getFullYear()
    const age = currentYear-birthYear
    console.log(age)
    return age
}
