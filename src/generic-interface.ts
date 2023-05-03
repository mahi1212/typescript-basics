// Generic interface
// we can use multile generic type
// we can use default type 
// we can use optional element type in object
interface CrushInterface<T, U = null> {
    name: string,
    husband: T,
    wife?: U
}

const crush1 : CrushInterface<boolean, string> = {
    name: 'Jenny',
    husband: true,
    wife: 'Dream'
}

const crush2 : CrushInterface<string> = {
    name: 'Jenny',
    husband: 'Mahi'
}

interface HusbandInterface {name: string, age: number}

const crush3 : CrushInterface<HusbandInterface  > = {
    name: 'Mahi',
    husband: {
        name: 'Mahi',
        age: 22
    }
}

interface DreamInterface {
    name: String,
    isPossible: boolean
}

const crush4: CrushInterface<HusbandInterface, DreamInterface>= {
    name: 'Jennat',
    husband: {
        name: "Mahi",
        age: 23
    },
    wife: {
        name: 'Dream',
        isPossible: false
    }
}