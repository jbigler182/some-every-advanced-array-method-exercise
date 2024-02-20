describe("#hasOddNumber", function() {
    it("returns true if there is at least one odd number in the array", function() {
      expect(hasOddNumber([1, 2, 2, 2, 2, 2, 4])).toEqual(true);
    });
    it("returns false if there are no odd numbers in the array", function() {
      expect(hasOddNumber([2, 2, 2, 2, 2, 4])).toEqual(false);
    });
  });
  describe('#hasAZero', function() {
    it('return true if number conatinas a zero', function() {
      expect(hasAZero(475348270254738597)).toEqual(true);
    });
      it('return flase if number does not contain a zero', function() {
        expect(hasAZero(67896796879)).toEqual(false);
    });
  });
  
describe('#hasOnlyOddNumbers', function() {
  it("returns true if all numbers are odd numbers", function () {
    expect(hasOnlyOddNumbers([13579])).toEqual(true);
  });
  it('return false if not all numbers are odd', function () {
    expect(hasOnlyOddNumbers([1234])).toEqual(false);
  });
});


  

describe('#hasNoDuplicates', function () {
  it('There should be no Duplicates', function (){
    expect(hasNoDuplicates([1,2,3,4,5,6,7])).toEqual(true);
  });
  it('There are duplicates', function (){
    expect(hasNoDuplicates([1,1,2,2,3,3,4,4])).toEqual(false);
  });
});

describe('#hasCertainKey', function(){
  var arr = [
        { first: "Elie", last: "Schoppik" },
        { first: "Tim", last: "Garcia", isCatOwner: true },
        { first: "Matt", last: "Lane" },
        { first: "Colt", last: "Steele", isCatOwner: true }
      ];
  it('should have certain key', function() {
    expect(hasCertainKey(arr, "first")).toEqual(true);
  });
  it('all keys are not the same', function() {
    expect(hasCertainKey(arr, "isCatOwner")).toEqual(false);
  })
})
  
  describe("#hasCertainValue", function() {
    var arr = [
      { title: "Instructor", first: "Elie", last: "Schoppik" },
      { title: "Instructor", first: "Tim", last: "Garcia", isCatOwner: true },
      { title: "Instructor", first: "Matt", last: "Lane" },
      { title: "Instructor", first: "Colt", last: "Steele", isCatOwner: true }
    ];
    it("returns true if every object in an array has the same value for some key", function() {
      expect(hasCertainValue(arr, "title", "Instructor")).toEqual(true);
    });
    it("returns false if every object in an array does not have the same value for some key", function() {
      expect(hasCertainValue(arr, "first", "Elie")).toEqual(false);
    });
  });