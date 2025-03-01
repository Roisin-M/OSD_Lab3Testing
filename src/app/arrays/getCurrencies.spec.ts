import { getCurrencies } from "./getCurrencies";

describe('getCurrencies, Student Number: S00223865, Name: Roisin Muldoon', ()=>{

      it("should match with all of the correct array values", () => {
        const result=getCurrencies();
        expect(result).toEqual(jasmine.arrayContaining(['USD', 'GBP', 'EUR']));
        expect(result).not.toEqual(jasmine.arrayContaining(['CAN']));
      });
      
      it("should not match with incorrect array value", () => {
        const result=getCurrencies();
        expect(result).not.toEqual(jasmine.arrayContaining(['CAN']));
      });
})