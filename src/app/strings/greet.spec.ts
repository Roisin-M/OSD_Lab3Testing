import { greet } from "./greet";

describe('greet', () => {
    it('it should include the name in the message', () =>{
        expect(greet('Frank')).toContain('Frank');
    });
    //fail test
    it('should not include the name in the message', () =>{
        expect(greet('Frank')).not.toContain('Frank'); 
    })
});