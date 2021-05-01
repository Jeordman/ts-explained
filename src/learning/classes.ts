console.log('classes connected');
// Typescript adds some really cool class things
abstract class DevMountainEmployee {
    // static is on all instances as a shared var
    // readonly = no changes allowed
    static readonly location = "lehi";
    public isOnLinkedIn: boolean;
    constructor(isOnLinkedIn: boolean) {
        this.isOnLinkedIn = isOnLinkedIn;
    }
}

class DevMtnTeacher extends DevMountainEmployee {
    static ceo = "PersonName";

    // private is only accessible from functions in this class
    private idNumber: string;
    // public can be accessed by any function
    public name: string;
    private ssn: number;

    // constructor is used to set initial values on object instantiation
    constructor(isOnLinkedIn: boolean, id: string, name: string) {
        // super used to instantiate extended classes
        super(isOnLinkedIn);
        this.idNumber = id;
        this.name = name;
    }

    public printId = () => {
        console.log(this.idNumber);
    };

    // getter
    get getIdNumber() {
        return this.idNumber;
    }

    get getSSN() {
        return this.ssn;
    }

    // setter
    set changeSSN(newNum: number) {
        this.ssn = newNum;
    }
}
