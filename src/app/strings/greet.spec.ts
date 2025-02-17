import { greet } from "./greet";

describe('greet, Student Number: S00223865, Name: Roisin Muldoon', () => {
    it('it should include the name in the message', () =>{
        expect(greet('Frank')).toContain('Frank');
    });
    //fail test
    it('should not include the name in the message', () =>{
        expect(greet('Frank')).not.toContain('Frank'); 
    })
});