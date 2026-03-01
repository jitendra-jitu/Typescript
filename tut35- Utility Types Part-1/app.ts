interface College {
    name: string,
    location: string,
    noOfStudents: number,
    noOfBranches?: number
}


let college1: Partial<College> = {
    name: "NRI inst. of tech",
    location: "Vijayawada",
    // noOfStudents:9999,
    // noOfBranches:2
}

function getPartialCollegeDetails(details: Partial<College>) {
    return details
}


getPartialCollegeDetails({ name: "NRI inst. of tech", location: "Vijayawada", })


function getAllCollegeDetails(details: Required<College>) {
    return details
}

getAllCollegeDetails({
    name: "NRI inst. of tech",
    location: "Vijayawada",
    noOfStudents: 9999,
    noOfBranches: 2
})


let college2: Required<College> = {
    name: "NRI inst. of tech",
    location: "Vijayawada",
    noOfStudents:9999,
    noOfBranches:2
}


let college3: Readonly<College> = {
    name: "NRI inst. of tech",
    location: "Vijayawada",
    noOfStudents:9999,
    noOfBranches:2
}
// college2.name="AANM & VVRSR Poly"
// NOT ALLOWED...


let college4: Pick<College,"name"|"location"> = {
    name: "NRI inst. of tech",
    location: "Vijayawada",
}