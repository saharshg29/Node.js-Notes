// Trade off between query performance vs consistency

// Using Reference (Normalization)  =>  Consistence
let author = {
    name: 'Saharsh'
}

let course = {
    author: 'id'
}

// Using Embedded Documents (Denormalization)  =>  Performance
let course = {
    author: {
        name: 'Mosh'
    }
}

// Hybrid approach

let author = {
    name: 'Saharsh'
}

let course = {
    author: {
        id: 'ref',
        name: 'Mosh'
    }
}