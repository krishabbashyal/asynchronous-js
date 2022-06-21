function one(call) {
    console.log("Step one")
    call()
}

function two() {
    console.log("Step two")
}

one(two)