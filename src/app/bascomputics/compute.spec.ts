import { compute } from "./compute";

//create the spec - describes the suite of tests
describe('Compute, Student Number: S00223865, Name: Roisin Muldoon', ()=> {
	//name of the spec
    it('should return 0 if the input is negative',() =>{ 
        //if parameter is 2 then test will fail as it doesn't equal 0
        const result = compute(-1);
        expect (result).toBe(0);
    });
    it('should return input+1 if the input is positive',() =>{ 
        const result = compute(1);
        expect (result).toBe(2);
    });
})
