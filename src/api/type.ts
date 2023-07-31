abstract class TypeAnnotation {
    abstract match(a: any): boolean
}

class Nothing extends TypeAnnotation {
    match(a: any): boolean {
        return true
    }
}

class NumberVariant extends TypeAnnotation {
    match(a: any): boolean {
        return typeof a == 'number'
    }
}

class StringVariant extends TypeAnnotation {
    match(a: any): boolean {
        return typeof a == 'string'
    }
}

class NumberLiteral extends TypeAnnotation {

    elem: number

    constructor (e: number) {
        super()
        this.elem = e
    }

    match(a: any): boolean {
        return typeof a == 'number' && a == this.elem
    }
}

class StringLiteral extends TypeAnnotation {

    elem: string

    constructor (e: string) {
        super()
        this.elem = e
    }

    match(a: any): boolean {
        return typeof a == 'string' && a == this.elem
    }
}

class Optional<T extends TypeAnnotation> extends TypeAnnotation {

    elem: T

    constructor (e: T) {
        super()
        this.elem = e
    }

    match (a: any): boolean {
        return a == undefined || this.elem.match(a)
    }
}

class Union<T extends TypeAnnotation, U extends TypeAnnotation> extends TypeAnnotation {

    elem_1: T
    elem_2: U

    constructor (e1: T, e2: U) {
        super()
        this.elem_1 = e1
        this.elem_2 = e2
    }

    match(a: any): boolean {
        return this.elem_1.match(a) || this.elem_2.match(a)
    }
}

class List<T extends TypeAnnotation> extends TypeAnnotation {

    elem: T

    constructor (e: T) {
        super()
        this.elem = e
    }

    match(a: any): boolean {
        if (!Array.isArray(a))
            return false
        for (let i of a)
            if (!this.elem.match(i))
                return false
        return true
    }
}

class Select<T extends TypeAnnotation> extends TypeAnnotation {

    elem: [T]

    constructor (e: [T]) {
        super()
        this.elem = e
    }

    match(a: any): boolean {
        for (let i of this.elem)
            if (i.match(a))
                return true
        return false
    }
}

class Dict extends TypeAnnotation {

    elem: { [key: string]: TypeAnnotation}

    constructor (e: { [key: string]: TypeAnnotation}) {
        super()
        this.elem = e
    }

    match(a: any): boolean {
        if (typeof a != 'object')
            return false
        for (let i in this.elem)
            if (!this.elem[i].match(a[i]))
                return false
        return true
    }
}

export {
    TypeAnnotation,
    Nothing,
    NumberLiteral,
    StringLiteral,
    NumberVariant,
    StringVariant,
    Optional,
    Union,
    Select,
    List,
    Dict
}