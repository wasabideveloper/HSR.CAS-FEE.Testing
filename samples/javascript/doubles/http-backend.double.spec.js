import { HttpBusinessService } from '../services';

describe('A HttpBusinessService', function() {
  let sut;

  beforeEach(() => {
    sut = new HttpBusinessService();
  });

  it('should return expected server-side data.', function() {
    // this isn't a unit test, moreover it tends to integration test
    // -> you should 'double' the service call
    expect(sut.getData()).toEqual( /* data provided by the server (??) */ void 0);
  });
});


/*
DEMO RESULT

describe('A new BusinessService', function() {
 let sut: BusinessService;
 let testDouble = {
   hasInMemoryData(): boolean { return true; },
   enforceData(data: any[]): void { },
   loadData(async): any[] { return null; }
 };

 beforeEach(() => {
  sut = new BusinessService(testDouble);
 });

 it('should return undefined when no data loaded.', function() {
  expect(sut.getData()).toBeNull();
 });
});

*/
